import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/site-config"

function isSuccessPayload(status: number, data: unknown): boolean {
  if (status < 200 || status >= 300) return false
  if (!data || typeof data !== "object") return status === 200
  const record = data as Record<string, unknown>
  if (record.success === true) return true
  if (typeof record.success === "string" && record.success.length > 0) return true
  if (typeof record.message === "string" && /thank you|success/i.test(record.message)) return true
  return status === 200
}

async function sendViaWeb3Forms(payload: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) return null

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      subject: `Portfolio message: ${payload.subject}`,
      message: payload.message,
      from_name: "Isaiah Wright Portfolio",
      replyto: payload.email,
    }),
  })

  const data = await response.json()
  if (!response.ok || !data.success) {
    throw new Error(typeof data.message === "string" ? data.message : "Web3Forms delivery failed.")
  }
  return true
}

async function sendViaFormSubmit(payload: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _replyto: payload.email,
      _subject: `Portfolio message: ${payload.subject}`,
      _template: "table",
      _captcha: "false",
    }),
  })

  const raw = await response.text()
  let data: unknown = null
  try {
    data = raw ? JSON.parse(raw) : null
  } catch {
    if (raw.includes("Just a moment") || raw.includes("cloudflare")) {
      throw new Error("SERVER_BLOCKED")
    }
    data = { message: raw }
  }

  if (!isSuccessPayload(response.status, data)) {
    throw new Error("FormSubmit delivery failed.")
  }
  return true
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, honeypot } = await request.json()

    if (honeypot?.trim()) {
      return NextResponse.json({ success: true })
    }

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    }

    try {
      await sendViaWeb3Forms(payload)
      return NextResponse.json({ success: true })
    } catch {
      // Fall through to FormSubmit or client-side hint
    }

    try {
      await sendViaFormSubmit(payload)
      return NextResponse.json({ success: true })
    } catch (error) {
      if (error instanceof Error && error.message === "SERVER_BLOCKED") {
        return NextResponse.json(
          {
            error: "SERVER_BLOCKED",
            message: "Use client delivery.",
          },
          { status: 503 },
        )
      }
      throw error
    }
  } catch {
    return NextResponse.json(
      {
        error: `Something went wrong. Please email me directly at ${siteConfig.email}.`,
      },
      { status: 500 },
    )
  }
}

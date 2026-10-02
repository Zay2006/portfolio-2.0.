import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/site-config"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, honeypot } = await request.json()

    if (honeypot?.trim()) {
      return NextResponse.json({ success: true })
    }

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        _replyto: email.trim(),
        _subject: `Portfolio message: ${subject.trim()}`,
        _template: "table",
      }),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}

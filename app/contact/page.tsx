import type { Metadata } from "next"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact - Isaiah Wright",
  description: "Get in touch with Isaiah Wright for collaboration, voice acting, tech projects, and outreach opportunities.",
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  )
}

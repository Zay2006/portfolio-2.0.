import type { Metadata } from "next"
import About from "@/components/about"

export const metadata: Metadata = {
  title: "About - Isaiah Wright",
  description:
    "Learn about Isaiah Wright — outreach professional, voice actor, and creative storyteller passionate about technology, education, and community.",
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
    </main>
  )
}

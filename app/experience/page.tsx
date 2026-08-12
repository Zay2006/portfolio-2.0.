import type { Metadata } from "next"
import Experience from "@/components/experience"

export const metadata: Metadata = {
  title: "Experience - Isaiah Wright",
  description:
    "Isaiah Wright's professional journey across voice acting, tech support, full-stack development, and outreach.",
}

export default function ExperiencePage() {
  return (
    <main className="pt-16">
      <Experience />
    </main>
  )
}

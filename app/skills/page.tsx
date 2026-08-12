import type { Metadata } from "next"
import Skills from "@/components/skills"
import Projects from "@/components/projects"

export const metadata: Metadata = {
  title: "Skills & Projects - Isaiah Wright",
  description:
    "Explore Isaiah Wright's technical skills, creative abilities, and featured web development projects.",
}

export default function SkillsPage() {
  return (
    <main className="pt-16">
      <Skills />
      <Projects />
    </main>
  )
}

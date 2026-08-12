import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-purple-200/30 via-pink-100/20 to-cyan-200/30 dark:from-purple-950/40 dark:via-gray-900 dark:to-indigo-950/40" />
      <div className="fixed inset-0 -z-10 noise-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

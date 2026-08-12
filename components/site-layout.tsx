import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-purple-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-purple-200/30 via-pink-100/20 to-cyan-200/30 dark:from-purple-950/40 dark:via-gray-900 dark:to-indigo-950/40" />
      <div className="fixed inset-0 -z-10 noise-overlay" />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

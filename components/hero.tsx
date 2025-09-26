"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const ROLES = ["Voice Actor", "Tech Enthusiast", "Creative Artist", "Esports Enthusiast"]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentRole = ROLES[currentIndex]
    const shouldDelete = displayText === currentRole && !isDeleting

    if (shouldDelete) {
      // Wait before starting to delete
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Deleting characters
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            // Done deleting, move to next role
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % ROLES.length)
          }
        } else {
          // Adding characters
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1))
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [mounted, displayText, currentIndex, isDeleting])

  const handleDownloadResume = () => {
    // Create a link to download the PDF file
    const link = document.createElement("a")
    link.href = "/Isaiah_Wright_Resume.pdf"
    link.download = "Isaiah_Wright_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) return null

  const stats = [
    { number: "4+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Isaiah Wright
          </motion.h1>

          <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold min-w-[280px] text-left">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            View My Work
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg group bg-transparent"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {[
            { icon: Github, href: "https://github.com/Zay2006", color: "hover:text-gray-900 dark:hover:text-white" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/isaiah-wright-384b2b26a/",
              color: "hover:text-blue-600",
            },
            { icon: Mail, href: "mailto:iwright4706@gmail.com", color: "hover:text-red-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

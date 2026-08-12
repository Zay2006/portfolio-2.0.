"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/lib/use-reduced-motion"

const ROLES = ["Voice Actor", "Tech Enthusiast", "Creative Artist", "Esports Enthusiast"]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) {
      setDisplayText(ROLES[0])
      return
    }

    const currentRole = ROLES[currentIndex]
    const shouldDelete = displayText === currentRole && !isDeleting

    if (shouldDelete) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % ROLES.length)
          }
        } else if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [mounted, displayText, currentIndex, isDeleting, prefersReducedMotion])

  const handleDownloadResume = () => {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        {!prefersReducedMotion && (
          <>
            <div className="absolute top-10 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
            <div className="absolute top-32 right-4 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000" />
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-30"
                animate={{
                  y: [0, -80, 0],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${10 + (i * 7) % 80}%`,
                  top: `${15 + (i * 11) % 70}%`,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono text-purple-500 dark:text-purple-400 tracking-widest uppercase mb-4"
            >
              Portfolio 2026
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-4 sm:mb-6 leading-tight"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.01, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Isaiah Wright
            </motion.h1>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 min-h-[3rem] mb-6">
              <span>I'm a</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold text-center sm:text-left">
                {displayText}
                {!prefersReducedMotion && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-0.5"
                  >
                    |
                  </motion.span>
                )}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Bridging storytelling, innovation, and artistry across voice acting, development, and creative tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-8">
              <Button
                className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group shadow-lg shadow-purple-500/25"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                View My Work
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-5">
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
                  className={`p-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-sm`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-72 h-80 xl:w-80 xl:h-96 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-[1.35rem] bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-3xl font-display font-bold text-white mb-4 shadow-lg">
                    IW
                  </div>
                  <p className="text-white/90 font-display text-xl font-semibold">Creative Developer</p>
                  <p className="text-white/70 text-sm mt-2">& Voice Artist</p>
                  <div className="flex gap-2 mt-6 flex-wrap justify-center">
                    {["React", "Next.js", "VO", "Design"].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-lg sm:max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-2xl glass-card"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-purple-600 dark:text-purple-400">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="cursor-pointer p-2 rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </motion.button>
      </motion.div>
    </section>
  )
}

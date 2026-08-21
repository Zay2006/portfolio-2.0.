"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Play, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/lib/use-reduced-motion"

const ROLES = ["Outreach Coordinator", "Voice Actor", "Content Creator", "Full-Stack Developer"]

export default function Hero() {
  const [displayText, setDisplayText] = useState(ROLES[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(ROLES[currentIndex])
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
  }, [displayText, currentIndex, isDeleting, prefersReducedMotion])

  const stats = [
    { number: "75+", label: "Students Mentored" },
    { number: "5+", label: "Years Experience" },
    { number: "4+", label: "Projects Built" },
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
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6">
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
                Isaiah Wright
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 min-h-[3rem] mb-6">
              <span>I'm a</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold text-center">
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

            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
              An outreach professional, voice actor, and creative storyteller passionate about technology, education,
              and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8">
              <Button
                className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group shadow-lg shadow-purple-500/25"
                asChild
              >
                <Link href="/skills">
                  <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  View My Work
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                asChild
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-5">
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
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
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

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
          <Link
            href="/about"
            aria-label="Go to about page"
            className="inline-block"
          >
            <motion.span
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer p-2 rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm inline-flex"
            >
              <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.span>
          </Link>
        </div>
    </section>
  )
}

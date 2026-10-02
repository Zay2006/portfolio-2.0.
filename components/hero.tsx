"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Play, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { siteConfig } from "@/lib/site-config"

const ROLES = ["Tech, Ed, Arts Fellow", "Outreach Coordinator", "Full-Stack Developer", "STEM Educator"]

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
    { number: "80+", label: "Students Mentored" },
    { number: "6+", label: "Years Experience" },
    { number: "10+", label: "Projects Built" },
  ]

  const ctaOutlineClass =
    "rounded-full border-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-sm sm:text-base py-3.5 sm:py-5 px-5 sm:px-7 h-auto whitespace-normal sm:whitespace-nowrap"

  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 overflow-x-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-3 sm:mb-5">
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
                Isaiah Wright
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-base sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 min-h-[2.75rem] sm:min-h-[3rem] mb-4 sm:mb-5">
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

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-5 sm:mb-6 leading-snug sm:leading-relaxed px-1">
              {siteConfig.clientWork.tagline}
            </p>

            <div className="flex flex-col items-stretch gap-2.5 sm:gap-3 max-w-md mx-auto lg:max-w-3xl lg:flex-row lg:flex-wrap lg:justify-center lg:items-center mb-6 sm:mb-7">
              <Button
                className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm sm:text-base py-3.5 sm:py-5 px-5 sm:px-8 h-auto group shadow-lg shadow-purple-500/25 lg:w-auto w-full"
                asChild
              >
                <Link href="/skills">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform shrink-0" />
                  View My Work
                </Link>
              </Button>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:contents">
                <Button
                  variant="outline"
                  className={`${ctaOutlineClass} border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white group w-full lg:w-auto`}
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-0.5 transition-transform shrink-0" />
                    <span className="truncate">Get In Touch</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className={`${ctaOutlineClass} border-indigo-500/80 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white group w-full lg:w-auto`}
                  asChild
                >
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="truncate">{siteConfig.clientWork.bookingLabel}</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-4 sm:space-x-5">
              {[
                { icon: Github, href: siteConfig.social.github, color: "hover:text-gray-900 dark:hover:text-white" },
                {
                  icon: Linkedin,
                  href: siteConfig.social.linkedin,
                  color: "hover:text-blue-600",
                },
                { icon: Mail, href: `mailto:${siteConfig.email}`, color: "hover:text-red-500" },
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
          className="grid grid-cols-3 gap-2 sm:gap-6 mt-8 sm:mt-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-xl sm:text-3xl font-display font-bold text-purple-600 dark:text-purple-400">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <Link href="/about" aria-label="Go to about page" className="inline-block">
            <motion.span
              animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer p-2 rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm inline-flex"
            >
              <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  )
}

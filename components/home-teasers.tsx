"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, User, Code, Briefcase, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teasers = [
  {
    title: "About Me",
    description: "My story across outreach, voice acting, esports, and creative media.",
    href: "/about",
    icon: User,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Skills & Projects",
    description: "Technical skills, creative abilities, and featured project work.",
    href: "/skills",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Experience",
    description: "My professional journey and key milestones over the years.",
    href: "/experience",
    icon: Briefcase,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Contact",
    description: "Let's connect about tech, voice acting, esports, or collaboration.",
    href: "/contact",
    icon: Mail,
    color: "from-green-500 to-emerald-500",
  },
]

export default function HomeTeasers() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-gray-100">
            Explore My Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Dive into my background, skills, experience, and ways to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {teasers.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={item.href} className="block h-full group">
                <Card className="h-full glass-card border-none overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                  <CardHeader className="pb-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-display">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

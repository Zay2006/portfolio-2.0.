"use client"

import { motion } from "framer-motion"
import { Mic, Cpu, Palette, Gamepad2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "@/components/section-header"

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const interests = [
    {
      title: "Voice Acting",
      description: "Bringing characters to life with engaging performances that captivate audiences.",
      icon: Mic,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Technology",
      description:
        "Problem-solving skills that evolved from troubleshooting family devices into a deep understanding of tech and coding.",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Art & Creativity",
      description: "From sketching as a kid to exploring music and digital design, creativity fuels everything I do.",
      icon: Palette,
      color: "from-amber-500 to-yellow-500",
    },
    {
      title: "Esports",
      description:
        "Aiming to bring my passion for video games to the front stage by playing worldwide and announcing games such as Super Smash Brothers.",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 px-4 relative">
      <div className="container mx-auto">
        <SectionHeader
          label="01 — About"
          title="About Me"
          description="Hello! I'm Isaiah Wright, a passionate voice actor, tech enthusiast, and creative artist with an interest in Esports. Bridging storytelling, innovation, and artistry, I'm constantly learning and growing in these fields."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full glass-card border-none overflow-hidden group">
                <div className={`h-1.5 bg-gradient-to-r ${interest.color}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg sm:text-xl font-display font-bold">{interest.title}</CardTitle>
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${interest.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <interest.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {interest.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

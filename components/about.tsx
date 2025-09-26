"use client"

import { motion } from "framer-motion"
import { Mic, Cpu, Palette, Gamepad2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Hello! I'm Isaiah Wright, a passionate voice actor, tech enthusiast, and creative artist with an interest in
            Esports. Bridging storytelling, innovation, and artistry, I'm constantly learning and growing in these
            fields.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${interest.color}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold">{interest.title}</CardTitle>
                    <interest.icon
                      className={`h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
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

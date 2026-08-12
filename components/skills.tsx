"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code, Mic, Palette, Database, Globe, Zap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import SectionHeader from "@/components/section-header"

function AnimatedProgress({ value, delay }: { value: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      setDisplayValue(value)
    }, delay * 100)
    return () => clearTimeout(timeout)
  }, [isInView, value, delay])

  return (
    <div ref={ref}>
      <Progress value={displayValue} className="h-2 bg-gray-200/80 dark:bg-gray-700/80" />
    </div>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Voice Acting",
      icon: Mic,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Character Voices", level: 90 },
        { name: "Narration", level: 85 },
        { name: "Commercial VO", level: 80 },
        { name: "Audio Editing", level: 75 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "React/Next.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Node.js", level: 70 },
      ],
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "API Development", level: 75 },
        { name: "Server Management", level: 70 },
        { name: "Data Analysis", level: 65 },
      ],
    },
    {
      title: "Creative & Design",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Digital Art", level: 70 },
        { name: "Video Editing", level: 65 },
        { name: "3D Modeling", level: 60 },
      ],
    },
  ]

  const softSkills = [
    { name: "Communication", icon: Users, level: 95 },
    { name: "Problem Solving", icon: Zap, level: 90 },
    { name: "Adaptability", icon: Globe, level: 85 },
    { name: "Team Collaboration", icon: Users, level: 88 },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          label="02 — Skills"
          title="Skills & Expertise"
          description="A comprehensive overview of my technical and creative abilities across multiple disciplines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card border-none">
                <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-display">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-mono text-purple-600 dark:text-purple-400">{skill.level}%</span>
                      </div>
                      <AnimatedProgress value={skill.level} delay={skillIndex} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center p-4 sm:p-6 rounded-2xl glass-card"
              >
                <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h4>
                <div className="text-xl sm:text-2xl font-display font-bold text-purple-600 dark:text-purple-400">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

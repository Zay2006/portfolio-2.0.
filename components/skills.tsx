"use client"

import { motion } from "framer-motion"
import { Code, Mic, Palette, Database, Globe, Zap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return null

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Skills & Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A comprehensive overview of my technical and creative abilities across multiple disciplines.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <category.icon className="h-6 w-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-md"
              >
                <skill.icon className="h-8 w-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{skill.name}</h4>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

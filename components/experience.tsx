"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2022 - Present",
      type: "Freelance",
      description:
        "Developed multiple web applications using modern technologies including React, Next.js, and MySQL. Created user-friendly interfaces and robust backend systems for various clients.",
      achievements: [
        "Built 4+ complete web applications from scratch",
        "Implemented responsive designs with 100% mobile compatibility",
        "Integrated MySQL databases with optimized queries",
        "Achieved 98% client satisfaction rate",
      ],
      technologies: ["React", "Next.js", "TypeScript", "MySQL", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Voice Actor",
      company: "Independent Contractor",
      location: "Philadelphia, PA",
      period: "2021 - Present",
      type: "Creative",
      description:
        "Providing professional voice-over services for various projects including character voices, narration, and commercial work. Specialized in bringing characters to life with engaging performances.",
      achievements: [
        "Completed 20+ voice acting projects",
        "Developed unique character voices for animated content",
        "Mastered audio editing and post-production techniques",
        "Built a professional home studio setup",
      ],
      technologies: ["Audio Editing", "Character Development", "Script Analysis", "Studio Recording"],
    },
    {
      title: "Tech Support Specialist",
      company: "Family & Community",
      location: "Philadelphia, PA",
      period: "2019 - 2022",
      type: "Technical",
      description:
        "Started as the go-to person for family tech issues, which evolved into a deep understanding of troubleshooting, system optimization, and user support across various devices and platforms.",
      achievements: [
        "Resolved 100+ technical issues across different platforms",
        "Developed systematic troubleshooting methodologies",
        "Gained expertise in Windows, macOS, and mobile platforms",
        "Built reputation as reliable tech problem solver",
      ],
      technologies: ["Windows", "macOS", "iOS", "Android", "Hardware Troubleshooting", "Network Setup"],
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Self-Taught Developer",
      description: "Mastered multiple programming languages and frameworks through dedication and continuous learning",
    },
    {
      icon: TrendingUp,
      title: "Project Success Rate",
      description: "Maintained 100% project completion rate with consistent client satisfaction",
    },
    {
      icon: Calendar,
      title: "Continuous Growth",
      description: "3+ years of consistent skill development and professional growth across multiple disciplines",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Experience & Journey
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            My professional journey across technology, creative arts, and voice acting, showcasing growth and
            versatility.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={
                          exp.type === "Freelance" ? "default" : exp.type === "Creative" ? "secondary" : "outline"
                        }
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center text-base">
                      <span className="font-medium">{exp.company}</span>
                      <MapPin className="h-4 w-4 mx-2" />
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md"
              >
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

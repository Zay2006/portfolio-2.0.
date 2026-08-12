"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeader from "@/components/section-header"

export default function Experience() {
  const experiences = [
    {
      title: "Voice Actor",
      company: "Independent Contractor",
      location: "Philadelphia, PA",
      period: "2020 - Present",
      type: "Creative",
      description:
        "Providing professional voice-over services for various projects including character voices, narration, and commercial work. Specialized in bringing characters and stories to life through engaging performances.",
      achievements: [
        "Completed 20+ voice acting projects",
        "Developed unique character voices for animated content",
        "Open for bookings — character work, narration, and esports announcing",
        "Built a professional home studio setup",
      ],
      technologies: ["Audio Editing", "Character Development", "Script Analysis", "Studio Recording"],
    },
    {
      title: "Tech Support Specialist",
      company: "Family & Community",
      location: "Philadelphia, PA",
      period: "2023 - 2025",
      type: "Technical",
      description:
        "Served as the go-to person for tech issues across family and community, developing deep expertise in troubleshooting, system optimization, and user support across various devices and platforms.",
      achievements: [
        "Resolved 100+ technical issues across different platforms",
        "Developed systematic troubleshooting methodologies",
        "Gained expertise in Windows, macOS, and mobile platforms",
        "Built reputation as a reliable tech problem solver",
      ],
      technologies: ["Windows", "macOS", "iOS", "Android", "Hardware Troubleshooting", "Network Setup"],
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2024 - Present",
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
      description: "5+ years of consistent skill development and professional growth across multiple disciplines",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-gray-800/30 -z-10" />
      <div className="container mx-auto">
        <SectionHeader
          label="Experience"
          title="Experience & Journey"
          description="My professional journey across voice acting, technology, and development — showcasing growth, versatility, and a passion for storytelling and innovation."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-indigo-600 md:-translate-x-1/2 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-12 md:pl-0 mb-10 md:mb-12 md:flex md:items-start md:even:flex-row-reverse"
            >
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

              <div className="md:w-1/2 md:pr-10 md:even:pr-0 md:even:pl-10">
                <Card className="glass-card border-none">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <Badge
                        variant={
                          exp.type === "Freelance" ? "default" : exp.type === "Creative" ? "secondary" : "outline"
                        }
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-display">{exp.title}</CardTitle>
                    <CardDescription className="flex flex-wrap items-center text-sm sm:text-base gap-1">
                      <span className="font-medium">{exp.company}</span>
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-purple-600 dark:text-purple-400 mr-2 mt-0.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="text-center p-5 sm:p-6 rounded-2xl glass-card"
              >
                <achievement.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-purple-600 dark:text-purple-400" />
                <h4 className="font-display font-bold mb-2 text-gray-800 dark:text-gray-200">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

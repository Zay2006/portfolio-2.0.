"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Calendar, Users, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "YouTube Viewer 2.0",
      description:
        "A modern, feature-rich YouTube viewer application built from the ground up. Features include advanced search capabilities, playlist management, and a clean, intuitive interface that enhances the video browsing experience.",
      longDescription:
        "This project represents a complete redesign of my original YouTube viewer concept. Built with React and modern web technologies, it provides users with an enhanced way to discover and watch YouTube content with features like custom playlists, advanced filtering, and responsive design.",
      github: "https://github.com/Zay2006/YoutubeViewer2.0",
      demo: "https://youtube-viewer2-0.vercel.app",
      image: "/youtube-viewer-interface.jpg",
      tags: ["React", "API Integration", "UI/UX", "Responsive Design"],
      color: "from-red-500 to-orange-500",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      highlights: ["Custom API Integration", "Responsive Design", "Advanced Search"],
    },
    {
      title: "Timed Timer 3.0",
      description:
        "A sophisticated productivity timer application designed to enhance focus and work efficiency. Features customizable intervals, progress tracking, and analytics to help users optimize their work sessions.",
      longDescription:
        "The third iteration of my timer application, built with a focus on user experience and productivity enhancement. Includes Pomodoro technique support, session analytics, and customizable work/break intervals with visual and audio notifications.",
      github: "https://github.com/Zay2006/TimedTimer3.0",
      demo: "https://timed-timer3-0.vercel.app",
      image: "/productivity-timer-app.jpg",
      tags: ["JavaScript", "Productivity", "Time Management", "Analytics"],
      color: "from-blue-500 to-cyan-500",
      status: "Completed",
      duration: "2 months",
      team: "Solo Project",
      highlights: ["Pomodoro Technique", "Session Analytics", "Custom Notifications"],
    },
    {
      title: "Social Dashboard 2.0",
      description:
        "A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Provides detailed insights, engagement metrics, and growth tracking with beautiful data visualizations.",
      longDescription:
        "An advanced analytics platform that connects to various social media APIs to provide unified insights. Features real-time data updates, customizable dashboards, and detailed reporting capabilities for content creators and businesses.",
      github: "https://github.com/Zay2006/social-dashboard-2.0",
      demo: "https://social-dashboard-delta.vercel.app",
      image: "/social-media-dashboard-analytics.jpg",
      tags: ["MySQL", "Analytics", "Dashboard", "Data Visualization"],
      color: "from-purple-500 to-indigo-500",
      status: "Completed",
      duration: "4 months",
      team: "Solo Project",
      highlights: ["Multi-platform Integration", "Real-time Analytics", "Custom Reports"],
    },
    {
      title: "Young Saved Unashamed (YSU)",
      description:
        "A faith-based community platform designed to connect young believers and provide spiritual resources. Features event management, community discussions, and resource sharing with a focus on building meaningful connections.",
      longDescription:
        "A comprehensive community platform built for young Christians to connect, share resources, and grow in their faith together. Includes user authentication, event management, discussion forums, and resource libraries with modern web technologies.",
      github: "https://github.com/Zay2006/young-saved-unashamed",
      demo: "https://young-saved-unashamed.vercel.app",
      image: "/faith-community-platform.jpg",
      tags: ["Next.js", "Community", "Faith-Based", "Full-Stack"],
      color: "from-green-500 to-emerald-500",
      status: "Completed",
      duration: "5 months",
      team: "Solo Project",
      highlights: ["Community Features", "Event Management", "Resource Sharing"],
    },
  ]

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

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Featured Projects
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A showcase of my recent work demonstrating skills in web development, database management, UI/UX design, and
            full-stack application development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button
                    variant="default"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

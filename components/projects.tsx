"use client"

import { ExternalLink, Github, Play, Calendar, Users, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
export default function Projects() {
  const projects = [
    {
      title: "YouTube Viewer 2.0",
      description:
        "A modern, feature-rich YouTube viewer application built from the ground up. Features include advanced search capabilities, playlist management, and a clean, intuitive interface.",
      github: "https://github.com/Zay2006/YoutubeViewer2.0",
      demo: "https://youtube-viewer2-0.vercel.app",
      tags: ["React", "API Integration", "UI/UX", "Responsive Design"],
      color: "from-red-500 to-orange-500",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      highlights: ["Custom API Integration", "Responsive Design", "Advanced Search"],
      initials: "YT",
    },
    {
      title: "Timed Timer 3.0",
      description:
        "A sophisticated productivity timer application designed to enhance focus and work efficiency. Features customizable intervals, progress tracking, and analytics.",
      github: "https://github.com/Zay2006/TimedTimer3.0",
      demo: "https://timed-timer3-0.vercel.app",
      tags: ["JavaScript", "Productivity", "Time Management", "Analytics"],
      color: "from-blue-500 to-cyan-500",
      status: "Completed",
      duration: "2 months",
      team: "Solo Project",
      highlights: ["Pomodoro Technique", "Session Analytics", "Custom Notifications"],
      initials: "TT",
    },
    {
      title: "Social Dashboard 2.0",
      description:
        "A comprehensive social media analytics dashboard that aggregates data from multiple platforms with beautiful data visualizations.",
      github: "https://github.com/Zay2006/social-dashboard-2.0",
      demo: "https://social-dashboard-delta.vercel.app",
      tags: ["MySQL", "Analytics", "Dashboard", "Data Visualization"],
      color: "from-purple-500 to-indigo-500",
      status: "Completed",
      duration: "4 months",
      team: "Solo Project",
      highlights: ["Multi-platform Integration", "Real-time Analytics", "Custom Reports"],
      initials: "SD",
    },
    {
      title: "Young Saved Unashamed (YSU)",
      description:
        "A faith-based community platform designed to connect young believers and provide spiritual resources with event management and discussions.",
      github: "https://github.com/Zay2006/young-saved-unashamed",
      demo: "https://young-saved-unashamed.vercel.app",
      tags: ["Next.js", "Community", "Faith-Based", "Full-Stack"],
      color: "from-green-500 to-emerald-500",
      status: "Completed",
      duration: "5 months",
      team: "Solo Project",
      highlights: ["Community Features", "Event Management", "Resource Sharing"],
      initials: "YS",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-gray-800/30 -z-10" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={index === 0 ? "lg:col-span-2" : ""}>
              <Card className="h-full glass-card border-none overflow-hidden group">
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

                <div className="relative overflow-hidden aspect-video">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <span className="text-5xl sm:text-6xl font-display font-bold text-white/30 group-hover:scale-110 transition-transform duration-500">
                      {project.initials}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                      View Project <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800 shadow-sm">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <CardTitle className="text-xl sm:text-2xl font-display font-bold">{project.title}</CardTitle>
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 shrink-0" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 shrink-0" />
                      {project.team}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">Key Highlights</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 sm:px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button
                    variant="default"
                    className="w-full sm:flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-500/20"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:flex-1 bg-white/50 dark:bg-gray-900/50"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

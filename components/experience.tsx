"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Award, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"

const experiences = [
  {
    title: "Voice Actor",
    company: "Independent Contractor",
    location: "Philadelphia, PA",
    period: "2020 - Present",
    type: "Creative",
    description:
      "Providing professional voice-over services including character voices, narration, and commercial work. Open for bookings in character work, narration, and esports announcing.",
    achievements: [
      "Completed 20+ voice acting projects",
      "Developed unique character voices for animated content",
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
      "Served as the go-to person for tech issues across family and community, developing expertise in troubleshooting, system optimization, and user support.",
    achievements: [
      "Resolved 100+ technical issues across different platforms",
      "Developed systematic troubleshooting methodologies",
      "Gained expertise in Windows, macOS, and mobile platforms",
    ],
    technologies: ["Windows", "macOS", "iOS", "Android", "Hardware Troubleshooting"],
  },
  {
    title: "Associate & Instructional Intern",
    company: "Launchpad Philly",
    location: "Philadelphia, PA",
    period: "Jan 2024 - Jun 2025",
    type: "Outreach",
    description:
      "Developed full-stack applications while mentoring high school students in coding fundamentals and supporting youth development programming.",
    achievements: [
      "Developed full-stack apps using React.js, Next.js, and Python",
      "Mentored 75+ high school students in coding fundamentals",
      "Assisted with curriculum delivery and classroom facilitation",
      "Collaborated in agile development and instructional environments",
    ],
    technologies: ["React", "Next.js", "Python", "Youth Mentorship", "Curriculum Delivery"],
  },
  {
    title: "Program Assistant",
    company: "Office of Reentry Partnerships",
    location: "Philadelphia, PA",
    period: "Jul 2024 - Aug 2024",
    type: "Outreach",
    description:
      "Supported juvenile reentry initiatives through research, resource development, and community outreach coordination.",
    achievements: [
      "Supported juvenile reentry initiatives through research and outreach",
      "Assisted in identifying funding opportunities",
      "Improved workforce development resources for at-risk populations",
    ],
    technologies: ["Community Outreach", "Research", "Workforce Development"],
  },
  {
    title: "Sales Associate",
    company: "Apple Inc.",
    location: "Willow Grove, PA",
    period: "Oct 2024 - Jan 2025",
    type: "Technical",
    description:
      "Provided customer-facing technical support and product education in a high-volume retail environment.",
    achievements: [
      "Delivered personalized customer solutions using technical product knowledge",
      "Supported sales performance in a high-volume retail environment",
      "Applied technical expertise to educate customers on Apple products",
    ],
    technologies: ["Customer Service", "Technical Support", "Product Education"],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance Projects",
    location: "Remote",
    period: "2024 - Present",
    type: "Freelance",
    description:
      "Built multiple web applications including a YouTube Viewer, Social Dashboard, and productivity timer using modern full-stack technologies.",
    achievements: [
      "Built 4+ complete web applications from scratch",
      "Implemented responsive designs with 100% mobile compatibility",
      "Integrated MySQL databases with optimized queries",
    ],
    technologies: ["React", "Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Tech Outreach Coordinator VISTA",
    company: "Launchpad Philly / AmeriCorps (PHENND Fellow)",
    location: "Philadelphia, PA",
    period: "Aug 2025 - Present",
    type: "Outreach",
    description:
      "Lead outreach and recruitment strategy for Launchpad Philly's 4th cohort, building partnerships and digital campaigns to expand access to tech education.",
    achievements: [
      "Lead outreach targeting 250+ student applications for Cohort 4",
      "Build partnerships with schools, nonprofits, and community organizations",
      "Design and manage TikTok and Instagram campaigns",
      "Develop an Outreach Strategy Manual for sustainable recruitment",
    ],
    technologies: ["Community Outreach", "Social Media Strategy", "Partnership Development", "Recruitment"],
  },
]

const achievements = [
  {
    icon: Award,
    title: "PHENND Fellow",
    description: "Selected as AmeriCorps PHENND Fellow serving as Tech Outreach Coordinator at Launchpad Philly",
  },
  {
    icon: TrendingUp,
    title: "75+ Students Mentored",
    description: "Guided high school students through coding fundamentals and professional development",
  },
  {
    icon: Calendar,
    title: "Learn React Certified",
    description: "Codecademy React Certification (2025) plus Launchpad full-stack workforce training",
  },
]

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 sm:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-gray-800/30 -z-10" />
      <div className="container mx-auto">
        <SectionHeader
          label="Experience"
          title="Experience & Journey"
          description="My professional journey across outreach, technology, voice acting, and development — scroll through the timeline to explore each chapter."
        />

        <div className="relative max-w-6xl mx-auto mb-4">
          <div className="hidden sm:flex absolute -top-2 right-0 gap-2 z-10">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll timeline left" className="rounded-full bg-white/80 dark:bg-gray-900/80">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll timeline right" className="rounded-full bg-white/80 dark:bg-gray-900/80">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left mb-4">
            ← Scroll or swipe to explore the timeline →
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-300 dark:scrollbar-thumb-purple-700"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="relative flex gap-6 min-w-max pt-8 pb-4">
              <div className="absolute top-[2.125rem] left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex flex-col w-[300px] sm:w-[340px] shrink-0 snap-center"
                >
                  <div className="flex justify-center mb-4 relative z-10">
                    <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ring-2 ring-purple-300 dark:ring-purple-700" />
                  </div>

                  <Card className="glass-card border-none flex-1">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <Badge
                          variant={
                            exp.type === "Freelance"
                              ? "default"
                              : exp.type === "Creative"
                                ? "secondary"
                                : exp.type === "Outreach"
                                  ? "default"
                                  : "outline"
                          }
                          className={exp.type === "Outreach" ? "bg-purple-600 hover:bg-purple-700" : ""}
                        >
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <CardTitle className="text-base sm:text-lg font-display leading-snug">{exp.title}</CardTitle>
                      <CardDescription className="flex flex-col gap-0.5 text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold mb-1.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-purple-600 dark:text-purple-400 mr-1.5 mt-0.5 shrink-0">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 max-w-6xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-5 sm:p-6 rounded-2xl glass-card hover:scale-[1.03] hover:-translate-y-1 transition-transform"
              >
                <achievement.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-purple-600 dark:text-purple-400" />
                <h4 className="font-display font-bold mb-2 text-gray-800 dark:text-gray-200">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

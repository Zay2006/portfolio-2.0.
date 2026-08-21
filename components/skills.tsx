import { Code, Mic, Palette, Database, Globe, Zap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Voice Acting",
      icon: Mic,
      color: "from-pink-500 to-rose-500",
      pillClass:
        "bg-pink-500/10 border-pink-500/25 text-pink-700 dark:text-pink-300 hover:bg-pink-500/20",
      skills: ["Character Voices", "Narration", "Commercial VO", "Audio Editing"],
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      pillClass:
        "bg-blue-500/10 border-blue-500/25 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20",
      skills: ["JavaScript/TypeScript", "React/Next.js", "Python", "Node.js"],
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      pillClass:
        "bg-green-500/10 border-green-500/25 text-green-700 dark:text-green-300 hover:bg-green-500/20",
      skills: ["MySQL", "API Development", "Server Management", "Data Analysis"],
    },
    {
      title: "Creative & Design",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      pillClass:
        "bg-purple-500/10 border-purple-500/25 text-purple-700 dark:text-purple-300 hover:bg-purple-500/20",
      skills: ["UI/UX Design", "Digital Art", "Video Editing", "3D Modeling"],
    },
  ]

  const softSkills = [
    { name: "Communication", icon: Users },
    { name: "Problem Solving", icon: Zap },
    { name: "Adaptability", icon: Globe },
    { name: "Team Collaboration", icon: Users },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full glass-card border-none">
              <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-display">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${category.pillClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 transition-colors"
              >
                <skill.icon className="h-4 w-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

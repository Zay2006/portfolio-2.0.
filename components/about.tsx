import { Mic, Cpu, Palette, Gamepad2, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    title: "Technology & Outreach",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    content:
      "As a Tech Outreach Coordinator with Launchpad Philly, I work to expand access to technology education and career pathways for young people. My role focuses on building partnerships with schools and community organizations, engaging students and families through outreach events, and helping connect the next generation with opportunities in tech. I'm passionate about making the tech industry more accessible and empowering students to see themselves in these spaces.",
  },
  {
    title: "Voice Acting & Creative Expression",
    icon: Mic,
    color: "from-pink-500 to-rose-500",
    content:
      "Voice acting has always been a dream of mine. I love bringing characters and stories to life through performance, using tone, emotion, and narrative to connect with audiences. Whether through voice work, writing, or content creation, storytelling is one of my favorite ways to share ideas and inspire others.",
  },
  {
    title: "Esports & Gaming",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    content:
      "Gaming—especially competitive gaming—has also played a huge role in my life. From playing to coaching teams in games like Super Smash Bros., esports allows me to combine my love for performance, storytelling, and community in a space that is constantly growing and evolving.",
  },
  {
    title: "Creativity & Media",
    icon: Palette,
    color: "from-amber-500 to-yellow-500",
    content:
      "Beyond technology and gaming, I enjoy exploring creative outlets such as writing, music, and digital media. Creativity has always been the thread connecting everything I do, shaping how I approach both professional and personal projects.",
  },
]

export default function About() {
  return (
    <section className="py-16 sm:py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 sm:mb-12">
          <Card className="glass-card border-none">
            <CardContent className="pt-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                At the core of everything I do is a belief in the power of{" "}
                <strong className="text-purple-600 dark:text-purple-400">storytelling</strong>,{" "}
                <strong className="text-purple-600 dark:text-purple-400">community</strong>, and{" "}
                <strong className="text-purple-600 dark:text-purple-400">innovation</strong>.
              </p>
              <p>
                By combining technology, creativity, and storytelling, my goal is to build meaningful connections,
                inspire others, and contribute to communities that value innovation and expression.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {sections.map((section) => (
            <Card key={section.title} className="glass-card border-none overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${section.color}`} />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${section.color} text-white shadow-md`}>
                    <section.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-display">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <Card className="glass-card border-none bg-gradient-to-r from-purple-600/5 to-indigo-600/5">
            <CardContent className="pt-6 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always open to connecting with people who share interests in technology, education, voice acting,
                esports, and creative media.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

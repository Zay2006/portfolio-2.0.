import { Github, Linkedin, Mail, Heart, FileText } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub profile" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn profile" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email Isaiah Wright" },
  { icon: FileText, href: siteConfig.resumePath, label: "Download resume" },
] as const

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold">
              <span className="gradient-text bg-gradient-to-r from-purple-600 to-indigo-600">{siteConfig.name}</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
              Outreach Coordinator · Voice Actor · Content Creator · Esports Enthusiast
            </p>
          </div>
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") || href.endsWith(".pdf") ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={href.endsWith(".pdf") ? "Isaiah_Wright_Resume.pdf" : undefined}
                className="p-3 rounded-xl text-gray-600 dark:text-gray-400 transition-all duration-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50 text-center text-gray-500 dark:text-gray-500 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="hidden sm:inline mx-2">·</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-pink-500 fill-pink-500" /> and Next.js
          </span>
        </div>
      </div>
    </footer>
  )
}

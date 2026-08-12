import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold gradient-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Isaiah Wright
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
              Outreach Coordinator · Voice Actor · Content Creator · Esports Enthusiast
            </p>
          </div>
          <div className="flex space-x-3">
            {[
              { icon: Github, href: "https://github.com/Zay2006", hover: "hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/isaiah-wright-384b2b26a/", hover: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" },
              { icon: Mail, href: "mailto:iwright4706@gmail.com", hover: "hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20" },
            ].map(({ icon: Icon, href, hover }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`p-3 rounded-xl text-gray-600 dark:text-gray-400 transition-all duration-300 ${hover}`}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{Icon.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50 text-center text-gray-500 dark:text-gray-500 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} Isaiah Wright. All rights reserved.</span>
          <span className="hidden sm:inline mx-2">·</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-pink-500 fill-pink-500" /> and Next.js
          </span>
        </div>
      </div>
    </footer>
  )
}

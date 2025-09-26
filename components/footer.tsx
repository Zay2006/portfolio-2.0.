import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Isaiah Wright
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Voice Actor | Tech Enthusiast | Creative Artist | Esports Enthusiast
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Zay2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/isaiah-wright-384b2b26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:iwright4706@gmail.com"
              className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 dark:text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Isaiah Wright. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

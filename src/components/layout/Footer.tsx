import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-gray-900 dark:text-gray-50 font-bold text-lg">
            Mamatha H<span className="text-blue-600 dark:text-blue-400">.</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Senior Full Stack Developer · Singapore-ready
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/mamatha-h094a08176"
            aria-label="LinkedIn"
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="https://github.com/Mamatha9591"
            aria-label="GitHub"
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="mailto:mamatha@example.com"
            aria-label="Email"
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} Mamatha H. Built with React + TypeScript.
        </p>
      </div>
    </footer>
  )
}

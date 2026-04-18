import { ArrowDown, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Available for Senior Roles · Singapore
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Mamatha H
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
            Senior Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Engineering systems built to scale — in teams where quality and reliability are non-negotiable.
            <span className="block mt-2 text-base text-gray-500">
              7+ years delivering microservices, event-driven architectures, and cloud-native platforms — wherever engineering excellence sets the bar.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            as="a"
            href="/resume.pdf"
            download
            size="lg"
            variant="primary"
            className="bg-blue-600 hover:bg-blue-500"
          >
            <Download size={18} />
            Resume
          </Button>

          <Button
            as="a"
            href="https://linkedin.com/in/mamatha-h094a08176"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-200 hover:bg-white/10 hover:border-gray-400"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </Button>

          <Button
            as="a"
            href="https://github.com/Mamatha9591"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-200 hover:bg-white/10 hover:border-gray-400"
          >
            <GithubIcon size={18} />
            GitHub
          </Button>

          <Button
            as="a"
            href="#contact"
            size="lg"
            variant="ghost"
            className="text-gray-300 hover:bg-white/10"
          >
            <Mail size={18} />
            Contact
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12 text-gray-500 text-sm"
        >
          {['Node.js', 'TypeScript', 'React', 'Kafka', 'AWS', 'Microservices'].map(tag => (
            <span key={tag} className="hidden sm:inline">{tag}</span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 text-gray-500 hover:text-gray-300 transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  )
}

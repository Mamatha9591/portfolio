import { ExternalLink, Star } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { projects } from '../../data/projects'

export function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="Systems built for production"
            subtitle="A selection of platforms and products architected and shipped across my career."
          />
        </AnimatedSection>

        {/* Featured project */}
        {featured && (
          <AnimatedSection delay={0.1}>
            <div className="mb-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                  <Star size={11} fill="currentColor" />
                  Featured
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map(t => (
                      <Badge key={t} variant="blue">{t}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Architecture
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 italic border-l-2 border-blue-200 dark:border-blue-800 pl-3">
                    {featured.architecture}
                  </p>

                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Key Outcomes
                  </p>
                  <ul className="space-y-1.5">
                    {featured.highlights.map(h => (
                      <li key={h} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 flex-shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 + i * 0.05}>
              <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 hover:-translate-y-0.5 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-shrink-0">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-500 italic leading-relaxed mb-4 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                  {project.architecture}
                </p>

                <ul className="space-y-1 mb-4">
                  {project.highlights.map(h => (
                    <li key={h} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-blue-400 flex-shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map(t => (
                    <Badge key={t} variant="subtle">{t}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

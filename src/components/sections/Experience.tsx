import { MapPin, Calendar, FolderOpen } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { experiences } from '../../data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title="7+ years of production engineering"
            subtitle="From a charitable trust app to large-scale distributed platforms — a track record of shipping quality software across diverse domains."
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-3 sm:left-5 top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-gray-950" />

                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                          {exp.company}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Projects within this company */}
                    <div className="space-y-6">
                      {exp.projects.map((project, j) => (
                        <div
                          key={j}
                          className={exp.projects.length > 1 ? 'border-l-2 border-blue-100 dark:border-blue-900/40 pl-4' : ''}
                        >
                          {exp.projects.length > 1 && (
                            <div className="flex items-center gap-2 mb-3">
                              <FolderOpen size={14} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {project.name}
                              </p>
                            </div>
                          )}

                          <ul className="space-y-2 mb-4">
                            {project.highlights.map((h, k) => (
                              <li key={k} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                <span className="text-blue-500 mt-0.5 flex-shrink-0">▹</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                              <Badge key={t} variant="subtle">{t}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

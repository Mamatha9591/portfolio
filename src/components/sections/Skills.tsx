import { useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { skills } from '../../data/skills'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)

  const active = skills.find(g => g.category === activeCategory) ?? skills[0]

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title="Full-stack, cloud, and beyond"
            subtitle="Across frontend, backend, cloud, and security — built over 7 years of production work."
          />
        </AnimatedSection>

        {/* Category tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map(group => (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeCategory === group.category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <span className="mr-2">{group.icon}</span>
                {group.category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} key={activeCategory}>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-6 flex items-center gap-2">
              <span className="text-xl">{active.icon}</span>
              {active.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {active.skills.map(skill => (
                <Badge key={skill} variant="blue">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All skills grid view */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map(group => (
              <div
                key={group.category}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"
              >
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span>{group.icon}</span>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(skill => (
                    <Badge key={skill} variant="subtle">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

import { Layers, Zap, Shield, GitBranch, Cloud, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { pillars } from '../../data/systemDesign'

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  Shield,
  GitBranch,
  Cloud,
  Activity,
}

export function SystemDesign() {
  return (
    <section id="architecture" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Architecture"
            title="System Design Expertise"
            subtitle="The engineering principles and patterns I apply when designing production systems."
            light
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] ?? Layers
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.07}>
                <div className="h-full bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:bg-gray-800 transition-all duration-200 group flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon size={20} className="text-blue-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2">
                    {pillar.points.map(point => (
                      <li key={point} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-blue-500 flex-shrink-0 mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Cpu, Globe, Shield, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Cpu,
    title: 'Microservices',
    desc: 'Node.js microservices with Kafka for event-driven, independently scalable platforms.',
  },
  {
    icon: Zap,
    title: 'Event-Driven',
    desc: 'Apache Kafka and GCP Pub/Sub for async, high-throughput document and transaction pipelines.',
  },
  {
    icon: Globe,
    title: 'Cloud Deployments',
    desc: 'Production workloads on AWS EC2/RDS/S3 and Google Cloud Platform.',
  },
  {
    icon: Shield,
    title: 'Security-First',
    desc: 'JWT, OAuth2, RBAC, bcrypt, IAM, and data encryption across every layer.',
  },
]

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '4', label: 'Companies' },
  { value: '6', label: 'Production Projects' },
  { value: 'SGP', label: 'Based in Singapore' },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <SectionHeading
              label="About"
              title="Building systems that scale under pressure"
            />

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a Senior Full Stack Software Engineer with 7+ years of experience designing and delivering
                scalable, production-grade systems — across domains where performance, reliability, and correctness
                are not optional.
              </p>
              <p>
                My core expertise is in <strong className="text-gray-900 dark:text-gray-100">Node.js, TypeScript, and React.js</strong> —
                building high-performance REST APIs, microservices architectures, and event-driven systems using
                Apache Kafka and GCP Pub/Sub. I've shipped production systems on AWS (EC2, RDS, S3) and
                Google Cloud Platform, with a strong focus on secure authentication (JWT, OAuth2, RBAC)
                and clean CI/CD practices with Docker and Jenkins.
              </p>
              <p>
                I'm currently based in <strong className="text-gray-900 dark:text-gray-100">Singapore</strong> and
                available immediately — open to senior full-stack or backend roles in any domain where
                engineering quality, scalability, and long-term reliability genuinely matter.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {/* Stats */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(stat => (
                  <Card key={stat.label} className="text-center py-5">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </AnimatedSection>

            {/* Highlight cards */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, title, desc }) => (
                  <Card key={title} hover className="flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                      <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

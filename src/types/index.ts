export interface ExperienceProject {
  name: string
  highlights: string[]
  tech: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  projects: ExperienceProject[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  architecture: string
  tech: string[]
  highlights: string[]
  featured?: boolean
  link?: string
}

export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export interface SystemDesignPillar {
  title: string
  description: string
  points: string[]
  icon: string
}

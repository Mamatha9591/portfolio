import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '🖥',
    skills: ['React.js', 'Redux', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design', 'Angular'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices Architecture', 'Apache Kafka', 'Sequelize ORM'],
  },
  {
    category: 'Databases',
    icon: '🗄',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Sequelize ORM', 'GCP Firestore'],
  },
  {
    category: 'Cloud',
    icon: '☁',
    skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'GCP Cloud Functions', 'GCP Pub/Sub', 'GCP Firestore', 'GCP Cloud Storage'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🔧',
    skills: ['Docker', 'Jenkins CI/CD', 'Git', 'PM2', 'Agile / Scrum', 'Jest (Unit Testing)'],
  },
  {
    category: 'Security',
    icon: '🔒',
    skills: ['JWT', 'OAuth2', 'RBAC', 'bcrypt', 'IAM', 'Data Encryption', 'Input Validation', 'Rate Limiting'],
  },
]

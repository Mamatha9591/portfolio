import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    company: 'Capgemini',
    role: 'Senior Software Developer',
    period: 'Nov 2024 – Feb 2026',
    location: 'Bengaluru, India',
    projects: [
      {
        name: 'RGA Reinsurance Platform',
        highlights: [
          'Developed backend microservices in Node.js and TypeScript handling thousands of insurance transactions daily, ensuring high availability and data integrity.',
          'Built React.js frontend components for high-volume insurance claims processing, improving claim turnaround time and user experience.',
          'Designed and enhanced REST APIs for claims and risk-sharing data; improved API response performance by optimising MySQL queries and indexing.',
          'Secured APIs and sensitive data using JWT authentication, RBAC, and data encryption in compliance with enterprise standards.',
          'Managed deployment pipelines using Jenkins CI/CD and containerised services with Docker, enabling zero-downtime production releases.',
          'Implemented unit testing with Jest, improving code coverage and reducing regression defects in production.',
        ],
        tech: ['Node.js', 'TypeScript', 'React.js', 'MySQL', 'Kafka', 'Microservices', 'Docker', 'Jenkins', 'JWT', 'RBAC'],
      },
      {
        name: 'ACG – Application Cloud Garage (DocGarage)',
        highlights: [
          'Built cloud-native backend APIs using Node.js and GCP Cloud Functions integrated with Firestore and Cloud Storage for a document management system.',
          'Implemented event-driven asynchronous document processing workflows using Google Pub/Sub, significantly improving throughput for high-volume document batches.',
          'Applied enterprise security enhancements including IAM roles, encryption at rest, input validation, and file-type restrictions to protect sensitive documents.',
          'Optimised document upload and retrieval API performance; deployed containerised services via Docker and automated Jenkins pipelines.',
        ],
        tech: ['Node.js', 'GCP Cloud Functions', 'GCP Pub/Sub', 'Firestore', 'Cloud Storage', 'Docker', 'Jenkins', 'IAM'],
      },
    ],
    tech: ['Node.js', 'TypeScript', 'React.js', 'MySQL', 'Kafka', 'GCP', 'Docker', 'Jenkins', 'JWT', 'RBAC'],
  },
  {
    company: 'Epsilon India',
    role: 'Software Developer',
    period: 'Dec 2021 – Oct 2024',
    location: 'Bengaluru, India',
    projects: [
      {
        name: 'Tuvuga / Genkloud – Cloud Virtual Office Platform',
        highlights: [
          'Designed and built scalable REST APIs using Node.js and Express.js to support real-time collaboration features for a cloud-based virtual office platform.',
          'Developed React.js components with Redux state management and integrated CometChat SDK for in-app messaging and real-time communication.',
          'Secured APIs with OAuth2, implemented rate limiting, and encrypted chat messages to ensure data privacy and security.',
          'Deployed applications on AWS EC2 and managed Node.js processes using PM2; optimised API and database performance through query tuning and indexing.',
          'Configured Jenkins CI/CD pipelines and Dockerised services, reducing deployment time and ensuring consistent environments across dev and production.',
        ],
        tech: ['Node.js', 'Express.js', 'React.js', 'Redux', 'TypeScript', 'MySQL', 'Sequelize', 'AWS EC2', 'Docker', 'Jenkins', 'OAuth2', 'PM2'],
      },
      {
        name: 'One DB – Enterprise Reporting Dashboard',
        highlights: [
          'Built reporting dashboards with Role-Based Access Control (RBAC) enabling secure, role-specific data access.',
          'Implemented audit logging to track critical user activities and system changes, ensuring accountability and regulatory compliance.',
          'Developed scalable REST APIs in Node.js for dashboard data reporting; reduced API response time through database indexing and query optimisations.',
          'Improved overall system reliability through robust error handling, input validation, and proactive performance monitoring.',
        ],
        tech: ['Node.js', 'React.js', 'Redux', 'MySQL', 'REST APIs', 'RBAC', 'Audit Logging'],
      },
    ],
    tech: ['Node.js', 'Express.js', 'React.js', 'Redux', 'TypeScript', 'MySQL', 'AWS EC2', 'Docker', 'Jenkins', 'OAuth2'],
  },
  {
    company: 'Tenr Inventure Pvt Ltd',
    role: 'Software Developer',
    period: 'Mar 2020 – Dec 2021',
    location: 'Bengaluru, India',
    projects: [
      {
        name: 'Axia Manufacturing ERP System',
        highlights: [
          'Developed core ERP modules for production planning, scheduling, procurement, and materials management for a manufacturing enterprise.',
          'Built high-volume REST APIs integrated with Angular frontend, supporting complex business workflows and real-time inventory data.',
          'Implemented role-based authorisation and bcrypt password hashing, ensuring secure access control across all ERP modules.',
          'Improved API and database performance through PostgreSQL query optimisation and indexing; collaborated with QA and DevOps for smooth production releases.',
        ],
        tech: ['Node.js', 'Angular', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RBAC', 'bcrypt'],
      },
    ],
    tech: ['Node.js', 'Angular', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RBAC', 'bcrypt'],
  },
  {
    company: 'ICET IT Solutions Pvt Ltd',
    role: 'Software Developer',
    period: 'Sep 2018 – Nov 2019',
    location: 'Bengaluru, India',
    projects: [
      {
        name: 'Vasavi Annadhana Trust Application',
        highlights: [
          'Developed a full-stack web application to manage hospital food distribution, staff attendance, and donor contribution tracking for a charitable trust.',
          'Implemented a token-based food distribution system for patients and hospital staff, improving operational accuracy and eliminating manual tracking errors.',
          'Designed and developed backend APIs using Node.js and Express.js; created and optimised MySQL database schemas and queries for reliable data management.',
          'Improved UI responsiveness and backend API performance through code refactoring and query optimisation.',
        ],
        tech: ['Node.js', 'Express.js', 'JavaScript ES6', 'Ionic', 'MySQL'],
      },
    ],
    tech: ['Node.js', 'Express.js', 'JavaScript ES6', 'Ionic', 'MySQL'],
  },
]

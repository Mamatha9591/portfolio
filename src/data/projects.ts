import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'RGA Reinsurance Platform',
    description: 'Enterprise B2B insurance claims and risk-sharing platform handling thousands of insurance transactions daily. Built at Capgemini as a microservices-based system with strict compliance and security requirements.',
    architecture: 'Microservices architecture with Node.js and TypeScript services, Kafka for event-driven communication between modules, and MySQL as the primary data store. Jenkins CI/CD with Docker enables zero-downtime deployments.',
    tech: ['Node.js', 'TypeScript', 'React.js', 'MySQL', 'Apache Kafka', 'Microservices', 'Docker', 'Jenkins', 'JWT', 'RBAC'],
    highlights: [
      'Thousands of insurance transactions processed daily with high availability',
      'JWT + RBAC security in compliance with enterprise standards',
      'Zero-downtime production releases via Jenkins CI/CD and Docker',
      'Improved API performance through MySQL query optimisation and indexing',
    ],
    featured: true,
  },
  {
    title: 'ACG – DocGarage (Cloud Document System)',
    description: 'Cloud-native document management system built on GCP at Capgemini. Handles high-volume document ingestion, processing, and secure storage for enterprise clients.',
    architecture: 'Serverless backend using GCP Cloud Functions with Firestore and Cloud Storage. Google Pub/Sub drives async document processing workflows. IAM-based access control and encryption at rest protect sensitive documents.',
    tech: ['Node.js', 'GCP Cloud Functions', 'GCP Pub/Sub', 'Firestore', 'Cloud Storage', 'Docker', 'Jenkins', 'IAM'],
    highlights: [
      'Event-driven Pub/Sub pipeline significantly improved batch processing throughput',
      'IAM roles, encryption at rest, and file-type validation for enterprise security',
      'Containerised services with automated Jenkins deployment pipelines',
      'Optimised upload and retrieval APIs for high-volume document operations',
    ],
  },
  {
    title: 'Tuvuga / Genkloud – Cloud Virtual Office',
    description: 'Cloud-based virtual office and real-time collaboration platform built at Epsilon India. Supports team communication, messaging, and collaborative workflows for distributed teams.',
    architecture: 'Node.js/Express REST APIs deployed on AWS EC2 with PM2 process management. React.js + Redux frontend with CometChat SDK for real-time messaging. OAuth2-secured endpoints with rate limiting and message encryption.',
    tech: ['Node.js', 'Express.js', 'React.js', 'Redux', 'TypeScript', 'MySQL', 'Sequelize', 'AWS EC2', 'PM2', 'Docker', 'Jenkins', 'OAuth2'],
    highlights: [
      'Real-time messaging and collaboration via CometChat SDK integration',
      'OAuth2 security with rate limiting and end-to-end message encryption',
      'Deployed on AWS EC2 with PM2 process management for high availability',
      'Jenkins CI/CD with Docker ensuring consistent environments',
    ],
  },
  {
    title: 'One DB – Enterprise Reporting Dashboard',
    description: 'Multi-lingual enterprise project management and reporting dashboard built at Epsilon India. Provides role-specific data access and audit trails for compliance-driven enterprise clients.',
    architecture: 'Node.js REST APIs serve a React.js + Redux dashboard. RBAC controls data visibility per role. Audit logging records all critical user actions for regulatory compliance. Query optimisation and indexing reduce reporting API latency.',
    tech: ['Node.js', 'React.js', 'Redux', 'MySQL', 'REST APIs', 'RBAC', 'Audit Logging'],
    highlights: [
      'RBAC enables secure, role-specific data access across departments',
      'Full audit logging for regulatory compliance and accountability',
      'Reduced API response time through indexing and query optimisations',
      'Robust error handling and input validation for production reliability',
    ],
  },
  {
    title: 'Axia Manufacturing ERP',
    description: 'End-to-end ERP system for a manufacturing enterprise covering production planning, procurement, scheduling, and materials management. Built at Tenr Inventure replacing manual workflows.',
    architecture: 'Node.js REST APIs integrated with an Angular TypeScript frontend. PostgreSQL for complex relational data. RBAC and bcrypt authentication secure access across all modules. Collaborative delivery with QA and DevOps teams.',
    tech: ['Node.js', 'Angular', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RBAC', 'bcrypt'],
    highlights: [
      'Core ERP modules: production planning, procurement, scheduling, materials',
      'bcrypt password hashing and RBAC across all system modules',
      'PostgreSQL query optimisation and indexing for high-volume data operations',
      'High-volume REST APIs supporting complex manufacturing business workflows',
    ],
  },
  {
    title: 'Vasavi Annadhana Trust App',
    description: 'Full-stack web application managing hospital food distribution, staff attendance, and donor contribution tracking for a charitable trust. Built at ICET IT Solutions.',
    architecture: 'Node.js/Express.js backend with MySQL database. Ionic mobile-friendly frontend. Token-based food distribution system eliminates manual tracking. Optimised schemas and queries ensure reliable daily operations.',
    tech: ['Node.js', 'Express.js', 'JavaScript ES6', 'Ionic', 'MySQL'],
    highlights: [
      'Token-based distribution system eliminating manual tracking errors',
      'Manages food distribution, staff attendance, and donor contributions',
      'Optimised MySQL schemas and queries for reliable data management',
      'Improved UI responsiveness through refactoring and performance tuning',
    ],
  },
]

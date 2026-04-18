import type { SystemDesignPillar } from '../types'

export const pillars: SystemDesignPillar[] = [
  {
    icon: 'Layers',
    title: 'Microservices Architecture',
    description: 'Designing systems as independently deployable services aligned to business domains, as applied in the RGA Reinsurance Platform.',
    points: [
      'Independent Node.js services per business domain',
      'REST APIs as service contracts with versioning',
      'Kafka for async inter-service communication',
      'Jenkins CI/CD pipelines per service for independent deployments',
    ],
  },
  {
    icon: 'Zap',
    title: 'Event-Driven Systems',
    description: 'Building scalable async pipelines using Apache Kafka and GCP Pub/Sub for both real-time and batch workloads.',
    points: [
      'Apache Kafka for high-throughput insurance event streaming',
      'GCP Pub/Sub for async document processing workflows (DocGarage)',
      'Decoupled producers and consumers for independent scalability',
      'Reliable message delivery with idempotent processing',
    ],
  },
  {
    icon: 'Shield',
    title: 'Auth & Security',
    description: 'Implementing layered authentication and authorisation across enterprise platforms with a security-first mindset.',
    points: [
      'JWT authentication for stateless, secure API access',
      'OAuth2 for third-party and SSO integrations (Genkloud)',
      'RBAC with fine-grained role and permission management',
      'bcrypt, IAM roles, data encryption, and input validation',
    ],
  },
  {
    icon: 'GitBranch',
    title: 'CI/CD & DevOps',
    description: 'Automating build, test, and deployment pipelines with Docker and Jenkins for reliable, repeatable releases.',
    points: [
      'Jenkins pipelines for automated build, test, and deploy stages',
      'Docker containerisation for environment consistency',
      'Zero-downtime production releases across multiple platforms',
      'PM2 process management for Node.js on AWS EC2',
    ],
  },
  {
    icon: 'Cloud',
    title: 'Cloud Platforms',
    description: 'Deploying and operating production workloads on AWS and Google Cloud Platform.',
    points: [
      'AWS EC2 for scalable Node.js application hosting',
      'AWS RDS and S3 for managed databases and object storage',
      'GCP Cloud Functions for serverless document processing',
      'GCP Firestore and Cloud Storage for cloud-native data persistence',
    ],
  },
  {
    icon: 'Activity',
    title: 'Performance & Reliability',
    description: 'Applying systematic optimisation techniques to meet production SLAs and ensure system reliability.',
    points: [
      'MySQL and PostgreSQL query optimisation and indexing strategies',
      'API response time improvements through profiling and tuning',
      'Robust error handling, rate limiting, and input validation',
      'Audit logging and monitoring for compliance and observability',
    ],
  },
]

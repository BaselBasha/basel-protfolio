import { SiteConfig, Project, Experience, SkillCategory, Stat } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Basel AlBasha',
  title: 'Full-Stack Engineer',
  tagline: 'I build scalable, high-performance systems for teams that care about the details.',
  bio: `I'm Basel AlBasha, a Full-Stack Engineer with 4+ years of experience shipping production software across Turkey, the Middle East, and North America. I specialize in Next.js, Node.js, and cloud infrastructure on AWS — building everything from real-time dashboards to mission-critical logistics platforms. What drives me is the intersection of engineering precision and user experience: I believe fast, accessible software isn't a luxury, it's a baseline. I'm open to full-time roles and freelance projects globally.`,
  location: 'Trabzon, Turkey',
  languages: ['Arabic (Native)', 'English (Fluent)', 'Turkish (Fluent)'],
  email: 'baselbasha136@gmail.com',
  phone: '+905318681003',
  github: 'https://github.com/BaselBasha',
  linkedin: 'https://www.linkedin.com/in/baselbasha13/',
  openToWork: true,
  workTypes: ['Full-time', 'Freelance'],
};

export const projects: Project[] = [
  {
    slug: 'reevez-ai-saas',
    name: 'Reevez',
    tagline: 'AI SaaS startup reducing manual operations through AI-powered dashboards.',
    description: 'Founded an AI SaaS startup focused on reducing manual operations through AI-powered dashboards for enterprises. Designed and led development of a platform embedding AI assistants directly into dashboards to support decision-making across factories, HR, analytics, and admin workflows.',
    role: 'Founder & Lead Engineer',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NestJS', 'OpenAI', 'Gemini APIs', 'LangChain', 'n8n', 'Docker'],
    highlights: [
      'Implemented AI-driven data analysis, summaries, and action-based chat interactions integrated into real business processes',
      'Built role-based AI access, usage limits, and token-based controls for secure enterprise usage',
      'Developed workflow automation triggered by user actions, enabling AI-assisted operational flows',
      'Led technical architecture and collaborated with 4 co-founders, contributing across frontend, backend, and AI integration',
      'Currently delivering a production-ready AI dashboard for the first enterprise client',
    ],
    liveUrl: 'https://reevez.com',
    githubUrl: null,
    featured: true,
    hasImage: true,
    image: '/images/Reevez.jpg',
  },
  {
    slug: 'nothanks-app',
    name: 'Nothanks',
    tagline: 'Backend infrastructure for a mobile app with 10M+ downloads.',
    description: 'Engineered the complete backend for a consumer mobile app that surpassed 10 million downloads. Designed a scalable database architecture using Firebase to handle massive concurrent users, real-time sync, and secure authentication at scale.',
    role: 'Backend Developer',
    tech: ['Firebase', 'Cloud Functions', 'RESTful APIs', 'Node.js'],
    highlights: [
      'Architected Firebase database schema to support 10M+ active users with zero downtime',
      'Implemented Cloud Functions for real-time data sync and push notification delivery',
      'Designed secure authentication flows with role-based access control',
      'Optimized query patterns to achieve sub-100ms response times under peak load',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    hasImage: false,
  },
  {
    slug: 'koapath-backend',
    name: 'KoaPath',
    tagline: 'Production-grade backend for a fitness coaching marketplace.',
    description: 'Built the complete backend API for a fitness coaching platform connecting personal trainers with clients. Coaches create profiles, define training plans, and get paid via Stripe Connect — while trainees discover coaches, subscribe to plans, track daily progress, and communicate in real time.',
    role: 'Full-Stack Developer',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'Prisma', 'Stripe Connect', 'Socket.IO', 'Redis', 'Firebase', 'Docker'],
    highlights: [
      'Multi-provider auth (JWT, Google, Apple, Clerk) with OTP verification and webhook sync',
      'Stripe Connect marketplace payments with automatic platform fee splitting and IAP receipt validation',
      'Real-time WebSocket chat (Socket.IO) with file attachments and read receipts',
      'Weekly plan builder combining workouts, meals, macros, cardio, and daily progress tracking',
      '20+ Prisma models, BullMQ job queues, RBAC admin panel, and full i18n support',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    hasImage: true,
    image: '/images/koapath.jpg',
  },
  {
    slug: 'hr-management-dashboard',
    name: 'HR Management Dashboard',
    tagline: 'Enterprise HR and employee management platform for ANMAT.',
    description: 'Spearheaded front-end and back-end development of a modern Employee and HR Management Dashboard at ANMAT. Focused on performance, scalability, and user experience for a complex internal tool used by HR teams daily.',
    role: 'Software Engineer (Full-Stack)',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'Swagger'],
    highlights: [
      'Engineered responsive UI with React and Tailwind CSS ensuring cross-device compatibility',
      'Built and documented RESTful APIs using Node.js, Express.js, and Swagger',
      'Implemented strategic API caching that significantly reduced data retrieval latency',
      'Used TypeScript throughout to enforce type safety and improve team collaboration',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    hasImage: false,
  },
  {
    slug: 'rahmet-ihsan',
    name: 'Rahmet İhsan',
    tagline: 'Trilingual charity & donation platform with admin dashboard and automation.',
    description: 'Designed and built a full-stack, trilingual (Arabic / English / Turkish) charity platform for managing donation campaigns, orphan sponsorships, and community projects — with a public website, user portal, and a full admin dashboard. Live at rahmetihsan.com.',
    role: 'Solo Full-Stack Developer',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'Express.js', 'MongoDB', 'Mongoose', 'Docker', 'n8n'],
    highlights: [
      'Built trilingual support (Arabic RTL, English, Turkish) with next-intl — 100K+ characters of translations',
      'Donation campaigns with goal tracking, orphan sponsorship (Kafalah), and category-specific giving pages',
      'Admin dashboard with real-time analytics, campaign/orphan/blog CRUD, and donor management',
      'JWT auth with OTP email verification, social login (Google, Facebook, Apple), and RBAC middleware',
      'n8n webhook integration for event-driven automation on donations, registrations, and reports',
    ],
    liveUrl: 'https://rahmetihsan.com',
    githubUrl: null,
    featured: false,
    hasImage: false,
  },
  {
    slug: 'news-management-platform',
    name: 'News Management Platform',
    tagline: 'Custom CMS with admin panel for article management.',
    description: 'Developed a complete news website with a custom admin panel, allowing administrators to seamlessly upload, edit, and manage articles. Built with Express.js and server-rendered EJS templates.',
    role: 'Full-Stack Developer',
    tech: ['Express.js', 'Node.js', 'EJS', 'MongoDB', 'REST APIs'],
    highlights: [
      'Built custom admin panel with role-based article creation, editing, and publishing workflows',
      'Implemented server-side rendering with EJS for fast initial load and SEO performance',
      'Designed MongoDB schema for flexible article taxonomy and content versioning',
      'Added image upload pipeline with server-side processing and storage',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    hasImage: false,
  },
];

export const experiences: Experience[] = [
  {
    company: 'Reevez',
    role: 'Founder & Lead Engineer',
    period: { start: '2025', end: 'Side Project' },
    type: 'remote',
    location: 'Remote',
    highlights: [
      'Founded an AI SaaS startup focused on reducing manual operations through AI-powered dashboards for enterprises',
      'Designed and led development of a platform embedding AI assistants directly into dashboards for decision-making',
      'Built role-based AI access, workflow automation, and token-based controls for secure enterprise usage',
    ],
    tech: ['Next.js', 'TypeScript', 'NestJS', 'OpenAI', 'Gemini APIs', 'LangChain', 'n8n', 'Docker'],
  },
  {
    company: 'Toros Yazılım',
    role: 'Front-End Developer',
    period: { start: 'June 2024', end: 'September 2024' },
    type: 'onsite',
    location: 'Türkiye',
    highlights: [
      'Developed responsive, high-performance UIs using React, TypeScript, and Tailwind CSS across multiple product features',
      'Built complex data-driven dashboards with DevExtreme, streamlining enterprise-level workflows for end users',
      'Collaborated via GitLab for version control, code reviews, and CI/CD — contributing to Agile sprints and feature planning',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'DevExtreme', 'GitLab'],
  },
  {
    company: 'ANMAT',
    role: 'Software Engineer',
    period: { start: '2022', end: '2023' },
    type: 'hybrid',
    location: 'Turkey',
    highlights: [
      'Led full-stack development of an HR Management Dashboard — built responsive React/Next.js frontend and scalable Node.js/Express.js backend APIs',
      'Implemented strategic caching for API requests, reducing data retrieval times and improving overall application performance',
      'Authored comprehensive API documentation with Swagger, streamlining development workflow and inter-team communication',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'Swagger'],
  },
];

export const education = {
  degree: "Bachelor's degree in Computer Software Engineering",
  university: 'Gümüşhane University',
  period: 'September 2021 – June 2025',
};

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'Fastify', 'Bun'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'CloudFront', 'AWS ECS', 'Docker'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'Firebase'],
  },
  {
    label: 'Architecture',
    skills: ['REST APIs', 'GraphQL', 'Serverless', 'Microservices', 'SSR', 'SSG'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['GitHub Actions', 'Docker', 'Jest', 'Cypress', 'Swagger', 'GitLab'],
  },
];

export const stats: Stat[] = [
  { value: 4, suffix: '+', label: 'Years of Experience' },
  { value: 10, suffix: 'M+', label: 'App Downloads (Nothanks)' },
  { value: 30, suffix: '%', label: 'Load Time Reduction (Bread Fast)' },
  { value: 200, suffix: 'ms', label: 'TTFB Target (AWS CloudFront)' },
];

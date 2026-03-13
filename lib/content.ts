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
  linkedin: 'https://www.linkedin.com/in/baselbasha',
  openToWork: true,
  workTypes: ['Full-time', 'Freelance'],
};

export const projects: Project[] = [
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
    slug: 'stephano-group-barcode',
    name: 'Stephano Group Operations Platform',
    tagline: 'Mission-critical barcode tracking system for a Canadian industrial leader.',
    description: 'Led full-stack development of an internal operations platform for Stephano Group, a leading industrial company in Canada. The system modernized barcode-based inventory tracking and operational workflows, replacing legacy processes with a performant, cloud-native solution.',
    role: 'Full-Stack Developer (Lead)',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    highlights: [
      'Led architecture and delivery of a mission-critical operations platform end-to-end',
      'Reduced barcode scan-to-record latency by optimizing API pipeline and database indexing',
      'Deployed on AWS ECS with CloudFront CDN achieving TTFB under 200ms globally',
      'Integrated real-time inventory tracking dashboard with live updates via WebSockets',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    hasImage: false,
  },
  {
    slug: 'gaming-ecommerce',
    name: 'Gaming eCommerce Platform',
    tagline: 'Full-stack storefront for a local gaming retailer.',
    description: 'Built a complete eCommerce platform for a gaming store, featuring server-side rendering for SEO and performance, a product catalog, cart system, and a robust NestJS backend with structured data management.',
    role: 'Full-Stack Developer',
    tech: ['Next.js', 'NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'SSR'],
    highlights: [
      'Implemented SSR with Next.js for optimal Core Web Vitals and search indexing',
      'Built product catalog, cart, and checkout flows with full type safety in TypeScript',
      'Architected RESTful API with NestJS featuring authentication, inventory management, and order tracking',
      'Deployed with Docker containers on a VPS with automated CI/CD via GitHub Actions',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    hasImage: false,
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
    slug: 'bread-fast-ecommerce',
    name: 'Bread Fast',
    tagline: 'eCommerce platform with real-time delivery analytics.',
    description: 'Built custom UI/UX components and integrated real-time delivery analytics for a scalable eCommerce platform. Led frontend performance optimization resulting in a 30%+ reduction in page load time.',
    role: 'Frontend Engineer (Freelance)',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Vercel', 'REST APIs'],
    highlights: [
      'Reduced page load time by over 30% through code splitting, lazy loading, and prefetching',
      'Integrated Firebase for real-time product tracking and delivery analytics dashboards',
      'Built responsive eCommerce UI with Next.js ensuring fast loads across all devices',
      'Implemented Firebase Authentication with secure session management',
    ],
    liveUrl: null,
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
  {
    company: 'Bread Fast',
    role: 'Frontend Engineer',
    period: { start: 'March 2021', end: 'July 2022' },
    type: 'remote',
    location: 'Remote',
    highlights: [
      'Built custom UI/UX for a scalable eCommerce platform and integrated real-time delivery analytics with Firebase',
      'Led frontend performance optimization, reducing page load time by over 30% through code splitting and lazy loading',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Vercel', 'REST APIs'],
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

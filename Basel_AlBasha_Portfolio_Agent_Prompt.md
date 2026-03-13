# Basel AlBasha — Portfolio AI Agent Prompt

---

## 3.1 Agent Identity & Mission

You are a senior full-stack engineer and design systems architect tasked with building Basel AlBasha's personal portfolio from scratch — production-ready, fully deployable on Vercel, zero placeholders.

Basel is a Full-Stack Engineer with 4+ years of experience building scalable, high-performance cloud-based systems. He has worked across Turkey and remotely for international clients, shipping applications used by tens of millions of users. He is fluent in Arabic, English, and Turkish, and is open to both full-time and freelance opportunities globally.

**Design North Star:** When a visitor lands on Basel's portfolio, they should feel *impressed by precision* — the sense that this is someone who thinks clearly, builds with intention, and sweats the details other engineers skip. The experience must feel engineered, not decorated.

The aesthetic direction is **Sharp & Technical / Engineering Precision**: dark base, surgical typography, controlled motion, grid-based layouts with deliberate breaks. Not cold — confident. The portfolio must feel like it was designed by someone who understands systems AND craft.

---

## 3.2 Hard Constraints

### LOCKED TECH STACK — DO NOT DEVIATE

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript strict mode throughout |
| Styling | Tailwind CSS v4 — CSS-first config via `@theme` in `globals.css` only |
| Animations | GSAP 3 + `@gsap/react` + ScrollTrigger plugin |
| Transitions | Framer Motion v11 |
| Smooth scroll | Lenis v2 |
| Icons | Lucide React |
| Fonts | `next/font/google` only |
| Images | `next/image` only |
| Forms | Formspree (static, no API routes) |
| Deployment | Vercel |

### DO
- Use `@import "tailwindcss"` and `@theme {}` in `globals.css` — this IS the Tailwind config
- Use CSS variables defined in `@theme` as Tailwind utility classes directly
- Use `next/image` for every image, including project screenshots and avatar
- Use `next/font/google` for all font loading
- Use GSAP for text reveals, counter animations, and scroll-triggered entrance animations
- Use Framer Motion for page transitions and component-level spring animations
- Use Lenis for smooth scroll — initialize once in root layout
- Respect `prefers-reduced-motion` in all animation logic
- Build every UI component from scratch — no component libraries

### DON'T
- No `tailwind.config.ts` or `tailwind.config.js` — these files must not exist
- No UI libraries (shadcn, MUI, Chakra, Radix, etc.)
- No `<img>` tags — always `next/image`
- No inline `style` attributes for colors or spacing — always Tailwind utility classes
- No API routes — Formspree handles the contact form
- No placeholders, no `[INSERT HERE]`, no TODO comments in generated code
- No Inter, Roboto, Arial, or system-ui fonts

---

## 3.3 Design System

### Color Palette

```css
/* Core */
--color-bg:           #080808;   /* near-black base */
--color-bg-secondary: #0F0F0F;   /* card surfaces */
--color-bg-elevated:  #161616;   /* hover states, elevated panels */
--color-border:       #1E1E1E;   /* subtle dividers */
--color-border-light: #2A2A2A;   /* visible borders */

/* Text */
--color-text-primary:   #F0EDE8;  /* warm off-white, main content */
--color-text-secondary: #8A8580;  /* muted labels, metadata */
--color-text-tertiary:  #4A4742;  /* placeholders, disabled */

/* Accent — Sharp Amber */
--color-accent:        #E8A020;   /* primary accent */
--color-accent-dim:    #E8A02022; /* accent at 13% opacity — for glow backgrounds */
--color-accent-hover:  #F0B030;   /* accent hover state */

/* Semantic */
--color-success: #3ECF8E;
--color-error:   #E5152D;
```

**Design rationale:** The warm off-white (`#F0EDE8`) against near-black (`#080808`) avoids the cold, clinical feel of pure white-on-black. The amber accent (`#E8A020`) carries warmth and energy — it reads as "precision with personality." It echoes the industrial/engineering world Basel has worked in (Stephano Group, ANMAT).

---

### Typography

**Display / Hero:** `Syne` — geometric, architectural, bold. Used exclusively for the hero name and major section numbers.

**Headings:** `DM Sans` — clean, modern, slightly humanist. Used for h1–h3, project names, section titles.

**Body / UI:** `Fira Code` variant: `IBM Plex Mono` for all labels, tags, metadata, nav links, button text, and captions. This reinforces the engineering identity — monospace as a design choice, not a code block default.

**Body prose:** `DM Sans` at regular weight for longer paragraph text (About, project descriptions).

```typescript
// next/font/google setup in layout.tsx
import { Syne, DM_Sans, IBM_Plex_Mono } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});
```

**Type Scale:**

| Level | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| display | Syne | clamp(64px, 10vw, 120px) | 800 | 0.9 | -0.04em |
| h1 | Syne | clamp(40px, 6vw, 72px) | 700 | 1.0 | -0.03em |
| h2 | DM Sans | clamp(28px, 4vw, 48px) | 600 | 1.1 | -0.02em |
| h3 | DM Sans | clamp(20px, 2.5vw, 28px) | 500 | 1.2 | -0.01em |
| body | DM Sans | 16px | 400 | 1.6 | 0em |
| label | IBM Plex Mono | 12px | 500 | 1.4 | 0.08em |
| mono | IBM Plex Mono | 14px | 400 | 1.5 | 0.02em |

---

### Spacing Grid

Base unit: `4px`. All spacing is multiples of 4.

```
4px   — micro (icon gaps, tight labels)
8px   — xs
12px  — sm
16px  — md (default gap)
24px  — lg
32px  — xl
48px  — 2xl
64px  — 3xl
96px  — 4xl
128px — 5xl (section padding)
```

Page max-width: `1280px`. Content column: `1120px`. Gutter: `80px` (desktop), `24px` (mobile).

---

### Motion Presets

```typescript
// easing curves
export const ease = {
  out:     [0.16, 1, 0.3, 1],      // snappy deceleration
  in:      [0.7, 0, 0.84, 0],      // sharp acceleration
  inOut:   [0.87, 0, 0.13, 1],     // smooth s-curve
  spring:  { type: 'spring', stiffness: 300, damping: 30 }, // Framer Motion spring
};

// durations
export const duration = {
  instant: 0.1,
  fast:    0.25,
  base:    0.45,
  slow:    0.75,
  crawl:   1.2,
};

// stagger
export const stagger = {
  tight:  0.04,
  normal: 0.08,
  loose:  0.15,
};

// GSAP defaults
export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.75,
};
```

---

### Border Radius System

```
--radius-sm:   4px   (tags, chips)
--radius-md:   8px   (cards)
--radius-lg:   16px  (modals, large cards)
--radius-full: 9999px (pills, avatar)
```

---

### Tailwind v4 `@theme` Block (globals.css)

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-bg:             #080808;
  --color-bg-secondary:   #0F0F0F;
  --color-bg-elevated:    #161616;
  --color-border:         #1E1E1E;
  --color-border-light:   #2A2A2A;
  --color-text-primary:   #F0EDE8;
  --color-text-secondary: #8A8580;
  --color-text-tertiary:  #4A4742;
  --color-accent:         #E8A020;
  --color-accent-dim:     rgba(232, 160, 32, 0.13);
  --color-accent-hover:   #F0B030;
  --color-success:        #3ECF8E;
  --color-error:          #E5152D;

  /* Fonts */
  --font-display: var(--font-syne), sans-serif;
  --font-sans:    var(--font-dm-sans), sans-serif;
  --font-mono:    var(--font-mono), monospace;

  /* Spacing */
  --spacing-micro: 4px;
  --spacing-xs:    8px;
  --spacing-sm:    12px;
  --spacing-md:    16px;
  --spacing-lg:    24px;
  --spacing-xl:    32px;
  --spacing-2xl:   48px;
  --spacing-3xl:   64px;
  --spacing-4xl:   96px;
  --spacing-5xl:   128px;

  /* Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-full: 9999px;

  /* Max widths */
  --width-page:    1280px;
  --width-content: 1120px;
}

@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: auto; /* Lenis handles this */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    font-family: var(--font-sans);
    overflow-x: hidden;
  }

  ::selection {
    background-color: var(--color-accent);
    color: var(--color-bg);
  }

  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes line-grow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

---

## 3.4 File Structure

```
basel-portfolio/
├── app/
│   ├── layout.tsx                  # Root layout — Lenis, fonts, metadata, custom cursor
│   ├── page.tsx                    # Homepage — Hero, Projects, Experience, Skills, Contact
│   ├── about/
│   │   └── page.tsx                # Extended about page
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx            # Individual project case study page
│   └── globals.css                 # Tailwind v4 @theme config + base resets
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CustomCursor.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── SkillsGrid.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── AnimatedText.tsx        # GSAP character/word reveal
│   │   ├── ScrollReveal.tsx        # IntersectionObserver wrapper
│   │   ├── Counter.tsx             # Animated number counter
│   │   ├── ProjectCard.tsx         # Card with hover interaction
│   │   ├── Button.tsx              # primary / ghost / icon variants
│   │   ├── Tag.tsx                 # Pill/tag for tech stack
│   │   └── SectionLabel.tsx       # Mono label with line decoration
│   └── providers/
│       └── LenisProvider.tsx       # Lenis smooth scroll context
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useMouseParallax.ts
│   └── useReducedMotion.ts
│
├── lib/
│   └── content.ts                  # All site data — projects, experience, skills
│
├── types/
│   └── index.ts                    # All TypeScript interfaces
│
├── public/
│   ├── og-image.png                # 1200×630 OG image
│   ├── robots.txt
│   └── sitemap.xml
│
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 3.5 Content Data (`lib/content.ts`)

```typescript
import { SiteConfig, Project, Experience, SkillCategory } from '@/types';

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
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'Fastify', 'Elysia.js', 'Bun', 'C# .NET'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'CloudFront', 'AWS ECS', 'Docker', 'Vercel', 'Netlify', 'Cloudinary'],
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
    skills: ['GitHub Actions', 'Jenkins', 'Docker', 'Jest', 'Cypress', 'Swagger', 'GitLab'],
  },
];

export const stats = [
  { value: 4, suffix: '+', label: 'Years of Experience' },
  { value: 10, suffix: 'M+', label: 'App Downloads (Nothanks)' },
  { value: 30, suffix: '%', label: 'Load Time Reduction (Bread Fast)' },
  { value: 200, suffix: 'ms', label: 'TTFB Target (AWS CloudFront)' },
];
```

---

## 3.6 Type Definitions (`types/index.ts`)

```typescript
export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  languages: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  openToWork: boolean;
  workTypes: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  hasImage: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: { start: string; end: string };
  type: 'remote' | 'onsite' | 'hybrid';
  location: string;
  highlights: string[];
  tech: string[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type ButtonVariant = 'primary' | 'ghost' | 'icon';

export interface AnimatedTextProps {
  text: string;
  el?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  splitBy?: 'chars' | 'words';
}
```

---

## 3.7 Page-by-Page Instructions

---

### Root Layout (`app/layout.tsx`)

**Purpose:** Initialize Lenis, inject fonts, render global Navbar, Footer, and custom cursor.

**Implementation:**
- Import all three Google fonts (`Syne`, `DM_Sans`, `IBM_Plex_Mono`) from `next/font/google`, assign CSS variables `--font-syne`, `--font-dm-sans`, `--font-mono`, and apply all three `className` values on `<html>`.
- Render `<LenisProvider>` wrapping the entire `<body>` content.
- Render `<CustomCursor>` as a portal — it must be outside the scroll container.
- Render `<Navbar>` above `{children}` and `<Footer>` below.
- Set `suppressHydrationWarning` on `<html>`.

**Metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Basel AlBasha — Full-Stack Engineer',
  description: 'Full-Stack Engineer with 4+ years building scalable, high-performance applications. Open to full-time and freelance opportunities.',
  keywords: ['Full-Stack Engineer', 'Next.js', 'React', 'Node.js', 'AWS', 'TypeScript', 'Basel AlBasha'],
  authors: [{ name: 'Basel AlBasha' }],
  creator: 'Basel AlBasha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baselalb.vercel.app',
    title: 'Basel AlBasha — Full-Stack Engineer',
    description: 'Full-Stack Engineer with 4+ years building scalable systems.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Basel AlBasha Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basel AlBasha — Full-Stack Engineer',
    description: 'Full-Stack Engineer with 4+ years building scalable systems.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};
```

---

### Lenis Provider (`components/providers/LenisProvider.tsx`)

```typescript
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  return <>{children}</>;
}
```

---

### Custom Cursor (`components/layout/CustomCursor.tsx`)

**Purpose:** Replace browser cursor with a custom amber dot + ring that reacts to hover states.

**Elements:**
- `cursor-dot`: 6px × 6px circle, `bg-accent`, `border-radius: full`, `position: fixed`, `pointer-events: none`, `z-index: 9999`
- `cursor-ring`: 32px × 32px circle, `border: 1px solid color-accent`, transparent fill, same positioning
- The dot follows the cursor with no lag (`x/y` set directly on `mousemove`)
- The ring follows with a 0.12s lerp delay (use `requestAnimationFrame` with linear interpolation)
- On hover over `<a>`, `<button>`, `.cursor-hover` elements: ring expands to 48px, `background: accent-dim`, `mix-blend-mode: normal`
- On hover over project cards: ring shows a text label "View →" in 10px IBM Plex Mono centered inside the ring at 56px size

**Motion:** Use GSAP `gsap.to()` for ring transforms. Set `will-change: transform` on both elements.

**Accessibility:** Use `useReducedMotion` — hide cursor entirely if `prefers-reduced-motion` is set, restoring default browser cursor.

---

### Navbar (`components/layout/Navbar.tsx`)

**Purpose:** Fixed top navigation with scroll-aware styling and mobile menu.

**Layout:**
- `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, `z-index: 100`
- Height: `64px` desktop, `56px` mobile
- Padding: `0 80px` desktop, `0 24px` mobile
- Flex row, `justify-between`, `align-center`
- Background: `transparent` until user scrolls 20px, then `bg-bg/90 backdrop-blur-md border-b border-border`
- Transition: `background 0.3s ease, border-color 0.3s ease`

**Left:** Wordmark — `"BA"` in Syne 700, 20px, color-text-primary. Not a logo image, just text.

**Right (desktop):**
- Nav links: `['Work', 'Experience', 'Skills', 'About', 'Contact']`
- Font: IBM Plex Mono 12px, `letter-spacing: 0.08em`, `text-transform: uppercase`
- Color: `color-text-secondary` default, `color-text-primary` on hover
- Hover: underline slides in from left using `::after` pseudo-element with `scaleX` transition, accent color
- "Available for work" pill: 8px green dot + "Open to work" text, `bg-success/10 border border-success/30`, IBM Plex Mono 11px, `border-radius: full`, padding `4px 10px`

**Mobile (below 768px):**
- Hamburger icon (Lucide `Menu`) on right
- Clicking opens a full-screen overlay: `bg-bg`, `z-index: 200`
- Links in center of screen, Syne font, 40px, staggered Framer Motion entrance (`y: 20 → 0, opacity: 0 → 1`, stagger 0.08s)
- Close with `X` icon or clicking outside

**Scroll behavior:** Use `useScrollProgress` to detect > 20px scroll and apply the glass background.

---

### Hero (`components/sections/Hero.tsx`)

**Purpose:** First impression — name, title, availability, CTA, and kinetic background element.

**Layout (desktop):**
- Full viewport height (`min-h-screen`)
- Content vertically centered, left-aligned in a `1120px` container
- Split into two zones: left 60% (content), right 40% (visual element)

**Left zone content (top to bottom):**

1. **Status badge** — IBM Plex Mono 11px, `"// available for work"` in color-accent, with a blinking cursor `|` using `cursor-blink` keyframe. Margin bottom: 24px.

2. **Name** — Syne 800, `clamp(64px, 10vw, 120px)`, `letter-spacing: -0.04em`, color-text-primary. Two lines: `"Basel"` on line 1, `"AlBasha"` on line 2 with 16px left indent to create a cascading step effect.
   - **GSAP animation:** `SplitText` by characters. Each char animates `y: 80px → 0, opacity: 0 → 1` with `stagger: 0.025s`, `duration: 0.8s`, `ease: power3.out`. Trigger: on mount, 200ms delay.

3. **Title** — DM Sans 600, 28px, color-text-secondary. `"Full-Stack Engineer"`. Animates in after name (delay: 1.0s), `fade-up` 0.5s.

4. **Tagline** — DM Sans 400, 18px, color-text-secondary, max-width 480px, line-height 1.6. Animates in at delay: 1.2s.

5. **CTA row** — flex gap-16px, margin-top 48px:
   - Primary button: `"View Work"` — links to `#work`
   - Ghost button: `"Get in Touch"` — links to `#contact`
   - GitHub icon button — links to GitHub URL

**Right zone — code terminal visual:**
- A stylized mock terminal card, `bg-bg-secondary`, `border border-border`, `border-radius: 8px`, 400px wide × 280px tall
- Terminal chrome bar: three colored dots (red/yellow/green), IBM Plex Mono 11px filename `"~/stack.ts"`
- Terminal content: a static TypeScript snippet that lists Basel's core stack, syntax-highlighted with span colors:
  - Keywords in amber, strings in `#3ECF8E`, types in `#60A5FA`, comments in `color-text-tertiary`
- Floating tech badges orbit the terminal: small pills (`bg-bg-elevated border border-border-light`) with tech names, positioned absolutely, subtle `y` oscillation via GSAP `gsap.to()` with `yoyo: true, repeat: -1, duration: 2-3s` at different staggered timings

**Background:**
- A very subtle noise texture overlay (`opacity: 0.03`) using CSS `background-image: url("data:image/svg+xml...")` with SVG noise filter
- In the top-right quadrant of the page: a large (600px × 600px) radial gradient blob, `background: radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 70%)`, `border-radius: full`, `position: absolute`, `z-index: 0`, `pointer-events: none`
- Blob moves very slowly following mouse position via `useMouseParallax` with `factor: 0.02` (barely perceptible, but alive)

**Mobile:**
- Stack vertically. Hide terminal visual. Name font size: `clamp(48px, 12vw, 72px)`. Full width content.

**Scroll indicator:**
- Bottom center: `"Scroll"` in IBM Plex Mono 11px + animated arrow icon (bouncing `y: 0 → 8px → 0` loop), `color-text-tertiary`. Disappears after first 100px scroll.

---

### Selected Work (`components/sections/SelectedWork.tsx`)

**Purpose:** Showcase the 3 featured projects prominently, with 3 additional projects in a secondary grid.

**Section label:** IBM Plex Mono 12px, `"01 / SELECTED WORK"`, color-accent, with an `<hr>` line extending to the right using flex.

**Section heading:** DM Sans 600, `clamp(28px, 4vw, 48px)`, color-text-primary. Text: `"Things I've built."`

**Featured projects (top 3, from `projects.filter(p => p.featured)`):**

Layout: vertical stack, full width. Each featured project card is a large horizontal card:
- Height: `auto`, min-height `280px`
- Background: `bg-bg-secondary`
- Border: `1px solid border` default, `1px solid border-light` on hover
- Border-radius: `8px`
- Padding: `48px`
- Layout: flex row. Left 50%: project info. Right 50%: a `bg-bg-elevated` placeholder with project name in large type (when no screenshot is available).
- On hover: card border becomes `border-accent/30`, left stripe `4px wide bg-accent` slides in from left with `scaleY: 0 → 1` animation, `origin: top`, 0.3s.
- Project number: IBM Plex Mono 12px, `"0${index + 1}"`, color-text-tertiary, positioned top-left in the card.
- Project name: DM Sans 600, 28px, color-text-primary. Hover: color shifts to color-accent, transition 0.2s.
- Role badge: IBM Plex Mono 11px, `"— ${role}"`, color-text-secondary.
- Description: DM Sans 400, 15px, color-text-secondary, max 3 lines with `line-clamp-3`.
- Tech tags: Row of `<Tag>` components — IBM Plex Mono 11px, `bg-bg-elevated border border-border`, `border-radius: 4px`, padding `4px 8px`.
- Links row: If `liveUrl`, show Lucide `ExternalLink` 16px icon + "Live" text. If `githubUrl`, show Lucide `Github` icon + "Code" text. Both in IBM Plex Mono 12px, color-text-secondary, hover color-text-primary.
- "Case Study" link: `"View details →"` in IBM Plex Mono 12px, color-accent, hover underline. Links to `/projects/${slug}`.

**Entrance animation:**
- Each card enters with `ScrollReveal`: `opacity: 0 → 1, y: 40px → 0`, `duration: 0.7s`, `ease: power2.out`. Cards stagger by `0.15s`.

**Other projects grid (remaining 3):**
- Heading: `"More work"` in DM Sans 500, 20px, color-text-secondary
- 3-column grid on desktop, 1-column on mobile
- Smaller cards: `bg-bg-secondary border border-border`, `border-radius: 8px`, padding `32px`
- Content: name (DM Sans 600, 18px), tagline (DM Sans 400, 14px, color-text-secondary), tech tags, links

---

### Experience Timeline (`components/sections/ExperienceTimeline.tsx`)

**Purpose:** Display work history as a vertical timeline with company names, roles, dates, and bullet points.

**Section label:** IBM Plex Mono 12px, `"02 / EXPERIENCE"`.

**Section heading:** `"Where I've worked."` — DM Sans 600, clamp(28px, 4vw, 48px).

**Timeline layout:**
- Left column (280px wide, desktop): Company name + dates
- Vertical line: `2px` solid `border-border`, runs full height of the section, starts at top of first entry
- A moving amber dot (8px circle, `bg-accent`) sits on the line and indicates the active/hovered entry
- Right column (flex-1): Role, location badge, highlights, tech stack

**Each entry:**
- On scroll into view (ScrollReveal), the left column fades in from left (`x: -20 → 0`), right column from right (`x: 20 → 0`), `duration: 0.6s`.
- Company name: DM Sans 600, 20px, color-text-primary.
- Period: IBM Plex Mono 12px, color-text-secondary. Format: `"June 2024 – Sept 2024"`.
- Role: DM Sans 500, 16px, color-text-primary.
- Type badge: IBM Plex Mono 11px — `"remote" | "hybrid" | "onsite"` — with a colored dot: green for remote, amber for hybrid, blue for onsite.
- Highlights: DM Sans 400, 15px, color-text-secondary. Each bullet has a `→` prefix in color-accent.
- Tech row: `<Tag>` components.
- A horizontal rule `border-border` separates each entry.

**Education row** (below experience):
- Same layout but condensed: Gümüşhane University, Computer Software Engineering, `Sept 2021 – June 2025`. Uses graduation cap Lucide icon.

---

### Skills Grid (`components/sections/SkillsGrid.tsx`)

**Purpose:** Display all skill categories in a structured grid — not a tag cloud.

**Section label:** IBM Plex Mono 12px, `"03 / SKILLS"`.

**Section heading:** `"Tools of the trade."` — DM Sans 600.

**Layout:** 3-column grid on desktop (≥1024px), 2-column on tablet, 1-column on mobile. Gap: `24px`.

**Each category card:**
- Background: `bg-bg-secondary`, `border border-border`, `border-radius: 8px`, padding `32px`
- Category label: IBM Plex Mono 12px, `letter-spacing: 0.1em`, color-accent, `text-transform: uppercase`, margin-bottom 16px
- Skill items: each on its own row, DM Sans 400, 15px, color-text-primary
- Each skill has a `4px` left border in `bg-border` that turns `bg-accent` on hover, with `transition: background 0.2s`
- Skill item padding: `8px 0 8px 16px`

**Entrance:** Cards fade up with ScrollReveal, stagger `0.08s` per card.

**Stats row** (above skills or between skills and contact):
- 4 columns on desktop, 2×2 on mobile
- Each stat: number animates with `<Counter>` component on scroll into view
- Number: Syne 700, 48px, color-accent
- Suffix: Syne 700, 32px, color-text-secondary
- Label: IBM Plex Mono 12px, color-text-secondary, max-width 120px

---

### Contact Section (`components/sections/ContactSection.tsx`)

**Purpose:** Minimal contact section with Formspree form and direct contact links.

**Section label:** IBM Plex Mono 12px, `"04 / CONTACT"`.

**Heading:** `"Let's build something."` — Syne 700, clamp(40px, 6vw, 72px), color-text-primary.

**Sub-text:** DM Sans 400, 18px, color-text-secondary: `"I'm open to full-time roles and freelance projects. Drop a message or reach out directly."`

**Layout:** Two columns on desktop. Left: form. Right: direct contact info + links.

**Form (Formspree):**
- `action="https://formspree.io/f/YOUR_FORM_ID"` `method="POST"`
- Three fields: Name, Email, Message (textarea)
- Field style: `bg-bg-secondary border border-border focus:border-accent`, `border-radius: 4px`, padding `16px`, DM Sans 400, 15px, color-text-primary, `outline: none`
- Label: IBM Plex Mono 12px, color-text-secondary, `letter-spacing: 0.06em`, `text-transform: uppercase`, margin-bottom `8px`
- Submit button: primary variant, full width
- On submit success: field area replaces with `"Message sent. I'll be in touch."` in DM Sans 400, color-success

**Right column:**
- Email link: `baselbasha136@gmail.com` — DM Sans 500, 18px, color-accent, hover underline
- LinkedIn and GitHub: icon + label links, IBM Plex Mono 12px
- Location: IBM Plex Mono 12px, `"📍 Trabzon, Turkey"`, color-text-secondary
- Languages: IBM Plex Mono 12px, `"🌐 Arabic / English / Turkish"`, color-text-secondary
- `"Open to relocate"` note in IBM Plex Mono 11px, color-text-tertiary

---

### Project Case Study Page (`app/projects/[slug]/page.tsx`)

**Purpose:** Deep-dive into a single project — context, role, process, and outcome.

**Header:**
- Full-width section, padding-top 120px (clears navbar)
- Section number + project name (Syne 700, 64px)
- Tagline (DM Sans 400, 20px, color-text-secondary)
- Metadata row: Role, Period, Tech — in IBM Plex Mono tags

**Image area:**
- `aspect-ratio: 16/9`, full width, `bg-bg-secondary border border-border`
- When `hasImage: false`, render a styled placeholder: project name in large faded type centered in the frame

**Content:**
- Two-column layout: left 65% prose, right 35% sticky sidebar
- Sidebar: tech stack list, links (live/github), role badge
- Prose: Description paragraph, then "What I built" heading followed by highlights as an animated list (each bullet enters on scroll with `x: -10 → 0, opacity: 0 → 1`)

**Navigation:** At bottom, previous/next project links using `<Button variant="ghost">`.

---

### Footer (`components/layout/Footer.tsx`)

**Purpose:** Minimal footer with copyright, nav links, and social links.

**Layout:**
- `border-top border-border`, padding `40px 80px` desktop, `40px 24px` mobile
- Flex row, `justify-between`, `align-center` on desktop. Stacked on mobile.
- Left: `"Basel AlBasha"` in IBM Plex Mono 12px, color-text-tertiary + `"© 2025"` 
- Center: nav links in IBM Plex Mono 11px, color-text-tertiary
- Right: GitHub + LinkedIn icon buttons

---

### About Page (`app/about/page.tsx`)

**Purpose:** Extended personal story beyond what the homepage conveys.

**Content:**
- Hero text (Syne 700, 56px): `"About Me"`
- Full bio paragraph (DM Sans 400, 18px, 700px max-width, line-height 1.7)
- A `"Stack by year"` timeline — shows how Basel's skills evolved from 2021 to present
- Languages section with IBM Plex Mono pills
- Education card (styled consistently with experience section)
- A final CTA: `"Let's work together →"` linking to `/contact`

---

## 3.8 Custom Hooks

```typescript
// hooks/useScrollProgress.ts
'use client';
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setScrollY(scrollTop);
      setProgress(scrollTop / (scrollHeight - clientHeight));
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return { progress, scrollY };
}
```

```typescript
// hooks/useMouseParallax.ts
'use client';
import { useState, useEffect, useRef } from 'react';

export function useMouseParallax(factor = 0.05) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * factor * 100;
        const y = (e.clientY / window.innerHeight - 0.5) * factor * 100;
        setPosition({ x, y });
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [factor]);

  return position;
}
```

```typescript
// hooks/useReducedMotion.ts
'use client';
import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}
```

---

## 3.9 Key Components

### `AnimatedText.tsx`

```typescript
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedTextProps } from '@/types';

export function AnimatedText({
  text,
  el: El = 'span',
  className,
  delay = 0,
  splitBy = 'chars',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    const el = ref.current;
    const items = splitBy === 'chars'
      ? text.split('')
      : text.split(' ');

    el.innerHTML = items
      .map(c => `<span class="inline-block overflow-hidden"><span class="inline-block">${c === ' ' ? '&nbsp;' : c}</span></span>`)
      .join('');

    const spans = el.querySelectorAll('span > span');
    gsap.fromTo(spans,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.75, ease: 'power3.out', stagger: 0.025, delay }
    );
  }, [text, delay, splitBy, reduced]);

  return <El ref={ref as React.RefObject<never>} className={className}>{text}</El>;
}
```

### `ScrollReveal.tsx`

```typescript
'use client';
import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function ScrollReveal({ children, delay = 0, className, y = 32 }: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? {} : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
```

### `Counter.tsx`

```typescript
'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ value, suffix = '', duration = 2, className }: CounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setDisplay(value); return; }
    let start = 0;
    const step = value / (duration * 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(interval); }
      else setDisplay(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [inView, value, duration, reduced]);

  return <span ref={ref} className={className}>{display}{suffix}</span>;
}
```

### `Button.tsx`

```typescript
import { ReactNode } from 'react';
import { ButtonVariant } from '@/types';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({ variant = 'primary', href, onClick, children, className, external }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-all duration-250 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-bg px-6 py-3 rounded-sm hover:bg-accent-hover',
    ghost: 'border border-border-light text-text-secondary px-6 py-3 rounded-sm hover:border-border-light hover:text-text-primary hover:bg-bg-elevated',
    icon: 'border border-border text-text-secondary p-3 rounded-sm hover:border-border-light hover:text-text-primary hover:bg-bg-elevated',
  };

  const classes = `${base} ${variants[variant]} ${className ?? ''}`;

  if (href) {
    return <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
  }
  return <button onClick={onClick} className={classes}>{children}</button>;
}
```

### `Tag.tsx`

```typescript
interface TagProps { label: string; }

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-block font-mono text-[11px] tracking-wider text-text-secondary bg-bg-elevated border border-border px-2 py-1 rounded-sm">
      {label}
    </span>
  );
}
```

### `SectionLabel.tsx`

```typescript
interface SectionLabelProps { number: string; label: string; }

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-xs text-accent tracking-widest uppercase">
        {number} / {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
```

### `ProjectCard.tsx`

```typescript
'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/types';
import { Tag } from './Tag';
import { Button } from './Button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative bg-bg-secondary border border-border hover:border-border-light rounded-md p-12 group transition-colors duration-300 cursor-hover"
    >
      {/* Amber left stripe on hover */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-accent origin-top rounded-l-md"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      <span className="font-mono text-xs text-text-tertiary mb-4 block">
        0{index + 1}
      </span>

      <h3 className="font-sans font-semibold text-2xl text-text-primary group-hover:text-accent transition-colors duration-200 mb-1">
        {project.name}
      </h3>
      <p className="font-mono text-xs text-text-secondary mb-4">— {project.role}</p>
      <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map(t => <Tag key={t} label={t} />)}
      </div>

      <div className="flex items-center gap-4">
        {project.liveUrl && (
          <Button variant="ghost" href={project.liveUrl} external>
            <ExternalLink size={14} /> Live
          </Button>
        )}
        {project.githubUrl && (
          <Button variant="ghost" href={project.githubUrl} external>
            <Github size={14} /> Code
          </Button>
        )}
        <Button variant="ghost" href={`/projects/${project.slug}`}>
          View details →
        </Button>
      </div>
    </motion.div>
  );
}
```

---

## 3.10 Tailwind v4 Configuration

The complete `globals.css` is defined in section 3.3 above. Ensure it:

1. Starts with `@import "tailwindcss";`
2. Contains the full `@theme {}` block
3. Contains the `@layer base {}` resets
4. Contains all `@keyframes` (`fade-up`, `fade-in`, `line-grow`, `cursor-blink`)
5. Has NO reference to a `tailwind.config.ts` — this file must not exist

---

## 3.11 Performance Requirements

**Lighthouse Targets:**
- Performance: ≥ 95
- Accessibility: ≥ 98
- Best Practices: ≥ 100
- SEO: ≥ 100

**Images:**
- All images via `next/image` with explicit `width` and `height`
- `priority` prop on hero image/visual above the fold
- `loading="lazy"` on all below-fold images (Next.js default)
- Project placeholder images: use CSS-rendered SVG, not raster files

**Fonts:**
- `display: 'swap'` on all `next/font/google` declarations
- Font subsets: `['latin']` only
- Preconnect to Google Fonts happens automatically with `next/font`

**Animations:**
- Add `will-change: transform` to cursor elements and any element with continuous animation
- All GSAP ScrollTrigger instances: kill on component unmount
- All `requestAnimationFrame` loops: cancel on unmount
- Wrap all GSAP calls in `useReducedMotion` guard
- GSAP plugins registered once in a `lib/gsap.ts` singleton:
  ```typescript
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  export { gsap, ScrollTrigger };
  ```

**Bundle:**
- Lenis v2: ~10KB gzipped
- GSAP (core + ScrollTrigger): ~35KB gzipped
- Framer Motion v11: ~50KB gzipped
- Total JS budget: < 200KB gzipped (excluding Next.js runtime)
- Use dynamic imports for heavy below-fold sections if bundle exceeds budget

---

## 3.12 SEO & Metadata

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://baselalb.vercel.app/sitemap.xml
```

**sitemap.xml** (static, in `/public`):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://baselalb.vercel.app/</loc><priority>1.0</priority></url>
  <url><loc>https://baselalb.vercel.app/about</loc><priority>0.8</priority></url>
  <url><loc>https://baselalb.vercel.app/projects/nothanks-app</loc><priority>0.7</priority></url>
  <url><loc>https://baselalb.vercel.app/projects/stephano-group-barcode</loc><priority>0.7</priority></url>
  <url><loc>https://baselalb.vercel.app/projects/gaming-ecommerce</loc><priority>0.6</priority></url>
</urlset>
```

**OG Image:** Create `/public/og-image.png` at 1200×630px. Design: dark background (`#080808`), Basel's name in Syne bold white, title in amber, a subtle grid pattern overlay. Generate programmatically with `@vercel/og` if desired, or use a static image.

**Per-page metadata:** Each project case study page should export its own `generateMetadata` function using the project's `name` and `tagline` fields from `content.ts`.

---

## 3.13 Build Order

Execute file creation in this exact order to avoid circular import errors:

1. `types/index.ts` — all type definitions
2. `lib/content.ts` — all site data
3. `lib/gsap.ts` — GSAP singleton with plugin registration
4. `hooks/useReducedMotion.ts`
5. `hooks/useScrollProgress.ts`
6. `hooks/useMouseParallax.ts`
7. `app/globals.css` — full Tailwind v4 config
8. `components/ui/Tag.tsx`
9. `components/ui/Button.tsx`
10. `components/ui/SectionLabel.tsx`
11. `components/ui/AnimatedText.tsx`
12. `components/ui/ScrollReveal.tsx`
13. `components/ui/Counter.tsx`
14. `components/ui/ProjectCard.tsx`
15. `components/providers/LenisProvider.tsx`
16. `components/layout/CustomCursor.tsx`
17. `components/layout/Navbar.tsx`
18. `components/layout/Footer.tsx`
19. `components/sections/Hero.tsx`
20. `components/sections/SelectedWork.tsx`
21. `components/sections/ExperienceTimeline.tsx`
22. `components/sections/SkillsGrid.tsx`
23. `components/sections/ContactSection.tsx`
24. `app/layout.tsx` — root layout consuming all providers and layout components
25. `app/page.tsx` — homepage composing all sections
26. `app/about/page.tsx`
27. `app/projects/[slug]/page.tsx`
28. `public/robots.txt`
29. `public/sitemap.xml`
30. `next.config.ts` — enable Turbopack, configure image domains

---

## 3.14 What Makes This Portfolio Special

1. **The 10M downloads number.** Most portfolios list technologies. Basel's homepage hero shows four animated counters: `4+` years, `10M+` downloads, `30%` load time reduction, `200ms` TTFB. These aren't decorative — they're proof. The counter animation draws the eye immediately after the hero headline, making impact visceral rather than textual.

2. **Monospace as identity, not code formatting.** IBM Plex Mono is used for ALL UI chrome — nav links, labels, section numbers, tags, metadata — while body prose uses DM Sans. This creates a two-layer typographic system that subconsciously signals: "this person thinks in systems." Most developers use monospace only in code blocks. Basel uses it everywhere that says "engineer."

3. **The terminal visual in the hero.** Instead of a photo placeholder, the hero features a styled mock TypeScript terminal showing Basel's actual stack in syntax-highlighted code. It communicates skills AND aesthetic sensibility simultaneously. The floating tech badges orbiting the terminal with subtle GSAP oscillation make it feel alive without being distracting.

4. **Geography as context, not limitation.** Basel speaks Arabic, English, and Turkish — fluently. The contact section explicitly calls this out alongside `"Open to relocate"`. For international clients (especially North American ones who saw the Stephano Group Canada work), this transforms a potential concern into a differentiator.

5. **The amber left-border reveal on project cards.** When hovering any project card, a `4px` amber stripe slides in via `scaleY` from the top-left edge. It's a micro-interaction borrowed from editorial design (column rules, newspaper borders) that makes every hover feel intentional — not generic. Combined with the subtle 3D tilt via Framer Motion's `useMotionValue`, it rewards careful exploration.

---

## 3.15 Pre-Build Checklist

Before writing a single line of code, confirm the following:

- [ ] **Profile photo:** Does Basel have a photo to include on the About page? If not, design the About hero without one (typographic layout only).
- [ ] **Project screenshots:** All 6 projects currently have `hasImage: false`. When screenshots are available, update `hasImage: true` and add images to `/public/images/projects/[slug].jpg`. Specify `width: 1200, height: 675` for all project images.
- [ ] **Formspree endpoint:** Create a Formspree account at formspree.io and replace `YOUR_FORM_ID` in `ContactSection.tsx` with the actual form ID before deploying.
- [ ] **LinkedIn URL:** The provided URL is `https://www.linkedin.com/feed/` — this is the feed, not a profile URL. Replace with the canonical profile URL (format: `https://www.linkedin.com/in/username`) once confirmed.
- [ ] **Live project URLs:** No live URLs were provided. If any become available, update `liveUrl` in `lib/content.ts`.
- [ ] **GitHub project URLs:** No per-project GitHub URLs were provided. Update `githubUrl` in `lib/content.ts` if public repos exist.
- [ ] **Domain:** Update OG `url`, sitemap URLs, and `robots.txt` `Sitemap` entry once the Vercel domain is known. Default used: `https://baselalb.vercel.app`.
- [ ] **Vercel deployment:** Ensure `NEXT_PUBLIC_SITE_URL` environment variable is set to the production domain in Vercel project settings.

---

*End of Basel AlBasha — Portfolio AI Agent Prompt*
*Generated: 2025 | Stack: Next.js 15 · TypeScript · Tailwind CSS v4 · GSAP 3 · Framer Motion v11 · Lenis v2*

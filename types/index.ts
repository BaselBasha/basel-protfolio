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
  image?: string;
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

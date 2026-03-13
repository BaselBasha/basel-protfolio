import { Metadata } from 'next';
import { siteConfig, skillCategories, education } from '@/lib/content';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Basel AlBasha',
  description: 'Learn more about Basel AlBasha — Full-Stack Engineer with 4+ years of experience.',
};

const stackTimeline = [
  { year: '2021', stack: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'] },
  { year: '2022', stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'MongoDB'] },
  { year: '2023', stack: ['NestJS', 'PostgreSQL', 'Docker', 'AWS', 'Swagger'] },
  { year: '2024', stack: ['GSAP', 'Framer Motion', 'AWS ECS', 'CloudFront', 'CI/CD'] },
  { year: '2025', stack: ['Bun', 'Elysia.js', 'Fastify', 'Serverless', 'C# .NET'] },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        {/* Hero */}
        <ScrollReveal>
          <h1 className="font-display font-bold text-[clamp(40px,6vw,56px)] text-text-primary mb-8 tracking-[-0.03em]">
            About Me
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-sans text-lg text-text-secondary leading-[1.7] max-w-[700px] mb-20">
            {siteConfig.bio}
          </p>
        </ScrollReveal>

        {/* Stack by year */}
        <ScrollReveal delay={0.15}>
          <h2 className="font-sans font-semibold text-[clamp(24px,3vw,36px)] text-text-primary mb-12 tracking-[-0.02em]">
            Stack by year
          </h2>
        </ScrollReveal>

        <div className="space-y-8 mb-20">
          {stackTimeline.map((item, index) => (
            <ScrollReveal key={item.year} delay={index * 0.08}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <span className="font-mono text-sm text-accent tracking-wider font-medium md:w-20 flex-shrink-0">
                  {item.year}
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map(tech => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Languages */}
        <ScrollReveal>
          <h2 className="font-sans font-semibold text-[clamp(24px,3vw,36px)] text-text-primary mb-8 tracking-[-0.02em]">
            Languages
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-20">
            {siteConfig.languages.map(lang => (
              <span
                key={lang}
                className="font-mono text-xs tracking-wider text-text-primary bg-bg-secondary border border-border px-4 py-2 rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-md p-8 mb-20">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={20} className="text-accent" />
              <h2 className="font-sans font-semibold text-xl text-text-primary">Education</h2>
            </div>
            <h3 className="font-sans font-medium text-base text-text-primary mb-1">
              {education.degree}
            </h3>
            <p className="font-sans text-[15px] text-text-secondary mb-1">
              {education.university}
            </p>
            <p className="font-mono text-xs text-text-tertiary tracking-wider">
              {education.period}
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Button variant="primary" href="#contact" className="text-base px-8 py-4">
              Let&apos;s work together →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

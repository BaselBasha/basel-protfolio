'use client';
import { experiences, education } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tag } from '@/components/ui/Tag';
import { GraduationCap } from 'lucide-react';

function TypeBadge({ type }: { type: 'remote' | 'onsite' | 'hybrid' }) {
  const colors = {
    remote: 'bg-success',
    hybrid: 'bg-accent',
    onsite: 'bg-[#60A5FA]',
  };

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-secondary">
      <span className={`w-1.5 h-1.5 rounded-full ${colors[type]}`} />
      {type}
    </span>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-5xl relative">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        <ScrollReveal>
          <SectionLabel number="02" label="EXPERIENCE" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-sans font-semibold text-[clamp(28px,4vw,48px)] text-text-primary mb-20 tracking-[-0.02em]">
            Where I&apos;ve worked.
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[280px] top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-14 pb-14 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
                {/* Left column */}
                <div className="md:w-[280px] flex-shrink-0">
                  <h3 className="font-sans font-semibold text-xl text-text-primary mb-1">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-xs text-text-secondary tracking-wider">
                    {exp.period.start} – {exp.period.end}
                  </p>
                </div>

                {/* Right column */}
                <div className="flex-1 relative">
                  {/* Amber dot on timeline */}
                  <div className="hidden md:block absolute -left-[calc(var(--spacing-lg)+4px+1px)] top-2 w-2 h-2 rounded-full bg-accent z-10" />

                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="font-sans font-medium text-base text-text-primary">
                      {exp.role}
                    </h4>
                    <TypeBadge type={exp.type} />
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-text-secondary leading-relaxed">
                        <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                        <span className="font-sans">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Education */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-12 pt-12 border-t border-border">
              <div className="md:w-[280px] flex-shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={18} className="text-accent" />
                  <h3 className="font-sans font-semibold text-xl text-text-primary">
                    Education
                  </h3>
                </div>
                <p className="font-mono text-xs text-text-secondary tracking-wider">
                  {education.period}
                </p>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-medium text-base text-text-primary mb-1">
                  {education.degree}
                </h4>
                <p className="font-sans text-[15px] text-text-secondary">
                  {education.university}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

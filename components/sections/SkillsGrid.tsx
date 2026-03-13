'use client';
import { skillCategories, stats } from '@/lib/content';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Counter } from '@/components/ui/Counter';

export function SkillsGrid() {
  return (
    <section id="skills" className="py-[var(--spacing-5xl)] relative">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        <ScrollReveal>
          <SectionLabel number="03" label="SKILLS" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-sans font-semibold text-[clamp(28px,4vw,48px)] text-text-primary mb-16 tracking-[-0.02em]">
            Tools of the trade.
          </h2>
        </ScrollReveal>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.08}>
              <div className="text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <Counter
                    value={stat.value}
                    className="font-display font-bold text-[48px] text-accent leading-none"
                  />
                  <span className="font-display font-bold text-[32px] text-text-secondary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="font-mono text-xs text-text-secondary mt-2 max-w-[120px] mx-auto md:mx-0 tracking-wider">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.label} delay={index * 0.08}>
              <div className="bg-bg-secondary border border-border rounded-md p-8 h-full">
                <h3 className="font-mono text-xs tracking-[0.1em] text-accent uppercase mb-4">
                  {category.label}
                </h3>
                <div className="space-y-0">
                  {category.skills.map(skill => (
                    <div
                      key={skill}
                      className="group flex items-center border-l-[4px] border-border hover:border-accent transition-colors duration-200 py-2 pl-4"
                    >
                      <span className="font-sans text-[15px] text-text-primary">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

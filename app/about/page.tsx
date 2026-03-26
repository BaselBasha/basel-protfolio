import { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig, education, experiences } from '@/lib/content';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { GraduationCap, MapPin, Globe, Briefcase, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Basel Basha',
  description: 'Learn more about Basel Basha — Full-Stack Engineer with 4+ years of experience.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-(--width-content) mx-auto px-6 md:px-20">

        {/* Hero — Photo + Intro split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-24">
          {/* Photo */}
          <ScrollReveal className="lg:w-[40%] shrink-0">
            <div className="relative">
              <div className="relative overflow-hidden rounded-md border border-border">
                <Image
                  src="/images/profilee.png"
                  alt="Basel Basha"
                  width={560}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Decorative accent corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-md" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-md" />
            </div>
          </ScrollReveal>

          {/* Intro text */}
          <div className="flex-1">
            <ScrollReveal>
              <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
                About Me
              </span>
              <h1 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-text-primary mb-6 tracking-[-0.03em] leading-none">
                Basel Basha
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-sans text-lg text-text-secondary leading-[1.7] mb-8">
                {siteConfig.bio}
              </p>
            </ScrollReveal>

            {/* Quick info cards */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-bg-secondary border border-border rounded-md px-4 py-3">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase">Location</p>
                    <p className="font-sans text-sm text-text-primary">{siteConfig.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-bg-secondary border border-border rounded-md px-4 py-3">
                  <Globe size={16} className="text-accent shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase">Languages</p>
                    <p className="font-sans text-sm text-text-primary">Arabic · English · Turkish</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-bg-secondary border border-border rounded-md px-4 py-3">
                  <Briefcase size={16} className="text-accent shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase">Availability</p>
                    <p className="font-sans text-sm text-text-primary">Full-time · Freelance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-bg-secondary border border-border rounded-md px-4 py-3">
                  <GraduationCap size={16} className="text-accent shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase">Education</p>
                    <p className="font-sans text-sm text-text-primary">B.Sc. Software Engineering</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="font-mono text-[11px] text-text-tertiary mb-6">
                Open to relocate globally
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Experience summary */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="font-sans font-semibold text-2xl text-text-primary mb-10 tracking-[-0.02em]">
              Career Journey
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.company} delay={index * 0.08}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-bg-secondary border border-border rounded-md p-6 hover:border-border-light transition-colors duration-300">
                    <div className="md:w-48 shrink-0">
                      <p className="font-mono text-xs text-accent tracking-wider">{exp.period.start} – {exp.period.end}</p>
                      <p className="font-mono text-[11px] text-text-tertiary mt-1">{exp.location}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans font-semibold text-lg text-text-primary mb-1">{exp.company}</h3>
                      <p className="font-sans text-sm text-text-secondary mb-3">{exp.role}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map(t => <Tag key={t} label={t} />)}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-md p-8 mb-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-base text-text-primary">{education.degree}</h3>
                  <p className="font-sans text-sm text-text-secondary">{education.university}</p>
                </div>
              </div>
              <p className="font-mono text-xs text-text-tertiary tracking-wider md:ml-auto">{education.period}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="w-full">
          <div className="border-t border-border pt-16 flex flex-col items-center">
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] text-text-primary mb-4 tracking-[-0.03em] text-center">
              Let&apos;s work together
            </h2>
            <p className="font-sans text-text-secondary mb-8 text-center">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <Button variant="primary" href="/#contact">
              Get in Touch <ArrowRight size={14} />
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

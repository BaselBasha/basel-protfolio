'use client';
import { projects } from '@/lib/content';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export function SelectedWork() {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-[var(--spacing-5xl)] relative">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        <ScrollReveal>
          <SectionLabel number="01" label="SELECTED WORK" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-sans font-semibold text-[clamp(28px,4vw,48px)] text-text-primary mb-16 tracking-[-0.02em]">
            Things I&apos;ve built.
          </h2>
        </ScrollReveal>

        {/* Featured projects */}
        <div className="space-y-8 mb-24">
          {featured.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.15} y={40}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* Other projects */}
        <ScrollReveal>
          <h3 className="font-sans font-medium text-xl text-text-secondary mb-8">
            More work
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {other.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.08}>
              <div className="bg-bg-secondary border border-border rounded-md p-8 hover:border-border-light transition-colors duration-300 group h-full flex flex-col">
                <h4 className="font-sans font-semibold text-lg text-text-primary group-hover:text-accent transition-colors duration-200 mb-2">
                  {project.name}
                </h4>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => <Tag key={t} label={t} />)}
                </div>
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <Button variant="ghost" href={project.liveUrl} external className="text-[10px] px-3 py-1.5">
                      <ExternalLink size={12} /> Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" href={project.githubUrl} external className="text-[10px] px-3 py-1.5">
                      <Github size={12} /> Code
                    </Button>
                  )}
                  <Button variant="ghost" href={`/projects/${project.slug}`} className="text-[10px] px-3 py-1.5">
                    Details →
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

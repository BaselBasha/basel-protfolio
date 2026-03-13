import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/content';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.name} — Basel AlBasha`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Basel AlBasha`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
              Project 0{projectIndex + 1}
            </span>
            <h1 className="font-display font-bold text-[clamp(36px,5vw,64px)] text-text-primary mb-4 tracking-[-0.03em] leading-[1]">
              {project.name}
            </h1>
            <p className="font-sans text-xl text-text-secondary mb-8">
              {project.tagline}
            </p>

            {/* Metadata tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-text-secondary tracking-wider bg-bg-secondary border border-border px-3 py-1.5 rounded-sm">
                {project.role}
              </span>
              {project.tech.map(t => <Tag key={t} label={t} />)}
            </div>
          </div>
        </ScrollReveal>

        {/* Image area */}
        <ScrollReveal delay={0.1}>
          <div className="w-full aspect-video bg-bg-secondary border border-border rounded-md mb-16 flex items-center justify-center">
            <span className="font-display text-[clamp(32px,5vw,64px)] text-text-tertiary/20 font-bold text-center px-8">
              {project.name}
            </span>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Prose — left 65% */}
          <div className="lg:w-[65%]">
            <ScrollReveal>
              <p className="font-sans text-base text-text-secondary leading-[1.7] mb-12">
                {project.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-sans font-semibold text-2xl text-text-primary mb-6 tracking-[-0.01em]">
                What I built
              </h2>
            </ScrollReveal>

            <ul className="space-y-4">
              {project.highlights.map((highlight, i) => (
                <ScrollReveal key={i} delay={i * 0.05} y={10}>
                  <li className="flex gap-3 text-[15px] text-text-secondary leading-relaxed">
                    <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                    <span className="font-sans">{highlight}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* Sidebar — right 35% */}
          <div className="lg:w-[35%]">
            <div className="lg:sticky lg:top-24 space-y-8">
              <ScrollReveal>
                <div className="bg-bg-secondary border border-border rounded-md p-6">
                  <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                    Role
                  </h3>
                  <p className="font-sans text-[15px] text-text-primary">
                    {project.role}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="bg-bg-secondary border border-border rounded-md p-6">
                  <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </ScrollReveal>

              {(project.liveUrl || project.githubUrl) && (
                <ScrollReveal delay={0.1}>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <Button variant="ghost" href={project.liveUrl} external className="w-full justify-center">
                        <ExternalLink size={14} /> View Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="ghost" href={project.githubUrl} external className="w-full justify-center">
                        <Github size={14} /> View Code
                      </Button>
                    )}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-24 pt-12 border-t border-border">
          {prevProject ? (
            <Button variant="ghost" href={`/projects/${prevProject.slug}`}>
              <ArrowLeft size={14} /> {prevProject.name}
            </Button>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Button variant="ghost" href={`/projects/${nextProject.slug}`}>
              {nextProject.name} <ArrowRight size={14} />
            </Button>
          ) : (
            <Button variant="ghost" href="/#work">
              All Projects <ArrowRight size={14} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

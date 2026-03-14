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
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
      className="relative bg-bg-secondary border border-border hover:border-border-light rounded-md p-8 md:p-12 group transition-colors duration-300 cursor-hover"
    >
      {/* Amber left stripe on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-accent origin-top rounded-l-md scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: project info */}
        <div className="flex-1">
          <span className="font-mono text-xs text-text-tertiary mb-4 block">
            0{index + 1}
          </span>

          <h3 className="font-sans font-semibold text-2xl text-text-primary group-hover:text-accent transition-colors duration-200 mb-1">
            {project.name}
          </h3>
          <p className="font-mono text-xs text-text-secondary mb-4">— {project.role}</p>
          <p className="font-sans text-[15px] text-text-secondary leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => <Tag key={t} label={t} />)}
          </div>

          <div className="flex items-center gap-4 flex-wrap">
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
        </div>

        {/* Right: project visual */}
        <div className="hidden md:flex w-[45%] min-h-[200px] bg-bg-elevated border border-border rounded-md items-center justify-center overflow-hidden">
          {project.hasImage && project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-display text-3xl text-text-tertiary/30 font-bold text-center px-4">
              {project.name}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

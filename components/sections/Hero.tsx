'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { gsap } from '@/lib/gsap';
import { siteConfig } from '@/lib/content';

const orbitingTech = [
  { label: 'Next.js', angle: 0 },
  { label: 'TypeScript', angle: 60 },
  { label: 'AWS', angle: 120 },
  { label: 'Node.js', angle: 180 },
  { label: 'Docker', angle: 240 },
  { label: 'React', angle: 300 },
];

export function Hero() {
  const mousePos = useMouseParallax(0.02);
  const { scrollY } = useScrollProgress();
  const [showScroll, setShowScroll] = useState(true);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowScroll(scrollY < 100);
  }, [scrollY]);

  // GSAP name reveal animation
  useEffect(() => {
    if (!nameRef.current) return;
    const lines = nameRef.current.querySelectorAll('.hero-name-line');
    gsap.fromTo(
      lines,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Ambient gradient blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          top: '10%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 70%)',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      <div className="relative z-10 w-full max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left zone */}
          <div className="flex-1 w-full">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="font-mono text-[11px] text-accent tracking-wider mb-6"
            >
              {'// available for work'}
              <span className="inline-block w-px h-3.5 bg-accent ml-1 animate-[cursor-blink_1s_ease-in-out_infinite]" />
            </motion.div>

            {/* Name — each line in an overflow-hidden container */}
            <div ref={nameRef} className="mb-6">
              <div className="overflow-hidden">
                <h1 className="hero-name-line font-display font-[800] text-[clamp(56px,10vw,120px)] leading-[0.95] tracking-[-0.04em] text-text-primary whitespace-nowrap">
                  Basel
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-name-line font-display font-[800] text-[clamp(56px,10vw,120px)] leading-[0.95] tracking-[-0.04em] text-text-primary whitespace-nowrap">
                  Basha
                </h1>
              </div>
            </div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-sans font-semibold text-[clamp(20px,3vw,28px)] text-text-secondary mb-4"
            >
              {siteConfig.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="font-sans text-base md:text-lg text-text-secondary max-w-[480px] leading-relaxed mb-10"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Button variant="primary" href="#work">View Work</Button>
              <Button variant="ghost" href="#contact">Get in Touch</Button>
              <Button variant="icon" href={siteConfig.github} external>
                <Github size={18} />
              </Button>
            </motion.div>
          </div>

          {/* Right zone — Orbital visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center relative w-[420px] h-[420px] flex-shrink-0"
          >
            {/* Outer ring */}
            <motion.div
              className="absolute w-[380px] h-[380px] rounded-full border border-border-light/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute w-[260px] h-[260px] rounded-full border border-border/60"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute w-[140px] h-[140px] rounded-full border border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center glow */}
            <div className="absolute w-20 h-20 rounded-full bg-accent/5 blur-xl" />
            <div className="absolute w-3 h-3 rounded-full bg-accent/60" />

            {/* Orbiting tech badges on the outer ring */}
            <motion.div
              className="absolute w-[380px] h-[380px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              {orbitingTech.map((tech) => (
                <motion.div
                  key={tech.label}
                  className="absolute"
                  style={{
                    left: `${50 + 47 * Math.cos((tech.angle * Math.PI) / 180)}%`,
                    top: `${50 + 47 * Math.sin((tech.angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Counter-rotate so text stays readable */}
                  <motion.span
                    className="block bg-bg-secondary/90 backdrop-blur-sm border border-border-light px-3 py-1.5 rounded-full font-mono text-[11px] text-text-secondary whitespace-nowrap"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  >
                    {tech.label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating accent dots */}
            {[
              { size: 4, x: '20%', y: '15%', delay: 0 },
              { size: 3, x: '85%', y: '25%', delay: 0.5 },
              { size: 5, x: '75%', y: '80%', delay: 1 },
              { size: 3, x: '10%', y: '70%', delay: 1.5 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-accent/30"
                style={{ width: dot.size, height: dot.size, left: dot.x, top: dot.y }}
                animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[11px] text-text-tertiary tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

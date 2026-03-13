// Easing curves
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  in: [0.7, 0, 0.84, 0] as [number, number, number, number],
  inOut: [0.87, 0, 0.13, 1] as [number, number, number, number],
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
};

// Durations
export const duration = {
  instant: 0.1,
  fast: 0.25,
  base: 0.45,
  slow: 0.75,
  crawl: 1.2,
};

// Stagger
export const stagger = {
  tight: 0.04,
  normal: 0.08,
  loose: 0.15,
};

// GSAP defaults
export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.75,
};

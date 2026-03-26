'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle hash on page load (e.g. navigating from /about to /#work)
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      // Small delay to let the DOM settle after navigation
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          lenis.scrollTo(el, { offset: -80 });
        }
      }, 100);
    }

    return () => {
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const reduced = useReducedMotion();
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;

    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.style.cursor = 'none';

    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-hover') || target.closest('[data-project-card]')) {
        setIsProjectHover(!!target.closest('[data-project-card]'));
        setIsHovering(true);
      } else if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setIsProjectHover(false);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.cursor-hover') || target.closest('[data-project-card]')) {
        setIsHovering(false);
        setIsProjectHover(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    // Ring follows with lerp
    let raf: number;
    const lerp = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12;
      if (ringRef.current) {
        const size = isHovering ? (isProjectHover ? 56 : 48) : 32;
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - size / 2}px, ${ringPosRef.current.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(raf);
    };
  }, [reduced, isHovering, isProjectHover]);

  useEffect(() => {
    if (!ringRef.current || reduced) return;
    if (isHovering) {
      gsap.to(ringRef.current, {
        width: isProjectHover ? 56 : 48,
        height: isProjectHover ? 56 : 48,
        background: 'rgba(232, 160, 32, 0.13)',
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(ringRef.current, {
        width: 32,
        height: 32,
        background: 'transparent',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isHovering, isProjectHover, reduced]);

  if (reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{ willChange: 'transform' }}
      >
        {isProjectHover && (
          <span className="font-mono text-[10px] text-accent">View →</span>
        )}
      </div>
    </>
  );
}

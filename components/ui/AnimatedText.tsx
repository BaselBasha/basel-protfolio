'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedTextProps } from '@/types';

export function AnimatedText({
  text,
  el: El = 'span',
  className,
  delay = 0,
  splitBy = 'chars',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    const el = ref.current;
    const items = splitBy === 'chars'
      ? text.split('')
      : text.split(' ');

    el.innerHTML = items
      .map(c => `<span class="inline-block overflow-hidden"><span class="inline-block">${c === ' ' ? '&nbsp;' : c}</span></span>`)
      .join('');

    const spans = el.querySelectorAll('span > span');
    gsap.fromTo(spans,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.75, ease: 'power3.out', stagger: 0.025, delay }
    );
  }, [text, delay, splitBy, reduced]);

  return <El ref={ref as React.RefObject<never>} className={className}>{text}</El>;
}

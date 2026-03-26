'use client';
import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ButtonVariant } from '@/types';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({ variant = 'primary', href, onClick, children, className, external }: ButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const base = 'inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-all duration-250 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-bg px-6 py-3 rounded-sm hover:bg-accent-hover',
    ghost: 'border border-border-light text-text-secondary px-6 py-3 rounded-sm hover:border-border-light hover:text-text-primary hover:bg-bg-elevated',
    icon: 'border border-border text-text-secondary p-3 rounded-sm hover:border-border-light hover:text-text-primary hover:bg-bg-elevated',
  };

  const classes = `${base} ${variants[variant]} ${className ?? ''}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);

      if (pathname !== '/') {
        router.push(`/#${id}`);
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -80 });
        } else {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }
  };

  if (href) {
    return <a href={href} onClick={handleClick} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
  }
  return <button onClick={onClick} className={classes}>{children}</button>;
}

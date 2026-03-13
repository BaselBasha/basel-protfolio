import { ReactNode } from 'react';
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
  const base = 'inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-all duration-250 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-bg px-6 py-3 rounded-sm hover:bg-accent-hover',
    ghost: 'border border-border-light text-text-secondary px-6 py-3 rounded-sm hover:border-border-light hover:text-text-primary hover:bg-bg-elevated',
    icon: 'border border-border text-text-secondary p-3 rounded-sm hover:border-border-light hover:text-text-primary hover:bg-bg-elevated',
  };

  const classes = `${base} ${variants[variant]} ${className ?? ''}`;

  if (href) {
    return <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
  }
  return <button onClick={onClick} className={classes}>{children}</button>;
}

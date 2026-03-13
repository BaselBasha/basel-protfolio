import { Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/lib/content';

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[var(--width-page)] mx-auto px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="font-mono text-xs text-text-tertiary">
            {siteConfig.name} © {new Date().getFullYear()}
          </div>

          {/* Center */}
          <div className="flex items-center gap-6">
            {footerLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] text-text-tertiary hover:text-text-primary transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors p-2 border border-border rounded-sm hover:border-border-light hover:bg-bg-elevated"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors p-2 border border-border rounded-sm hover:border-border-light hover:bg-bg-elevated"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

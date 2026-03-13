'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScrollProgress();
  const scrolled = scrollY > 20;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-16 px-6 md:px-20 max-w-[var(--width-page)] mx-auto">
          {/* Wordmark */}
          <a href="/" className="font-display text-xl font-bold text-text-primary tracking-tight">
            BA
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-mono text-xs tracking-[0.08em] uppercase text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}

            {/* Available pill */}
            <div className="flex items-center gap-2 bg-success/10 border border-success/30 rounded-full px-2.5 py-1">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-[11px] text-success tracking-wider">Open to work</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg z-200 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-6 text-text-primary p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-4xl font-bold text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-2 bg-success/10 border border-success/30 rounded-full px-3 py-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-[11px] text-success tracking-wider">Open to work</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from '@/components/providers/ThemeProvider';

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
  const { theme, toggleTheme } = useTheme();
  const scrolled = scrollY > 20;

  return (
    <>
      <nav className="fixed w-full z-100 top-0 left-0 px-4 pt-4">
        <div
          className={`mx-auto max-w-[var(--width-page)] rounded-full px-5 md:px-8 transition-all duration-500 ${
            scrolled
              ? 'bg-bg/60 backdrop-blur-xl border border-border-light/40 shadow-lg shadow-black/20'
              : 'bg-bg/30 backdrop-blur-md border border-border/30'
          }`}
        >
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Wordmark */}
            <a
              href="/"
              className="font-display text-xl font-bold text-text-primary tracking-tight"
            >
              BA
            </a>

            {/* Desktop nav — centered */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-3.5 py-1.5 rounded-full font-mono text-xs tracking-[0.08em] uppercase text-text-secondary hover:text-text-primary hover:bg-text-primary/5 transition-all duration-200 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right side — Theme toggle + Available pill */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-text-primary/5 transition-all duration-200"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.span>
                </AnimatePresence>
              </button>
              <div className="flex items-center gap-2 bg-success/10 border border-success/30 rounded-full px-2.5 py-1">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-[11px] text-success tracking-wider">
                  Open to work
                </span>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-text-primary p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
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
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-4xl font-bold text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Theme toggle — mobile */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              onClick={toggleTheme}
              className="mt-8 p-3 rounded-full border border-border-light text-text-secondary hover:text-text-primary transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex items-center gap-2 bg-success/10 border border-success/30 rounded-full px-3 py-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-[11px] text-success tracking-wider">
                Open to work
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

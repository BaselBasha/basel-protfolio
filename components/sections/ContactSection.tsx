'use client';
import { useState, FormEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/content';
import { Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      // Silently fail — user can retry
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[var(--spacing-5xl)] relative">
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-20">
        <ScrollReveal>
          <SectionLabel number="04" label="CONTACT" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[clamp(40px,6vw,72px)] text-text-primary mb-4 tracking-[-0.03em] leading-[1]">
            Let&apos;s build something.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-sans text-lg text-text-secondary mb-16 max-w-[600px]">
            I&apos;m open to full-time roles and freelance projects. Drop a message or reach out directly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal delay={0.2}>
            {submitted ? (
              <div className="flex items-center justify-center min-h-[300px]">
                <p className="font-sans text-success text-lg">
                  Message sent. I&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs text-text-secondary tracking-[0.06em] uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-bg-secondary border border-border focus:border-accent rounded-sm px-4 py-4 font-sans text-[15px] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-tertiary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-secondary tracking-[0.06em] uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-bg-secondary border border-border focus:border-accent rounded-sm px-4 py-4 font-sans text-[15px] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-tertiary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-secondary tracking-[0.06em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-bg-secondary border border-border focus:border-accent rounded-sm px-4 py-4 font-sans text-[15px] text-text-primary outline-none transition-colors duration-200 resize-none placeholder:text-text-tertiary"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button variant="primary" className="w-full justify-center">
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-8">
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 font-sans font-medium text-lg text-accent hover:underline transition-colors"
                >
                  <Mail size={18} />
                  {siteConfig.email}
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wider"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wider"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <p className="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-wider">
                  <MapPin size={14} />
                  {siteConfig.location}
                </p>
                <p className="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-wider">
                  <Globe size={14} />
                  {siteConfig.languages.join(' / ')}
                </p>
                <p className="font-mono text-[11px] text-text-tertiary mt-4">
                  Open to relocate
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

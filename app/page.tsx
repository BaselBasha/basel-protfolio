import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { SkillsGrid } from '@/components/sections/SkillsGrid';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ExperienceTimeline />
      <SkillsGrid />
      <ContactSection />
    </>
  );
}

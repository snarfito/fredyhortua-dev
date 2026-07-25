// app/page.tsx
import { LanguageProvider } from '@/components/LanguageProvider';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { WhyWorkWithMe } from '@/components/WhyWorkWithMe';
import { HowIWork } from '@/components/HowIWork';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <WhyWorkWithMe />
        <HowIWork />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

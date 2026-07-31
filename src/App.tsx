import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LeetCodeCard } from './components/LeetCodeCard';
import { CommandPalette } from './components/CommandPalette';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          onOpenContact={() => setContactOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />
        <Experience />
        <Projects />
        <Skills />
        <LeetCodeCard />
      </main>

      {/* Footer */}
      <Footer
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenContact={() => setContactOpen(true)}
        onCopyEmail={handleCopyEmail}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        onCopyEmail={handleCopyEmail}
        copied={emailCopied}
      />
    </div>
  );
}

export default App;

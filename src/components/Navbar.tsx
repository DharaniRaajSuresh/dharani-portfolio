import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 glass-panel border-b border-white/10 shadow-2xl shadow-cyan-500/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090A0F] rounded-[10px] flex items-center justify-center font-bold text-lg text-gradient-cyan">
              DR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Dharani Raaj
            </span>
            <span className="text-[10px] text-cyan-400/80 uppercase tracking-widest font-mono">
              VIT Chennai '28
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">
            Skills
          </a>

          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Available Fall '26 / Spring '27</span>
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Command Palette trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs font-mono transition-all"
            title="Open Command Palette (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>⌘K</span>
          </button>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenContact}
            className="btn-primary text-xs py-2 px-4 shadow-lg shadow-cyan-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 glass-panel border-t border-white/10 mt-3 flex flex-col gap-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 text-base font-medium"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 text-base font-medium"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-cyan-400 text-base font-medium"
          >
            Skills
          </a>
          <div className="h-px bg-white/10 my-1"></div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn-primary w-full justify-center"
          >
            <Sparkles className="w-4 h-4" />
            <span>Contact Dharani</span>
          </button>
        </div>
      )}
    </header>
  );
};

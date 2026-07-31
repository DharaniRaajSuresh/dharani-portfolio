import React from 'react';
import { Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCommandPalette: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCommandPalette, onOpenContact }) => {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#06070b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-bold text-lg text-white">
              {PERSONAL_INFO.name} <span className="text-cyan-400 font-mono text-xs">(@DharaniRaajSuresh)</span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              {PERSONAL_INFO.title} • VIT Chennai '28 • HCLTech Software Engineer Intern
            </p>
            <div className="text-slate-500 text-[11px] font-mono mt-2">
              © {new Date().getFullYear()} Dharani Raaj Suresh. All rights reserved.
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 text-xs font-mono transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>⌘K Terminal</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 text-xs transition-colors"
            >
              <span>Contact</span>
            </button>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tech Tagline */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            Built with <span className="text-slate-300">React 19, TypeScript & Vite</span> • Custom Glassmorphism CSS
          </div>
          <div className="flex items-center gap-1">
            <span>Optimized for</span>
            <span className="text-cyan-400 font-semibold">Vercel & GitHub Pages</span>
            <span>Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

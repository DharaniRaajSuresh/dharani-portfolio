import React from 'react';
import { X, Mail, Phone, MapPin, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onCopyEmail,
  copied,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERNSHIP AVAILABILITY</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Let's Build Something <span className="text-gradient-cyan">Extraordinary</span>
        </h3>
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          I am actively seeking Software Engineering, Full-Stack, and Machine Learning Internship opportunities for Fall 2026 / Spring 2027.
        </p>

        {/* Contact Info Cards */}
        <div className="space-y-3 mb-6">
          {/* Email Row with Copy button */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Email Address</div>
                <div className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
              </div>
            </div>
            <button
              onClick={onCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Row */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Phone Number</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
            </div>
          </div>

          {/* Location Row */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Current Location</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
            </div>
          </div>
        </div>

        {/* Social Links Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Internship Opportunity for Dharani Raaj Suresh`}
            className="btn-primary text-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

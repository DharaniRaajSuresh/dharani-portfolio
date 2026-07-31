import React, { useState, useEffect } from 'react';
import { X, Search, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  onCopyEmail: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  onCopyEmail,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Parent handles open via shortcut if needed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'contact',
      label: 'Open Contact / Hire Drawer',
      desc: 'Send an email or message Dharani',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        onOpenContact();
      },
    },
    {
      id: 'copy-email',
      label: 'Copy Email Address to Clipboard',
      desc: PERSONAL_INFO.email,
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onCopyEmail();
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile (@DharaniRaajSuresh)',
      desc: 'View 10+ public repositories & contributions',
      icon: <GithubIcon className="w-4 h-4 text-white" />,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.socials.github, '_blank');
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      desc: 'Connect with Dharani Raaj Suresh',
      icon: <LinkedinIcon className="w-4 h-4 text-blue-400" />,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.socials.linkedin, '_blank');
      },
    },
    {
      id: 'leetcode',
      label: 'Open LeetCode Handle (@DRJ18)',
      desc: 'View algorithmic problem solving stats',
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.socials.leetcode, '_blank');
      },
    },
  ];

  const filteredCommands = query
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.desc.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel max-w-xl w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl animate-in fade-in duration-200">
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#0c0f17]">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search actions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1 bg-[#090A0F]">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm font-mono">
              No commands found matching "{query}"
            </div>
          ) : (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={cmd.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 border border-white/10 group-hover:border-cyan-500/30">
                    {cmd.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {cmd.label}
                    </div>
                    <div className="text-xs text-slate-400">{cmd.desc}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5">
                  Execute
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-[#0c0f17] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Press ESC to exit</span>
          <span className="text-cyan-400">⌘K / Ctrl+K</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-gradient-cyan">Competency Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of languages, enterprise frameworks, ML libraries, and cloud tools mastered across internships and projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all glow-border"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{group.category}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all flex flex-col justify-between group/item"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-slate-200 group-hover/item:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {skill.badge}
                      </span>
                    </div>

                    {/* Subtle Proficiency Bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Trophy, Code, ExternalLink, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const LeetCodeCard: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all glow-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Box: Title & LeetCode Handle */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
                <Trophy className="w-3.5 h-3.5" />
                <span>ALGORITHMIC PROBLEM SOLVING</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">
                Competitive Programming & <span className="text-gradient-gold">LeetCode</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Active competitive programmer with a focus on Data Structures & Algorithms, dynamic programming, and graph algorithms. Recognized handle <span className="text-amber-400 font-mono font-bold">{PERSONAL_INFO.socials.leetcodeHandle}</span> on LeetCode.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-amber-500/20"
                >
                  <Code className="w-4 h-4" />
                  <span>View LeetCode Profile (@{PERSONAL_INFO.socials.leetcodeHandle})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Verified Problem Solver</span>
                </div>
              </div>
            </div>

            {/* Right Box: Coursework & Extracurriculars */}
            <div className="lg:col-span-5 w-full space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Core Computer Science Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Operating Systems',
                    'Database Management Systems (DBMS)',
                    'Computer Networks',
                    'Object-Oriented Design',
                  ].map((course, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
                  <Award className="w-4 h-4" />
                  <span>Extracurricular & Technical Communities</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white">OSPC — VIT Chennai:</strong> Active Member contributing to open-source software and algorithmic mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

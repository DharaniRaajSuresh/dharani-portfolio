import React from 'react';
import { Award, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const LeetCodeCard: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LeetCode & DSA Problem Solving Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between glow-border">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>ALGORITHMS & DSA</span>
                </div>
                <span className="text-xs font-mono text-slate-400">@DRJ18</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Competitive Programming & <span className="text-gradient-gold">LeetCode</span>
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Demonstrated algorithmic problem solving across dynamic programming, graph theory, trees, and system design optimizations.
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <div>
                  <div className="text-2xl font-bold text-amber-400">100+</div>
                  <div className="text-[11px] text-slate-400">Problems Solved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">VIT Chennai</div>
                  <div className="text-[11px] text-slate-400">CS 2028</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">OSPC</div>
                  <div className="text-[11px] text-slate-400">Active Member</div>
                </div>
              </div>

              {/* Coursework chips */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-mono text-slate-400 mr-2">Coursework:</span>
                <span className="tag-chip-gold">Data Structures & Algorithms</span>
                <span className="tag-chip-gold">Operating Systems</span>
                <span className="tag-chip-gold">DBMS</span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs w-full justify-center"
            >
              <span>View LeetCode Profile (@DRJ18)</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Oracle Certified Generative AI Professional Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between glow-border">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>PROFESSIONAL CERTIFICATION</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">VERIFIED 2026</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Oracle Cloud Infrastructure 2025 <span className="text-gradient-cyan">Certified GenAI Pro</span>
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Official Oracle Professional certification (Exam 1Z0-1127-25) in Large Language Models, Retrieval-Augmented Generation (RAG), LangChain, and enterprise GenAI architectures.
              </p>

              {/* Certification Details Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Certification ID</span>
                  <span className="text-xs text-white font-semibold">1Z0-1127-25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Issuing Authority</span>
                  <span className="text-xs text-cyan-400 font-semibold">Oracle Education</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Status</span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Active / Validated
                  </span>
                </div>
              </div>

              {/* Key Competencies chips */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="tag-chip">LLM Tuning</span>
                <span className="tag-chip">RAG Pipelines</span>
                <span className="tag-chip">Vector Databases</span>
                <span className="tag-chip">OCI AI Services</span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs w-full justify-center"
            >
              <span>Verify Oracle Credential Badge</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

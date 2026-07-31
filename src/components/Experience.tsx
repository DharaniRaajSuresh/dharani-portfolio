import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Cpu, Zap, Sparkles, Award } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { HclTechLogo } from './icons/HclTechLogo';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'arch' | 'ml' | 'frontend'>('all');

  const exp = WORK_EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software Engineering <span className="text-gradient-cyan">Internship</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Delivering high-impact healthcare AI systems, microservice architectures, and machine learning optimizations in production.
          </p>
        </div>

        {/* Featured HCLTech Showstopper Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/20">
          <div className="bg-[#0b0e17] rounded-[22px] p-6 sm:p-8 md:p-10">
            {/* Top Bar: Real HCLTech Logo & Featured Internship Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <HclTechLogo className="h-10 sm:h-12" />
                <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-bold animate-pulse-glow self-start sm:self-auto">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>FLAGSHIP INDUSTRY INTERNSHIP</span>
                </div>
                <a
                  href={exp.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs self-start sm:self-auto"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View HospitalIQ Codebase</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Banner inside HCLTech Card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-gradient-cyan">36 APIs</span>
                <span className="text-xs text-slate-400">Spring Boot 3.4 & FastAPI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white">8 ML Models</span>
                <span className="text-xs text-slate-400">1.4M Patient Records</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">9.8% MAPE</span>
                <span className="text-xs text-slate-400">Reduced from 414% Legacy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-purple-400">100% Pass</span>
                <span className="text-xs text-slate-400">92 CI/CD Automated Tests</span>
              </div>
            </div>

            {/* Filter Tabs for Highlights */}
            <div className="flex flex-wrap items-center gap-2 my-6">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                All Highlights ({exp.highlights.length})
              </button>
              <button
                onClick={() => setActiveTab('arch')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'arch'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Dual-Backend & Microservices</span>
              </button>
              <button
                onClick={() => setActiveTab('ml')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'ml'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>414% → 9.8% ML MAPE</span>
              </button>
              <button
                onClick={() => setActiveTab('frontend')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'frontend'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>React 19 / Vite Optimization</span>
              </button>
            </div>

            {/* Highlight Bullets */}
            <div className="space-y-4">
              {exp.highlights
                .filter((item) => {
                  if (activeTab === 'arch') return item.includes('Spring Boot') || item.includes('JPA');
                  if (activeTab === 'ml') return item.includes('MAPE') || item.includes('XGBoost');
                  if (activeTab === 'frontend') return item.includes('React') || item.includes('Vite');
                  return true;
                })
                .map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">{highlight}</p>
                  </div>
                ))}
            </div>

            {/* Architecture Badges Footnote */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 mr-2 uppercase">HCLTech Stack:</span>
                {[
                  'Spring Boot 3.4',
                  'FastAPI',
                  'React 19',
                  'TypeScript',
                  'XGBoost',
                  'Docker Compose',
                  'PostgreSQL',
                  'GitHub Actions CI/CD',
                  'JPA / Hibernate',
                ].map((tech, i) => (
                  <span key={i} className="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Verified End-to-End Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

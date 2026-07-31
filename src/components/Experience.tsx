import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Cpu, Zap } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
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

        {/* Experience Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all glow-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                  {exp.company}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            <a
              href={exp.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs self-start md:self-auto"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View HospitalIQ Repo</span>
            </a>
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
              <span>42× ML MAPE Reduction</span>
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
                if (activeTab === 'ml') return item.includes('MAPE') || item.includes('Ridge');
                if (activeTab === 'frontend') return item.includes('React') || item.includes('Vite');
                return true;
              })
              .map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{highlight}</p>
                </div>
              ))}
          </div>

          {/* Architecture Badges Footnote */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Core Tech Used:</span>
            {[
              'Spring Boot 3.4',
              'FastAPI',
              'React 19',
              'TypeScript',
              'XGBoost',
              'Docker Compose',
              'PostgreSQL',
              'GitHub Actions',
              'JPA / Hibernate',
            ].map((tech, i) => (
              <span key={i} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

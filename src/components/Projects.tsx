import React, { useState } from 'react';
import { Code2, ExternalLink, Layers, X, Cpu, Database, Layout, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { PROJECTS, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', 'Full-Stack', '3D & Systems'];

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Engineering <span className="text-gradient-cyan">Portfolio</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              From enterprise dual-backend AI platforms to sub-second multilingual fraud detection and 3D urban digital twins.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'glass-card text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group glow-border"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {project.category} • {project.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="Live Demo / Repository"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-cyan-300/90 font-medium mb-4">{project.tagline}</p>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech Stack & Architecture Trigger */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tag-chip">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tag-chip text-slate-400 border-slate-700">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold transition-all"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  System Architecture Deep-Dive
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                {selectedProject.title}
              </h3>

              {/* Architecture Grid */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1">
                    <Layout className="w-4 h-4" />
                    <span>Frontend Layer</span>
                  </div>
                  <p className="text-slate-300 text-sm">{selectedProject.architecture.frontend}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Backend Microservice Layer</span>
                  </div>
                  <p className="text-slate-300 text-sm">{selectedProject.architecture.backend}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-1">
                    <Database className="w-4 h-4" />
                    <span>Database & Storage</span>
                  </div>
                  <p className="text-slate-300 text-sm">{selectedProject.architecture.database}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>AI / ML Engine & Core Systems</span>
                  </div>
                  <p className="text-slate-300 text-sm">{selectedProject.architecture.aiOrCore}</p>
                </div>
              </div>

              {/* Close / Action Button */}
              <div className="mt-8 flex justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repo</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

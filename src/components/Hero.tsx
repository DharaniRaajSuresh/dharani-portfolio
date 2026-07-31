import React, { useState } from 'react';
import { Sparkles, ArrowRight, Code, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { PERSONAL_INFO, KPI_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenCommandPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenCommandPalette }) => {
  const [activeTab, setActiveTab] = useState<'backend' | 'ml' | 'frontend'>('backend');

  const codeSnippets = {
    backend: `// PatientMicroservice.java (Spring Boot 3.4)
@RestController
@RequestMapping("/api/v1/patients")
public class PatientController {
    @Autowired
    private PatientRiskService riskService;

    @GetMapping("/{id}/risk-score")
    public ResponseEntity<RiskAssessment> getPatientRisk(@PathVariable String id) {
        // Enriched via FastAPI ML inference engine (9.8% MAPE)
        RiskAssessment risk = riskService.calculateEnsembleRisk(id);
        return ResponseEntity.ok(risk);
    }
}`,
    ml: `# scenario_predictor.py (FastAPI + XGBoost)
import xgboost as xgb
from fastapi import APIRouter

router = APIRouter(prefix="/predict/pandemic")

@router.post("/scenario")
async def forecast_pandemic_trajectory(features: ScenarioInput):
    # Reduced MAPE 42x from 414% legacy Ridge to 9.8% tuned XGBoost
    model = xgb.Booster()
    model.load_model("ml_models/scenario_v1.json")
    prediction = model.predict(features.to_dmatrix())
    return {"r0_predicted": float(prediction[0]), "status": "VERIFIED_v1"}`,
    frontend: `// useApi.ts (React 19 + TypeScript + Vite)
export function useApi<T>(url: string, options?: RequestInit) {
  // Stale-while-revalidate caching with 5-min TTL & 0 TypeScript errors
  return useQuery<T>({
    queryKey: [url],
    queryFn: () => authFetch<T>(url, options),
    staleTime: 5 * 60 * 1000,
  });
}`,
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HCLTech Software Engineer Intern • B.Tech CS VIT Chennai</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Architecting <span className="text-gradient-cyan">Dual-Backend AI</span> Systems & Low-Latency Applications.
            </h1>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 font-normal leading-relaxed">
              I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Computer Science student at VIT Chennai (CGPA: 8.35) and Software Engineer Intern at <span className="text-cyan-400 font-medium">HCLTech</span>. I specialize in designing scalable Spring Boot 3.4 + FastAPI microservices, deploying production XGBoost ML models, and building high-performance React 19 / TypeScript interfaces with <span className="text-emerald-400 font-medium">0 type errors</span>.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#projects" className="btn-primary">
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button onClick={onOpenContact} className="btn-secondary">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Contact for Internships</span>
              </button>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {KPI_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-cyan group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Showcase Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10 glow-border">
              {/* Terminal Title Bar */}
              <div className="bg-[#0e121c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    hospitaliq-platform — production-v1
                  </span>
                </div>
                <button
                  onClick={onOpenCommandPalette}
                  className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30 hover:bg-cyan-500/20"
                >
                  ⌘K Terminal
                </button>
              </div>

              {/* Language Selector Tabs */}
              <div className="flex border-b border-white/10 bg-black/20 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 transition-colors ${
                    activeTab === 'backend'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/5'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Spring Boot 3.4</span>
                </button>
                <button
                  onClick={() => setActiveTab('ml')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 transition-colors ${
                    activeTab === 'ml'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/5'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>FastAPI + XGBoost</span>
                </button>
                <button
                  onClick={() => setActiveTab('frontend')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 transition-colors ${
                    activeTab === 'frontend'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/5'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>React 19 / TS</span>
                </button>
              </div>

              {/* Code Snippet Display */}
              <div className="p-4 bg-[#07090e] text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto min-h-[220px]">
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Metric Bar */}
              <div className="px-4 py-2.5 bg-[#0e121c] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">● 100% Tests Pass</span>
                  <span>(91/91 tests)</span>
                </div>
                <div className="text-cyan-400">0 TS Errors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

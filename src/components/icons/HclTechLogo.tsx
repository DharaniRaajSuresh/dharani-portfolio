import React from 'react';

export const HclTechLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official HCLTech Geometric Emblem SVG */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 shrink-0 shadow-lg"
      >
        <rect width="44" height="44" rx="10" fill="#0A0D18" />
        <path
          d="M10 32L21 12H28L17 32H10Z"
          fill="url(#hcl_gradient_1)"
        />
        <path
          d="M23 32L30 19H36L29 32H23Z"
          fill="url(#hcl_gradient_2)"
        />
        <defs>
          <linearGradient id="hcl_gradient_1" x1="10" y1="12" x2="28" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00F2FE" />
            <stop offset="1" stopColor="#4FACFE" />
          </linearGradient>
          <linearGradient id="hcl_gradient_2" x1="23" y1="19" x2="36" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-0.5">
          HCL<span className="text-cyan-400 font-light">Tech</span>
        </span>
        <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
          Supercharging Progress
        </span>
      </div>
    </div>
  );
};

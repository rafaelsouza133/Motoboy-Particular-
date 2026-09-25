import React from 'react';

interface Emblem3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Emblem3D: React.FC<Emblem3DProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32 md:w-36 md:h-36',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-400/20 via-white/10 to-transparent blur-md pointer-events-none" />

      {/* SVG 3D Metallic Shield / Emblem */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
      >
        <defs>
          {/* Chrome / Brushed Silver Linear Gradients */}
          <linearGradient id="chromeOuter" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="75%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="chromeInner" x1="120" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="35%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          <linearGradient id="bevelSilver" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#cbd5e1" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#64748b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="specularCenter" cx="60" cy="40" r="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#64748b" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Filter for metallic bevel drop shadow */}
          <filter id="metallicRelief" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Outer Hexagonal Shield / Crest with 3D rim */}
        <polygon
          points="60,6 108,22 108,82 60,114 12,82 12,22"
          fill="url(#chromeOuter)"
        />

        {/* Inner recessed plate */}
        <polygon
          points="60,12 102,26 102,78 60,106 18,78 18,26"
          fill="url(#chromeInner)"
          stroke="url(#bevelSilver)"
          strokeWidth="1.5"
        />

        {/* Specular highlight overlay */}
        <polygon
          points="60,12 102,26 102,78 60,106 18,78 18,26"
          fill="url(#specularCenter)"
        />

        {/* Aerodynamic Speed Crest / Stylized Motorcycle Helmet Visor in 3D Chrome */}
        <g filter="url(#metallicRelief)">
          {/* Top aerodynamic wing */}
          <path
            d="M60 26 C72 26 84 32 88 42 L32 42 C36 32 48 26 60 26 Z"
            fill="url(#chromeOuter)"
          />

          {/* Sleek Dark Tint Visor */}
          <path
            d="M34 46 L86 46 C84 62 76 72 60 76 C44 72 36 62 34 46 Z"
            fill="#05070c"
            stroke="url(#chromeOuter)"
            strokeWidth="1.5"
          />

          {/* Visor Chrome Reflection Blade */}
          <path
            d="M42 50 L78 50 C74 58 68 64 60 66 C52 64 46 58 42 50 Z"
            fill="url(#bevelSilver)"
            opacity="0.4"
          />

          {/* Lower Chin Guard / V-Speed Shield */}
          <path
            d="M60 78 L78 64 L72 82 L60 92 L48 82 L42 64 Z"
            fill="url(#chromeOuter)"
          />

          {/* Monogram MP or Speed Wings */}
          <path
            d="M52 83 L60 88 L68 83"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Subtle screw / rivet details in corners for engineering/industrial authenticity */}
        <circle cx="24" cy="30" r="1.5" fill="#94a3b8" />
        <circle cx="96" cy="30" r="1.5" fill="#94a3b8" />
        <circle cx="96" cy="74" r="1.5" fill="#94a3b8" />
        <circle cx="24" cy="74" r="1.5" fill="#94a3b8" />
      </svg>
    </div>
  );
};

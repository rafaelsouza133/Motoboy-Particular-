import React from 'react';
import { Instagram, ArrowUpRight, CheckCircle, Camera } from 'lucide-react';
import { LINKS, BIO_PROFILE_PHOTO } from '../data/content';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative bg-[#070709] border-t border-neutral-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* 3D Instagram Icon Badge */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            {/* Outer metallic flare */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-slate-200/20 via-white/10 to-transparent blur-md transition-all group-hover:from-white/30" />
            
            {/* 3D Icon Container */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-b from-[#1c1c22] via-[#0f0f13] to-[#08080a] border border-white/20 p-4 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_15px_35px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 sm:w-14 sm:h-14">
                <defs>
                  <linearGradient id="igSilver" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#e2e8f0" />
                    <stop offset="70%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                </defs>
                <rect
                  x="6"
                  y="6"
                  width="36"
                  height="36"
                  rx="10"
                  stroke="url(#igSilver)"
                  strokeWidth="3"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="9"
                  stroke="url(#igSilver)"
                  strokeWidth="3"
                />
                <circle cx="34" cy="14" r="2.5" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-3">
          <Camera className="w-3.5 h-3.5 text-slate-300" />
          <span>Redes Sociais</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase mb-3">
          ACOMPANHE MEU TRABALHO
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-normal leading-relaxed">
          Veja a rotina de entregas, bastidores das viagens e o dia a dia na estrada pelo Instagram oficial.
        </p>

        {/* Instagram Profile Card Preview */}
        <div className="max-w-md mx-auto rounded-2xl bg-[#0c0c0f] border border-white/10 p-5 mb-8 shadow-[0_15px_30px_rgba(0,0,0,0.8)] flex items-center justify-between text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 p-0.5 bg-neutral-900 shrink-0">
              <img
                src={BIO_PROFILE_PHOTO}
                alt="Foto de perfil Instagram"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">@filhopaij</span>
                <CheckCircle className="w-3.5 h-3.5 text-slate-300 fill-current text-white" />
              </div>
              <span className="text-xs text-slate-400 block">
                Motoboy Particular · Atendimento Exclusivo
              </span>
            </div>
          </div>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Seguir
          </a>
        </div>

        {/* Primary CTA Button */}
        <div>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl group"
          >
            <Instagram className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
            <span>VER INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { MessageCircle, Instagram, ShieldCheck, Clock, Zap } from 'lucide-react';
import { LINKS } from '../data/content';
import { Emblem3D } from './Emblem3D';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#050505] via-[#09090c] to-[#040405] border-t border-neutral-800 overflow-hidden">
      {/* Radial backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Crest */}
        <div className="flex justify-center mb-6">
          <Emblem3D size="lg" />
        </div>

        {/* Title */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-4 leading-tight">
          PRECISA DE UM MOTOBOY?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-lg mx-auto font-normal leading-relaxed mb-10">
          Fale diretamente comigo e solicite seu atendimento.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto mb-10">
          {/* Primary: WhatsApp */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl metallic-button font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_35px_rgba(255,255,255,0.25)] group"
          >
            <MessageCircle className="w-5 h-5 fill-current text-neutral-950 group-hover:scale-110 transition-transform" />
            <span>CHAMAR NO WHATSAPP</span>
          </a>

          {/* Secondary: Instagram */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold text-sm uppercase tracking-wider border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group"
          >
            <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-transform" />
            <span>SEGUIR NO INSTAGRAM</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto pt-6 border-t border-neutral-800/80 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-[11px] font-semibold uppercase text-slate-300">Resposta Rápida</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-[11px] font-semibold uppercase text-slate-300">100% Confiável</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-[11px] font-semibold uppercase text-slate-300">Direto no Whats</span>
          </div>
        </div>

      </div>
    </section>
  );
};

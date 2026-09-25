import React from 'react';
import { MessageCircle, Instagram, ChevronDown, ShieldCheck, Zap } from 'lucide-react';
import { LINKS, BIO_PROFILE_PHOTO } from '../data/content';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 overflow-hidden carbon-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neutral-800/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center z-10 pt-4 pb-8">
        
        {/* Top Brand Tag with Red Letters (Logo removed) */}
        <div className="mb-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/40 border border-red-500/40 shadow-[0_4px_20px_rgba(239,68,68,0.25)]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-red-500 drop-shadow-[0_2px_10px_rgba(239,68,68,0.5)]">
              MOTOBOY PARTICULAR
            </span>
          </div>
        </div>

        {/* Featured Cinematic Hero Visual Frame (Real Photograph) */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto mb-8 group">
          {/* Outer metallic bevel ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/20 via-neutral-700/30 to-red-900/20 blur-[2px] transition duration-500 group-hover:from-white/30" />
          
          <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            {/* The real photograph */}
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src={BIO_PROFILE_PHOTO}
                alt="Profissional Motoboy Particular - Foto de Perfil"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter contrast-[1.04] brightness-[0.98]"
              />
              {/* Cinematic bottom gradient scrim for deep contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              
              {/* Badges on the image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-slate-200">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>Atendimento Seguro</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-red-400" />
                  <span>Pronta Resposta</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] max-w-2xl mb-5 uppercase text-balance">
          SEU PEDIDO.<br />
          SEU DESTINO.<br />
          <span className="metallic-silver-text drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
            MINHA RESPONSABILIDADE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8 px-2">
          Serviço de motoboy particular com agilidade, compromisso e segurança.
        </p>

        {/* Action Buttons */}
        <div className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 mb-8">
          {/* Button 1: WhatsApp */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl metallic-button font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl group"
          >
            <MessageCircle className="w-5 h-5 fill-current text-neutral-950 group-hover:scale-110 transition-transform" />
            <span>Chamar no WhatsApp</span>
          </a>

          {/* Button 2: Instagram */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg group"
          >
            <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Trust bullet markers */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Sem intermediários</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Rota em tempo real</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Cuidado com encomendas</span>
          </div>
        </div>

      </div>

      {/* Visual Scroll Indicator */}
      <div className="w-full flex flex-col items-center justify-center text-center pt-2">
        <a
          href="#sobre"
          className="inline-flex flex-col items-center gap-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200 group"
          aria-label="Rolar para conhecer os serviços"
        >
          <span>Role para conhecer os serviços</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
};

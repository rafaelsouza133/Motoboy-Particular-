import React from 'react';
import { Check, ShieldCheck, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { BIO_PROFILE_PHOTO, LINKS } from '../data/content';

export const AboutSection: React.FC = () => {
  const checkItems = [
    { text: 'Atendimento personalizado', desc: 'Ajustado à sua rotina e horários.' },
    { text: 'Agilidade', desc: 'Rotas otimizadas para entrega rápida.' },
    { text: 'Compromisso', desc: 'Pontualidade e cumprimento de prazos.' },
    { text: 'Segurança', desc: 'Transporte cuidadoso e sigilo absoluto.' },
    { text: 'Comunicação direta', desc: 'Contato em tempo real sem call centers.' },
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 relative border-t border-neutral-900 bg-[#050505]">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Profissionalismo & Dedicação
            </span>
            <span className="w-6 h-[1px] bg-slate-500" />
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            QUEM ESTÁ POR TRÁS DO SERVIÇO
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Card Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Real Photo Column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Outer metallic ambient border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-white/20 via-slate-500/20 to-neutral-900 blur-[2px]" />
              
              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={BIO_PROFILE_PHOTO}
                    alt="Foto 2 de perfil oficial do Motoboy Particular"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98]"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Bottom badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="inline-block px-3.5 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-200 shadow-lg">
                      Perfil Oficial · Atendimento Exclusivo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Card Column */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-6">
              Atendimento profissional para quem precisa de praticidade, agilidade e confiança no dia a dia.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
              Quando você contrata um serviço de motoboy particular, você ganha um parceiro de confiança para a logística do seu negócio ou necessidades pessoais. Toda entrega é tratada como prioridade máxima, com acompanhamento direto pelo WhatsApp do início ao fim do percurso.
            </p>

            {/* Elegant Check Card */}
            <div className="rounded-2xl bg-[#0c0c0e] border border-white/10 p-5 sm:p-6 shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 pb-3 border-b border-neutral-800 flex items-center justify-between">
                <span>Diferenciais do Atendimento</span>
                <Sparkles className="w-4 h-4 text-slate-400" />
              </h3>

              <ul className="space-y-3.5">
                {checkItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-b from-white/20 to-neutral-800 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:border-white/50 transition-colors">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-sm block">
                        {item.text}
                      </span>
                      <span className="text-xs text-slate-400">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro Action Button */}
            <div className="mt-6 pt-2">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-colors group"
              >
                <span>Falar direto com o profissional</span>
                <span className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  →
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

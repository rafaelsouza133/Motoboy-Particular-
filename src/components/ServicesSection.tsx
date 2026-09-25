import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Render custom 3D metallic icon for each service
  const render3DIcon = (type: ServiceItem['type']) => {
    switch (type) {
      case 'entregas':
        return (
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/20 p-2.5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.6)] group-hover:border-white/50 transition-all">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-md">
              <path
                d="M10 34a6 6 0 100-12 6 6 0 000 12zM38 34a6 6 0 100-12 6 6 0 000 12z"
                stroke="url(#silverIconGrad)"
                strokeWidth="3"
              />
              <path
                d="M16 28h16M24 16l4 8-12 4M32 20h8l-2 8"
                stroke="url(#silverIconGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="14" r="3" fill="#ffffff" />
            </svg>
          </div>
        );

      case 'coletas':
        return (
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/20 p-2.5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.6)] group-hover:border-white/50 transition-all">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-md">
              <path
                d="M24 6l16 8v20l-16 8-16-8V14l16-8z"
                stroke="url(#silverIconGrad)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 14l16 8 16-8M24 22v22"
                stroke="url(#silverIconGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 11l12 6"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );

      case 'documentos':
        return (
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/20 p-2.5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.6)] group-hover:border-white/50 transition-all">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-md">
              <rect
                x="12"
                y="8"
                width="24"
                height="32"
                rx="3"
                stroke="url(#silverIconGrad)"
                strokeWidth="2.5"
              />
              <path
                d="M18 16h12M18 22h12M18 28h8"
                stroke="url(#silverIconGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="30" cy="30" r="3" fill="#ffffff" opacity="0.8" />
            </svg>
          </div>
        );

      case 'compras':
        return (
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/20 p-2.5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.6)] group-hover:border-white/50 transition-all">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-md">
              <path
                d="M10 16h28l-3 22H13L10 16z"
                stroke="url(#silverIconGrad)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M18 18V12a6 6 0 0112 0v6"
                stroke="url(#silverIconGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="24" cy="26" r="2" fill="#ffffff" />
            </svg>
          </div>
        );

      case 'particular':
        return (
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/20 p-2.5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.6)] group-hover:border-white/50 transition-all">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-md">
              <path
                d="M26 4L12 24h12l-4 20 18-22H24l4-18z"
                fill="url(#silverIconGrad)"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
    }
  };

  const getWhatsAppServiceLink = (serviceName: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de solicitar o serviço de ${serviceName}. Como podemos combinar?`);
    return `https://w.app/905ula?text=${text}`;
  };

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 relative bg-[#070709] border-t border-neutral-900">
      {/* SVG Global Gradients for Icons */}
      <svg className="hidden">
        <defs>
          <linearGradient id="silverIconGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#e2e8f0" />
            <stop offset="60%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-2">
            Soluções Sob Medida
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            SERVIÇOS
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mt-3">
            Atendimento exclusivo para pessoas e empresas com máximo zelo e pontualidade.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const isFeatured = service.type === 'particular';
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#121216] to-[#0a0a0d] border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.9)] hover:border-white/50'
                    : 'bg-[#0d0d10] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:border-white/30 hover:bg-[#111114]'
                }`}
              >
                {/* Card Top: 3D Icon & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {render3DIcon(service.type)}
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 uppercase tracking-wide group-hover:text-slate-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors"
                  >
                    <span>Solicitar Agora</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below services */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400">
            Necessita de uma rota programada ou contrato recorrente?{' '}
            <a
              href="https://w.app/905ula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline underline-offset-4 hover:text-slate-300"
            >
              Fale diretamente pelo WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

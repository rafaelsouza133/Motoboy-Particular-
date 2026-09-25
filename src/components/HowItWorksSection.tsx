import React, { useState } from 'react';
import { MessageSquare, FileText, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { LINKS, STEPS, SERVICES } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('entregas');
  const [pickup, setPickup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [notes, setNotes] = useState('');

  const generateWhatsAppUrl = () => {
    const serviceObj = SERVICES.find((s) => s.id === selectedService);
    const serviceName = serviceObj ? serviceObj.title : 'SERVIÇO';

    let message = `Olá! Gostaria de fazer um pedido de *${serviceName}*.`;
    if (pickup.trim()) {
      message += `\n📍 *Coleta:* ${pickup.trim()}`;
    }
    if (delivery.trim()) {
      message += `\n🎯 *Destino:* ${delivery.trim()}`;
    }
    if (notes.trim()) {
      message += `\n📝 *Detalhes:* ${notes.trim()}`;
    }

    return `https://w.app/905ula?text=${encodeURIComponent(message)}`;
  };

  const stepIcons = [
    <MessageSquare key="1" className="w-6 h-6 text-white" />,
    <FileText key="2" className="w-6 h-6 text-white" />,
    <MapPin key="3" className="w-6 h-6 text-white" />,
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 relative bg-[#050505] border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-2">
            Simples, Rápido e Sem Burocracia
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            COMO FUNCIONA?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mt-3">
            Em três passos simples você agenda ou solicita seu atendimento imediato.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Large Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-gradient-to-b from-[#101014] to-[#08080a] border border-white/10 p-7 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.8)] group hover:border-white/30 transition-all duration-300"
            >
              <div>
                {/* Step Number & Line */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-4xl sm:text-5xl metallic-silver-text">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-extrabold text-lg text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                <span>Etapa {index + 1} de 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quick Request Box */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0f0f13] to-[#0a0a0c] border border-white/15 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-slate-300" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Solicitação Rápida para o WhatsApp
            </h4>
          </div>

          <div className="space-y-4">
            {/* Service selector */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Tipo de Serviço
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedService === s.id
                        ? 'metallic-button text-neutral-950 font-extrabold shadow-md'
                        : 'bg-neutral-900 border border-neutral-800 text-slate-300 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Ponto de Coleta (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Centro, Rua Augusta..."
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Ponto de Destino (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Bairro, Empresa..."
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Observações ou tipo de encomenda (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: Documento urgente, pacote pequeno, chave..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Primary CTA Button: FAZER UM PEDIDO */}
        <div className="text-center">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl metallic-button font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_35px_rgba(255,255,255,0.2)]"
          >
            <Send className="w-4 h-4 fill-current text-neutral-950" />
            <span>FAZER UM PEDIDO</span>
          </a>
          <p className="text-xs text-slate-400 mt-3">
            Atendimento imediato direto com o motoboy particular
          </p>
        </div>

      </div>
    </section>
  );
};

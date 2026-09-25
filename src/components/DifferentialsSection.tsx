import React from 'react';
import { Zap, ShieldCheck, HeartHandshake, Smartphone } from 'lucide-react';
import { DIFFERENTIALS } from '../data/content';

export const DifferentialsSection: React.FC = () => {
  const getDifferentialIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-6 h-6 text-slate-200" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-slate-200" />;
      case 2:
        return <HeartHandshake className="w-6 h-6 text-slate-200" />;
      case 3:
        return <Smartphone className="w-6 h-6 text-slate-200" />;
      default:
        return <Zap className="w-6 h-6 text-slate-200" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 px-4 sm:px-6 relative bg-[#070709] border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-2">
            Vantagens Exclusivas
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            POR QUE CONTRATAR?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mt-3">
            O padrão de qualidade que você merece para transportar suas demandas.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* 3D-Look Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={item.number}
              className="group relative rounded-2xl bg-gradient-to-b from-[#111115] to-[#09090c] border border-white/10 p-6 flex flex-col justify-between shadow-[0_12px_28px_rgba(0,0,0,0.8)] hover:border-white/30 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Metallic top highlight bar */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-white/15 to-neutral-900 border border-white/15 flex items-center justify-center shadow-md group-hover:border-white/40 transition-colors">
                    {getDifferentialIcon(index)}
                  </div>
                  <span className="font-display font-black text-2xl metallic-silver-text opacity-70">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-base sm:text-lg text-white mb-2 uppercase tracking-wider">
                  {item.title}
                </h3>

                {/* Main Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Extra Detail */}
              <div className="pt-3 border-t border-neutral-800/80">
                <span className="text-[11px] text-slate-400 block leading-normal">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

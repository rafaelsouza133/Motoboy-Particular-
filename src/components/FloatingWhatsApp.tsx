import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { LINKS } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Optional Quick Tooltip Bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/95 border border-white/20 text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wide">
            Online · Chame agora
          </span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dispensar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Ripple ping */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75 duration-1000" />

        <MessageCircle className="w-7 h-7 fill-current transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};

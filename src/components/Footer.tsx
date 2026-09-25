import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { LINKS } from '../data/content';
import { Emblem3D } from './Emblem3D';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030304] border-t border-neutral-900 py-12 px-4 sm:px-6 text-center text-slate-400">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Brand Emblem */}
        <div className="mb-4">
          <Emblem3D size="sm" />
        </div>

        {/* Brand Name */}
        <h3 className="font-display font-extrabold text-base sm:text-lg text-white uppercase tracking-widest mb-1">
          MOTOBOY PARTICULAR
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal">
          Atendimento direto e personalizado.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 hover:scale-110 transition-all duration-200 shadow-md"
            aria-label="Abrir WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 hover:scale-110 transition-all duration-200 shadow-md"
            aria-label="Abrir Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-8 font-medium">
          <a href="#sobre" className="hover:text-slate-300 transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-slate-300 transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-slate-300 transition-colors">Galeria</a>
          <a href="#diferenciais" className="hover:text-slate-300 transition-colors">Diferenciais</a>
          <a href="#como-funciona" className="hover:text-slate-300 transition-colors">Como Funciona</a>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-neutral-900/80 w-full text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Motoboy Particular. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

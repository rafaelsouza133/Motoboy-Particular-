import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#050505]/90 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand title wordmark (no logo, red letters) */}
        <a
          href="#"
          className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg py-1"
          aria-label="Motoboy Particular Início"
        >
          <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-red-500 group-hover:text-red-400 transition-colors uppercase drop-shadow-[0_2px_8px_rgba(239,68,68,0.35)]">
            MOTOBOY PARTICULAR
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold -mt-0.5">
            Serviço Exclusivo
          </span>
        </a>

        {/* Zone 2: Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a
            href="#sobre"
            className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
          >
            Serviços
          </a>
          <a
            href="#galeria"
            className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
          >
            Galeria
          </a>
          <a
            href="#diferenciais"
            className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
          >
            Diferenciais
          </a>
          <a
            href="#como-funciona"
            className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
          >
            Como Funciona
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider metallic-button transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-slate-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-neutral-800 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-800/80 hover:text-white"
            >
              Sobre o Profissional
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-800/80 hover:text-white"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-800/80 hover:text-white"
            >
              Galeria
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-800/80 hover:text-white"
            >
              Por Que Contratar
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-800/80 hover:text-white"
            >
              Como Solicitar
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl metallic-button font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Chamar no WhatsApp
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 flex items-center justify-center gap-2"
              >
                Ver Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

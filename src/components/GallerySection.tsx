import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section id="galeria" className="py-20 px-4 sm:px-6 relative bg-[#050505] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Registros Reais em Operação
            </span>
            <span className="w-6 h-[1px] bg-slate-500" />
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            NA RUA, NA ESTRADA, NO SEU SERVIÇO.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mt-3">
            Presença constante, dinamismo e foco na entrega perfeita a cada quilômetro.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery: Mobile Horizontal Swipe Carousel + Desktop 3-Column Grid */}
        <div className="relative">
          {/* Scroll container */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 no-scrollbar snap-x snap-mandatory">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/40 shadow-[0_15px_30px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shrink-0 w-[270px] sm:w-auto snap-center"
              >
                {/* Image Container with vertical aspect ratio */}
                <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src={item.url}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Tag & Zoom icon */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15 text-slate-200">
                      {item.tag}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-xs sm:text-sm leading-snug drop-shadow-md">
                      {item.caption}
                    </p>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono mt-1 block">
                      Foto 0{item.id} / 06
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Cue */}
          <div className="sm:hidden text-center text-slate-400 text-[11px] font-medium mt-2 flex items-center justify-center gap-1.5">
            <span>← Deslize para ver todas as fotos →</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900 border border-white/20 text-white hover:bg-neutral-800 focus:outline-none transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 border border-white/20 text-white hover:bg-neutral-800 transition-colors hidden sm:flex items-center justify-center"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 border border-white/20 text-white hover:bg-neutral-800 transition-colors hidden sm:flex items-center justify-center"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl max-h-[85vh] w-full flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-neutral-950 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,1)]"
          >
            <img
              src={GALLERY_ITEMS[selectedPhotoIndex].url}
              alt={GALLERY_ITEMS[selectedPhotoIndex].alt}
              className="max-h-[72vh] w-auto object-contain mx-auto"
            />
            <div className="w-full bg-[#0d0d10] p-4 text-center border-t border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {GALLERY_ITEMS[selectedPhotoIndex].tag} · 0{selectedPhotoIndex + 1} de 06
              </span>
              <p className="text-white text-sm font-medium">
                {GALLERY_ITEMS[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

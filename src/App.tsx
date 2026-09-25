/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InstagramSection } from './components/InstagramSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 w-full overflow-hidden">
        {/* SEÇÃO 1 — HERO / APRESENTAÇÃO */}
        <HeroSection />

        {/* SEÇÃO 2 — SOBRE O PROFISSIONAL */}
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        {/* SEÇÃO 3 — SERVIÇOS */}
        <ScrollReveal delayMs={50}>
          <ServicesSection />
        </ScrollReveal>

        {/* SEÇÃO 4 — GALERIA */}
        <ScrollReveal delayMs={50}>
          <GallerySection />
        </ScrollReveal>

        {/* SEÇÃO 5 — DIFERENCIAIS */}
        <ScrollReveal delayMs={50}>
          <DifferentialsSection />
        </ScrollReveal>

        {/* SEÇÃO 6 — COMO SOLICITAR */}
        <ScrollReveal delayMs={50}>
          <HowItWorksSection />
        </ScrollReveal>

        {/* SEÇÃO 7 — INSTAGRAM */}
        <ScrollReveal delayMs={50}>
          <InstagramSection />
        </ScrollReveal>

        {/* SEÇÃO 8 — CTA FINAL */}
        <ScrollReveal delayMs={50}>
          <FinalCtaSection />
        </ScrollReveal>
      </main>

      {/* RODAPÉ */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

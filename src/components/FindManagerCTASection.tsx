import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

export function FindManagerCTASection() {
  return (
    <section className="py-16 lg:py-[72px] bg-surface-ink text-white">
      <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <div className="bg-white/10 p-4 rounded-pill w-fit mx-auto mb-8">
          <Users className="w-10 h-10 text-accent-ui" aria-label="Encontrar gestora de alojamento local" />
        </div>

        <h2 className="text-[2.125rem] lg:text-[3.375rem] leading-[1.04] tracking-[-0.03em] font-black mb-6">
          Prefere não gerir o seu AL sozinho?
        </h2>

        <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Encontre uma gestora profissional de Alojamento Local na sua região.
          Compare empresas, serviços e comissões — gratuitamente.
        </p>

        <a
          href="https://findamanageral.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-accent-text font-bold py-4 px-10 rounded-pill hover:opacity-90 transition-opacity duration-[180ms] text-lg"
        >
          Encontrar gestora de AL
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="text-white/60 text-sm mt-6">
          Serviço gratuito para proprietários · Algarve, Lisboa, Porto e ilhas
        </p>
      </div>
    </section>
  );
}

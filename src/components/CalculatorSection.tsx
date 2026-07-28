import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export function CalculatorSection() {
  return (
    <section className="py-16 lg:py-[72px] bg-white">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="bg-surface-ink rounded-xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 p-4 rounded-pill w-fit mx-auto mb-8">
              <Calculator className="w-10 h-10 text-accent-ui" aria-label="Calculadora de viabilidade de Alojamento Local" />
            </div>

            <h2 className="text-[1.75rem] lg:text-[2.25rem] tracking-[-0.02em] font-extrabold mb-6">
              Quer saber se o seu AL compensa financeiramente?
            </h2>

            <p className="text-lg lg:text-xl mb-8 text-white/70">
              Use a nossa calculadora gratuita para avaliar a viabilidade do seu projeto
              antes de avançar com o registo.
            </p>

            <a
              href="https://calculadoraal.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent-text font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity duration-[180ms] inline-flex items-center space-x-2 text-lg"
            >
              <span>Experimente a Calculadora AL</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

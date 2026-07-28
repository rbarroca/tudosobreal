import React from 'react';
import { Clock, Shield, BookOpen, RefreshCw } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Poupa tempo',
      description: 'Toda a informação reunida num único guia prático',
    },
    {
      icon: Shield,
      title: 'Evita multas',
      description: 'Saiba exatamente o que a lei realmente exige',
    },
    {
      icon: BookOpen,
      title: 'Passo a passo prático',
      description: 'Explicado em linguagem clara e acessível',
    },
    {
      icon: RefreshCw,
      title: 'Sempre atualizado',
      description: 'Baseado nas alterações mais recentes da lei',
    }
  ];

  return (
    <section className="py-16 lg:py-[72px] bg-surface-subtle">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[1.75rem] lg:text-[2.25rem] tracking-[-0.02em] font-extrabold text-ink-900 mb-4">
            Porquê escolher este guia?
          </h2>
          <p className="text-lg lg:text-xl text-ink-500 max-w-3xl mx-auto">
            Para que não perca tempo a tentar perceber o que a lei realmente exige
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-line-faint hover:shadow-card transition-shadow duration-[400ms]"
            >
              <div className="bg-accent-ui p-3 rounded-sm w-fit mb-6">
                <benefit.icon className="w-6 h-6 text-white" aria-label={`Ícone ${benefit.title}`} />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-ink-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

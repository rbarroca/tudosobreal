import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, DollarSign, Scale, Settings } from 'lucide-react';

const categories = [
  { label: 'Como Abrir AL', href: '/como-abrir-alojamento-local', icon: BookOpen },
  { label: 'Registo AL', href: '/registar-alojamento-local', icon: FileText },
  { label: 'Fiscalidade', href: '/fiscalidade-alojamento-local', icon: DollarSign },
  { label: 'Legislação', href: '/legislacao-al', icon: Scale },
  { label: 'Gerir AL', href: '/gerir-alojamento-local', icon: Settings },
];

export function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <p className="text-accent-text font-bold text-xs uppercase tracking-[0.14em] mb-4">
          Guia completo · Portugal · 2026
        </p>

        <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.02] tracking-[-0.03em] font-black text-ink-900 mb-6">
          Tudo sobre
          <span className="block text-accent-ui">Alojamento Local</span>
        </h1>

        <p className="text-lg lg:text-xl text-ink-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Informação prática e atualizada para abrir, registar e gerir
          o seu Alojamento Local em Portugal — sem surpresas legais ou fiscais.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-pill font-medium text-sm bg-accent-tint text-accent-text hover:opacity-80 transition-opacity"
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </Link>
          ))}
        </div>

        <Link
          to="/guias"
          className="inline-flex items-center gap-2 bg-accent-ui hover:opacity-90 text-white font-bold px-8 py-4 rounded-pill transition-opacity text-lg"
        >
          Ver todos os guias
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

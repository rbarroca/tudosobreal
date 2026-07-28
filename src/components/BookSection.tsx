import React from 'react';
import { CheckCircle, BookOpen, Info } from 'lucide-react';

export function BookSection() {
  const topics = [
    'Como registar o seu AL passo a passo',
    'Modalidades de AL (moradia, apartamento, hostel, quartos)',
    'Requisitos mínimos obrigatórios',
    'Fiscalidade e obrigações legais',
    'Seguros, segurança e placas identificativas',
    'Regras em condomínios e áreas de contenção',
    'Boas práticas de gestão e sustentabilidade'
  ];

  return (
    <section className="py-16 lg:py-[72px] bg-white">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent-ui p-3 rounded-sm">
                <BookOpen className="w-7 h-7 text-white" aria-label="Ícone do livro sobre Alojamento Local" />
              </div>
              <div>
                <h2 className="text-[1.75rem] lg:text-[2.25rem] tracking-[-0.02em] font-extrabold text-ink-900">Sobre o Livro</h2>
                <p className="text-accent-text font-medium">Em preparação</p>
              </div>
            </div>

            <p className="text-lg text-ink-500 mb-8 leading-relaxed">
              Este livro reúne toda a informação prática sobre Alojamento Local em Portugal,
              desde o registo até à fiscalidade e à gestão do dia a dia. Escrito com base no
              regime jurídico em vigor, para quem quer entrar neste mercado sem surpresas.
            </p>

            <div className="bg-accent-tint border border-line-soft rounded-lg p-4 mb-8 flex items-center gap-3">
              <Info className="w-5 h-5 text-accent-ui flex-shrink-0" />
              <p className="text-accent-text font-medium">
                Atualizado com as alterações da Lei 56/2023
              </p>
            </div>
          </div>

          <div className="bg-surface-subtle rounded-xl p-8 border border-line-faint">
            <h3 className="text-2xl font-extrabold text-ink-900 mb-6">
              Tópicos que o livro vai cobrir:
            </h3>
            <ul className="space-y-4">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-ui mt-0.5 flex-shrink-0" />
                  <span className="text-ink-500 leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

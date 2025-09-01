import React from 'react';
import { Clock, Shield, BookOpen, RefreshCw } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Poupa tempo',
      description: 'Toda a informação reunida num único guia prático',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Evita multas',
      description: 'Saiba exatamente o que a lei realmente exige',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BookOpen,
      title: 'Passo a passo prático',
      description: 'Explicado em linguagem clara e acessível',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: RefreshCw,
      title: 'Sempre atualizado',
      description: 'Baseado nas alterações mais recentes da lei',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Porquê escolher este guia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvido para simplificar o complexo mundo do Alojamento Local em Portugal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${benefit.color} p-4 rounded-xl w-fit mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
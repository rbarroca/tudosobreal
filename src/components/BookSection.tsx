import React from 'react';
import { CheckCircle, BookOpen } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg">
                <BookOpen className="w-8 h-8 text-white" aria-label="Ícone do livro sobre Alojamento Local" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Sobre o Livro</h2>
                <p className="text-blue-600 font-medium">Guia Prático e Atualizado</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Este livro compila toda a informação prática sobre Alojamento Local em Portugal, 
              desde requisitos legais e registo até fiscalidade e boas práticas de gestão. 
              Baseado no regime jurídico atualizado, oferece um guia completo e acessível 
              para quem quer entrar neste mercado.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-800 font-medium text-center">
                📋 Baseado no regime jurídico atualizado de 2024/2025
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tópicos que o livro vai cobrir:
            </h3>
            <ul className="space-y-4">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
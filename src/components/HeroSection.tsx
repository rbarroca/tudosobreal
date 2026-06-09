import React from 'react';
import { EmailForm } from './EmailForm';
import { BookOpen, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Guia Essencial</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tudo sobre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Alojamento Local
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              O guia essencial para abrir e gerir o seu Alojamento Local em Portugal – 
              explicado de forma simples e prática.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Seja o primeiro a saber!
                </h3>
                <p className="text-gray-600">
                  Deixe o seu email e seja notificado quando o livro estiver disponível.
                </p>
              </div>
              <EmailForm />
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Guia Completo</h3>
                    <p className="text-gray-600">Alojamento Local 2026</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Requisitos legais atualizados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Processo de registo passo a passo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Fiscalidade e obrigações</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Boas práticas de gestão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
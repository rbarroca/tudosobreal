import React from 'react';
import { EmailForm } from './EmailForm';
import { Bell, Users } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-8">
          <Bell className="w-12 h-12" />
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Não perca o lançamento do livro
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
          Inscreva-se já para ser notificado assim que o "Tudo sobre Alojamento Local" 
          estiver disponível. Seja um dos primeiros a ter acesso ao guia mais completo do mercado.
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="text-gray-900 font-semibold">Junte-se a centenas de interessados</span>
          </div>
          <EmailForm buttonText="Quero ser notificado do lançamento!" />
        </div>
        
        <p className="text-blue-200 text-sm mt-8">
          * Não enviamos spam. Apenas notificações importantes sobre o livro.
        </p>
      </div>
    </section>
  );
}
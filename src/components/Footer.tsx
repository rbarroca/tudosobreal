import React from 'react';
import { BookOpen, Calculator, Shield, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" aria-label="Logo Tudo sobre Alojamento Local" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tudo sobre Alojamento Local</h3>
                <p className="text-gray-400 text-sm">tudosobrealojamentolocal.com</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              O seu guia essencial para navegar no mundo do Alojamento Local em Portugal 
              com confiança e conhecimento.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Calculator className="w-4 h-4" />
                  <span>Calculadora AL</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Shield className="w-4 h-4" />
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Sobre o Projeto</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dedicamo-nos a simplificar a informação sobre Alojamento Local, 
              tornando-a acessível a todos os proprietários.
            </p>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                Informação atualizada • Baseada na legislação atual • Linguagem simples
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Tudo sobre Alojamento Local. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
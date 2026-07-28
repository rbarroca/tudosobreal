import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Shield, Users } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-subtle py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent-ui p-2 rounded-sm">
                <BookOpen className="w-5 h-5 text-white" aria-label="Logo Tudo sobre Alojamento Local" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-ink-900">Tudo sobre Alojamento Local</h3>
                <p className="text-ink-500 text-sm">tudosobrealojamentolocal.pt</p>
              </div>
            </div>
            <p className="text-ink-500 leading-relaxed">
              O seu guia essencial para navegar no mundo do Alojamento Local em Portugal
              com confiança e conhecimento.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-ink-900">Guias Populares</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/como-abrir-alojamento-local" className="text-ink-500 hover:text-accent-text transition-colors text-sm">
                  Como Abrir Alojamento Local
                </Link>
              </li>
              <li>
                <Link to="/fiscalidade-alojamento-local/impostos-al-2026" className="text-ink-500 hover:text-accent-text transition-colors text-sm">
                  Impostos AL 2026
                </Link>
              </li>
              <li>
                <Link to="/legislacao-al/nova-lei-al-2024" className="text-ink-500 hover:text-accent-text transition-colors text-sm">
                  Nova Lei AL 2024
                </Link>
              </li>
              <li>
                <Link to="/guias" className="text-ink-500 hover:text-accent-text transition-colors text-sm">
                  Todos os Guias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-ink-900">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://calculadoraal.pt/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-ink-500 hover:text-accent-text transition-colors duration-200 text-sm">
                  <Calculator className="w-4 h-4" />
                  <span>Calculadora AL</span>
                </a>
              </li>
              <li>
                <a href="https://findamanageral.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-ink-500 hover:text-accent-text transition-colors duration-200 text-sm">
                  <Users className="w-4 h-4" />
                  <span>Find a Manager AL</span>
                </a>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="flex items-center space-x-2 text-ink-500 hover:text-accent-text transition-colors duration-200 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Política de Privacidade</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line mt-12 pt-8 text-center">
          <p className="text-ink-500 text-sm">
            © 2026 Tudo sobre Alojamento Local. Todos os direitos reservados. |{' '}
            <a href="https://tudosobrealojamentolocal.pt" className="hover:text-accent-text transition-colors">
              tudosobrealojamentolocal.pt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

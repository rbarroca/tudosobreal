import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Como Abrir AL', href: '/como-abrir-alojamento-local' },
    { label: 'Fiscalidade', href: '/fiscalidade-alojamento-local/impostos-al-2025' },
    { label: 'Legislação', href: '/legislacao-al/nova-lei-al-2024' },
    { label: 'Gerir AL', href: '/gerir-alojamento-local/plataformas-airbnb-booking' },
    { label: 'Guias', href: '/guias' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" aria-label="Logo" />
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block">Tudo sobre Alojamento Local</span>
            <span className="text-lg font-bold text-gray-900 sm:hidden">TudoSobreAL</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {l.label}
              </Link>
            ))}
            <a
              href="https://calculadoraal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Simular rentabilidade →
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-600 hover:text-gray-900" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {navLinks.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-1">
              {l.label}
            </Link>
          ))}
          <a
            href="https://calculadoraal.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-lg text-center mt-2"
          >
            Simular rentabilidade →
          </a>
        </div>
      )}
    </header>
  );
}

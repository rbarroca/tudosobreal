import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Como Abrir AL', href: '/como-abrir-alojamento-local' },
    { label: 'Registo AL', href: '/registar-alojamento-local' },
    { label: 'Fiscalidade', href: '/fiscalidade-alojamento-local' },
    { label: 'Legislação', href: '/legislacao-al' },
    { label: 'Gerir AL', href: '/gerir-alojamento-local' },
  ];

  return (
    <header className="bg-white/86 backdrop-blur-lg shadow-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-accent-ui p-2 rounded-sm">
              <BookOpen className="w-5 h-5 text-white" aria-label="Logo" />
            </div>
            <span className="text-lg font-extrabold text-ink-900 hidden sm:block">Tudo sobre Alojamento Local</span>
            <span className="text-lg font-extrabold text-ink-900 sm:hidden">TudoSobreAL</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-ink-700 hover:text-accent-text transition-colors">
                {l.label}
              </Link>
            ))}
            <a
              href="https://calculadoraal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-accent-ui hover:opacity-90 text-white text-sm font-bold px-4 py-2 rounded-pill transition-opacity duration-[180ms]"
            >
              Simular rentabilidade →
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink-700 hover:text-ink-900" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white px-5 py-4 space-y-3">
          {navLinks.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-ink-700 hover:text-accent-text py-1">
              {l.label}
            </Link>
          ))}
          <a
            href="https://calculadoraal.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-accent-ui text-white text-sm font-bold px-4 py-2 rounded-pill text-center mt-2"
          >
            Simular rentabilidade →
          </a>
        </div>
      )}
    </header>
  );
}

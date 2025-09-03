import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" aria-label="Logo Tudo sobre Alojamento Local" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Tudo sobre Alojamento Local</h1>
              <p className="text-sm text-gray-600">tudosobrealojamentolocal.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
  )
}
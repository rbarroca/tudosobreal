import React, { useState } from 'react';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface EmailFormProps {
  className?: string;
  buttonText?: string;
}

export function EmailForm({ className = '', buttonText = 'Quero ser notificado!' }: EmailFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    if (name && email) {
      saveEmailSubscription();
    }
  };

  const saveEmailSubscription = async () => {
    try {
      if (!supabase) {
        setError('Funcionalidade de email não configurada. Contacte o administrador.');
        setIsLoading(false);
        return;
      }

      const { error: insertError } = await supabase
        .from('email_subscribers')
        .insert([
          {
            name: name.trim(),
            email: email.trim().toLowerCase()
          }
        ]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('Este email já está registado!');
        } else {
          setError('Erro ao guardar. Tente novamente.');
        }
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
      setName('');
      setEmail('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Erro de conexão. Verifique a sua internet.');
    } finally {
      setIsLoading(false);
    }
  };
  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <div className="text-green-600 font-semibold mb-2">Obrigado, {name.split(' ')[0]}!</div>
        <div className="text-green-700">Será notificado assim que o livro estiver disponível.</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <span className="text-red-700">{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="O seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            disabled={isLoading}
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="O seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            disabled={isLoading}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md"
      >
        {isLoading ? 'A guardar...' : buttonText}
      </button>
      </form>
    </div>
  );
}
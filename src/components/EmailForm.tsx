import React, { useState } from 'react';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkoabndy';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase() }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message ?? 'Erro ao enviar. Tente novamente.');
      }
    } catch {
      setError('Erro de conexão. Verifique a sua internet.');
    } finally {
      setIsLoading(false);
    }
  };
  if (isSubmitted) {
    return (
      <div className={`bg-success/10 border border-success rounded-lg p-6 text-center ${className}`}>
        <CheckCircle className="w-10 h-10 text-success mx-auto mb-4" />
        <div className="text-success font-semibold mb-2">Obrigado!</div>
        <div className="text-ink-700">Será notificado assim que o livro estiver disponível.</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {error && (
        <div className="bg-danger/10 border border-danger rounded-lg p-4 mb-4 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
          <span className="text-danger">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-400 w-5 h-5" />
          <input
            type="text"
            placeholder="O seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-line-strong rounded-sm focus:outline-none focus:border-accent-ui focus:shadow-[0_0_0_3px_var(--accent-ring)] transition-all duration-[180ms]"
            disabled={isLoading}
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-400 w-5 h-5" />
          <input
            type="email"
            placeholder="O seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-line-strong rounded-sm focus:outline-none focus:border-accent-ui focus:shadow-[0_0_0_3px_var(--accent-ring)] transition-all duration-[180ms]"
            disabled={isLoading}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-accent-ui hover:opacity-90 disabled:bg-ink-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-md transition-opacity duration-[180ms]"
      >
        {isLoading ? 'A guardar...' : buttonText}
      </button>
      </form>
    </div>
  );
}

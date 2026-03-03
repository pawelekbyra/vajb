"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react';

export default function ElixirLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'szaman') {
      localStorage.setItem('elixir_secret_access', 'szaman');
      router.push('/szaman');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto my-12 bg-[#FAF6EC] border border-[#C4B99A] p-6 shadow-sm rounded-sm font-serif">
      <div className="flex items-center gap-2 mb-4 text-[#3D2B1F]">
        <Lock className="w-4 h-4" />
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Archiwum X - Dostęp
        </h2>
      </div>

      <p className="text-xs text-[#5A4A3A] mb-6 leading-relaxed">
        To sekcja zawierająca materiały o najwyższym stopniu poufności.
        Wymagane hasło autoryzacyjne.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hasło..."
            className="w-full bg-white border border-[#C4B99A] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3D2B1F] transition-all"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-[#3D2B1F] hover:bg-[#E8E0CC] transition-colors rounded-sm"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {error && (
          <div className="flex items-center justify-center gap-2 text-red-700 animate-pulse">
            <ShieldAlert className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Odmowa dostępu</span>
          </div>
        )}
      </form>
    </div>
  );
}

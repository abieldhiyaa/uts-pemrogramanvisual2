import React from 'react';
import { Sprout } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PublicFooter() {
  const { setRole } = useApp();

  return (
    <footer className="no-print bg-[#f7fbf7] px-5 py-8 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center">
        <div className="flex items-center gap-2 font-bold text-slate-700">
          <Sprout className="text-emerald-700" /> PAUD Qurrota A'yun
        </div>
        <p>© 2026 PPDB PAUD Qurrota A'yun · Prototype front-end</p>
        <button
          onClick={() => setRole('login')}
          className="text-left font-semibold text-emerald-800 transition-colors hover:text-emerald-600"
        >
          Portal admin →
        </button>
      </div>
    </footer>
  );
}

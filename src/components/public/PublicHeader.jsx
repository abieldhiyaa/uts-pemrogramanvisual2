import React from 'react';
import { Sprout } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PublicHeader() {
  const { setRole, setFormStep } = useApp();

  return (
    <header className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-emerald-100/80 bg-white/90 px-5 py-4 backdrop-blur md:px-12">
      <button
        onClick={() => setRole('home')}
        className="flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-800 text-white shadow-lg shadow-emerald-900/20">
          <Sprout size={24} />
        </div>
        <div>
          <p className="font-extrabold tracking-tight">PAUD Qurrota A'yun</p>
          <p className="text-xs text-slate-500">
            Tumbuh ceria, belajar bermakna
          </p>
        </div>
      </button>

      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
        <a
          href="#tentang"
          className="transition-colors hover:text-emerald-800"
          onClick={() => setRole('home')}
        >
          Tentang
        </a>
        <a
          href="#alur"
          className="transition-colors hover:text-emerald-800"
          onClick={() => setRole('home')}
        >
          Alur pendaftaran
        </a>
        <button
          onClick={() => setRole('status')}
          className="transition-colors hover:text-emerald-800"
        >
          Cek status
        </button>
      </nav>

      <div className="flex gap-2">
        <button
          onClick={() => setRole('login')}
          className="hidden rounded-xl border border-emerald-200 px-4 py-2.5 text-sm font-bold text-emerald-800 transition-all duration-200 hover:bg-emerald-50 sm:block"
        >
          Admin
        </button>
        <button
          onClick={() => {
            setRole('apply');
            setFormStep(1);
          }}
          className="rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all duration-200 hover:bg-emerald-900 hover:shadow-xl"
        >
          Daftar sekarang
        </button>
      </div>
    </header>
  );
}

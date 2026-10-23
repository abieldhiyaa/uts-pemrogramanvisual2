import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function AdminTopbar() {
  const { adminPage, setMobileMenuOpen } = useApp();

  return (
    <header className="no-print sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-emerald-100/80 bg-white/85 px-5 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          className="rounded-lg p-1 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Buka menu"
        >
          <Menu />
        </button>
        <div>
          <p className="text-xs text-slate-400">
            Portal Admin /{' '}
            <span className="text-emerald-800">{adminPage}</span>
          </p>
          <h1 className="text-lg font-extrabold">{adminPage}</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition-colors hover:bg-slate-50"
          aria-label="Notifikasi"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>

        <div className="hidden h-9 w-px bg-slate-200 sm:block" />

        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-800">
            AD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold">Admin PPDB</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

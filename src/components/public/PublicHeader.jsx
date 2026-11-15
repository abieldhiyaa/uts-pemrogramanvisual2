import React from 'react';
import { LayoutDashboard, LogOut, LogIn, UserPlus } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PublicHeader() {
  const {
    setRole,
    setAuthMode,
    currentUser,
    startRegistration,
    logout,
  } = useApp();

  return (
    <header className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-emerald-100/80 bg-white/95 px-5 py-3 backdrop-blur md:px-12">
      {/* Brand & Logo */}
      <button
        onClick={() => setRole('home')}
        className="flex items-center gap-3 text-left transition-opacity hover:opacity-85"
      >
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-200 bg-white p-1 shadow-sm">
          <img
            src="/logo.png"
            alt="Logo SPS Qurrota A'yun"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="font-black tracking-tight text-slate-900 leading-tight">
            SPS Qurrota A'yun
          </p>
          <p className="text-[11px] text-slate-500 font-medium">
            Yayasan Biru Madani • Kota Bogor
          </p>
        </div>
      </button>

      {/* Navigation & Action di Sisi Kanan */}
      <div className="flex items-center gap-6 md:gap-8">
        <nav className="hidden items-center gap-7 text-xs font-bold text-slate-600 md:flex">
          <button
            onClick={() => setRole('home')}
            className="transition-colors hover:text-emerald-800"
          >
            Beranda
          </button>
          <a
            href="#informasi"
            className="transition-colors hover:text-emerald-800"
            onClick={() => setRole('home')}
          >
            Informasi
          </a>
          <a
            href="#alur"
            className="transition-colors hover:text-emerald-800"
            onClick={() => setRole('home')}
          >
            Alur Pendaftaran
          </a>
        </nav>

        {/* Action / Auth Buttons (Hanya muncul jika sudah login) */}
        {currentUser && (
          <div className="flex items-center gap-2 border-l border-slate-200/80 pl-4 md:pl-6">
            <button
              onClick={() =>
                currentUser.role === 'admin'
                  ? setRole('admin')
                  : setRole('user-dashboard')
              }
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3.5 py-2 text-xs font-extrabold text-emerald-900 border border-emerald-200 transition-all hover:bg-emerald-100"
            >
              <LayoutDashboard size={14} />
              {currentUser.role === 'admin' ? 'Portal Admin' : 'Dashboard Saya'}
            </button>
            <button
              onClick={logout}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              title="Keluar Akun"
            >
              <LogOut size={16} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

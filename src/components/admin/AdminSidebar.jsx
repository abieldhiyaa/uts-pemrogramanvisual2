import React from 'react';
import {
  Sprout,
  LayoutDashboard,
  Users,
  FileCheck2,
  Megaphone,
  BookOpen,
  FileText,
  LogOut,
  ShieldCheck,
  X,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

const navItems = [
  ['Dashboard', LayoutDashboard],
  ['Data Pendaftar', Users],
  ['Verifikasi', FileCheck2],
  ['Pengumuman', Megaphone],
  ['Laporan', FileText],
  ['Informasi PPDB', BookOpen],
];

export default function AdminSidebar() {
  const {
    adminPage,
    navigateAdmin,
    logout,
    mobileMenuOpen,
    setMobileMenuOpen,
    stats,
    setRole,
  } = useApp();

  return (
    <>
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={
          (mobileMenuOpen
            ? 'animate-slide-in-left fixed inset-y-0 left-0 z-40 flex'
            : 'hidden md:flex') +
          ' w-64 shrink-0 flex-col border-r border-emerald-100 bg-white p-5'
        }
      >
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200 bg-white p-1 shadow-md">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-extrabold tracking-tight text-slate-900 leading-tight">SPS Qurrota A'yun</p>
            <p className="text-[11px] text-slate-500">PPDB • Portal Admin</p>
          </div>
          {mobileMenuOpen && (
            <button
              className="ml-auto rounded-lg p-1 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Nav label */}
        <p className="mb-2.5 px-3 text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">
          Modul PPDB
        </p>

        {/* Nav items */}
        <nav className="space-y-1">
          {navItems.map(([name, Icon]) => (
            <button
              key={name}
              onClick={() => navigateAdmin(name)}
              className={
                'flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left text-xs font-bold transition-all duration-200 ' +
                (adminPage === name
                  ? 'bg-emerald-800 text-white shadow-lg shadow-emerald-900/10'
                  : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-900')
              }
            >
              <Icon size={17} />
              <span>{name}</span>
              {name === 'Verifikasi' && stats.menunggu > 0 && (
                <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800">
                  {stats.menunggu}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Portal Public shortcut */}
        <div className="mt-4 border-t border-slate-100 pt-3">
          <button
            onClick={() => setRole('home')}
            className="flex w-full items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800"
          >
            <ExternalLink size={15} /> Lihat Portal Publik
          </button>
        </div>

        {/* Demo notice */}
        <div className="mt-auto rounded-2xl bg-emerald-50/70 p-3.5 border border-emerald-100">
          <div className="mb-1 flex items-center gap-1.5 text-emerald-800">
            <ShieldCheck size={16} />
            <span className="text-xs font-black">Mode Demo Front-end</span>
          </div>
          <p className="text-[11px] leading-4 text-emerald-900/70">
            Semua perubahan tersimpan di sesi browser (in-memory).
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-3 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-bold text-rose-700 transition-colors hover:bg-rose-50"
        >
          <LogOut size={16} />
          Keluar Admin
        </button>
      </aside>
    </>
  );
}

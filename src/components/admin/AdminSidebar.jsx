import React from 'react';
import {
  Sprout,
  LayoutDashboard,
  Users,
  FileCheck2,
  BookOpen,
  FileText,
  LogOut,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

const navItems = [
  ['Dashboard', LayoutDashboard],
  ['Data Pendaftar', Users],
  ['Verifikasi', FileCheck2],
  ['Informasi PPDB', BookOpen],
  ['Laporan', FileText],
];

export default function AdminSidebar() {
  const {
    adminPage,
    navigateAdmin,
    logout,
    mobileMenuOpen,
    setMobileMenuOpen,
    stats,
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
        <div className="mb-9 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-800 text-white">
            <Sprout size={24} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-extrabold tracking-tight">Qurrota A'yun</p>
            <p className="text-xs text-slate-500">PPDB • Admin Portal</p>
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
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
          Menu utama
        </p>

        {/* Nav items */}
        <nav className="space-y-1">
          {navItems.map(([name, Icon]) => (
            <button
              key={name}
              onClick={() => navigateAdmin(name)}
              className={
                'flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition-all duration-200 ' +
                (adminPage === name
                  ? 'bg-emerald-800 text-white shadow-lg shadow-emerald-900/10'
                  : 'text-slate-600 hover:bg-emerald-50')
              }
            >
              <Icon size={18} />
              {name}
              {name === 'Verifikasi' && stats.menunggu > 0 && (
                <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
                  {stats.menunggu}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Demo notice */}
        <div className="mt-auto rounded-2xl bg-emerald-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-emerald-800">
            <ShieldCheck size={18} />
            <span className="text-sm font-bold">Mode Demo</span>
          </div>
          <p className="text-xs leading-5 text-emerald-900/70">
            Data contoh untuk pratinjau antarmuka. Belum terhubung ke server.
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-4 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
        >
          <LogOut size={18} />
          Keluar portal
        </button>
      </aside>
    </>
  );
}

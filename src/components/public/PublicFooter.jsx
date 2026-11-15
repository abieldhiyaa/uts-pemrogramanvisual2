import React from 'react';
import { useApp } from '../../context/AppContext';

export default function PublicFooter() {
  const { setRole, schoolProfile } = useApp();

  return (
    <footer className="no-print border-t border-emerald-100 bg-white px-5 py-10 md:px-12 text-xs text-slate-500">
      <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-200 bg-white p-1 shadow-sm">
              <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="font-black text-slate-900 text-sm">SPS QURROTA A'YUN</p>
              <p className="text-[11px] text-slate-500">{schoolProfile.foundation}</p>
            </div>
          </div>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-md">
            {schoolProfile.address}
          </p>
          <p className="mt-2 text-slate-400">
            NPSN: {schoolProfile.npsn} • Ijin: {schoolProfile.operationalLicense}
          </p>
        </div>

        <div>
          <p className="font-extrabold text-slate-800 uppercase tracking-wider mb-2">Kontak Sekretariat</p>
          <p>Email: <span className="text-emerald-800 font-semibold">{schoolProfile.email}</span></p>
          <p className="mt-1">Telepon/WA: <span className="text-emerald-800 font-semibold">{schoolProfile.phone}</span></p>
          <p className="mt-1">Kelurahan Kedung Badak, RW.003</p>
          <p>Kecamatan Tanah Sareal - Kota Bogor</p>
        </div>

        <div>
          <p className="font-extrabold text-slate-800 uppercase tracking-wider mb-2">Tautan Portal</p>
          <ul className="space-y-1.5">
            <li>
              <button
                onClick={() => setRole('home')}
                className="hover:text-emerald-800 transition-colors"
              >
                Beranda Utama
              </button>
            </li>
            <li>
              <a
                href="#informasi"
                className="hover:text-emerald-800 transition-colors"
                onClick={() => setRole('home')}
              >
                Informasi Pendaftaran
              </a>
            </li>
            <li>
              <button
                onClick={() => setRole('login')}
                className="font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                Masuk / Portal Admin →
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-slate-100 mt-8 pt-4 flex flex-col justify-between items-center gap-2 sm:flex-row text-[11px] text-slate-400">
        <p>© 2026 SPS Qurrota A'yun • Yayasan Biru Madani. Sistem Informasi PPDB Online.</p>
        <p>Front-end Prototype</p>
      </div>
    </footer>
  );
}

import React from 'react';
import { Sprout, ClipboardList } from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { getStatusDescription } from '../../data/dummyData';
import { useApp } from '../../context/AppContext';

export default function StatusCheckPage() {
  const {
    setRole,
    statusQuery,
    setStatusQuery,
    statusResult,
    checkStatus,
  } = useApp();

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      {/* Header */}
      <header className="no-print flex items-center justify-between border-b border-emerald-100 bg-white px-5 py-3.5 md:px-10">
        <button
          onClick={() => setRole('home')}
          className="flex items-center gap-3 transition-opacity hover:opacity-85 text-left"
        >
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-200 bg-white p-1 shadow-sm">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <b className="block text-slate-900 leading-tight">SPS Qurrota A'yun</b>
            <span className="text-[11px] text-slate-400">Kota Bogor</span>
          </div>
        </button>
        <button
          onClick={() => setRole('home')}
          className="text-xs font-bold text-slate-500 transition-colors hover:text-slate-800"
        >
          Beranda
        </button>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-16">
        <Card className="animate-fade-in-up p-7 md:p-9">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
            <ClipboardList size={28} />
          </div>

          <h1 className="mt-5 text-2xl font-extrabold">
            Cek status pendaftaran
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Masukkan nomor pendaftaran untuk melihat perkembangan proses
            seleksi.
          </p>

          {/* Search form */}
          <form
            onSubmit={checkStatus}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={statusQuery}
              onChange={(e) => setStatusQuery(e.target.value)}
              placeholder="Contoh: QA-2026-001"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm uppercase outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
            />
            <button className="rounded-xl bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-900">
              Periksa status
            </button>
          </form>

          {/* Result: found */}
          {statusResult && (
            <div className="animate-fade-in-up mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-emerald-700">
                    Nomor pendaftaran
                  </p>
                  <p className="mt-1 font-mono font-bold">
                    {statusResult.id}
                  </p>
                  <h3 className="mt-3 font-extrabold">{statusResult.name}</h3>
                </div>
                <Badge status={statusResult.status} />
              </div>
              <p className="mt-4 text-sm leading-6 text-emerald-900/80">
                {getStatusDescription(statusResult.status)}
              </p>
            </div>
          )}

          {/* Result: not found */}
          {statusResult === null && statusQuery && (
            <div className="animate-fade-in mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-600">
              Nomor belum ditemukan. Periksa kembali nomor pendaftaran.
            </div>
          )}

          <button
            onClick={() => setRole('home')}
            className="no-print mt-6 text-sm font-bold text-emerald-800 transition-colors hover:text-emerald-600"
          >
            ← Kembali ke beranda
          </button>
        </Card>
      </main>
    </div>
  );
}

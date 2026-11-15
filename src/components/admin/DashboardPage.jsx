import React from 'react';
import {
  Users,
  Clock3,
  BadgeCheck,
  CircleAlert,
  ChevronRight,
  ArrowRight,
  Sprout,
  FileCheck2,
  Megaphone,
  FileText,
  Settings,
} from 'lucide-react';
import { Badge, StatCard, Card } from '../ui/SharedComponents';
import { statuses } from '../../data/dummyData';
import { useApp } from '../../context/AppContext';

export default function DashboardPage() {
  const { applicants, stats, navigateAdmin, announcementSettings } = useApp();

  const statCards = [
    {
      label: 'Total Pendaftar',
      value: stats.total,
      sub: 'Tahun Ajaran 2027/2028',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      label: 'Menunggu Verifikasi',
      value: stats.menunggu,
      sub: 'Perlu ditinjau panitia',
      icon: Clock3,
      color: 'bg-sky-100 text-sky-700',
    },
    {
      label: 'Diterima (Lolos)',
      value: stats.diterima,
      sub: 'Siswa baru terkonfirmasi',
      icon: BadgeCheck,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      label: 'Perlu Perbaikan',
      value: stats.perbaikan,
      sub: 'Dokumen belum lengkap',
      icon: CircleAlert,
      color: 'bg-amber-100 text-amber-700',
    },
  ];

  return (
    <>
      {/* Welcome banner */}
      <div className="animate-fade-in-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-700 p-7 text-white md:p-9 shadow-lg">
        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[34px] border-white/10" />
        <div className="absolute right-28 top-20 h-28 w-28 rounded-full bg-lime-300/10 blur-2xl" />
        <div className="relative max-w-2xl">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">
            PANEL ADMINISTRATOR PPDB
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Selamat datang kembali,
            <br />
            Admin PPDB{' '}
            <span className="text-lime-300">PAUD Qurrota A'yun.</span>
          </h2>
          <p className="mt-3 max-w-xl text-xs leading-6 text-emerald-50/80 md:text-sm">
            Kelola pendaftaran masuk, lakukan verifikasi dokumen pendaftar, terbitkan pengumuman kelulusan, dan cetak laporan rekapitulasi.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <button
              onClick={() => navigateAdmin('Verifikasi')}
              className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-2.5 text-xs font-extrabold text-emerald-950 transition-all hover:bg-lime-200 hover:-translate-y-0.5"
            >
              <FileCheck2 size={16} /> Verifikasi Berkas ({stats.menunggu})
            </button>
            <button
              onClick={() => navigateAdmin('Data Pendaftar')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/20"
            >
              <Users size={16} /> Pengelolaan Data
            </button>
            <button
              onClick={() => navigateAdmin('Pengumuman')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/20"
            >
              <Megaphone size={16} /> Pengumuman Seleksi
            </button>
            <button
              onClick={() => navigateAdmin('Laporan')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/20"
            >
              <FileText size={16} /> Cetak Laporan
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-8 hidden opacity-20 lg:block">
          <Sprout size={170} />
        </div>
      </div>

      {/* Stat cards */}
      <div className="stagger grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Content grid */}
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Recent applicants */}
        <Card className="animate-fade-in-up p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-slate-900">Pendaftar Terbaru</h3>
              <p className="mt-1 text-xs text-slate-500">
                Aktivitas pendaftaran masuk yang tercatat di sistem
              </p>
            </div>
            <button
              onClick={() => navigateAdmin('Data Pendaftar')}
              className="text-xs font-bold text-emerald-700 transition-colors hover:text-emerald-500"
            >
              Lihat semua{' '}
              <ChevronRight className="inline" size={15} />
            </button>
          </div>
          <div className="space-y-3">
            {applicants.slice(0, 5).map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 font-bold text-emerald-800">
                  {a.name
                    .split(' ')
                    .slice(0, 2)
                    .map((x) => x[0])
                    .join('')}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-slate-900">{a.name}</p>
                  <p className="text-[11px] text-slate-400">
                    {a.id} · Wali: {a.parent} · {a.date}
                  </p>
                </div>
                <Badge status={a.status} />
              </div>
            ))}
          </div>
        </Card>

        {/* Process summary */}
        <Card className="animate-fade-in-up p-6" style={{ animationDelay: '100ms' }}>
          <div className="mb-5">
            <h3 className="font-extrabold text-slate-900">Ringkasan Status Seleksi</h3>
            <p className="mt-1 text-xs text-slate-500">
              Distribusi status verifikasi pendaftar
            </p>
          </div>
          {statuses.map((s, i) => {
            const n = applicants.filter((a) => a.status === s).length;
            const colors = [
              'bg-sky-400',
              'bg-amber-400',
              'bg-emerald-500',
              'bg-rose-400',
            ];
            return (
              <div key={s} className="mb-4 last:mb-0">
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">{s}</span>
                  <b className="text-slate-900">{n} siswa</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={
                      'h-full rounded-full transition-all duration-700 ' +
                      colors[i]
                    }
                    style={{
                      width:
                        (applicants.length
                          ? (n / applicants.length) * 100
                          : 0) + '%',
                    }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-6 rounded-2xl bg-emerald-50 p-4 border border-emerald-100 text-xs text-emerald-950">
            <p className="font-bold">Kapasitas Kuota PPDB:</p>
            <p className="mt-1 text-[11px] text-emerald-800">
              Total Kuota: <strong>60 Siswa</strong> • Diterima: <strong>{stats.diterima}</strong> • Sisa: <strong>{Math.max(0, 60 - stats.diterima)} bangku</strong>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

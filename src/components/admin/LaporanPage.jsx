import React, { useState } from 'react';
import {
  Printer,
  Users,
  Clock3,
  BadgeCheck,
  CircleAlert,
  Sprout,
  Filter,
} from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function LaporanPage() {
  const { applicants, stats } = useApp();
  const [reportFilter, setReportFilter] = useState('Semua');

  const filteredData = applicants.filter((a) => {
    if (reportFilter === 'Diterima') return a.status === 'Diterima';
    if (reportFilter === 'Menunggu') return a.status === 'Menunggu verifikasi';
    if (reportFilter === 'Perlu Perbaikan') return a.status === 'Perlu perbaikan';
    if (reportFilter === 'Ditolak') return a.status === 'Ditolak';
    return true;
  });

  const statCards = [
    { label: 'Total Pendaftar', value: stats.total, icon: Users, color: 'text-emerald-800' },
    { label: 'Diterima (Lolos)', value: stats.diterima, icon: BadgeCheck, color: 'text-emerald-700' },
    { label: 'Menunggu Verifikasi', value: stats.menunggu, icon: Clock3, color: 'text-sky-700' },
    { label: 'Perlu Perbaikan', value: stats.perbaikan, icon: CircleAlert, color: 'text-amber-700' },
  ];

  return (
    <>
      {/* Top action bar */}
      <div className="no-print flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-black text-slate-900">Laporan Rekapitulasi PPDB</h2>
          <p className="mt-1 text-xs text-slate-500">
            Laporan berkala hasil pendaftaran dan seleksi peserta didik baru PAUD Qurrota A'yun.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-900"
        >
          <Printer size={16} /> Cetak / Simpan sebagai PDF
        </button>
      </div>

      <Card className="animate-fade-in-up p-6 md:p-8">
        {/* Official Letterhead Header */}
        <div className="border-b-2 border-slate-900 pb-5 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-2xl border border-emerald-200 bg-white p-1 shadow-sm">
              <img src="/logo.png" alt="Logo SPS Qurrota A'yun" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">YAYASAN BIRU MADANI</p>
              <h1 className="text-xl font-black uppercase tracking-tight text-slate-900">
                SPS QURROTA A'YUN
              </h1>
              <p className="text-xs font-semibold text-slate-700">
                RW.003 KELURAHAN KEDUNG BADAK • KECAMATAN TANAH SAREAL, KOTA BOGOR
              </p>
              <p className="text-[11px] text-slate-500">
                Jl. K.H. Sholeh Iskandar, Perum Griya Cimanggu Indah C-14 • NPSN: 69908898 • Email: spsqurrotaayun6@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
              LAPORAN REKAPITULASI PENDAFTARAN MURID BARU (PPDB)
            </h2>
            <p className="text-xs text-slate-600">
              TAHUN AJARAN 2027/2028
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Bogor, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Filter bar (no-print) */}
        <div className="no-print my-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Filter size={14} /> Filter Laporan:
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {['Semua', 'Diterima', 'Menunggu', 'Perlu Perbaikan', 'Ditolak'].map((tab) => (
              <button
                key={tab}
                onClick={() => setReportFilter(tab)}
                className={
                  'rounded-lg px-3 py-1.5 font-bold transition-all ' +
                  (reportFilter === tab
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100')
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stat Summary */}
        <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statCards.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4"
            >
              <div className="flex items-center gap-2">
                <s.icon size={16} className={s.color} />
                <p className="text-xs font-semibold text-slate-500">{s.label}</p>
              </div>
              <p className="mt-1 text-2xl font-black text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Gender Breakdown Note */}
        <div className="mb-4 flex flex-wrap gap-4 text-xs text-slate-600">
          <span>
            Komposisi Gender: <strong>{stats.lakiLaki} Laki-laki</strong>,{' '}
            <strong>{stats.perempuan} Perempuan</strong>
          </span>
          <span>•</span>
          <span>
            Total Kapasitas Kuota: <strong>60 Siswa</strong> (Terisi: {stats.diterima})
          </span>
        </div>

        {/* Report Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-y-2 border-slate-900 uppercase tracking-wider text-slate-700">
              <tr>
                <th className="py-2.5 px-3 font-bold">No.</th>
                <th className="py-2.5 px-3 font-bold">No. Registrasi</th>
                <th className="py-2.5 px-3 font-bold">Nama Calon Siswa</th>
                <th className="py-2.5 px-3 font-bold">Gender</th>
                <th className="py-2.5 px-3 font-bold">Nama Orang Tua / Wali</th>
                <th className="py-2.5 px-3 font-bold">No. Telepon</th>
                <th className="py-2.5 px-3 font-bold">Status Akhir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredData.map((a, i) => (
                <tr key={a.id} className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 text-slate-500">{i + 1}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{a.id}</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">{a.name}</td>
                  <td className="py-2.5 px-3 text-slate-600">{a.gender}</td>
                  <td className="py-2.5 px-3 text-slate-700">{a.parent}</td>
                  <td className="py-2.5 px-3 text-slate-500">{a.phone}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={
                        'rounded-md px-2 py-0.5 text-[10px] font-black uppercase ' +
                        (a.status === 'Diterima'
                          ? 'bg-emerald-100 text-emerald-900'
                          : a.status === 'Perlu perbaikan'
                          ? 'bg-amber-100 text-amber-900'
                          : a.status === 'Ditolak'
                          ? 'bg-rose-100 text-rose-900'
                          : 'bg-sky-100 text-sky-900')
                      }
                    >
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-400">
              Tidak ada data yang sesuai dengan filter.
            </div>
          )}
        </div>

        {/* Official Signatures Section */}
        <div className="mt-12 grid grid-cols-2 text-center text-xs">
          <div>
            <p className="text-slate-500">Mengetahui,</p>
            <p className="font-bold text-slate-800">Kepala PAUD Qurrota A'yun</p>
            <div className="my-8 text-emerald-800 font-serif italic text-sm">
              (Tanda Tangan &amp; Stempel)
            </div>
            <p className="font-black text-slate-900 underline">Hj. Maryam Mahmud, M.Pd.</p>
            <p className="text-[11px] text-slate-400">NIP. 19780820 200212 2 001</p>
          </div>

          <div>
            <p className="text-slate-500">Jakarta, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="font-bold text-slate-800">Ketua Panitia PPDB</p>
            <div className="my-8 text-emerald-800 font-serif italic text-sm">
              (Tanda Tangan Panitia)
            </div>
            <p className="font-black text-slate-900 underline">Ustadzah Sarah, S.Pd.</p>
            <p className="text-[11px] text-slate-400">NIP. 19850412 201001 2 003</p>
          </div>
        </div>

        {/* Footer print note */}
        <div className="mt-8 border-t border-slate-100 pt-3 text-center text-[11px] text-slate-400">
          Dokumen Laporan Sistem Informasi PPDB PAUD Qurrota A'yun • Dihasilkan secara otomatis oleh sistem front-end prototype.
        </div>
      </Card>
    </>
  );
}

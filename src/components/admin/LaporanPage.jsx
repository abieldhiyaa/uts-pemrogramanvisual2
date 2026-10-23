import React from 'react';
import {
  Printer,
  Users,
  Clock3,
  BadgeCheck,
  CircleAlert,
} from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function LaporanPage() {
  const { applicants, stats } = useApp();

  const statCards = [
    { label: 'Total Pendaftar', value: stats.total, icon: Users },
    { label: 'Menunggu Verifikasi', value: stats.menunggu, icon: Clock3 },
    { label: 'Diterima', value: stats.diterima, icon: BadgeCheck },
    { label: 'Perlu Perbaikan', value: stats.perbaikan, icon: CircleAlert },
  ];

  return (
    <>
      <div className="no-print">
        <h2 className="text-xl font-extrabold">Laporan pendaftaran</h2>
        <p className="mt-1 text-sm text-slate-500">
          Ringkasan data pendaftar berdasarkan status.
        </p>
      </div>

      <Card className="animate-fade-in-up p-6">
        {/* Report header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-500">Laporan periode PPDB</p>
            <h3 className="mt-1 text-2xl font-extrabold">
              Tahun Ajaran 2027/2028
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Dibuat pada {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })} · Data demo
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-900"
          >
            <Printer size={16} /> Cetak / Simpan PDF
          </button>
        </div>

        {/* Stat summary */}
        <div className="my-6 grid gap-3 sm:grid-cols-4">
          {statCards.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-emerald-50 p-4 transition-all duration-200 hover:bg-emerald-100"
            >
              <div className="flex items-center gap-2">
                <s.icon size={16} className="text-emerald-700" />
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
              <p className="mt-2 text-2xl font-extrabold">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Report table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead>
              <tr className="border-b text-xs uppercase text-slate-400">
                <th className="py-3 font-bold">No.</th>
                <th className="py-3 font-bold">Nomor pendaftaran</th>
                <th className="py-3 font-bold">Nama peserta</th>
                <th className="py-3 font-bold">Orang tua</th>
                <th className="py-3 font-bold">Dokumen</th>
                <th className="py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((a, i) => (
                <tr key={a.id} className="border-b border-slate-100">
                  <td className="py-3">{i + 1}</td>
                  <td className="py-3 font-mono text-xs">{a.id}</td>
                  <td className="py-3 font-semibold">{a.name}</td>
                  <td className="py-3">{a.parent}</td>
                  <td className="py-3">
                    <span
                      className={
                        'text-xs font-medium ' +
                        (a.docs === 'Lengkap'
                          ? 'text-emerald-700'
                          : 'text-amber-700')
                      }
                    >
                      {a.docs}
                    </span>
                  </td>
                  <td className="py-3">
                    <Badge status={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Print footer note */}
        <p className="mt-4 text-xs text-slate-400">
          Untuk menyimpan sebagai PDF, pilih "Save as PDF" pada dialog cetak
          browser.
        </p>

        {/* Print-only footer */}
        <div className="print-only mt-6 border-t pt-4 text-xs text-slate-400">
          <p>Laporan PPDB PAUD Qurrota A'yun — Tahun Ajaran 2027/2028</p>
          <p>Dicetak dari sistem demo front-end. Bukan dokumen resmi.</p>
        </div>
      </Card>
    </>
  );
}

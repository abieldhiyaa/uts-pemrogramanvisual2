import React from 'react';
import { Search, Download, Filter, Eye } from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { statuses } from '../../data/dummyData';
import { useApp } from '../../context/AppContext';

export default function DataPendaftarPage() {
  const {
    applicants,
    filteredApplicants,
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    navigateAdmin,
    setSelectedApplicantId,
    setNotice,
  } = useApp();

  function viewApplicant(id) {
    setSelectedApplicantId(id);
    navigateAdmin('Verifikasi');
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-extrabold">Semua pendaftar</h2>
          <p className="mt-1 text-sm text-slate-500">
            Kelola dan telusuri data calon peserta didik.
          </p>
        </div>
        <button
          onClick={() => {
            setNotice('Data dummy siap diekspor melalui fitur Laporan.');
            navigateAdmin('Laporan');
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-900"
        >
          <Download size={16} /> Ekspor data
        </button>
      </div>

      <Card className="animate-fade-in-up overflow-hidden">
        {/* Search & filter bar */}
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-3 text-slate-400"
              size={18}
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama, nomor pendaftaran, atau orang tua..."
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-emerald-500"
          >
            <option>Semua status</option>
            {statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <button
            onClick={() => {
              setSearch('');
              setFilterStatus('Semua status');
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm transition-colors hover:bg-slate-50"
          >
            <Filter size={16} /> Reset
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                {[
                  'Calon peserta didik',
                  'Nomor pendaftaran',
                  'Tanggal',
                  'Dokumen',
                  'Status',
                  'Aksi',
                ].map((h) => (
                  <th key={h} className="px-5 py-4 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((a) => (
                <tr
                  key={a.id}
                  className="border-t border-slate-100 transition-colors hover:bg-emerald-50/40"
                >
                  <td className="px-5 py-4">
                    <p className="font-bold">{a.name}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Orang tua: {a.parent}
                    </p>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-600">
                    {a.id}
                  </td>
                  <td className="px-5 py-4 text-slate-500">{a.date}</td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        'text-sm font-medium ' +
                        (a.docs === 'Lengkap'
                          ? 'text-emerald-700'
                          : 'text-amber-700')
                      }
                    >
                      {a.docs}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <Badge status={a.status} />
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => viewApplicant(a.id)}
                      className="rounded-lg border border-emerald-200 p-2 text-emerald-800 transition-all duration-200 hover:bg-emerald-50 hover:shadow-sm"
                      title="Tinjau"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredApplicants.length === 0 && (
            <div className="p-10 text-center text-sm text-slate-500">
              Tidak ada pendaftar yang cocok.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-400">
          Menampilkan {filteredApplicants.length} dari {applicants.length} data
          dummy
        </div>
      </Card>
    </>
  );
}

import React, { useState } from 'react';
import {
  Search,
  Download,
  Filter,
  Eye,
  Trash2,
  FileCheck2,
  X,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { statuses, requiredDocs } from '../../data/dummyData';
import { useApp } from '../../context/AppContext';

export default function DataPendaftarPage() {
  const {
    applicants,
    filteredApplicants,
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    filterGender,
    setFilterGender,
    navigateAdmin,
    setSelectedApplicantId,
    deleteApplicant,
    setNotice,
  } = useApp();

  const [modalApplicant, setModalApplicant] = useState(null);

  function viewApplicant(id) {
    setSelectedApplicantId(id);
    navigateAdmin('Verifikasi');
  }

  function handleDelete(applicant) {
    if (window.confirm(`Hapus data pendaftar ${applicant.name} (${applicant.id})?`)) {
      deleteApplicant(applicant.id);
    }
  }

  return (
    <>
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-black text-slate-900">
            Pengelolaan Data Pendaftar
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Pencarian, filter status &amp; gender, inspeksi detail, dan manajemen pendaftar.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setNotice('Data pendaftar siap dicetak / diunduh pada modul Laporan.');
              navigateAdmin('Laporan');
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-900"
          >
            <Download size={15} /> Buka Laporan &amp; Ekspor
          </button>
        </div>
      </div>

      <Card className="animate-fade-in-up overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="grid gap-3 border-b border-slate-100 p-4 md:grid-cols-[1fr_auto_auto_auto]">
          <div className="relative">
            <Search
              className="absolute left-3.5 top-3 text-slate-400"
              size={17}
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama siswa, nomor registrasi, atau nama wali..."
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-xs outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none transition-all focus:border-emerald-500"
          >
            <option>Semua status</option>
            {statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none transition-all focus:border-emerald-500"
          >
            <option value="Semua">Semua Gender</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <button
            onClick={() => {
              setSearch('');
              setFilterStatus('Semua status');
              setFilterGender('Semua');
            }}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-50"
          >
            <Filter size={14} /> Reset
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-xs">
            <thead className="bg-slate-50 uppercase tracking-wider text-slate-400">
              <tr>
                {[
                  'Calon Peserta Didik',
                  'Nomor Pendaftaran',
                  'Gender',
                  'Tanggal Daftar',
                  'Dokumen',
                  'Status Seleksi',
                  'Aksi Manajemen',
                ].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredApplicants.map((a) => (
                <tr
                  key={a.id}
                  className="transition-colors hover:bg-emerald-50/40"
                >
                  <td className="px-5 py-4">
                    <p className="font-bold text-slate-900">{a.name}</p>
                    <p className="text-[11px] text-slate-400">
                      Wali: {a.parent} · {a.phone}
                    </p>
                  </td>
                  <td className="px-5 py-4 font-mono font-bold text-emerald-900">
                    {a.id}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{a.gender}</td>
                  <td className="px-5 py-4 text-slate-500">{a.date}</td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        'rounded-md px-2 py-0.5 text-[11px] font-bold ' +
                        (a.docs === 'Lengkap'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800')
                      }
                    >
                      {a.docs}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <Badge status={a.status} />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setModalApplicant(a)}
                        className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100"
                        title="Lihat Detail Lengkap"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        onClick={() => viewApplicant(a.id)}
                        className="rounded-lg border border-emerald-200 bg-emerald-50 p-2 text-emerald-800 transition-colors hover:bg-emerald-100"
                        title="Verifikasi Berkas"
                      >
                        <FileCheck2 size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(a)}
                        className="rounded-lg border border-rose-200 bg-rose-50 p-2 text-rose-700 transition-colors hover:bg-rose-100"
                        title="Hapus Data (Demo)"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredApplicants.length === 0 && (
            <div className="p-12 text-center text-xs text-slate-400">
              Tidak ada data calon peserta didik yang cocok dengan kriteria pencarian.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          <span>Menampilkan {filteredApplicants.length} dari {applicants.length} pendaftar (simulasi)</span>
          <span>PAUD Qurrota A'yun</span>
        </div>
      </Card>

      {/* Detail Modal */}
      {modalApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-800">
                  {modalApplicant.id}
                </span>
                <h3 className="mt-1 text-xl font-black text-slate-900">
                  {modalApplicant.name}
                </h3>
              </div>
              <button
                onClick={() => setModalApplicant(null)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              <div className="rounded-2xl bg-emerald-50/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-950">Status Seleksi Terkini:</span>
                  <Badge status={modalApplicant.status} />
                </div>
                {modalApplicant.verificationNote && (
                  <p className="mt-2 text-xs text-emerald-900">
                    <strong>Catatan:</strong> {modalApplicant.verificationNote}
                  </p>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Nama Panggilan</p>
                  <p className="mt-1 font-bold text-slate-800">{modalApplicant.nickname || '—'}</p>
                </div>
                <div className="rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Tempat &amp; Tanggal Lahir</p>
                  <p className="mt-1 font-bold text-slate-800">{modalApplicant.birth || '—'}</p>
                </div>
                <div className="rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Jenis Kelamin</p>
                  <p className="mt-1 font-bold text-slate-800">{modalApplicant.gender}</p>
                </div>
                <div className="rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Urutan Keluarga</p>
                  <p className="mt-1 font-bold text-slate-800">
                    Anak ke-{modalApplicant.childOrder || '1'} dari {modalApplicant.totalSiblings || '1'} bersaudara
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Tinggi &amp; Berat Badan</p>
                  <p className="mt-1 font-bold text-slate-800">
                    {modalApplicant.height ? `${modalApplicant.height} cm` : '—'} / {modalApplicant.weight ? `${modalApplicant.weight} kg` : '—'}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Hobi</p>
                  <p className="mt-1 font-bold text-slate-800">{modalApplicant.hobby || '—'}</p>
                </div>
                <div className="sm:col-span-2 rounded-xl border border-slate-100 p-3">
                  <p className="text-slate-400">Penyakit Berat yang Pernah Diderita</p>
                  <p className="mt-1 font-bold text-slate-800">{modalApplicant.medicalHistory || 'Tidak ada'}</p>
                </div>
              </div>

              {/* Data Orang Tua */}
              <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                <p className="font-bold text-slate-800 mb-2">Data Orang Tua / Wali:</p>
                <div className="grid gap-2 sm:grid-cols-2 text-slate-700">
                  <div>
                    <span className="text-slate-400 block">Ayah:</span>
                    <strong>{modalApplicant.father?.name || modalApplicant.parent}</strong>
                    <p className="text-[11px] text-slate-500">Pekerjaan: {modalApplicant.father?.job || '—'}</p>
                    <p className="text-[11px] text-slate-500">No Telp: {modalApplicant.father?.phone || modalApplicant.phone}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Ibu:</span>
                    <strong>{modalApplicant.mother?.name || '—'}</strong>
                    <p className="text-[11px] text-slate-500">Pekerjaan: {modalApplicant.mother?.job || '—'}</p>
                    <p className="text-[11px] text-slate-500">No Telp: {modalApplicant.mother?.phone || '—'}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 p-3">
                <p className="text-slate-400">Alamat Tempat Tinggal</p>
                <p className="mt-1 font-bold text-slate-800">{modalApplicant.address}</p>
              </div>

              <div className="rounded-xl border border-slate-100 p-3">
                <p className="font-bold text-slate-700 mb-2">Dokumen Terunggah:</p>
                <div className="space-y-1.5">
                  {requiredDocs.map((doc) => {
                    const hasFile = modalApplicant.files && modalApplicant.files[doc.key];
                    return (
                      <div key={doc.key} className="flex items-center justify-between py-1 border-b border-slate-50">
                        <span className="text-slate-600">{doc.label}</span>
                        <span className={hasFile ? 'font-bold text-emerald-700' : 'text-slate-400'}>
                          {hasFile ? `✓ ${modalApplicant.files[doc.key]}` : '— Belum diunggah'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2 border-t border-slate-100 pt-4">
              <button
                onClick={() => setModalApplicant(null)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  viewApplicant(modalApplicant.id);
                  setModalApplicant(null);
                }}
                className="rounded-xl bg-emerald-800 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-900"
              >
                Buka Verifikasi Berkas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

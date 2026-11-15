import React, { useState } from 'react';
import {
  Sprout,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  Printer,
  Calendar,
  MapPin,
  Phone,
  ArrowLeft,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function PengumumanPage() {
  const {
    applicants,
    announcementSettings,
    currentUser,
    setRole,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);

  // Accepted applicants
  const acceptedApplicants = applicants.filter((a) => a.status === 'Diterima');

  function handleSearch(e) {
    if (e) e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSelectedResult(null);
      return;
    }
    const found = applicants.find(
      (a) =>
        a.id.toLowerCase() === q ||
        a.name.toLowerCase().includes(q)
    );
    setSelectedResult(found || 'NOT_FOUND');
  }

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      {/* Header */}
      <header className="no-print flex items-center justify-between border-b border-emerald-100 bg-white px-5 py-3.5 md:px-12">
        <button
          onClick={() => (currentUser?.role === 'user' ? setRole('user-dashboard') : setRole('home'))}
          className="flex items-center gap-3 transition-opacity hover:opacity-85 text-left"
        >
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-200 bg-white p-1 shadow-sm">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 leading-tight">SPS Qurrota A'yun</span>
            <span className="ml-2 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
              Pengumuman Seleksi
            </span>
          </div>
        </button>

        <button
          onClick={() => (currentUser?.role === 'user' ? setRole('user-dashboard') : setRole('home'))}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition-colors hover:text-slate-800"
        >
          <ArrowLeft size={14} />
          {currentUser?.role === 'user' ? 'Kembali ke Dashboard' : 'Kembali ke Beranda'}
        </button>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 md:py-12 space-y-8">
        {/* Hero Banner */}
        <div className="no-print rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-800 p-6 text-white shadow-xl md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-emerald-200">
            <GraduationCap size={16} /> Hasil Seleksi PPDB Online
          </div>
          <h1 className="mt-3 text-2xl font-black md:text-3xl">
            {announcementSettings.title}
          </h1>
          <p className="mt-2 text-xs leading-6 text-emerald-100 md:text-sm">
            Selamat kepada calon peserta didik baru yang telah dinyatakan lolos seleksi penerimaan di PAUD Qurrota A'yun. Silakan periksa status dan panduan daftar ulang.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="mt-6 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ketik Nomor Registrasi (contoh: QA-2026-003) atau Nama Siswa..."
                className="w-full rounded-2xl bg-white py-3.5 pl-11 pr-4 text-xs font-medium text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-emerald-400/40"
              />
            </div>
            <button
              type="submit"
              className="rounded-2xl bg-lime-400 px-6 py-3.5 text-xs font-black text-emerald-950 shadow-md transition-all hover:bg-lime-300 active:scale-95"
            >
              Cari Hasil Seleksi
            </button>
          </form>
        </div>

        {/* Search Result Display */}
        {selectedResult && selectedResult !== 'NOT_FOUND' && (
          <div className="animate-fade-in-up">
            {selectedResult.status === 'Diterima' ? (
              /* Surat Keterangan Diterima Resmi */
              <Card className="p-6 md:p-10 border-2 border-emerald-300 bg-white shadow-xl">
                {/* Official Letterhead */}
                <div className="border-b-2 border-emerald-800 pb-5 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-2xl border border-emerald-200 bg-white p-1">
                      <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">YAYASAN BIRU MADANI</p>
                      <h2 className="text-xl font-black tracking-tight text-emerald-950">
                        SPS QURROTA A'YUN
                      </h2>
                      <p className="text-xs font-semibold text-slate-600">
                        RW.003 Kelurahan Kedung Badak • Kecamatan Tanah Sareal, Kota Bogor
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Jl. K.H. Sholeh Iskandar, Perum Griya Cimanggu Indah C-14 • NPSN: 69908898
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-6 text-center">
                  <span className="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-emerald-900">
                    SURAT KETERANGAN KELULUSAN SELEKSI
                  </span>
                  <p className="mt-2 font-mono text-xs text-slate-500">
                    Nomor: 045/PPDB-QA/I/2027
                  </p>
                </div>

                <p className="text-xs leading-6 text-slate-700">
                  Berdasarkan hasil verifikasi berkas dan seleksi administratif Panitia Penerimaan Peserta Didik Baru (PPDB) PAUD Qurrota A'yun Tahun Ajaran 2027/2028, dengan ini menerangkan bahwa:
                </p>

                <div className="my-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-xs">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-emerald-100/60">
                        <td className="py-1.5 w-48 font-bold text-slate-600">Nomor Registrasi</td>
                        <td className="py-1.5 font-mono font-bold text-emerald-900">: {selectedResult.id}</td>
                      </tr>
                      <tr className="border-b border-emerald-100/60">
                        <td className="py-1.5 font-bold text-slate-600">Nama Lengkap Siswa</td>
                        <td className="py-1.5 font-bold text-slate-900">: {selectedResult.name}</td>
                      </tr>
                      <tr className="border-b border-emerald-100/60">
                        <td className="py-1.5 font-bold text-slate-600">Jenis Kelamin</td>
                        <td className="py-1.5 text-slate-800">: {selectedResult.gender}</td>
                      </tr>
                      <tr className="border-b border-emerald-100/60">
                        <td className="py-1.5 font-bold text-slate-600">Nama Orang Tua / Wali</td>
                        <td className="py-1.5 text-slate-800">: {selectedResult.parent}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-bold text-slate-600">Keputusan Seleksi</td>
                        <td className="py-2">
                          <span className="rounded-md bg-emerald-700 px-2.5 py-1 text-xs font-black text-white">
                            DINYATAKAN DITERIMA
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Re-Registration Instructions */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs space-y-2">
                  <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Sparkles size={15} className="text-amber-500" /> Informasi &amp; Jadwal Daftar Ulang:
                  </p>
                  <p className="text-slate-600">
                    <strong>Jadwal:</strong> {announcementSettings.reRegistrationPeriod}
                  </p>
                  <p className="text-slate-600">
                    <strong>Lokasi:</strong> {announcementSettings.reRegistrationPlace}
                  </p>
                  <p className="text-slate-600">
                    <strong>Persyaratan Dibawa:</strong> Membawa cetak surat kelulusan ini, fotokopi Akta &amp; KK, dan pas foto 3x4 (2 lembar).
                  </p>
                </div>

                {/* Signature preview */}
                <div className="mt-8 flex justify-end text-right text-xs">
                  <div>
                    <p className="text-slate-500">Jakarta, {announcementSettings.announcementDate}</p>
                    <p className="font-bold text-slate-800 mt-0.5">Ketua Panitia PPDB,</p>
                    <div className="my-3 text-emerald-800 font-serif italic text-sm">
                      (Tanda Tangan Digital)
                    </div>
                    <p className="font-black text-slate-900">Ustadzah Sarah, S.Pd.</p>
                    <p className="text-[11px] text-slate-400">NIP. 19850412 201001 2 003</p>
                  </div>
                </div>

                {/* Print button */}
                <div className="no-print mt-6 flex justify-center">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-emerald-900"
                  >
                    <Printer size={16} /> Cetak Surat Keterangan Diterima
                  </button>
                </div>
              </Card>
            ) : (
              /* Status Not Yet Accepted */
              <Card className="p-6 md:p-8">
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-400">{selectedResult.id}</span>
                    <h3 className="mt-1 text-xl font-black text-slate-900">{selectedResult.name}</h3>
                  </div>
                  <Badge status={selectedResult.status} />
                </div>
                <div className="mt-4 text-xs leading-6 text-slate-600">
                  <p>
                    <strong>Status:</strong> {selectedResult.status}
                  </p>
                  <p className="mt-1">
                    <strong>Catatan:</strong> {selectedResult.verificationNote || 'Data sedang diproses oleh pihak panitia.'}
                  </p>
                </div>
              </Card>
            )}
          </div>
        )}

        {selectedResult === 'NOT_FOUND' && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-center text-xs text-rose-800 animate-fade-in">
            Data dengan nomor atau nama tersebut tidak ditemukan. Mohon periksa kembali ejaan pencarian Anda.
          </div>
        )}

        {/* Public List of Accepted Applicants */}
        <Card className="p-6 md:p-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-black text-slate-900">
                Daftar Calon Siswa Diterima
              </h2>
              <p className="text-xs text-slate-500">
                Total {acceptedApplicants.length} peserta didik dinyatakan lolos seleksi penerimaan.
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-800">
              Tahun Ajaran 2027/2028
            </span>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-3 px-4 font-bold">No.</th>
                  <th className="py-3 px-4 font-bold">No. Pendaftaran</th>
                  <th className="py-3 px-4 font-bold">Nama Calon Siswa</th>
                  <th className="py-3 px-4 font-bold">Jenis Kelamin</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold no-print">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {acceptedApplicants.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3 px-4 text-slate-500">{idx + 1}</td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-900">{item.id}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3 px-4 text-slate-600">{item.gender}</td>
                    <td className="py-3 px-4">
                      <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-black text-emerald-800">
                        DITERIMA
                      </span>
                    </td>
                    <td className="py-3 px-4 no-print">
                      <button
                        onClick={() => setSelectedResult(item)}
                        className="rounded-lg border border-emerald-200 bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-800 hover:bg-emerald-50"
                      >
                        Buka Surat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  FileText,
  Clock,
  Save,
  User,
} from 'lucide-react';
import { Badge, Card, EmptyState } from '../ui/SharedComponents';
import { statuses, requiredDocs } from '../../data/dummyData';
import { useApp } from '../../context/AppContext';

export default function VerifikasiPage() {
  const {
    applicants,
    selectedApplicantId,
    setSelectedApplicantId,
    updateVerification,
  } = useApp();

  const [filterVerif, setFilterVerif] = useState('Semua');
  const selected = applicants.find((a) => a.id === selectedApplicantId) || applicants[0];

  const [currentStatus, setCurrentStatus] = useState('Menunggu verifikasi');
  const [note, setNote] = useState('');
  const [docChecks, setDocChecks] = useState({
    akta: true,
    kk: true,
    foto: true,
  });

  // Sync state when selected applicant changes
  useEffect(() => {
    if (selected) {
      setCurrentStatus(selected.status);
      setNote(selected.verificationNote || '');
      setDocChecks({
        akta: Boolean(selected.files?.akta),
        kk: Boolean(selected.files?.kk),
        foto: Boolean(selected.files?.foto),
      });
    }
  }, [selectedApplicantId, selected]);

  function handleSaveVerification() {
    if (!selected) return;
    const allDocsValid = docChecks.akta && docChecks.kk && docChecks.foto;
    const docsStatus = allDocsValid ? 'Lengkap' : 'Belum lengkap';
    updateVerification(selected.id, currentStatus, note, docsStatus);
  }

  const filteredList = applicants.filter((a) => {
    if (filterVerif === 'Menunggu') return a.status === 'Menunggu verifikasi';
    if (filterVerif === 'Perlu Perbaikan') return a.status === 'Perlu perbaikan';
    if (filterVerif === 'Diterima') return a.status === 'Diterima';
    return true;
  });

  return (
    <>
      <div>
        <h2 className="text-xl font-black text-slate-900">
          Verifikasi Data &amp; Dokumen Pendaftar
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Periksa keabsahan berkas fisik/digital, beri catatan perbaikan, dan tetapkan keputusan seleksi.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        {/* Left: Applicant List */}
        <Card className="animate-fade-in-up p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-700">Daftar Antrean Berkas</span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">
              {filteredList.length} Pendaftar
            </span>
          </div>

          {/* Quick tab filter */}
          <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 text-xs">
            {['Semua', 'Menunggu', 'Perlu Perbaikan', 'Diterima'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterVerif(tab)}
                className={
                  'whitespace-nowrap rounded-lg px-2.5 py-1 font-bold transition-colors ' +
                  (filterVerif === tab
                    ? 'bg-emerald-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200')
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-3 max-h-[460px] space-y-2.5 overflow-y-auto pr-1">
            {filteredList.map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedApplicantId(a.id)}
                className={
                  'flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-200 ' +
                  (selected?.id === a.id
                    ? 'border-emerald-400 bg-emerald-50/70 shadow-sm'
                    : 'border-slate-100 bg-white hover:bg-slate-50')
                }
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-100 font-black text-emerald-800">
                  {a.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className="truncate text-xs font-bold text-slate-900">{a.name}</p>
                    <Badge status={a.status} />
                  </div>
                  <p className="font-mono text-[11px] text-slate-400">{a.id} · Wali: {a.parent}</p>
                </div>
                <ChevronRight size={15} className="shrink-0 text-slate-300" />
              </button>
            ))}

            {filteredList.length === 0 && (
              <div className="py-8 text-center text-xs text-slate-400">
                Tidak ada pendaftar pada filter ini.
              </div>
            )}
          </div>
        </Card>

        {/* Right: Verification Workplace Panel */}
        <Card className="animate-slide-in-right p-6">
          {selected ? (
            <>
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-800">
                    {selected.id}
                  </span>
                  <h3 className="mt-1 text-xl font-black text-slate-900">
                    {selected.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Terdaftar: {selected.date} · Usia: {selected.age || '4 tahun'}
                  </p>
                </div>
                <Badge status={currentStatus} />
              </div>

              {/* Data Summary Grid */}
              <div className="my-5 grid grid-cols-2 gap-2.5 text-xs">
                <div className="rounded-xl bg-slate-50 p-2.5">
                  <p className="text-slate-400">Nama Panggilan</p>
                  <p className="mt-0.5 font-bold text-slate-800">{selected.nickname || selected.name}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-2.5">
                  <p className="text-slate-400">Tempat &amp; Tanggal Lahir</p>
                  <p className="mt-0.5 font-bold text-slate-800">{selected.birth || '—'}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-2.5">
                  <p className="text-slate-400">Tinggi / Berat Badan</p>
                  <p className="mt-0.5 font-bold text-slate-800">
                    {selected.height ? `${selected.height} cm` : '—'} / {selected.weight ? `${selected.weight} kg` : '—'}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-2.5">
                  <p className="text-slate-400">Riwayat Penyakit Berat</p>
                  <p className="mt-0.5 font-bold text-slate-800">{selected.medicalHistory || 'Tidak ada'}</p>
                </div>
                <div className="col-span-2 rounded-xl bg-slate-50 p-2.5">
                  <p className="text-slate-400">Orang Tua (Ayah / Ibu)</p>
                  <p className="mt-0.5 font-bold text-slate-800">
                    {selected.father?.name ? `Ayah: ${selected.father.name}` : ''} {selected.mother?.name ? `• Ibu: ${selected.mother.name}` : `• Wali: ${selected.parent}`}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Kontak: {selected.phone}</p>
                </div>
                <div className="col-span-2 rounded-xl bg-slate-50 p-2.5">
                  <p className="text-slate-400">Alamat Tempat Tinggal</p>
                  <p className="mt-0.5 font-medium text-slate-700">{selected.address}</p>
                </div>
              </div>

              {/* Document Checklist & Inspection */}
              <div className="rounded-2xl border border-slate-100 p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Checklist Verifikasi Dokumen:
                </p>
                <div className="mt-3 space-y-2 text-xs">
                  {[
                    { key: 'akta', label: 'Akta Kelahiran' },
                    { key: 'kk', label: 'Kartu Keluarga (KK)' },
                    { key: 'foto', label: 'Pas Foto Anak' },
                  ].map((doc) => {
                    const hasFile = selected.files && selected.files[doc.key];
                    const isChecked = docChecks[doc.key];
                    return (
                      <div
                        key={doc.key}
                        className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) =>
                              setDocChecks({
                                ...docChecks,
                                [doc.key]: e.target.checked,
                              })
                            }
                            className="h-4 w-4 rounded text-emerald-700 focus:ring-emerald-500"
                          />
                          <div>
                            <span className="font-bold text-slate-800">{doc.label}</span>
                            <span className="ml-2 font-mono text-[11px] text-slate-400">
                              ({hasFile || 'tidak ada berkas'})
                            </span>
                          </div>
                        </div>
                        <span
                          className={
                            'font-bold text-[11px] ' +
                            (isChecked ? 'text-emerald-700' : 'text-amber-700')
                          }
                        >
                          {isChecked ? 'Terverifikasi Sesuai' : 'Perlu Diperbaiki'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Update & Decision */}
              <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4">
                <p className="text-xs font-extrabold text-emerald-950">
                  Keputusan Status Pendaftaran:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setCurrentStatus(s)}
                      className={
                        'rounded-xl py-2 px-2 text-xs font-bold transition-all ' +
                        (currentStatus === s
                          ? 'bg-emerald-800 text-white shadow-md'
                          : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50')
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Verifier Note */}
                <div className="mt-4">
                  <label htmlFor="verif-note" className="block text-xs font-bold text-slate-700">
                    Catatan Verifikator untuk Orang Tua / Wali:
                  </label>
                  <textarea
                    id="verif-note"
                    rows="3"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Contoh: Seluruh berkas lengkap / Mohon unggah ulang KK yang lebih jelas..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-xs outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">
                    Catatan ini akan langsung tampil pada Dashboard User dan halaman pengumuman seleksi.
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveVerification}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-900"
                  >
                    <Save size={15} /> Simpan Hasil Verifikasi
                  </button>
                </div>
              </div>
            </>
          ) : (
            <EmptyState
              icon={FileCheck2}
              title="Pilih pendaftar untuk diverifikasi"
              description="Pilih salah satu calon peserta didik dari antrean sebelah kiri."
            />
          )}
        </Card>
      </div>
    </>
  );
}

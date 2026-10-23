import React from 'react';
import { ChevronRight, CheckCircle2, FileCheck2 } from 'lucide-react';
import { Badge, Card, EmptyState } from '../ui/SharedComponents';
import { statuses, requiredDocs } from '../../data/dummyData';
import { useApp } from '../../context/AppContext';

export default function VerifikasiPage() {
  const {
    applicants,
    selectedApplicantId,
    setSelectedApplicantId,
    updateApplicantStatus,
  } = useApp();

  const selected = applicants.find((a) => a.id === selectedApplicantId);

  return (
    <>
      <div>
        <h2 className="text-xl font-extrabold">Verifikasi pendaftaran</h2>
        <p className="mt-1 text-sm text-slate-500">
          Tinjau data dan ubah status pendaftaran.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        {/* Left: applicant list */}
        <Card className="animate-fade-in-up p-5">
          <label
            htmlFor="select-applicant"
            className="mb-3 block text-sm font-bold"
          >
            Pilih pendaftar
          </label>
          <select
            id="select-applicant"
            value={selectedApplicantId}
            onChange={(e) => setSelectedApplicantId(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
          >
            <option value="">Pilih nomor pendaftaran</option>
            {applicants.map((a) => (
              <option key={a.id} value={a.id}>
                {a.id} — {a.name}
              </option>
            ))}
          </select>

          <div className="mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1">
            {applicants.map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedApplicantId(a.id)}
                className={
                  'flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200 ' +
                  (selectedApplicantId === a.id
                    ? 'border-emerald-400 bg-emerald-50 shadow-sm'
                    : 'border-slate-100 hover:bg-slate-50')
                }
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-100 font-bold text-emerald-800">
                  {a.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{a.name}</p>
                  <p className="text-xs text-slate-400">{a.id}</p>
                </div>
                <ChevronRight size={16} className="shrink-0 text-slate-300" />
              </button>
            ))}
          </div>
        </Card>

        {/* Right: detail panel */}
        <Card className="animate-slide-in-right p-6">
          {selected ? (
            <>
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-xl font-extrabold text-emerald-800">
                    {selected.name
                      .split(' ')
                      .map((x) => x[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold">
                    {selected.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-slate-400">
                    {selected.id}
                  </p>
                </div>
                <Badge status={selected.status} />
              </div>

              {/* Info grid */}
              <div className="my-6 grid grid-cols-2 gap-3">
                {[
                  ['Orang tua / wali', selected.parent],
                  ['Nomor telepon', selected.phone],
                  ['Usia', selected.age],
                  ['Dokumen', selected.docs],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">{k}</p>
                    <p className="mt-1 text-sm font-bold">{v}</p>
                  </div>
                ))}
              </div>

              {/* Status update */}
              <div className="rounded-xl border border-emerald-100 p-4">
                <p className="mb-3 text-sm font-bold">
                  Perbarui status pendaftaran
                </p>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() =>
                        updateApplicantStatus(selected.id, s)
                      }
                      className={
                        'rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 ' +
                        (selected.status === s
                          ? 'bg-emerald-800 text-white shadow-md'
                          : 'border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-300')
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-400">
                  Demo: perubahan status hanya tersimpan selama sesi browser
                  ini.
                </p>
              </div>

              {/* Document checklist */}
              <div className="mt-4 space-y-2">
                <p className="text-sm font-bold">
                  Checklist dokumen (simulasi)
                </p>
                {requiredDocs.map((d, i) => {
                  const hasDoc =
                    selected.docs === 'Lengkap' ||
                    (selected.files && selected.files[d.key]) ||
                    i < 1;
                  return (
                    <div
                      key={d.key}
                      className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm"
                    >
                      <CheckCircle2
                        size={17}
                        className={
                          hasDoc ? 'text-emerald-600' : 'text-slate-300'
                        }
                      />
                      {d.label}
                      <span className="ml-auto text-xs text-slate-400">
                        {hasDoc ? 'Tersedia' : 'Perlu dilengkapi'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <EmptyState
              icon={FileCheck2}
              title="Pilih pendaftar untuk ditinjau"
              description="Informasi dan status akan tampil di sini."
            />
          )}
        </Card>
      </div>
    </>
  );
}

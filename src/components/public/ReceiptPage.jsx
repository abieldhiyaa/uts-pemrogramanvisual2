import React from 'react';
import { CheckCircle2, Printer } from 'lucide-react';
import { Badge } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function ReceiptPage() {
  const {
    createdApplicant,
    setRole,
    setFormStep,
    setStatusQuery,
    setStatusResult,
  } = useApp();

  if (!createdApplicant) return null;

  return (
    <div className="grid min-h-screen place-items-center bg-[#f5faf6] p-4">
      <div className="animate-scale-in w-full max-w-xl rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-sm md:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 size={34} />
        </div>

        <h1 className="mt-5 text-2xl font-extrabold">
          Pendaftaran berhasil dikirim!
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Simpan bukti pendaftaran berikut untuk pengecekan status selanjutnya.
        </p>

        {/* Receipt card */}
        <div className="my-7 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Nomor pendaftaran
          </p>
          <p className="mt-2 text-2xl font-extrabold tracking-wide text-emerald-950">
            {createdApplicant.id}
          </p>
          <div className="my-4 h-px bg-emerald-200" />
          <p className="font-bold">{createdApplicant.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            PAUD Qurrota A'yun · TA {createdApplicant.schoolYear || '2027/2028'}
          </p>
          <div className="mt-4">
            <Badge status={createdApplicant.status} />
          </div>
        </div>

        {/* Print-only full receipt */}
        <div className="print-only mb-6 text-left text-sm">
          <h2 className="mb-3 text-lg font-bold">Bukti Pendaftaran PPDB</h2>
          <p><strong>Nomor:</strong> {createdApplicant.id}</p>
          <p><strong>Nama:</strong> {createdApplicant.name}</p>
          <p><strong>Orang tua:</strong> {createdApplicant.parent}</p>
          <p><strong>Telepon:</strong> {createdApplicant.phone}</p>
          <p><strong>Tanggal:</strong> {createdApplicant.date}</p>
          <p><strong>Status:</strong> {createdApplicant.status}</p>
          <p className="mt-4 text-xs text-slate-400">
            Dokumen ini dicetak dari sistem PPDB PAUD Qurrota A'yun (demo).
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="no-print inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-900"
        >
          <Printer size={17} /> Cetak bukti pendaftaran
        </button>

        <div className="no-print mt-3">
          <button
            onClick={() => {
              setRole('status');
              setStatusQuery(createdApplicant.id);
              setStatusResult(createdApplicant);
            }}
            className="text-sm font-bold text-emerald-800 transition-colors hover:text-emerald-600"
          >
            Cek status pendaftaran
          </button>
        </div>

        <button
          onClick={() => {
            setRole('home');
            setFormStep(1);
          }}
          className="no-print mt-6 block w-full text-sm text-slate-400 transition-colors hover:text-slate-600"
        >
          Kembali ke beranda
        </button>
      </div>
    </div>
  );
}

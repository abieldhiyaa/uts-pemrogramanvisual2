import React from 'react';
import { CheckCircle2, Printer, LayoutDashboard, Home } from 'lucide-react';
import { Badge } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function ReceiptPage() {
  const {
    createdApplicant,
    currentUser,
    setRole,
    setFormStep,
    setStatusQuery,
    setStatusResult,
    schoolProfile,
  } = useApp();

  if (!createdApplicant) return null;

  return (
    <div className="grid min-h-screen place-items-center bg-[#f5faf6] p-4">
      <div className="animate-scale-in w-full max-w-xl rounded-3xl border border-emerald-100 bg-white p-7 text-center shadow-lg md:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-emerald-100 text-emerald-800 shadow-inner">
          <CheckCircle2 size={36} />
        </div>

        <h1 className="mt-5 text-2xl font-black text-slate-900">
          Pendaftaran Berhasil Dikirim!
        </h1>
        <p className="mt-2 text-xs leading-6 text-slate-500">
          Simpan dan cetak bukti pendaftaran murid baru resmi SPS Qurrota A'yun berikut.
        </p>

        {/* Printable Receipt Card */}
        <div className="my-6 rounded-3xl border border-dashed border-emerald-300 bg-emerald-50/70 p-6 text-left">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-200 bg-white p-1">
                <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block text-xs font-black text-emerald-950">
                  SPS QURROTA A'YUN
                </span>
                <span className="text-[10px] text-slate-500">
                  Yayasan Biru Madani • Kota Bogor
                </span>
              </div>
            </div>
            <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
              BUKTI PENDAFTARAN
            </span>
          </div>

          <div className="mt-4">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Nomor Pendaftaran
            </p>
            <p className="font-mono text-2xl font-black tracking-wide text-emerald-950">
              {createdApplicant.id}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400">Nama Calon Murid:</span>
              <p className="font-bold text-slate-900">
                {createdApplicant.name} ({createdApplicant.nickname})
              </p>
            </div>
            <div>
              <span className="text-slate-400">Tempat, Tgl Lahir:</span>
              <p className="font-bold text-slate-900">{createdApplicant.birth}</p>
            </div>
            <div>
              <span className="text-slate-400">Orang Tua / Wali:</span>
              <p className="font-bold text-slate-900">{createdApplicant.parent}</p>
            </div>
            <div>
              <span className="text-slate-400">Tahun Ajaran:</span>
              <p className="font-bold text-slate-900">
                {createdApplicant.schoolYear || '2027/2028'}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-emerald-200/60 pt-3">
            <span className="text-xs text-slate-500">Status Pendaftaran:</span>
            <Badge status={createdApplicant.status} />
          </div>
        </div>

        {/* Print-only layout (Sesuai dokumen formulir) */}
        <div className="print-only mb-6 text-left text-xs">
          <div className="flex items-center gap-4 border-b-2 border-slate-900 pb-3 text-center">
            <div className="w-20">
              <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain mx-auto" />
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-sm font-black uppercase">{schoolProfile.foundation}</h2>
              <h1 className="text-base font-black uppercase tracking-wider">{schoolProfile.name}</h1>
              <p className="text-[11px] text-slate-600">RW.003 KELURAHAN KEDUNG BADAK</p>
              <p className="text-[10px] text-slate-500">
                {schoolProfile.address}
              </p>
              <p className="text-[10px] text-slate-500">
                SK Yayasan: {schoolProfile.skYayasan} • NPSN: {schoolProfile.npsn} • Email: {schoolProfile.email}
              </p>
            </div>
          </div>

          <div className="my-4 text-center">
            <h3 className="font-black text-sm uppercase underline">
              FORMULIR PENDAFTARAN MURID BARU
            </h3>
            <p className="text-[11px] font-mono mt-1">No. Registrasi: {createdApplicant.id}</p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="font-bold uppercase border-b pb-0.5 mb-1.5 text-emerald-900">DATA ANAK</p>
              <table className="w-full">
                <tbody>
                  <tr><td className="w-48 py-0.5">Nama lengkap</td><td>: {createdApplicant.name}</td></tr>
                  <tr><td className="py-0.5">Nama panggilan</td><td>: {createdApplicant.nickname || '—'}</td></tr>
                  <tr><td className="py-0.5">Tempat / tanggal lahir</td><td>: {createdApplicant.birth || '—'}</td></tr>
                  <tr><td className="py-0.5">Jenis kelamin</td><td>: {createdApplicant.gender}</td></tr>
                  <tr><td className="py-0.5">Anak ke -</td><td>: {createdApplicant.childOrder} dari {createdApplicant.totalSiblings} bersaudara</td></tr>
                  <tr><td className="py-0.5">Tinggi / Berat badan</td><td>: {createdApplicant.height || '—'} cm / {createdApplicant.weight || '—'} kg</td></tr>
                  <tr><td className="py-0.5">Hobi</td><td>: {createdApplicant.hobby || '—'}</td></tr>
                  <tr><td className="py-0.5">Penyakit berat pernah diderita</td><td>: {createdApplicant.medicalHistory || 'Tidak ada'}</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <p className="font-bold uppercase border-b pb-0.5 mb-1.5 text-emerald-900">ORANG TUA / WALI</p>
              <table className="w-full">
                <tbody>
                  <tr><td className="w-48 py-0.5">Nama Ayah</td><td>: {createdApplicant.father?.name || createdApplicant.parent}</td></tr>
                  <tr><td className="py-0.5">Pekerjaan Ayah</td><td>: {createdApplicant.father?.job || '—'}</td></tr>
                  <tr><td className="py-0.5">No HP/Telp Ayah</td><td>: {createdApplicant.father?.phone || createdApplicant.phone}</td></tr>
                  <tr><td className="py-0.5">Nama Ibu</td><td>: {createdApplicant.mother?.name || '—'}</td></tr>
                  <tr><td className="py-0.5">Pekerjaan Ibu</td><td>: {createdApplicant.mother?.job || '—'}</td></tr>
                  <tr><td className="py-0.5">No HP/Telp Ibu</td><td>: {createdApplicant.mother?.phone || '—'}</td></tr>
                  <tr><td className="py-0.5">Alamat</td><td>: {createdApplicant.address}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex justify-end text-right text-xs">
            <div>
              <p>Bogor, {createdApplicant.date}</p>
              <p className="mt-1">Yang bertandatangan dibawah ini,</p>
              <div className="my-8 text-slate-300 italic text-[11px]">(Tanda Tangan)</div>
              <p className="font-bold underline">({createdApplicant.parent})</p>
              <p className="text-[10px] text-slate-500">Nama dan Tanda tangan orang tua/wali</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="no-print space-y-2">
          <button
            onClick={() => window.print()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-800 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-900/10 transition-all hover:bg-emerald-900"
          >
            <Printer size={16} /> Cetak Bukti Pendaftaran (PDF)
          </button>

          {currentUser?.role === 'user' ? (
            <button
              onClick={() => {
                setRole('user-dashboard');
                setFormStep(1);
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 py-3 text-xs font-bold text-emerald-900 transition-colors hover:bg-emerald-100"
            >
              <LayoutDashboard size={15} /> Buka Dashboard Saya
            </button>
          ) : (
            <button
              onClick={() => {
                setRole('status');
                setStatusQuery(createdApplicant.id);
                setStatusResult(createdApplicant);
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white py-3 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              Cek Status Pendaftaran
            </button>
          )}

          <button
            onClick={() => {
              setRole('home');
              setFormStep(1);
            }}
            className="inline-flex w-full items-center justify-center gap-2 pt-2 text-xs font-semibold text-slate-400 transition-colors hover:text-slate-600"
          >
            <Home size={13} /> Kembali ke Beranda Utama
          </button>
        </div>
      </div>
    </div>
  );
}

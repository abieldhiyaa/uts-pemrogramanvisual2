import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CalendarDays,
  Users,
  FileCheck2,
  LogIn,
} from 'lucide-react';
import { Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function LandingPage() {
  const { setRole, setAuthMode, startRegistration, announcement, schoolProfile } = useApp();

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="grid-bg relative border-b border-emerald-100/60 bg-gradient-to-b from-white via-emerald-50/20 to-[#f7fbf7]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.15fr_.85fr] md:px-12 md:py-20">
          {/* Left Column: Headline & Action */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Penerimaan Murid Baru TA 2027/2028
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              SPS Qurrota A'yun
              <span className="block text-emerald-800">Kota Bogor</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Pendidikan Anak Usia Dini yang ramah, berkarakter, dan islami. Tumbuh ceria, belajar bermakna bersama lingkungan belajar yang aman dan menyenangkan.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={startRegistration}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-800 px-6 py-3.5 text-xs font-black text-white shadow-lg shadow-emerald-900/15 transition-all hover:bg-emerald-900 active:scale-95"
              >
                Daftar Murid Baru <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  setAuthMode('login');
                  setRole('login');
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                <LogIn size={15} /> Masuk ke Akun
              </button>
            </div>

            <div className="mt-7 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
              <span>
                {schoolProfile.foundation} • NPSN: {schoolProfile.npsn}
              </span>
            </div>
          </div>

          {/* Right Column: Clean Logo Card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 text-center shadow-lg shadow-emerald-900/5">
              <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border-4 border-emerald-50 bg-white p-3 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Logo SPS Qurrota A'yun"
                  className="h-full w-full object-contain"
                />
              </div>

              <h2 className="mt-5 text-base font-black text-slate-900">
                SPS QURROTA A'YUN
              </h2>
              <p className="text-xs text-slate-500">
                Perum Griya Cimanggu Indah C-14
              </p>
              <p className="mt-1 text-[11px] font-semibold text-emerald-800">
                Kedung Badak, Tanah Sareal - Kota Bogor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Informasi Pendaftaran ─── */}
      <section id="informasi" className="mx-auto max-w-7xl px-5 py-14 md:px-12 md:py-16">
        <div className="text-center sm:text-left">
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            Informasi Pendaftaran
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
            Tahun Ajaran 2027/2028
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Ringkasan penting pelaksanaan pendaftaran murid baru.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card className="p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-800 mb-3">
              <CalendarDays size={20} />
            </div>
            <p className="text-xs text-slate-400">Periode Pendaftaran</p>
            <h3 className="mt-1 text-sm font-extrabold text-slate-900">
              {announcement.period}
            </h3>
          </Card>

          <Card className="p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime-100 text-lime-800 mb-3">
              <Users size={20} />
            </div>
            <p className="text-xs text-slate-400">Daya Tampung</p>
            <h3 className="mt-1 text-sm font-extrabold text-slate-900">
              {announcement.quota}
            </h3>
          </Card>

          <Card className="p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100 text-sky-800 mb-3">
              <FileCheck2 size={20} />
            </div>
            <p className="text-xs text-slate-400">Syarat Berkas</p>
            <h3 className="mt-1 text-sm font-extrabold text-slate-900">
              Akta Kelahiran, KK &amp; Foto
            </h3>
          </Card>
        </div>
      </section>

      {/* ─── Alur Pendaftaran ─── */}
      <section id="alur" className="border-t border-emerald-100 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="text-center sm:text-left">
            <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              Alur Pendaftaran
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Empat Langkah Mudah
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Tahapan pendaftaran dari awal hingga selesai.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Buat Akun', 'Daftarkan akun orang tua/wali murid untuk memulai.'],
              ['02', 'Isi Formulir', 'Lengkapi data calon murid dan orang tua sesuai berkas resmi.'],
              ['03', 'Unggah Berkas', 'Lampirkan Akta Kelahiran, Kartu Keluarga, dan pas foto.'],
              ['04', 'Pantau Status', 'Hasil verifikasi dan pengumuman dapat dipantau di akun Anda.'],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                className="rounded-2xl border border-slate-100 bg-[#f9fbf9] p-5"
              >
                <span className="text-2xl font-black text-emerald-300">{num}</span>
                <h3 className="mt-2 text-sm font-extrabold text-slate-900">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Clean CTA */}
          <div className="mt-12 rounded-3xl bg-emerald-900 p-6 text-white md:flex md:items-center md:justify-between md:p-8">
            <div>
              <h3 className="text-lg font-extrabold md:text-xl">
                Siap Mendaftarkan Ananda?
              </h3>
              <p className="mt-1 text-xs text-emerald-100/80">
                Pendaftaran wajib membuat akun orang tua terlebih dahulu.
              </p>
            </div>
            <button
              onClick={startRegistration}
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-6 py-3 text-xs font-black text-emerald-950 transition-all hover:bg-lime-300 md:mt-0"
            >
              Mulai Pendaftaran <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

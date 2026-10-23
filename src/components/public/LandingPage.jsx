import React from 'react';
import {
  Sprout,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Users,
  FileCheck2,
  GraduationCap,
  Leaf,
} from 'lucide-react';
import { Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function LandingPage() {
  const { setRole, setFormStep, announcement } = useApp();

  return (
    <>
      {/* ─── Hero section ─── */}
      <section className="grid-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-[#f7fbf7]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-12 md:py-24">
          {/* Left column */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-500" />
              Pendaftaran Tahun Ajaran 2027/2028 Dibuka
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-slate-900 md:text-6xl">
              Awal perjalanan hebat dimulai dari{' '}
              <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                langkah kecil.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              {announcement.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setRole('apply');
                  setFormStep(1);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3.5 font-bold text-white shadow-xl shadow-emerald-900/15 transition-all duration-200 hover:bg-emerald-900 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Mulai pendaftaran <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setRole('status')}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-6 py-3.5 font-bold text-emerald-800 transition-all duration-200 hover:bg-emerald-50 hover:-translate-y-0.5"
              >
                Cek status <ArrowUpRight size={17} />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-700" />
                Pendaftaran mudah &amp; aman
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-700" />
                Pantau status online
              </span>
            </div>
          </div>

          {/* Right column — hero illustration */}
          <div className="relative mx-auto w-full max-w-lg" style={{ animationDelay: '200ms' }}>
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-lime-200/60 to-emerald-200/60 blur-2xl" />
            <div className="animate-fade-in-up relative overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-emerald-100 via-lime-50 to-white p-6 shadow-2xl shadow-emerald-900/10">
              <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-emerald-800">
                <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Pendaftaran dibuka
              </div>

              <div className="grid min-h-[340px] place-items-center">
                <div className="relative">
                  <div className="animate-float grid h-48 w-48 place-items-center rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 shadow-2xl shadow-emerald-900/30">
                    <div className="grid h-36 w-36 place-items-center rounded-full border border-white/20 bg-white/10 text-lime-200">
                      <Sprout size={94} strokeWidth={1.2} />
                    </div>
                  </div>
                  <div className="absolute -left-12 top-8 animate-fade-in rounded-2xl border border-white bg-white p-3 shadow-lg" style={{ animationDelay: '400ms' }}>
                    <GraduationCap className="text-emerald-700" size={26} />
                  </div>
                  <div className="absolute -right-10 bottom-7 animate-fade-in rounded-2xl border border-white bg-white p-3 shadow-lg" style={{ animationDelay: '600ms' }}>
                    <Leaf className="text-lime-600" size={25} />
                  </div>
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 animate-fade-in whitespace-nowrap rounded-xl border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-emerald-900 shadow-lg" style={{ animationDelay: '500ms' }}>
                    Bertumbuh bersama 🌱
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-emerald-100 pt-5 text-center">
                <div>
                  <p className="text-lg font-extrabold text-emerald-900">Aman</p>
                  <p className="text-xs text-slate-500">Lingkungan ramah</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-emerald-900">Aktif</p>
                  <p className="text-xs text-slate-500">Belajar sambil bermain</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-emerald-900">Ceria</p>
                  <p className="text-xs text-slate-500">Tumbuh percaya diri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Info PPDB section ─── */}
      <section
        id="tentang"
        className="mx-auto max-w-7xl px-5 py-14 md:px-12 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-700">
              Informasi PPDB
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Semua informasi,
              <br />
              dalam satu tempat.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Orang tua dapat melakukan pendaftaran secara online, mengunggah
            dokumen persyaratan, dan memantau status tanpa harus datang
            berulang kali ke sekolah.
          </p>
        </div>

        <div className="stagger mt-9 grid gap-4 md:grid-cols-3">
          <Card className="animate-fade-in-up p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
              <CalendarDays />
            </div>
            <p className="text-sm text-slate-500">Periode pendaftaran</p>
            <h3 className="mt-2 text-lg font-extrabold">
              {announcement.period}
            </h3>
          </Card>

          <Card className="animate-fade-in-up p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-lime-100 text-lime-800">
              <Users />
            </div>
            <p className="text-sm text-slate-500">Kuota pendaftaran</p>
            <h3 className="mt-2 text-lg font-extrabold">
              {announcement.quota}
            </h3>
          </Card>

          <Card className="animate-fade-in-up p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-sky-800">
              <FileCheck2 />
            </div>
            <p className="text-sm text-slate-500">Persyaratan utama</p>
            <h3 className="mt-2 text-lg font-extrabold">
              Akta, KK, dan pas foto
            </h3>
          </Card>
        </div>
      </section>

      {/* ─── Alur pendaftaran ─── */}
      <section
        id="alur"
        className="border-y border-emerald-100 bg-white py-14 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-700">
              Alur pendaftaran
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Empat langkah sederhana
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Dari mengisi formulir hingga mengetahui hasilnya.
            </p>
          </div>

          <div className="stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Isi formulir', 'Lengkapi data anak dan orang tua.'],
              ['02', 'Unggah dokumen', 'Siapkan dokumen persyaratan.'],
              ['03', 'Verifikasi admin', 'Sekolah memeriksa data pendaftaran.'],
              ['04', 'Cek hasil', 'Pantau status melalui nomor pendaftaran.'],
            ].map(([n, t, d]) => (
              <div
                key={n}
                className="animate-fade-in-up rounded-2xl border border-emerald-100 bg-[#f8fcf8] p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                <p className="text-3xl font-black text-emerald-200">{n}</p>
                <h3 className="mt-4 font-extrabold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{d}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-emerald-900 p-7 text-white md:flex md:items-center md:justify-between md:p-9">
            <div>
              <h3 className="text-2xl font-extrabold">
                Siap memulai langkah pertama?
              </h3>
              <p className="mt-2 text-sm text-emerald-100/80">
                Daftarkan calon peserta didik dengan mudah secara online.
              </p>
            </div>
            <button
              onClick={() => {
                setRole('apply');
                setFormStep(1);
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-bold text-emerald-950 transition-all duration-200 hover:bg-lime-200 hover:-translate-y-0.5 md:mt-0"
            >
              Daftar sekarang <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

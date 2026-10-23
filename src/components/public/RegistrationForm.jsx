import React from 'react';
import {
  Sprout,
  ArrowRight,
  Upload,
  ShieldCheck,
} from 'lucide-react';
import { Field } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function RegistrationForm() {
  const {
    setRole,
    formStep,
    setFormStep,
    form,
    updateFormField,
    files,
    setFiles,
    submitRegistration,
  } = useApp();

  function handleSubmit(e) {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      submitRegistration();
    }
  }

  const steps = ['Data anak', 'Data orang tua', 'Dokumen'];

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      {/* Header */}
      <header className="no-print flex items-center justify-between border-b border-emerald-100 bg-white px-5 py-4 md:px-10">
        <button
          onClick={() => setRole('home')}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-800 text-white">
            <Sprout />
          </div>
          <span className="font-extrabold">
            Qurrota A'yun{' '}
            <span className="font-normal text-slate-400">/ PPDB</span>
          </span>
        </button>
        <button
          onClick={() => setRole('home')}
          className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700"
        >
          Kembali ke beranda
        </button>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* Title */}
        <div className="animate-fade-in-up mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Pendaftaran online
          </span>
          <h1 className="mt-2 text-3xl font-extrabold">
            Formulir calon peserta didik
          </h1>
          <p className="mt-2 text-slate-500">
            Lengkapi informasi berikut dengan benar. Kolom bertanda * wajib
            diisi.
          </p>
        </div>

        {/* Step indicator */}
        <div className="mb-8 flex items-center gap-3">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex items-center gap-2">
                <div
                  className={
                    'grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition-all duration-300 ' +
                    (formStep >= i + 1
                      ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                      : 'bg-slate-200 text-slate-500')
                  }
                >
                  {formStep > i + 1 ? '✓' : i + 1}
                </div>
                <span
                  className={
                    'hidden text-sm font-semibold sm:inline ' +
                    (formStep === i + 1
                      ? 'text-emerald-800'
                      : formStep > i + 1
                      ? 'text-emerald-600'
                      : 'text-slate-400')
                  }
                >
                  {s}
                </span>
              </div>
              {i < 2 && (
                <div
                  className={
                    'h-0.5 flex-1 rounded-full transition-all duration-500 ' +
                    (formStep > i + 1 ? 'bg-emerald-500' : 'bg-slate-200')
                  }
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-in-up rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm md:p-8"
        >
          {/* Step 1: Data Anak */}
          {formStep === 1 && (
            <div className="animate-fade-in">
              <h2 className="mb-5 text-lg font-extrabold">
                01. Data calon peserta didik
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Nama lengkap anak"
                  placeholder="Sesuai akta kelahiran"
                  value={form.name}
                  onChange={(e) => updateFormField('name', e.target.value)}
                />
                <Field
                  label="Tanggal lahir"
                  type="date"
                  value={form.birth}
                  onChange={(e) => updateFormField('birth', e.target.value)}
                />
                <label htmlFor="gender" className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    Jenis kelamin *
                  </span>
                  <select
                    id="gender"
                    value={form.gender}
                    onChange={(e) =>
                      updateFormField('gender', e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
                  >
                    <option>Perempuan</option>
                    <option>Laki-laki</option>
                  </select>
                </label>
                <Field
                  label="Tahun ajaran"
                  value={form.schoolYear}
                  onChange={(e) =>
                    updateFormField('schoolYear', e.target.value)
                  }
                />
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Alamat lengkap *
                    </span>
                    <textarea
                      id="address"
                      required
                      value={form.address}
                      onChange={(e) =>
                        updateFormField('address', e.target.value)
                      }
                      rows="3"
                      placeholder="Jalan, RT/RW, kelurahan, kecamatan"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Data Orang Tua */}
          {formStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="mb-5 text-lg font-extrabold">
                02. Data orang tua / wali
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Nama orang tua / wali"
                  placeholder="Nama lengkap"
                  value={form.parent}
                  onChange={(e) => updateFormField('parent', e.target.value)}
                />
                <Field
                  label="Nomor WhatsApp aktif"
                  placeholder="08xxxxxxxxxx"
                  value={form.phone}
                  onChange={(e) => updateFormField('phone', e.target.value)}
                />
                <div className="md:col-span-2">
                  <Field
                    label="Email (opsional)"
                    required={false}
                    type="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={(e) => updateFormField('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                <ShieldCheck className="mb-2" size={20} />
                Pastikan nomor telepon aktif agar sekolah dapat menghubungi
                orang tua terkait proses pendaftaran.
              </div>
            </div>
          )}

          {/* Step 3: Dokumen */}
          {formStep === 3 && (
            <div className="animate-fade-in">
              <h2 className="mb-2 text-lg font-extrabold">
                03. Dokumen persyaratan
              </h2>
              <p className="mb-5 text-sm text-slate-500">
                Pilih file contoh untuk simulasi unggah. Integrasi server belum
                tersedia.
              </p>
              <div className="space-y-4">
                {[
                  ['Akta kelahiran', 'akta'],
                  ['Kartu Keluarga', 'kk'],
                  ['Pas foto anak', 'foto'],
                ].map(([label, key]) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-emerald-200 p-4 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <div
                      className={
                        'rounded-xl p-3 transition-colors ' +
                        (files[key]
                          ? 'bg-emerald-200 text-emerald-900'
                          : 'bg-emerald-100 text-emerald-800')
                      }
                    >
                      <Upload />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold">{label}</p>
                      <p className="truncate text-xs text-slate-400">
                        {files[key] || 'PDF, JPG, atau PNG · Maksimal 2 MB (demo)'}
                      </p>
                    </div>
                    {files[key] && (
                      <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                        ✓ Terpilih
                      </span>
                    )}
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-28 shrink-0 text-xs"
                      onChange={(e) =>
                        setFiles({
                          ...files,
                          [key]: e.target.files?.[0]?.name || '',
                        })
                      }
                    />
                  </label>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                Periksa kembali data sebelum mengirim. Nomor pendaftaran akan
                dibuat otomatis pada tahap demo.
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between border-t border-slate-100 pt-5">
            {formStep > 1 ? (
              <button
                type="button"
                onClick={() => setFormStep(formStep - 1)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold transition-all duration-200 hover:bg-slate-50"
              >
                Sebelumnya
              </button>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all duration-200 hover:bg-emerald-900 hover:shadow-xl"
            >
              {formStep === 3 ? 'Kirim pendaftaran' : 'Lanjutkan'}{' '}
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-xs text-slate-400">
          Dengan melanjutkan, orang tua menyatakan data yang diisi benar.
        </p>
      </main>
    </div>
  );
}

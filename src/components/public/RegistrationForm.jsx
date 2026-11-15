import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Upload,
  ShieldCheck,
  User,
  ArrowLeft,
  Users,
  Heart,
  Activity,
  CheckCircle2,
  Copy,
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
    currentUser,
    schoolProfile,
  } = useApp();

  const [parentTab, setParentTab] = useState('ayah'); // 'ayah' | 'ibu'

  // Auto-fill user data if available
  useEffect(() => {
    if (currentUser && currentUser.role === 'user') {
      if (!form.motherName && !form.fatherName) {
        updateFormField('motherName', currentUser.name);
        updateFormField('motherPhone', currentUser.phone);
        updateFormField('email', currentUser.email);
      }
    }
  }, [currentUser]);

  function handleCopyFatherAddress() {
    if (form.fatherAddress) {
      updateFormField('motherAddress', form.fatherAddress);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      submitRegistration();
    }
  }

  const steps = [
    '01. Data Anak',
    '02. Data Orang Tua / Wali',
    '03. Dokumen & Konfirmasi',
  ];

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      {/* Header */}
      <header className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-emerald-100 bg-white/95 px-5 py-3.5 backdrop-blur md:px-12">
        <button
          onClick={() =>
            currentUser?.role === 'user'
              ? setRole('user-dashboard')
              : setRole('home')
          }
          className="flex items-center gap-3 transition-opacity hover:opacity-85 text-left"
        >
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-200 bg-white p-1 shadow-sm">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 leading-tight">
              SPS Qurrota A'yun
            </span>
            <span className="block text-[11px] text-slate-400 font-medium">
              Formulir Pendaftaran Murid Baru
            </span>
          </div>
        </button>

        <button
          onClick={() =>
            currentUser?.role === 'user'
              ? setRole('user-dashboard')
              : setRole('home')
          }
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition-colors hover:text-slate-800"
        >
          <ArrowLeft size={14} />
          {currentUser?.role === 'user'
            ? 'Kembali ke Dashboard'
            : 'Kembali ke Beranda'}
        </button>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 md:py-10">
        {/* User Account info banner */}
        {currentUser && (
          <div className="mb-6 flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs text-emerald-950">
            <User size={15} className="text-emerald-700" />
            <span>
              Mengisi formulir dengan akun:{' '}
              <strong>{currentUser.name}</strong> ({currentUser.email})
            </span>
          </div>
        )}

        {/* Title */}
        <div className="mb-7 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-emerald-800">
            {schoolProfile.foundation} • {schoolProfile.name}
          </div>
          <h1 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">
            FORMULIR PENDAFTARAN MURID BARU
          </h1>
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            {schoolProfile.address} • NPSN: {schoolProfile.npsn}
          </p>
        </div>

        {/* Step indicator */}
        <div className="mb-8 flex items-center gap-2 sm:gap-3">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex items-center gap-2">
                <div
                  className={
                    'grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full text-xs font-black transition-all duration-300 ' +
                    (formStep >= i + 1
                      ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                      : 'bg-slate-200 text-slate-500')
                  }
                >
                  {formStep > i + 1 ? '✓' : i + 1}
                </div>
                <span
                  className={
                    'hidden text-xs font-bold sm:inline ' +
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
                    (formStep > i + 1 ? 'bg-emerald-600' : 'bg-slate-200')
                  }
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Form Body */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm md:p-8"
        >
          {/* ══════════════════════════════════════════════════════════════════
              STEP 1: DATA ANAK
             ══════════════════════════════════════════════════════════════════ */}
          {formStep === 1 && (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <User size={18} className="text-emerald-700" /> DATA ANAK
                </h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  Isi data calon murid sesuai Akta Kelahiran dan Kartu Keluarga.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Nama Lengkap *"
                  placeholder="Sesuai akta kelahiran"
                  value={form.name}
                  onChange={(e) => updateFormField('name', e.target.value)}
                />
                <Field
                  label="Nama Panggilan *"
                  placeholder="Nama akrab ananda"
                  value={form.nickname}
                  onChange={(e) => updateFormField('nickname', e.target.value)}
                />
                <Field
                  label="Tempat Lahir *"
                  placeholder="Kota kelahiran, misal: Bogor"
                  value={form.birthPlace}
                  onChange={(e) => updateFormField('birthPlace', e.target.value)}
                />
                <Field
                  label="Tanggal Lahir *"
                  type="date"
                  value={form.birthDate}
                  onChange={(e) => updateFormField('birthDate', e.target.value)}
                />

                <label htmlFor="gender" className="block">
                  <span className="mb-2 block text-xs font-bold text-slate-700">
                    Jenis Kelamin *
                  </span>
                  <select
                    id="gender"
                    value={form.gender}
                    onChange={(e) => updateFormField('gender', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                  >
                    <option>Perempuan</option>
                    <option>Laki-laki</option>
                  </select>
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <Field
                    label="Anak ke -"
                    type="number"
                    min="1"
                    placeholder="1"
                    value={form.childOrder}
                    onChange={(e) =>
                      updateFormField('childOrder', e.target.value)
                    }
                  />
                  <Field
                    label="Dari ... Bersaudara"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={form.totalSiblings}
                    onChange={(e) =>
                      updateFormField('totalSiblings', e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Field
                    label="Tinggi Badan (cm)"
                    type="number"
                    placeholder="Contoh: 100"
                    value={form.height}
                    onChange={(e) => updateFormField('height', e.target.value)}
                  />
                  <Field
                    label="Berat Badan (kg)"
                    type="number"
                    placeholder="Contoh: 15"
                    value={form.weight}
                    onChange={(e) => updateFormField('weight', e.target.value)}
                  />
                </div>

                <Field
                  label="Hobi Anak"
                  placeholder="Contoh: Menggambar, menyanyi, bermain balok"
                  value={form.hobby}
                  onChange={(e) => updateFormField('hobby', e.target.value)}
                  required={false}
                />

                <div className="md:col-span-2">
                  <Field
                    label="Penyakit Berat yang Pernah Diderita"
                    placeholder="Ketik 'Tidak ada' jika tidak memiliki riwayat sakit berat"
                    value={form.medicalHistory}
                    onChange={(e) =>
                      updateFormField('medicalHistory', e.target.value)
                    }
                    required={false}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              STEP 2: DATA ORANG TUA / WALI (AYAH & IBU)
             ══════════════════════════════════════════════════════════════════ */}
          {formStep === 2 && (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Users size={18} className="text-emerald-700" /> DATA ORANG TUA / WALI
                </h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  Lengkapi data Ayah dan Ibu calon murid sesuai kartu keluarga.
                </p>
              </div>

              {/* Sub-tabs: Ayah / Ibu */}
              <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setParentTab('ayah')}
                  className={
                    'flex-1 rounded-lg py-2 transition-all ' +
                    (parentTab === 'ayah'
                      ? 'bg-white text-emerald-950 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800')
                  }
                >
                  👨 Data Ayah Kandung / Wali
                </button>
                <button
                  type="button"
                  onClick={() => setParentTab('ibu')}
                  className={
                    'flex-1 rounded-lg py-2 transition-all ' +
                    (parentTab === 'ibu'
                      ? 'bg-white text-emerald-950 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800')
                  }
                >
                  👩 Data Ibu Kandung
                </button>
              </div>

              {/* Tab Data Ayah */}
              {parentTab === 'ayah' && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <p className="text-xs font-black text-slate-800 mb-3">
                      Identitas Ayah:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field
                        label="Nama Ayah *"
                        placeholder="Nama lengkap ayah"
                        value={form.fatherName}
                        onChange={(e) =>
                          updateFormField('fatherName', e.target.value)
                        }
                      />
                      <Field
                        label="Tempat & Tanggal Lahir Ayah"
                        placeholder="Contoh: Bogor, 12 Juni 1986"
                        value={form.fatherBirthPlace}
                        onChange={(e) =>
                          updateFormField('fatherBirthPlace', e.target.value)
                        }
                        required={false}
                      />
                      <Field
                        label="Pekerjaan Ayah *"
                        placeholder="Contoh: Wiraswasta / Karyawan"
                        value={form.fatherJob}
                        onChange={(e) =>
                          updateFormField('fatherJob', e.target.value)
                        }
                      />
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold text-slate-700">
                          Pendidikan Terakhir Ayah *
                        </span>
                        <select
                          value={form.fatherEducation}
                          onChange={(e) =>
                            updateFormField('fatherEducation', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                        >
                          <option>SMA/SMK</option>
                          <option>D3</option>
                          <option>S1</option>
                          <option>S2</option>
                          <option>SMP</option>
                          <option>SD</option>
                          <option>Lainnya</option>
                        </select>
                      </label>
                      <div className="sm:col-span-2">
                        <Field
                          label="No HP / WhatsApp Ayah *"
                          placeholder="08xxxxxxxxxx"
                          value={form.fatherPhone}
                          onChange={(e) =>
                            updateFormField('fatherPhone', e.target.value)
                          }
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold text-slate-700">
                            Alamat Lengkap Ayah *
                          </span>
                          <textarea
                            required
                            rows="2"
                            placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota"
                            value={form.fatherAddress}
                            onChange={(e) =>
                              updateFormField('fatherAddress', e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Data Ibu */}
              {parentTab === 'ibu' && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-black text-slate-800">
                        Identitas Ibu:
                      </p>
                      {form.fatherAddress && (
                        <button
                          type="button"
                          onClick={handleCopyFatherAddress}
                          className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:underline"
                        >
                          <Copy size={12} /> Salin Alamat dari Ayah
                        </button>
                      )}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field
                        label="Nama Ibu *"
                        placeholder="Nama lengkap ibu"
                        value={form.motherName}
                        onChange={(e) =>
                          updateFormField('motherName', e.target.value)
                        }
                      />
                      <Field
                        label="Tempat & Tanggal Lahir Ibu"
                        placeholder="Contoh: Bogor, 20 September 1989"
                        value={form.motherBirthPlace}
                        onChange={(e) =>
                          updateFormField('motherBirthPlace', e.target.value)
                        }
                        required={false}
                      />
                      <Field
                        label="Pekerjaan Ibu *"
                        placeholder="Contoh: Ibu Rumah Tangga / Guru / Karyawati"
                        value={form.motherJob}
                        onChange={(e) =>
                          updateFormField('motherJob', e.target.value)
                        }
                      />
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold text-slate-700">
                          Pendidikan Terakhir Ibu *
                        </span>
                        <select
                          value={form.motherEducation}
                          onChange={(e) =>
                            updateFormField('motherEducation', e.target.value)
                          }
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                        >
                          <option>SMA/SMK</option>
                          <option>D3</option>
                          <option>S1</option>
                          <option>S2</option>
                          <option>SMP</option>
                          <option>SD</option>
                          <option>Lainnya</option>
                        </select>
                      </label>
                      <div className="sm:col-span-2">
                        <Field
                          label="No HP / WhatsApp Ibu *"
                          placeholder="08xxxxxxxxxx"
                          value={form.motherPhone}
                          onChange={(e) =>
                            updateFormField('motherPhone', e.target.value)
                          }
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold text-slate-700">
                            Alamat Lengkap Ibu *
                          </span>
                          <textarea
                            required
                            rows="2"
                            placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota"
                            value={form.motherAddress}
                            onChange={(e) =>
                              updateFormField('motherAddress', e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              STEP 3: DOKUMEN & KONFIRMASI
             ══════════════════════════════════════════════════════════════════ */}
          {formStep === 3 && (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Upload size={18} className="text-emerald-700" /> DOKUMEN PERSYARATAN &amp; KONFIRMASI
                </h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  Lampirkan berkas pendukung calon murid dan konfirmasi data pendaftaran.
                </p>
              </div>

              {/* Upload checklist */}
              <div className="space-y-3">
                {[
                  ['Akta Kelahiran Anak', 'akta'],
                  ['Kartu Keluarga (KK)', 'kk'],
                  ['Pas Foto Anak Terbaru (3x4)', 'foto'],
                ].map(([label, key]) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center gap-4 rounded-2xl border border-dashed border-emerald-200 p-4 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50/70"
                  >
                    <div
                      className={
                        'grid h-11 w-11 place-items-center rounded-xl transition-colors ' +
                        (files[key]
                          ? 'bg-emerald-200 text-emerald-950'
                          : 'bg-emerald-100 text-emerald-800')
                      }
                    >
                      <Upload size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-800">{label}</p>
                      <p className="truncate text-[11px] text-slate-400">
                        {files[key] || 'Format: PDF, JPG, atau PNG (Maks 2 MB)'}
                      </p>
                    </div>
                    {files[key] && (
                      <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
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

              {/* Ringkasan Konfirmasi */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-xs space-y-2">
                <p className="font-extrabold text-emerald-950">
                  Pratinjau Data Pendaftaran:
                </p>
                <div className="grid gap-2 sm:grid-cols-2 text-slate-700">
                  <p>• <strong>Nama Murid:</strong> {form.name || '—'} ({form.nickname})</p>
                  <p>• <strong>Jenis Kelamin:</strong> {form.gender}</p>
                  <p>• <strong>TTL Anak:</strong> {form.birthPlace}, {form.birthDate || '—'}</p>
                  <p>• <strong>Tinggi / Berat:</strong> {form.height || '—'} cm / {form.weight || '—'} kg</p>
                  <p>• <strong>Nama Ayah:</strong> {form.fatherName || '—'}</p>
                  <p>• <strong>Nama Ibu:</strong> {form.motherName || '—'}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-amber-50 p-4 text-xs text-amber-900 leading-relaxed">
                <strong>Pernyataan Orang Tua/Wali:</strong> Dengan mengirimkan formulir ini, orang tua/wali menyatakan bahwa seluruh data yang diisikan adalah benar dan bersedia mematuhi ketentuan di SPS Qurrota A'yun Kota Bogor.
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between border-t border-slate-100 pt-5">
            {formStep > 1 ? (
              <button
                type="button"
                onClick={() => {
                  setFormStep(formStep - 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold transition-all hover:bg-slate-50"
              >
                Sebelumnya
              </button>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-900/10 transition-all hover:bg-emerald-900 hover:shadow-xl active:scale-95"
            >
              {formStep === 3 ? 'Kirim Formulir Pendaftaran' : 'Lanjutkan'}{' '}
              <ArrowRight size={15} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

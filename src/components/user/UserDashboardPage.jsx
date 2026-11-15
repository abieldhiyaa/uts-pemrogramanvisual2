import React, { useState } from 'react';
import {
  Sprout,
  LogOut,
  User,
  FileText,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck2,
  Printer,
  Megaphone,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Phone,
  Edit3,
  X,
  Save,
} from 'lucide-react';
import { Badge, Card, Field } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';
import { getStatusDescription } from '../../data/dummyData';

export default function UserDashboardPage() {
  const {
    currentUser,
    userApplicant,
    userApplicants = [],
    setRole,
    logout,
    startRegistration,
    setCreatedApplicant,
    setNotice,
    updateProfile,
  } = useApp();

  // State untuk memilih anak mana yang aktif dilihat jika mendaftarkan lebih dari 1 anak (misal: anak kembar)
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);

  // Jika anak yang dipilih di luar jangkauan, fallback ke anak pertama
  const applicant = userApplicants[selectedChildIndex] || userApplicants[0] || userApplicant;

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || '',
  });

  function openEditModal() {
    setProfileForm({
      name: currentUser?.name || '',
      phone: currentUser?.phone || '',
      email: currentUser?.email || '',
    });
    setIsEditProfileOpen(true);
  }

  function handleSaveProfile(e) {
    e.preventDefault();
    if (!profileForm.name || !profileForm.phone) {
      setNotice('Nama lengkap dan nomor HP wajib diisi.');
      return;
    }
    updateProfile(profileForm);
    setIsEditProfileOpen(false);
  }

  // Determine timeline stage
  let stage = 2; // Default: account & form submitted
  if (applicant) {
    if (applicant.status === 'Diterima' || applicant.status === 'Ditolak') {
      stage = 4;
    } else if (applicant.status === 'Perlu perbaikan') {
      stage = 3;
    } else {
      stage = 3; // Menunggu verifikasi
    }
  }

  function handlePrintReceipt() {
    if (applicant) {
      setCreatedApplicant(applicant);
      setRole('receipt');
    }
  }

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-emerald-100 bg-white/95 px-5 py-4 backdrop-blur md:px-12">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-emerald-200 bg-white p-1 shadow-sm">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <span className="font-black text-slate-900 leading-tight">SPS Qurrota A'yun</span>
            <span className="ml-2 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
              Portal Wali Murid
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right md:block">
            <p className="text-sm font-bold text-slate-800">{currentUser?.name || 'Wali Murid'}</p>
            <p className="text-xs text-slate-500">{currentUser?.email}</p>
          </div>
          <button
            onClick={openEditModal}
            className="flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3 py-2 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-100"
            title="Edit Profil Akun"
          >
            <Edit3 size={13} /> Edit Profil
          </button>
          <button
            onClick={() => setRole('home')}
            className="rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-50"
          >
            Beranda
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 rounded-xl bg-rose-50 px-3.5 py-2 text-xs font-bold text-rose-700 transition-colors hover:bg-rose-100"
          >
            <LogOut size={14} /> Keluar
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 md:px-8">
        {/* Welcome Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 p-6 text-white shadow-xl md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur-sm">
                <ShieldCheck size={14} /> Akun Terverifikasi
              </div>
              <h1 className="mt-3 text-2xl font-black md:text-3xl">
                Selamat Datang, {currentUser?.name || 'Bapak/Ibu'}!
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-100">
                Pantau proses pendaftaran, hasil verifikasi berkas, dan pengumuman seleksi ananda di sini secara berkala.
              </p>
            </div>

            {applicant ? (
              <button
                onClick={() => startRegistration(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                title="Daftarkan anak kedua/kembaran dengan data orang tua otomatis terisi"
              >
                + Daftarkan Anak Lainnya
              </button>
            ) : (
              <button
                onClick={() => startRegistration(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-3.5 text-sm font-black text-emerald-950 shadow-lg shadow-black/10 transition-all hover:bg-lime-300 hover:scale-105 active:scale-100"
              >
                Daftar Calon Siswa Baru <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>

        {/* If applicant exists */}
        {applicant ? (
          <>
            {/* Multi-child selector tabs jika user mendaftarkan lebih dari 1 anak (misal: anak kembar) */}
            {userApplicants.length > 1 && (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-white p-3 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 mr-1">
                    Pilih Calon Murid:
                  </span>
                  {userApplicants.map((child, idx) => (
                    <button
                      key={child.id}
                      onClick={() => setSelectedChildIndex(idx)}
                      className={
                        'flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all ' +
                        (selectedChildIndex === idx
                          ? 'bg-emerald-800 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200')
                      }
                    >
                      <User size={13} />
                      <span>{child.name}</span>
                      <span
                        className={
                          'rounded-md px-1.5 py-0.5 text-[10px] font-semibold ' +
                          (selectedChildIndex === idx
                            ? 'bg-emerald-950/40 text-emerald-100'
                            : 'bg-white text-slate-600')
                        }
                      >
                        {child.id}
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => startRegistration(true)}
                  className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100"
                >
                  + Tambah Anak Lainnya
                </button>
              </div>
            )}

            {/* Status & Timeline Card */}
            <Card className="p-6 md:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    NOMOR PENDAFTARAN: {applicant.id}
                  </span>
                  <h2 className="mt-1 text-2xl font-black text-slate-900">
                    {applicant.name}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Tahun Ajaran: {applicant.schoolYear || '2027/2028'} · Terdaftar pada {applicant.date}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <Badge status={applicant.status} />
                  <span className="text-xs text-slate-400">
                    Kelengkapan Berkas: <strong className="text-slate-700">{applicant.docs}</strong>
                  </span>
                </div>
              </div>

              {/* Progress Timeline Stepper */}
              <div className="my-8">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Tahapan Seleksi Pendaftaran:
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    { step: '1', title: 'Akun Terdaftar', desc: 'Selesai', done: true },
                    { step: '2', title: 'Formulir Masuk', desc: 'Data tersimpan', done: true },
                    {
                      step: '3',
                      title: 'Verifikasi Berkas',
                      desc:
                        applicant.status === 'Perlu perbaikan'
                          ? 'Perlu Perbaikan'
                          : applicant.status === 'Menunggu verifikasi'
                          ? 'Sedang Ditinjau'
                          : 'Selesai Verifikasi',
                      done: applicant.status !== 'Menunggu verifikasi',
                      alert: applicant.status === 'Perlu perbaikan',
                    },
                    {
                      step: '4',
                      title: 'Pengumuman Seleksi',
                      desc:
                        applicant.status === 'Diterima'
                          ? 'Diterima'
                          : applicant.status === 'Ditolak'
                          ? 'Belum Lolos'
                          : 'Menunggu Hasil',
                      done: applicant.status === 'Diterima' || applicant.status === 'Ditolak',
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className={
                        'rounded-2xl border p-4 transition-all ' +
                        (s.alert
                          ? 'border-amber-300 bg-amber-50/70'
                          : s.done
                          ? 'border-emerald-200 bg-emerald-50/60'
                          : 'border-slate-200 bg-slate-50/50')
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            'grid h-6 w-6 place-items-center rounded-full text-xs font-bold ' +
                            (s.alert
                              ? 'bg-amber-600 text-white'
                              : s.done
                              ? 'bg-emerald-700 text-white'
                              : 'bg-slate-300 text-slate-700')
                          }
                        >
                          {s.done && !s.alert ? '✓' : s.step}
                        </span>
                        <p className="text-xs font-bold text-slate-800">{s.title}</p>
                      </div>
                      <p className="mt-2 text-[11px] font-semibold text-slate-500">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Alert Detail */}
              {applicant.status === 'Perlu perbaikan' && (
                <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-900">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={20} />
                    <div className="flex-1">
                      <p className="font-bold">Perhatian: Berkas Perlu Perbaikan</p>
                      <p className="mt-1 text-sm leading-6">
                        {applicant.verificationNote ||
                          'Silakan periksa kelengkapan Akta Kelahiran dan Kartu Keluarga Anda.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {applicant.status === 'Diterima' && (
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={22} />
                    <div className="flex-1">
                      <p className="font-extrabold text-base">Alhamdulillah, Calon Siswa Dinyatakan DITERIMA!</p>
                      <p className="mt-1 text-sm leading-6 text-emerald-900">
                        {applicant.verificationNote ||
                          'Selamat bergabung di keluarga besar PAUD Qurrota A\'yun.'}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          onClick={() => setRole('pengumuman')}
                          className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-900"
                        >
                          <Megaphone size={14} /> Buka Surat Kelulusan &amp; Info Daftar Ulang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {applicant.status === 'Menunggu verifikasi' && (
                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sky-950">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 shrink-0 text-sky-600" size={20} />
                    <div>
                      <p className="font-bold">Pendaftaran Dalam Proses Verifikasi</p>
                      <p className="mt-1 text-sm text-sky-900/80">
                        Panitia sedang memeriksa kelengkapan data dan dokumen. Pengumuman hasil seleksi akan diinformasikan pada jadwal yang ditentukan.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {applicant.status === 'Ditolak' && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-rose-950">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 shrink-0 text-rose-600" size={20} />
                    <div>
                      <p className="font-bold">Hasil Seleksi: Belum Lolos</p>
                      <p className="mt-1 text-sm text-rose-900/80">
                        {applicant.verificationNote ||
                          'Mohon maaf, kuota penerimaan pada kelompok usia yang dipilih telah terpenuhi.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
                <button
                  onClick={handlePrintReceipt}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-900"
                >
                  <Printer size={16} /> Cetak Bukti Pendaftaran
                </button>
                <button
                  onClick={() => setRole('pengumuman')}
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 text-xs font-bold text-emerald-800 hover:bg-emerald-50"
                >
                  <Megaphone size={16} /> Cek Pengumuman Seleksi
                </button>
              </div>
            </Card>

            {/* Applicant Details & Uploaded Files */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                  <User size={18} className="text-emerald-700" /> Data Calon Murid
                </h3>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Nama Lengkap</span>
                    <span className="font-bold text-slate-800">{applicant.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Nama Panggilan</span>
                    <span className="font-bold text-slate-800">{applicant.nickname || '—'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Tempat, Tanggal Lahir</span>
                    <span className="font-bold text-slate-800">{applicant.birth || '—'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Jenis Kelamin</span>
                    <span className="font-bold text-slate-800">{applicant.gender}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Anak ke -</span>
                    <span className="font-bold text-slate-800">
                      Anak ke-{applicant.childOrder || '1'} dari {applicant.totalSiblings || '1'} bersaudara
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Tinggi / Berat Badan</span>
                    <span className="font-bold text-slate-800">
                      {applicant.height ? `${applicant.height} cm` : '—'} / {applicant.weight ? `${applicant.weight} kg` : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Hobi</span>
                    <span className="font-bold text-slate-800">{applicant.hobby || '—'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-1.5">
                    <span className="text-slate-400">Penyakit Berat Pernah Diderita</span>
                    <span className="font-bold text-slate-800">{applicant.medicalHistory || 'Tidak ada'}</span>
                  </div>
                </div>

                <h4 className="mt-5 border-t border-slate-100 pt-3 text-xs font-black text-slate-800">
                  Data Orang Tua / Wali:
                </h4>
                <div className="mt-2 space-y-1.5 text-xs text-slate-600">
                  <p>• <strong>Ayah:</strong> {applicant.father?.name || applicant.parent} ({applicant.father?.job || '—'}, {applicant.father?.phone || '—'})</p>
                  <p>• <strong>Ibu:</strong> {applicant.mother?.name || applicant.parent} ({applicant.mother?.job || '—'}, {applicant.mother?.phone || applicant.phone})</p>
                  <p className="pt-1">
                    <span className="text-slate-400">Alamat:</span> {applicant.address}
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                  <FileText size={18} className="text-emerald-700" /> Dokumen Persyaratan
                </h3>
                <div className="mt-4 space-y-3">
                  {[
                    { label: 'Akta Kelahiran', key: 'akta' },
                    { label: 'Kartu Keluarga (KK)', key: 'kk' },
                    { label: 'Pas Foto Anak (3x4)', key: 'foto' },
                  ].map((doc) => {
                    const fileName = applicant.files && applicant.files[doc.key];
                    return (
                      <div
                        key={doc.key}
                        className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2
                            size={16}
                            className={fileName ? 'text-emerald-600' : 'text-slate-300'}
                          />
                          <div>
                            <p className="font-bold text-slate-800">{doc.label}</p>
                            <p className="text-[11px] text-slate-400">
                              {fileName || 'Belum diunggah'}
                            </p>
                          </div>
                        </div>
                        <span
                          className={
                            'rounded-md px-2 py-1 font-bold text-[10px] ' +
                            (fileName
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800')
                          }
                        >
                          {fileName ? 'Tersedia' : 'Kurang'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-xl bg-slate-100/70 p-3.5 text-xs text-slate-500">
                  <p className="font-bold text-slate-700">Butuh bantuan pendaftaran?</p>
                  <p className="mt-1 flex items-center gap-1.5 text-emerald-800">
                    <Phone size={13} /> Kontak Panitia: 0812-3456-7890 (Sekretariat)
                  </p>
                </div>
              </Card>
            </div>
          </>
        ) : (
          /* Empty State if not registered yet */
          <Card className="p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-emerald-100 text-emerald-800">
              <FileCheck2 size={32} />
            </div>
            <h2 className="mt-5 text-xl font-black text-slate-900">
              Belum Ada Formulir Pendaftaran
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Akun Anda telah aktif, namun belum mendaftarkan calon siswa. Silakan klik tombol di bawah untuk mengisi formulir pendaftaran.
            </p>
            <button
              onClick={startRegistration}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 hover:bg-emerald-900"
            >
              Mulai Formulir Pendaftaran <ArrowRight size={16} />
            </button>
          </Card>
        )}
      </main>

      {/* Modal Edit Profil */}
      {isEditProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <User size={18} className="text-emerald-700" />
                <h3 className="text-base font-black text-slate-900">
                  Edit Profil Akun Orang Tua
                </h3>
              </div>
              <button
                onClick={() => setIsEditProfileOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="mt-4 space-y-4">
              <Field
                label="Nama Lengkap Orang Tua / Wali *"
                value={profileForm.name}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, name: e.target.value })
                }
                placeholder="Nama lengkap"
              />
              <Field
                label="Nomor WhatsApp / HP Aktif *"
                value={profileForm.phone}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, phone: e.target.value })
                }
                placeholder="08xxxxxxxxxx"
              />
              <Field
                label="Alamat Email *"
                type="email"
                value={profileForm.email}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, email: e.target.value })
                }
                placeholder="nama@email.com"
              />

              <div className="mt-6 flex justify-end gap-2 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditProfileOpen(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-900"
                >
                  <Save size={14} /> Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


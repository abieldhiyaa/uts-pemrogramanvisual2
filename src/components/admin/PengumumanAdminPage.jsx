import React, { useState } from 'react';
import {
  Megaphone,
  CheckCircle2,
  Calendar,
  Eye,
  Users,
  Save,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Badge, Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function PengumumanAdminPage() {
  const {
    applicants,
    stats,
    announcementSettings,
    setAnnouncementSettings,
    toggleAnnouncementPublish,
    setNotice,
    setRole,
  } = useApp();

  const [settingsForm, setSettingsForm] = useState({
    title: announcementSettings.title,
    announcementDate: announcementSettings.announcementDate,
    reRegistrationPeriod: announcementSettings.reRegistrationPeriod,
    reRegistrationPlace: announcementSettings.reRegistrationPlace,
    contactPerson: announcementSettings.contactPerson,
  });

  const acceptedList = applicants.filter((a) => a.status === 'Diterima');
  const totalQuota = 60;
  const remainingQuota = Math.max(0, totalQuota - acceptedList.length);

  function handleSaveSettings(e) {
    e.preventDefault();
    setAnnouncementSettings((prev) => ({
      ...prev,
      ...settingsForm,
    }));
    setNotice('Pengaturan pengumuman dan jadwal daftar ulang berhasil disimpan.');
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-black text-slate-900">
            Pengumuman Seleksi Penerimaan
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Kelola publikasi hasil seleksi, kuota penerimaan, dan informasi daftar ulang peserta didik baru.
          </p>
        </div>
        <button
          onClick={() => setRole('pengumuman')}
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
        >
          <Eye size={15} /> Pratinjau Tampilan Publik
        </button>
      </div>

      {/* Quota & Status Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Status Publikasi</span>
            <span
              className={
                'rounded-full px-2.5 py-0.5 text-[11px] font-black ' +
                (announcementSettings.isPublished
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-amber-100 text-amber-800')
              }
            >
              {announcementSettings.isPublished ? 'Terpublikasi' : 'Draft (Tertutup)'}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-600">
            {announcementSettings.isPublished
              ? 'Wali murid dan publik dapat mengakses hasil seleksi secara online.'
              : 'Hasil seleksi masih disembunyikan dari publik.'}
          </p>
          <button
            onClick={toggleAnnouncementPublish}
            className={
              'mt-4 w-full rounded-xl py-2 text-xs font-bold transition-all ' +
              (announcementSettings.isPublished
                ? 'border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100'
                : 'bg-emerald-800 text-white hover:bg-emerald-900')
            }
          >
            {announcementSettings.isPublished ? 'Tutup / Sembunyikan' : 'Publikasikan Sekarang'}
          </button>
        </Card>

        <Card className="p-5">
          <span className="text-xs font-bold text-slate-500">Siswa Diterima</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-800">
              {acceptedList.length}
            </span>
            <span className="text-xs text-slate-400">/ kuota {totalQuota} siswa</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-600 transition-all duration-500"
              style={{ width: `${Math.min(100, (acceptedList.length / totalQuota) * 100)}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            Sisa kuota: {remainingQuota} bangku peserta didik
          </p>
        </Card>

        <Card className="p-5">
          <span className="text-xs font-bold text-slate-500">Jadwal Daftar Ulang</span>
          <p className="mt-2 text-xs font-bold text-slate-800">
            {announcementSettings.reRegistrationPeriod}
          </p>
          <p className="mt-1 text-[11px] text-slate-500 leading-4">
            {announcementSettings.reRegistrationPlace}
          </p>
          <p className="mt-3 text-[11px] font-bold text-emerald-800">
            Narahubung: {announcementSettings.contactPerson}
          </p>
        </Card>
      </div>

      {/* Edit Announcement Content Form */}
      <Card className="p-6">
        <h3 className="text-base font-extrabold text-slate-900">
          Pengaturan Konten Surat &amp; Petunjuk Daftar Ulang
        </h3>
        <form onSubmit={handleSaveSettings} className="mt-4 grid gap-4 md:grid-cols-2 text-xs">
          <div>
            <label className="block font-bold text-slate-700">Judul Pengumuman</label>
            <input
              type="text"
              value={settingsForm.title}
              onChange={(e) => setSettingsForm({ ...settingsForm, title: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700">Tanggal Surat Pengumuman</label>
            <input
              type="text"
              value={settingsForm.announcementDate}
              onChange={(e) => setSettingsForm({ ...settingsForm, announcementDate: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700">Periode Daftar Ulang</label>
            <input
              type="text"
              value={settingsForm.reRegistrationPeriod}
              onChange={(e) => setSettingsForm({ ...settingsForm, reRegistrationPeriod: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700">Tempat / Ruang Daftar Ulang</label>
            <input
              type="text"
              value={settingsForm.reRegistrationPlace}
              onChange={(e) => setSettingsForm({ ...settingsForm, reRegistrationPlace: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 outline-none focus:border-emerald-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block font-bold text-slate-700">Kontak Panitia / Narahubung</label>
            <input
              type="text"
              value={settingsForm.contactPerson}
              onChange={(e) => setSettingsForm({ ...settingsForm, contactPerson: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 p-2.5 outline-none focus:border-emerald-500"
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-900"
            >
              <Save size={15} /> Simpan Pengaturan Pengumuman
            </button>
          </div>
        </form>
      </Card>

      {/* Table of accepted students */}
      <Card className="p-6">
        <h3 className="text-base font-extrabold text-slate-900 mb-3">
          Daftar Calon Peserta Didik Lulus Seleksi ({acceptedList.length} Siswa)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 uppercase tracking-wider text-slate-400">
              <tr>
                <th className="py-2.5 px-4 font-bold">No.</th>
                <th className="py-2.5 px-4 font-bold">No. Pendaftaran</th>
                <th className="py-2.5 px-4 font-bold">Nama Siswa</th>
                <th className="py-2.5 px-4 font-bold">Orang Tua</th>
                <th className="py-2.5 px-4 font-bold">No. Telepon</th>
                <th className="py-2.5 px-4 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {acceptedList.map((item, index) => (
                <tr key={item.id} className="hover:bg-emerald-50/40">
                  <td className="py-2.5 px-4 text-slate-500">{index + 1}</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-900">{item.id}</td>
                  <td className="py-2.5 px-4 font-bold text-slate-900">{item.name}</td>
                  <td className="py-2.5 px-4 text-slate-600">{item.parent}</td>
                  <td className="py-2.5 px-4 text-slate-500">{item.phone}</td>
                  <td className="py-2.5 px-4">
                    <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-black text-emerald-800">
                      Diterima
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}


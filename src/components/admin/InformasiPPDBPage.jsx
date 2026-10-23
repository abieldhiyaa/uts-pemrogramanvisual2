import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function InformasiPPDBPage() {
  const { announcement, setAnnouncement, setNotice } = useApp();

  function handleChange(key, value) {
    setAnnouncement({ ...announcement, [key]: value });
  }

  return (
    <>
      <div>
        <h2 className="text-xl font-extrabold">Informasi PPDB</h2>
        <p className="mt-1 text-sm text-slate-500">
          Atur informasi yang ditampilkan pada portal orang tua.
        </p>
      </div>

      <Card className="animate-fade-in-up max-w-3xl p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800">
            <BookOpen />
          </div>
          <div>
            <h3 className="font-extrabold">Konten beranda PPDB</h3>
            <p className="text-sm text-slate-500">
              Perubahan akan terlihat pada pratinjau beranda demo.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <label htmlFor="info-title" className="block">
            <span className="mb-2 block text-sm font-semibold">
              Judul informasi
            </span>
            <input
              id="info-title"
              value={announcement.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
            />
          </label>

          <label htmlFor="info-period" className="block">
            <span className="mb-2 block text-sm font-semibold">
              Periode pendaftaran
            </span>
            <input
              id="info-period"
              value={announcement.period}
              onChange={(e) => handleChange('period', e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
            />
          </label>

          <label htmlFor="info-quota" className="block">
            <span className="mb-2 block text-sm font-semibold">
              Kuota pendaftaran
            </span>
            <input
              id="info-quota"
              value={announcement.quota}
              onChange={(e) => handleChange('quota', e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
            />
          </label>

          <label htmlFor="info-desc" className="block">
            <span className="mb-2 block text-sm font-semibold">
              Deskripsi
            </span>
            <textarea
              id="info-desc"
              rows="4"
              value={announcement.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
            />
          </label>

          <button
            onClick={() =>
              setNotice('Informasi PPDB demo berhasil diperbarui.')
            }
            className="rounded-xl bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-900"
          >
            Simpan perubahan
          </button>
        </div>
      </Card>
    </>
  );
}

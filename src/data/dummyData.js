// Data profil resmi lembaga berdasarkan formulir SPS Qurrota A'yun
export const schoolProfile = {
  foundation: 'YAYASAN BIRU MADANI',
  name: 'SPS QURROTA A\'YUN',
  level: 'Satuan PAUD Sejenis (SPS)',
  address:
    'Jl. K.H. Sholeh Iskandar, Perum Griya Cimanggu Indah C-14, RT.004/003, Kelurahan Kedung Badak, Kecamatan Tanah Sareal, Kota Bogor',
  skYayasan: 'AHU-5234.AH.01.04.Tahun 2012',
  operationalLicense: '425.74-BPPTPM-X/2012',
  npsn: '69908898',
  email: 'spsqurrotaayun6@gmail.com',
  phone: '0812-3456-7890',
  city: 'Kota Bogor',
};

export const initialUsers = [
  {
    id: 'u-admin',
    name: 'Administrator PPDB',
    email: 'admin@qurrotayun.sch.id',
    password: 'demo123',
    role: 'admin',
    phone: '0812-9988-7766',
  },
  {
    id: 'u-dewi',
    name: 'Dewi Lestari',
    email: 'dewi.lestari@email.com',
    password: 'user123',
    role: 'user',
    phone: '0812-3456-7890',
    applicantIds: [],
  },
];

// Kosongkan pendaftar awal agar saat demo bersih, hanya ada data baru yang dibuat
export const initialApplicants = [];

export const statuses = [
  'Menunggu verifikasi',
  'Perlu perbaikan',
  'Diterima',
  'Ditolak',
];

export const defaultAnnouncement = {
  title: 'Penerimaan Murid Baru SPS Qurrota A\'yun 2027/2028',
  period: '1 Oktober 2026 – 31 Januari 2027',
  quota: '60 peserta didik',
  description:
    'Mari tumbuh, belajar, dan bermain bersama SPS Qurrota A\'yun dalam lingkungan yang ceria, islami, aman, dan menyenangkan.',
};

export const defaultAnnouncementSettings = {
  isPublished: true,
  title: 'Pengumuman Hasil Seleksi Murid Baru TA 2027/2028',
  announcementDate: '15 Januari 2027',
  reRegistrationPeriod: '1 - 10 Februari 2027',
  reRegistrationPlace:
    'Sekretariat SPS Qurrota A\'yun, Perum Griya Cimanggu Indah C-14, RT.004/003, Kedung Badak, Tanah Sareal, Kota Bogor (Pukul 08.00 - 12.00 WIB)',
  contactPerson: 'Ustadzah / Panitia PPDB (0812-3456-7890)',
};

export const requiredDocs = [
  { label: 'Akta kelahiran anak', key: 'akta' },
  { label: 'Kartu Keluarga (KK)', key: 'kk' },
  { label: 'Pas foto anak (3x4)', key: 'foto' },
];

export function generateId(count) {
  return 'QA-2027-' + String(count + 1).padStart(3, '0');
}

export function getStatusColor(status) {
  switch (status) {
    case 'Diterima':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'Ditolak':
      return 'bg-rose-100 text-rose-700 border-rose-200';
    case 'Perlu perbaikan':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    default:
      return 'bg-sky-100 text-sky-800 border-sky-200';
  }
}

export function getStatusDescription(status) {
  switch (status) {
    case 'Diterima':
      return 'Selamat! Calon murid dinyatakan diterima di SPS Qurrota A\'yun. Silakan cek jadwal daftar ulang di menu Pengumuman.';
    case 'Perlu perbaikan':
      return 'Mohon lengkapi atau perbaiki data/dokumen formulir sesuai catatan verifikator dari pihak sekolah.';
    case 'Ditolak':
      return 'Pendaftaran belum dapat diterima pada periode ini. Silakan hubungi sekretariat sekolah untuk informasi lebih lanjut.';
    default:
      return 'Formulir pendaftaran telah diterima sistem dan sedang dalam antrean verifikasi data oleh panitia PPDB.';
  }
}

// Data dummy awal — 5 pendaftar contoh dengan status bervariasi
// Nomor pendaftaran baru menggunakan format QA-2027-NNN (PRD §6)

export const initialApplicants = [
  {
    id: 'QA-2026-001',
    name: 'Aisyah Putri Ramadhani',
    birth: '2022-03-15',
    gender: 'Perempuan',
    address: 'Jl. Melati No. 12, RT 03/RW 05, Kel. Sukamaju, Kec. Cilandak',
    parent: 'Dewi Lestari',
    phone: '0812-3456-7890',
    email: 'dewi.lestari@email.com',
    date: '12 Okt 2026',
    status: 'Menunggu verifikasi',
    docs: 'Lengkap',
    age: '4 tahun',
    schoolYear: '2027/2028',
    files: { akta: 'akta_aisyah.pdf', kk: 'kk_aisyah.pdf', foto: 'foto_aisyah.jpg' },
  },
  {
    id: 'QA-2026-002',
    name: 'Rafi Ahmad Pratama',
    birth: '2021-07-22',
    gender: 'Laki-laki',
    address: 'Jl. Kenanga No. 8, RT 01/RW 02, Kel. Margahayu, Kec. Bekasi Timur',
    parent: 'Budi Santoso',
    phone: '0813-2222-1188',
    email: 'budi.s@email.com',
    date: '12 Okt 2026',
    status: 'Perlu perbaikan',
    docs: 'Belum lengkap',
    age: '5 tahun',
    schoolYear: '2027/2028',
    files: { akta: 'akta_rafi.pdf', kk: '', foto: '' },
  },
  {
    id: 'QA-2026-003',
    name: 'Naila Zahra Putri',
    birth: '2022-01-10',
    gender: 'Perempuan',
    address: 'Jl. Dahlia No. 5, RT 07/RW 04, Kel. Jatibening, Kec. Pondok Gede',
    parent: 'Siti Aminah',
    phone: '0812-5555-2233',
    email: 'siti.aminah@email.com',
    date: '11 Okt 2026',
    status: 'Diterima',
    docs: 'Lengkap',
    age: '4 tahun',
    schoolYear: '2027/2028',
    files: { akta: 'akta_naila.pdf', kk: 'kk_naila.pdf', foto: 'foto_naila.jpg' },
  },
  {
    id: 'QA-2026-004',
    name: 'Fathan Alfarizi',
    birth: '2023-05-30',
    gender: 'Laki-laki',
    address: 'Jl. Anggrek No. 20, RT 09/RW 03, Kel. Cipinang, Kec. Jatinegara',
    parent: 'Rina Wulandari',
    phone: '0857-9988-1100',
    email: 'rina.w@email.com',
    date: '10 Okt 2026',
    status: 'Menunggu verifikasi',
    docs: 'Lengkap',
    age: '3 tahun',
    schoolYear: '2027/2028',
    files: { akta: 'akta_fathan.pdf', kk: 'kk_fathan.pdf', foto: 'foto_fathan.jpg' },
  },
  {
    id: 'QA-2026-005',
    name: 'Kirana Safitri',
    birth: '2021-11-08',
    gender: 'Perempuan',
    address: 'Jl. Mawar No. 3, RT 02/RW 06, Kel. Duren Sawit, Kec. Duren Sawit',
    parent: 'Andi Saputra',
    phone: '0819-7654-3210',
    email: 'andi.saputra@email.com',
    date: '09 Okt 2026',
    status: 'Ditolak',
    docs: 'Lengkap',
    age: '5 tahun',
    schoolYear: '2027/2028',
    files: { akta: 'akta_kirana.pdf', kk: 'kk_kirana.pdf', foto: 'foto_kirana.jpg' },
  },
];

export const statuses = [
  'Menunggu verifikasi',
  'Perlu perbaikan',
  'Diterima',
  'Ditolak',
];

export const defaultAnnouncement = {
  title: 'Penerimaan Peserta Didik Baru 2027/2028',
  period: '1 Oktober 2026 – 31 Januari 2027',
  quota: '60 peserta didik',
  description:
    'Mari tumbuh, belajar, dan bermain bersama dalam lingkungan yang aman, ramah, dan menyenangkan.',
};

export const requiredDocs = [
  { label: 'Akta kelahiran', key: 'akta' },
  { label: 'Kartu Keluarga', key: 'kk' },
  { label: 'Pas foto anak', key: 'foto' },
];

export function generateId(count) {
  return 'QA-2027-' + String(count + 1).padStart(3, '0');
}

export function getStatusColor(status) {
  switch (status) {
    case 'Diterima':
      return 'bg-emerald-100 text-emerald-800';
    case 'Ditolak':
      return 'bg-rose-100 text-rose-700';
    case 'Perlu perbaikan':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-sky-100 text-sky-800';
  }
}

export function getStatusDescription(status) {
  switch (status) {
    case 'Diterima':
      return 'Selamat! Pendaftaran dinyatakan diterima. Silakan ikuti informasi lanjutan dari sekolah.';
    case 'Perlu perbaikan':
      return 'Mohon lengkapi atau perbaiki data/dokumen sesuai arahan pihak sekolah.';
    case 'Ditolak':
      return 'Pendaftaran belum dapat diterima. Silakan hubungi pihak sekolah untuk informasi lebih lanjut.';
    default:
      return 'Data pendaftaran diterima sistem dan sedang menunggu pemeriksaan admin.';
  }
}

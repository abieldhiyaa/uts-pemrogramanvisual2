# PPDB PAUD Qurrota A'yun — Front-end Prototype

Sistem Informasi Pendaftaran Peserta Didik Baru (PPDB) berbasis **React + Vite + Tailwind CSS** dengan data dummy. Fokus hanya pada antarmuka dan alur demo; belum ada backend, autentikasi nyata, penyimpanan permanen, atau integrasi layanan PDF.

## Instalasi & Menjalankan

```bash
# 1. Pastikan Node.js 20+ dan npm tersedia
node -v

# 2. Install dependensi
npm install

# 3. Jalankan mode pengembangan
npm run dev

# 4. Buka URL yang ditampilkan Vite (default: http://localhost:5173)
```

### Build produksi

```bash
npm run build
npm run preview
```

## Akun Demo

| Peran | Email | Kata Sandi |
|-------|-------|------------|
| Admin | `admin@qurrotayun.sch.id` | `demo123` |

> Login ini **hanya simulasi front-end**. Jangan dipakai untuk sistem produksi.

## Fitur yang Tersedia

### Portal Orang Tua / Wali
- **Beranda** — informasi PPDB, periode, kuota, persyaratan, alur pendaftaran 4 langkah, CTA.
- **Formulir pendaftaran bertahap** — data anak → data orang tua/wali → unggah dokumen (simulasi).
- **Nomor pendaftaran otomatis** — format `QA-2027-NNN`, dibuat saat pendaftaran demo.
- **Bukti pendaftaran** — dapat dicetak melalui dialog print browser.
- **Cek status pendaftaran** — cari berdasarkan nomor pendaftaran selama sesi aktif.

### Portal Admin
- **Login demo** — email dan kata sandi pra-isi.
- **Dashboard** — banner selamat datang, 4 kartu statistik, pendaftar terbaru, ringkasan proses.
- **Data pendaftar** — tabel lengkap dengan pencarian nama/nomor/orang tua dan filter status.
- **Verifikasi** — pilih pendaftar, lihat data ringkasan, ubah status (Menunggu verifikasi / Perlu perbaikan / Diterima / Ditolak), checklist dokumen simulasi.
- **Informasi PPDB** — edit judul, periode, kuota, deskripsi (langsung tercermin di portal publik).
- **Laporan** — ringkasan statistik, tabel semua pendaftar, cetak / simpan PDF via dialog browser.
- **Logout** — kembali ke portal publik.

### Desain
- Responsif: mobile, tablet, desktop.
- Palet warna hijau sesuai UI Guideline (`#14532D`, `#15803D`, `#BEF264`, `#F0FDF4`).
- Tipografi Inter, kartu radius 16–24 px, animasi halus.
- Status badge berwarna: biru (menunggu), amber (perbaikan), hijau (diterima), merah muda (ditolak).
- Print stylesheet untuk bukti dan laporan.

## Struktur Proyek

```
src/
├── main.jsx                         # Entry point
├── App.jsx                          # Router utama
├── styles.css                       # Global styles + Tailwind
├── context/
│   └── AppContext.jsx               # State management global
├── data/
│   └── dummyData.js                 # Data dummy & helper
└── components/
    ├── ui/
    │   └── SharedComponents.jsx     # Badge, Field, Card, dll.
    ├── public/
    │   ├── PublicHeader.jsx
    │   ├── PublicFooter.jsx
    │   ├── LandingPage.jsx
    │   ├── RegistrationForm.jsx
    │   ├── ReceiptPage.jsx
    │   ├── StatusCheckPage.jsx
    │   └── LoginPage.jsx
    └── admin/
        ├── AdminSidebar.jsx
        ├── AdminTopbar.jsx
        ├── DashboardPage.jsx
        ├── DataPendaftarPage.jsx
        ├── VerifikasiPage.jsx
        ├── InformasiPPDBPage.jsx
        └── LaporanPage.jsx
```

## Batasan Prototipe

- **Data hilang saat refresh** — state disimpan di memori browser, bukan database.
- **Upload hanya simulasi** — hanya nama file yang ditampilkan, file tidak dikirim ke server.
- **Login bukan autentikasi nyata** — tidak ada validasi token, hanya perbandingan string.
- **Cetak PDF melalui browser** — menggunakan `window.print()` dan dialog "Save as PDF" bawaan browser.
- **Tidak ada backend** — semua data bersifat dummy dan tidak tersinkronisasi antarperangkat.
- **Tidak ada notifikasi** — email/WhatsApp/push notification di luar ruang lingkup.

## Teknologi

- [React](https://react.dev) — UI library
- [Vite](https://vitejs.dev) — Build tool
- [Tailwind CSS](https://tailwindcss.com) v3 — Utility-first CSS
- [Lucide React](https://lucide.dev) — Ikon

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

## Akun Demo & Akses Cepat

Tersedia tombol satu-klik pada formulir masuk untuk menguji akun demo:

| Peran | Email | Kata Sandi | Keterangan |
|-------|-------|------------|------------|
| **Admin Sekolah** | `admin@qurrotayun.sch.id` | `demo123` | Akses penuh dashboard admin, verifikasi, kelola data, pengumuman, dan laporan |
| **Wali Murid Demo** | `dewi.lestari@email.com` | `user123` | Akun orang tua dari Aisyah Putri Ramadhani (`QA-2026-001`) |
| **Pendaftar Baru** | *(Daftar via tab Register)* | *(Sandi pribadi)* | Membuat akun wali baru untuk mengisi formulir calon siswa |

> Autentikasi ini **hanya simulasi front-end (in-memory)** untuk kebutuhan purwarupa antarmuka.

---

## 7 Modul yang Tersedia

### 1. Login & Register (Multi-Role Auth)
- Tab masuk (Login) dan pendaftaran akun baru (Register) untuk Wali Murid.
- Tombol *quick-fill* kredensial demo untuk Admin Sekolah dan Wali Murid.
- Validasi input formulir pendaftaran akun (nama, telepon, email, sandi).

### 2. Dashboard Admin dan User
- **Dashboard User (Wali Murid):**
  - Banner sapaan personal wali murid dan status akun.
  - Kartu pendaftaran ananda lengkap dengan timeline status 4 langkah: Akun Terdaftar → Formulir Masuk → Verifikasi Berkas → Pengumuman Seleksi.
  - Kotak peringatan catatan verifikator dan akses langsung cetak bukti pendaftaran serta cek hasil seleksi.
  - Tombol pendaftaran calon siswa baru jika belum memiliki pendaftar aktif.
- **Dashboard Admin:**
  - 4 kartu statistik utama (Total Pendaftar, Menunggu Verifikasi, Diterima, Perlu Perbaikan).
  - Grafik distribusi status verifikasi dan rasio kuota penerimaan (60 siswa).
  - Akses jalan pintas menuju modul Verifikasi, Pengelolaan Data, Pengumuman, dan Laporan.
  - Tabel aktivitas pendaftar terbaru.

### 3. Pendaftaran Calon Siswa (Multi-Step Form)
- Langkah 1: Data Identitas Calon Siswa (nama, TTL, jenis kelamin, alamat lengkap, tahun ajaran).
- Langkah 2: Data Orang Tua / Wali (nama orang tua, nomor WhatsApp, email). Otomatis terisi bila sudah login.
- Langkah 3: Dokumen Persyaratan (simulasi unggah Akta Kelahiran, Kartu Keluarga, dan Pas Foto anak).
- Nomor pendaftaran otomatis format `QA-2027-XXX`.
- Kartu Bukti Pendaftaran resmi yang dapat langsung dicetak melalui browser.

### 4. Pengelolaan Data
- Tabel master seluruh calon peserta didik.
- Pencarian cerdas (nama siswa, nomor registrasi, nama orang tua).
- Filter status seleksi dan filter jenis kelamin (Laki-laki / Perempuan).
- Modal detail lengkap siswa dan data orang tua serta dokumen terunggah.
- Aksi hapus data pendaftar demo dengan dialog konfirmasi.

### 5. Verifikasi Data
- Panel kerja verifikator panitia sekolah.
- Antrean berkas masuk dengan tab filter (Semua, Menunggu, Perlu Perbaikan, Diterima).
- Checklist interaktif status keabsahan dokumen (Akta, KK, Pas Foto).
- Kotak masukan **Catatan Verifikator** (alasan perbaikan atau keterangan berkas).
- Pembaruan status (Menunggu verifikasi, Perlu perbaikan, Diterima, Ditolak) yang tersinkronisasi langsung ke Dashboard User dan Pengumuman.

### 6. Pengumuman Seleksi
- **Sisi Publik & User:**
  - Pencarian hasil seleksi menggunakan nomor registrasi atau nama anak.
  - Tampilan **Surat Keterangan Kelulusan Seleksi** digital resmi berkop PAUD Qurrota A'yun, nomor surat keputusan, tanda tangan digital, serta petunjuk dan jadwal daftar ulang.
  - Tombol cetak surat pengumuman diterima (dialog print browser).
  - Tabel transparan daftar seluruh calon siswa yang dinyatakan diterima.
- **Sisi Admin:**
  - Sakelar kontrol publikasi pengumuman (Terpublikasi / Draft tertutup).
  - Pemantauan keterisian kuota (terisi vs sisa kuota bangku).
  - Formulir penyesuaian jadwal dan lokasi daftar ulang peserta didik baru.

### 7. Laporan PPDB
- Laporan rekapitulasi resmi dengan format kop surat lembaga PAUD Qurrota A'yun.
- Filter laporan (Semua Pendaftar, Hanya Siswa Diterima, Menunggu Verifikasi, Perlu Perbaikan, Ditolak).
- Ringkasan statistik, rasio gender (laki-laki / perempuan), dan keterisian kuota.
- Format tanda tangan ganda resmi (Kepala PAUD Qurrota A'yun dan Ketua Panitia PPDB).
- Tombol cetak / simpan sebagai PDF berdesain rapi (*print-friendly stylesheet*).

---

## Struktur Proyek

```
src/
├── main.jsx                         # Entry point
├── App.jsx                          # Router & orkestrasi 7 modul
├── styles.css                       # Global styles + Tailwind + Print CSS
├── context/
│   └── AppContext.jsx               # State management global (in-memory dummy)
├── data/
│   └── dummyData.js                 # Data dummy akun, pendaftar, dan pengumuman
└── components/
    ├── ui/
    │   └── SharedComponents.jsx     # Badge, Field, Card, NoticeBanner, dll.
    ├── public/
    │   ├── PublicHeader.jsx         # Header publik & navigasi peran
    │   ├── PublicFooter.jsx         # Footer publik
    │   ├── LandingPage.jsx          # Beranda & informasi PPDB
    │   ├── AuthPage.jsx             # Modul 1: Login & Register multi-role
    │   ├── RegistrationForm.jsx     # Modul 3: Formulir pendaftaran bertahap
    │   ├── ReceiptPage.jsx          # Modul 3: Bukti pendaftaran resmi
    │   ├── StatusCheckPage.jsx      # Cek status pendaftaran cepat
    │   └── PengumumanPage.jsx       # Modul 6: Pengumuman hasil seleksi publik
    ├── user/
    │   └── UserDashboardPage.jsx    # Modul 2: Dashboard User / Wali Murid
    └── admin/
        ├── AdminSidebar.jsx         # Sidebar navigasi admin
        ├── AdminTopbar.jsx          # Topbar admin
        ├── DashboardPage.jsx        # Modul 2: Dashboard Admin
        ├── DataPendaftarPage.jsx    # Modul 4: Pengelolaan Data
        ├── VerifikasiPage.jsx       # Modul 5: Verifikasi Data & Dokumen
        ├── PengumumanAdminPage.jsx  # Modul 6: Manajemen Pengumuman Seleksi
        ├── LaporanPage.jsx          # Modul 7: Laporan resmi & cetak PDF
        └── InformasiPPDBPage.jsx    # Pengaturan informasi PPDB
```

## Batasan Prototipe

- **Data disimpan di memori browser** — State akan kembali ke data awal jika halaman dimuat ulang (*hard refresh*).
- **Simulasi unggah** — File tidak dikirim ke server nyata; hanya metadata nama file yang dicatat.
- **Autentikasi demo** — Validasi dilakukan di sisi front-end menggunakan state akun simulasi.
- **Cetak PDF via browser** — Menggunakan fasilitas cetak browser (*Save as PDF* / `window.print()`).

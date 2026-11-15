# LAPORAN PROYEK PENGEMBANGAN APLIKASI WEB
## SISTEM INFORMASI PENERIMAAN PESERTA DIDIK BARU (PPDB) BERBASIS WEB
### SPS QURROTA A'YUN KOTA BOGOR

---

## 1. IDENTITAS PROYEK

| Data Identitas | Keterangan |
| :--- | :--- |
| **Judul / Nama Aplikasi** | Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) SPS Qurrota A'yun Kota Bogor |
| **Nama Mahasiswa** | [Nama Lengkap Anda] |
| **Nomor Induk Mahasiswa (NIM)** | [NIM Anda] |
| **Program Studi / Institusi** | Teknik Informatika – STIKOM El Rahma Kota Bogor |
| **Mata Kuliah / Tugas** | Proyek Pengembangan Web Front-End (React + Vite) |
| **Tahun Akademik** | 2026 / 2027 |

---

## 2. LATAR BELAKANG DAN TUJUAN

### 2.1 Latar Belakang Masalah
Satuan PAUD Sejenis (SPS) Qurrota A'yun merupakan lembaga pendidikan anak usia dini yang berlokasi di Tanah Sareal, Kota Bogor (NPSN: 69854746). Setiap tahun ajaran baru, panitia sekolah mengadakan proses Penerimaan Peserta Didik Baru (PPDB). Hingga saat ini, proses pendaftaran masih didominasi metode manual konvensional yang menimbulkan kendala operasional:

1. **Antrean dan Akses Terbatas:** Orang tua murid harus meluangkan waktu datang langsung ke lokasi sekolah untuk mengambil dan menyerahkan formulir fisik pada jam operasional kerja sekolah.
2. **Risiko Dokumen Rusak & Hilang:** Pengarsipan berkas kertas rawan tercecer, rusak, atau salah catat saat proses pendataan manual.
3. **Kendala Pendaftaran Multi-Anak / Anak Kembar:** Pada sistem pendaftaran konvensional maupun sistem digital standar, orang tua yang hendak mendaftarkan lebih dari satu anak (misalnya anak kembar) sering kali diharuskan mendaftar dengan akun email berbeda dan mengisi ulang formulir identitas orang tua dari awal secara redundan.
4. **Beban Rekapitulasi Panitia:** Panitia PPDB membutuhkan waktu berhari-hari untuk memilah berkas, menghitung kuota rombongan belajar (rombel), memperbarui status seleksi, dan mempublikasikan pengumuman.

### 2.2 Tujuan Pembuatan Aplikasi
Tujuan dari perancangan dan pembangunan aplikasi web PPDB ini adalah:

1. **Digitalisasi Alur Pendaftaran:** Menyediakan portal mandiri bagi calon wali murid untuk mendaftarkan putra-putrinya secara online kapan saja dan di mana saja.
2. **Efisiensi Pendaftaran Multi-Anak (Anak Kembar):** Menyediakan mekanisme relasi *1 akun wali murid untuk banyak anak* dengan fitur auto-fill data orang tua dan tab switcher antar-anak di dashboard.
3. **Transparansi Seleksi Secara Real-Time:** Menghadirkan pelacakan status seleksi bertahap (*stepper visual*) dan catatan revisi dokumen langsung pada antarmuka orang tua.
4. **Otomasi Panel Administrasi Sekolah:** Memberikan meja kerja digital bagi panitia untuk memverifikasi berkas digital, mengontrol kuota daya tampung, serta mencetak laporan rekapitulasi resmi berformat PDF/siap cetak.

---

## 3. DESKRIPSI DAN FITUR APLIKASI

Aplikasi PPDB SPS Qurrota A'yun dibangun sebagai *Single Page Application* (SPA) responsif yang membagi hak akses ke dalam dua peran pengguna (*roles*): **Wali Murid** dan **Administrator / Panitia Sekolah**.

### 3.1 Fitur Sisi Orang Tua / Wali Murid

1. **Halaman Beranda (Landing Page):**
   - Menampilkan identitas resmi lembaga (NPSN 69854746), visi PAUD, dan informasi tahun ajaran aktif.
   - Penjelasan alur pendaftaran 4 langkah (*Registrasi Akun $\rightarrow$ Isi Formulir $\rightarrow$ Verifikasi Berkas $\rightarrow$ Pengumuman*).
   - Akses cepat tombol *“Daftar Murid Baru”* dan *“Masuk ke Akun”*.

2. **Sistem Autentikasi Mandiri:**
   - Registrasi akun wali murid baru (nama, WhatsApp, email, password).
   - Form Login interaktif dengan validasi input.
   - Fitur *Lupa Kata Sandi* (reset password mandiri via email terdaftar).

3. **Dashboard Interaktif Wali Murid:**
   - Header profil wali murid dengan tombol *Edit Profil* (pembaruan nomor telepon dan kontak).
   - Indikator status seleksi dengan *Visual Stepper 4 Tahap*.
   - Umpan balik catatan verifikasi berkas secara transparan.

4. **Formulir Pendaftaran 3 Langkah (Multi-Step Form):**
   - **Langkah 1 (Data Calon Anak):** Biodata lengkap (nama lengkap, nama panggilan, TTL, jenis kelamin, urutan anak, kondisi fisik, dan hobi).
   - **Langkah 2 (Data Orang Tua / Wali):** Sub-tab terpisah untuk *Data Ayah* dan *Data Ibu* serta fitur tombol cerdas *“Salin Alamat dari Ayah”*.
   - **Langkah 3 (Dokumen & Konfirmasi):** Unggah berkas digital (Akta Kelahiran, KK, Pas Foto 3x4), pratinjau ringkasan data, dan konfirmasi persetujuan orang tua.

5. **Cetak Bukti Pendaftaran (PDF / Print View):**
   - Penerbitan otomatis nomor registrasi unik (*contoh: QA-2027-001*).
   - Lembar tanda bukti resmi dengan kop surat Yayasan Biru Madani & SPS Qurrota A'yun, rincian data calon murid, dan kolom tanda tangan wali murid.

6. **Fitur Unggulan Multi-Anak / Anak Kembar (1 Wali Murid : N Anak):**
   - Tombol *“+ Daftarkan Anak Lainnya”* di dashboard orang tua.
   - Formulir pendaftaran baru terbuka dengan **auto-fill otomatis pada data orang tua (Langkah 2)**, sehingga orang tua hanya perlu mengisi identitas anak kedua/kembar.
   - **Tab Pemilih Calon Murid** di dashboard orang tua untuk beralih data anak secara instan dalam 1 login.

---

### 3.2 Fitur Sisi Administrator / Panitia Sekolah

1. **Dashboard Metrik Statistik:**
   - Kartu statistik real-time: *Total Pendaftar*, *Menunggu Verifikasi*, *Diterima (Lolos)*, dan *Perlu Perbaikan*.
2. **Pengelolaan Data Pendaftar:**
   - Tabel database pendaftar dengan fitur pencarian instan (nama/nomor registrasi) dan filter ganda (filter status & filter jenis kelamin).
   - Modal inspeksi detail pendaftar lengkap dengan seluruh atribut anak dan orang tua.
3. **Meja Verifikasi Berkas:**
   - Tampilan split panel: antrean calon murid di sisi kiri dan checklist dokumen digital (Akta, KK, Foto) di sisi kanan.
   - Kemampuan mengubah status berkas (*Diterima / Perlu Perbaikan*) beserta input catatan revisi yang langsung terkirim ke orang tua murid.
4. **Modul Pengumuman Kelulusan:**
   - Pengaturan kuota rombel (60 kursi) dan penentuan jadwal/lokasi daftar ulang fisik.
   - Tombol toggle publikasi status pengumuman (*Publish / Draft*).
   - Tabel daftar nama siswa yang telah dinyatakan lulus seleksi berkas.
5. **Laporan Rekapitulasi & Cetak PDF:**
   - Rekapitulasi hasil seleksi dengan filter status.
   - Fitur *Cetak / Simpan PDF* dengan *print stylesheet* ber-kop surat resmi dan lembar pengesahan Kepala Sekolah.

---

## 4. TEKNOLOGI YANG DIGUNAKAN

| Komponen / Layer | Teknologi / Library | Keterangan & Peran |
| :--- | :--- | :--- |
| **Bahasa Pemrograman** | JavaScript (ES6+), HTML5, CSS3 | Fondasi interaktivitas logika antarmuka dan struktur web. |
| **Front-End Library** | React 18 | Pembangunan Single Page Application berbasis komponen modular dan stateful. |
| **Build Tool & Bundler** | Vite | Perkakas pengembangan cepat dengan Hot Module Replacement (HMR). |
| **Styling & CSS** | Tailwind CSS 3.4 | Utility-first CSS framework untuk antarmuka responsif dan konsisten. |
| **Ikonografi** | Lucide React | Koleksi ikon modern, ringan, dan informatif. |
| **State Management** | React Context API (`AppContext.jsx`) | Manajemen state terpusat untuk sinkronisasi data antar modul dan role. |

> ### ⚠️ PENTING: Klarifikasi Batasan Proyek (Front-End Only & Data Dummy)
> Sesuai ketentuan tugas, aplikasi ini berstatus **Front-End Only** dan **belum terhubung ke database server-side nyata** (seperti MySQL/PostgreSQL) maupun backend REST API. Seluruh data akun, formulir calon siswa, dan status verifikasi dikelola menggunakan **data dummy berbasis objek/array JavaScript** yang dimuat dari file [dummyData.js](file:///d:/PPDBpaud/src/data/dummyData.js) ke dalam React Context global ([AppContext.jsx](file:///d:/PPDBpaud/src/context/AppContext.jsx)). Mekanisme ini menyimulasikan seluruh alur bisnis sistem secara real-time di sisi peramban (*browser*) selama demonstrasi berlangsung.

---

## 5. REPOSITORI GITHUB

Kode sumber lengkap proyek telah diunggah dan dikelola melalui kontrol versi Git pada repositori GitHub berikut:

- **Tautan Repositori GitHub:**  
  [https://github.com/abieldhiyaa/uts-pemrogramanvisual2](https://github.com/abieldhiyaa/uts-pemrogramanvisual2)

---

## 6. TAUTAN HOSTING (DEPLOYMENT)

Aplikasi web React + Vite ini dapat diakses secara daring melalui tautan hosting berikut:

- **Tautan Website / Live Demo (Vercel):**  
  [https://ppdb-qurrota-ayun.vercel.app](https://ppdb-qurrota-ayun.vercel.app)  
  *(Silakan cantumkan URL hasil deployment Vercel Anda di atas).*

---

## 7. TAUTAN VIDEO DEMO APLIKASI

Rekaman video demonstrasi alur kerja aplikasi (sisi orang tua murid dan admin sekolah) dapat disaksikan pada tautan berikut:

- **Tautan Video Demo (YouTube / Google Drive):**  
  [https://youtu.be/[ID_VIDEO_DEMO_ANDA]](https://youtu.be/[ID_VIDEO_DEMO_ANDA])  
  *(Atau tautan Google Drive: `https://drive.google.com/file/d/[ID_FILE_DRIVE]/view?usp=sharing`)*

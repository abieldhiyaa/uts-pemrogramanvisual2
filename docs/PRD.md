# PRD — Sistem Informasi Pendaftaran Peserta Didik Baru PAUD Qurrota A'yun

**Versi:** 0.1 · **Status:** baseline awal · **Fase:** front-end prototype dengan data dummy

## 1. Ringkasan
Aplikasi website PPDB membantu orang tua/wali memperoleh informasi PPDB, mengisi formulir pendaftaran, mengunggah dokumen, memperoleh nomor dan bukti pendaftaran, serta memeriksa status. Admin sekolah mengelola data pendaftar, memverifikasi data/dokumen, mengubah status, memperbarui informasi PPDB, dan mencetak laporan.

## 2. Tujuan
- Memusatkan informasi PPDB pada satu portal.
- Menyediakan alur pendaftaran online yang mudah dipahami.
- Membantu admin meninjau pendaftar dan kelengkapan dokumen.
- Menyediakan ringkasan dan laporan pendaftaran.

## 3. Pengguna dan hak akses
- **Orang tua/wali:** akses halaman publik, formulir, bukti pendaftaran, dan pengecekan status.
- **Admin sekolah:** akses dashboard dan modul administrasi setelah login.
- Pada tahap ini login, data, unggahan, dan perubahan status hanya simulasi front-end.

## 4. Ruang lingkup fitur
### Portal orang tua/wali
1. Beranda dan informasi PPDB.
2. Formulir pendaftaran online bertahap.
3. Data calon peserta didik.
4. Data orang tua/wali.
5. Pilih/unggah dokumen persyaratan (simulasi).
6. Nomor pendaftaran otomatis pada sesi demo.
7. Bukti pendaftaran dan cetak browser.
8. Cek status menggunakan nomor pendaftaran.

### Portal admin
1. Login demo admin.
2. Dashboard.
3. Statistik pendaftar berdasarkan status.
4. Tabel data calon peserta didik.
5. Pencarian dan filter status.
6. Pemeriksaan ringkasan data.
7. Checklist dokumen simulasi.
8. Ubah status: Menunggu verifikasi, Perlu perbaikan, Diterima, Ditolak.
9. Kelola konten informasi PPDB.
10. Ringkasan dan tabel laporan.
11. Cetak / simpan sebagai PDF melalui dialog browser.
12. Logout portal.

## 5. Alur utama
**Orang tua:** Beranda → Isi data anak → Isi data orang tua → Pilih dokumen → Kirim → Nomor/bukti pendaftaran → Cek status.

**Admin:** Login → Dashboard → Data pendaftar/Verifikasi → Perbarui status → Informasi PPDB/Laporan → Logout.

## 6. Data dummy
Data awal berisi lima pendaftar contoh dengan status bervariasi. Data tersebut bukan data siswa nyata. Data baru dibuat dengan nomor `QA-2027-NNN` selama sesi aktif.

## 7. Kriteria penerimaan front-end
- Seluruh fitur pada ruang lingkup memiliki halaman/aksi demo.
- Navigasi portal orang tua dan admin bisa dicapai.
- Formulir bertahap dapat diisi dan menghasilkan nomor pendaftaran.
- Nomor yang dibuat dapat dicari melalui cek status selama sesi aktif.
- Admin dapat mencari/filter data dan mengubah status.
- Konten PPDB dapat diedit di UI.
- Laporan dapat dicetak melalui browser.
- Layout responsif untuk mobile dan desktop.

## 8. Di luar ruang lingkup
- Backend/API/database dan sinkronisasi antarperangkat.
- Autentikasi, otorisasi, reset kata sandi, dan keamanan produksi.
- Validasi berkas di server, penyimpanan dokumen, dan antivirus.
- Pengiriman email/WhatsApp/notifikasi.
- Pembayaran, presensi, modul pembelajaran, dan fitur akademik di luar PPDB.
- Pembuatan PDF server-side; cetak PDF memakai browser.
- Integrasi layanan eksternal.

## 9. Asumsi dan risiko
- Periode, kuota, tahun ajaran, dan nama sekolah di konten merupakan data contoh yang harus dikonfirmasi sekolah.
- State akan hilang saat halaman dimuat ulang.
- Demo login tidak boleh dianggap sebagai sistem keamanan.
- Ketika backend dibuat, skema data, validasi, privasi data anak, retensi dokumen, dan hak akses perlu ditinjau kembali.

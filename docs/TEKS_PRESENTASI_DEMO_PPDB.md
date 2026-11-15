# TEKS PRESENTASI & SKRIP VIDEO DEMO SISTEM PPDB
## SISTEM INFORMASI PENERIMAAN PESERTA DIDIK BARU (PPDB) BERBASIS WEB
### SPS QURROTA A'YUN KOTA BOGOR

> **Dokumen Panduan & Skrip Suara (Voice-Over) untuk Pembuatan Video Demo Aplikasi**  
> *Sesuai dengan Ketentuan Soal Ujian / Tugas Akhir Pemrograman Web Front-End.*

---

## 📋 CHECKLIST PEMENUHAN KETENTUAN SOAL (VIDEO DEMO)

| No | Ketentuan Butir Soal Video Demo | Status | Lokasi dalam Skrip |
| :-: | :--- | :-: | :--- |
| **1** | Perkenalan singkat dan judul/nama proyek | ✅ Terpenuhi | Bagian 1 (Menit 00:00 - 00:45) |
| **2** | Penjelasan tujuan serta gambaran umum aplikasi | ✅ Terpenuhi | Bagian 2 (Menit 00:45 - 01:45) |
| **3** | Penjelasan teknologi atau tools yang digunakan (framework/library) | ✅ Terpenuhi | Bagian 3 (Menit 01:45 - 02:45) |
| **4** | Penjelasan bahwa demo bersifat front-end only & sumber data dummy | ✅ Terpenuhi | Bagian 4 (Menit 02:45 - 03:30) |
| **5** | Penjelasan singkat alur kerja sistem & implementasi proyek | ✅ Terpenuhi | Bagian 5 (Menit 03:30 - 04:15) |
| **6** | Demonstrasi fitur-fitur utama secara langsung (akses s/d selesai) | ✅ Terpenuhi | Bagian 6 (Menit 04:15 - 09:30) |
| **7** | Kualitas suara jelas, layar terlihat jelas, tidak wajib on camera | ✅ Panduan | Petunjuk Teknis Rekaman |

---

## 🎬 SKRIP & PANDUAN REKAMAN PER SEGMEN

### BAGIAN 1: PEMBUKAAN & PERKENALAN DIRI
⏱️ **Estimasi Waktu:** 00:00 – 00:45  
🖥️ **Tampilan Layar:** Tampilkan Halaman Beranda (*Landing Page*) `http://localhost:5174/` atau slide judul perkenalan.

> **🎙️ Teks Suara (Voice-Over):**  
> *"Assalamu’alaikum Warahmatullahi Wabarakatuh.  
> Selamat pagi/siang kepada Bapak/Ibu Dosen Penguji dan Dosen Pembimbing yang saya hormati.  
> 
> Perkenalkan, nama saya **[Nama Lengkap Anda]**, dengan Nomor Induk Mahasiswa **[NIM Anda]**, dari Program Studi Teknik Informatika STIKOM El Rahma Kota Bogor.  
> 
> Pada kesempatan kali ini, saya akan mempresentasikan serta mendemonstrasikan secara langsung hasil rancang bangun proyek aplikasi web saya, yaitu: **Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) Berbasis Web pada Satuan PAUD Sejenis (SPS) Qurrota A'yun Kota Bogor**."*

---

### BAGIAN 2: TUJUAN & GAMBARAN UMUM APLIKASI
⏱️ **Estimasi Waktu:** 00:45 – 01:45  
🖥️ **Tampilan Layar:** Scroll perlahan bagian *Hero Section*, Informasi Sekolah, dan Alur Pendaftaran di Halaman Beranda.

> **🎙️ Teks Suara (Voice-Over):**  
> *"SPS Qurrota A'yun merupakan lembaga PAUD yang berlokasi di Tanah Sareal, Kota Bogor dengan NPSN resmi 69854746.  
> 
> Sebelumnya, proses pendaftaran peserta didik baru masih berjalan secara konvensional, di mana orang tua harus datang langsung ke sekolah untuk mengisi formulir kertas, membawa dokumen fotokopi, serta menunggu pengumuman secara manual. Proses ini memiliki beberapa kelemahan, seperti risiko berkas hilang, antrean di sekolah, dan kendala khusus ketika orang tua memiliki **anak kembar** atau mendaftarkan lebih dari satu anak—yang sering kali memaksa mereka mengisi data berulang kali dengan akun yang berbeda.  
> 
> Oleh karena itu, aplikasi PPDB berbasis web ini dibangun dengan tujuan utama:  
> 1. Memberikan kemudahan bagi orang tua calon murid untuk mendaftar secara online dari rumah.  
> 2. Mengakomodasi pendaftaran **multi-anak atau anak kembar** dalam satu akun dengan fitur pengisian otomatis (*auto-fill*).  
> 3. Membantu panitia sekolah dalam verifikasi berkas digital, monitoring kuota rombel, dan pencetakan laporan rekapitulasi secara otomatis."*

---

### BAGIAN 3: TEKNOLOGI & TOOLS YANG DIGUNAKAN
⏱️ **Estimasi Waktu:** 01:45 – 02:45  
🖥️ **Tampilan Layar:** Tampilkan editor kode (VS Code) sejenak atau file `package.json` dan struktur folder proyek `src/`.

> **🎙️ Teks Suara (Voice-Over):**  
> *"Dalam mengimplementasikan aplikasi ini, teknologi dan perkakas (tools) yang saya gunakan adalah sebagai berikut:  
> 
> 1. **Bahasa Pemrograman:** Menggunakan **JavaScript (ES6+)**, didukung oleh **HTML5** dan **CSS3**.  
> 2. **Front-End Framework / Library:** Menggunakan **React 18** berbasis komponen fungsional (*functional components*) dan hooks.  
> 3. **Build Tool & Development Server:** Menggunakan **Vite**, yang memberikan proses kompilasi cepat dan fitur Hot Module Replacement.  
> 4. **Styling & Desain Antarmuka:** Menggunakan **Tailwind CSS versi 3.4** untuk membangun antarmuka yang modern, bersih, konsisten, serta sepenuhnya responsif di berbagai ukuran layar.  
> 5. **Ikonografi:** Memanfaatkan library **Lucide React** untuk visual ikon yang intuitif dan ringan.  
> 6. **State Management:** Menggunakan **React Context API** melalui file `AppContext.jsx` untuk mengelola data global secara terpusat."*

---

### BAGIAN 4: PENJELASAN FRONT-END ONLY & SUMBER DATA DUMMY (POIN WAJIB)
⏱️ **Estimasi Waktu:** 02:45 – 03:30  
🖥️ **Tampilan Layar:** Tampilkan sekilas file `src/data/dummyData.js` di VS Code, lalu kembali ke browser.

> **🎙️ Teks Suara (Voice-Over):**  
> *"Sesuai dengan batasan dan ketentuan tugas, perlu saya sampaikan dan tegaskan bahwa **aplikasi ini berstatus Front-End Only** dan **belum terhubung ke database server-side nyata** seperti MySQL atau PostgreSQL, serta belum menggunakan REST API backend terpisah.  
> 
> Seluruh interaksi data pada aplikasi ini menggunakan **data dummy**.  
> **Dari mana data dummy tersebut berasal?**  
> Data dummy disimpan dalam bentuk **koleksi array dan objek JavaScript** di dalam file `src/data/dummyData.js`. Data ini kemudian diinisialisasi dan dikelola di dalam memori peramban (*browser memory*) menggunakan **React Context API** pada file `src/context/AppContext.jsx`.  
> 
> Dengan pendekatan ini, seluruh aksi seperti pendaftaran akun baru, pengisian formulir, penambahan anak kembar, verifikasi berkas oleh admin, hingga pencetakan laporan dapat berjalan secara dinamis, reaktif, dan memberikan simulasi fungsional yang utuh selama demo berlangsung."*

---

### BAGIAN 5: ALUR KERJA SISTEM & ARSITEKTUR IMPLEMENTASI
⏱️ **Estimasi Waktu:** 03:30 – 04:15  
🖥️ **Tampilan Layar:** Kembali ke tampilan browser di Halaman Utama.

> **🎙️ Teks Suara (Voice-Over):**  
> *"Secara garis besar, alur kerja sistem ini dibagi menjadi dua sudut pandang (*roles*):  
> - **Pertama, Sisi Calon Wali Murid:** Alurnya dimulai dari mengakses beranda, membuat akun pendaftar, masuk ke dashboard wali murid, mengisi formulir pendaftaran 3 langkah (*data anak, orang tua, dan dokumen*), mencetak bukti pendaftaran, serta memantau status verifikasi secara berkala.  
> - **Kedua, Sisi Panitia / Admin PPDB:** Alurnya meliputi masuk ke dashboard statistik, meninjau tabel data pendaftar, memvalidasi dokumen pada meja verifikasi berkas dengan catatan revisi, mengatur kuota rombongan belajar pada modul pengumuman, serta mencetak laporan rekapitulasi resmi."*

---

### BAGIAN 6: DEMONSTRASI FITUR-FITUR UTAMA SECARA LANGSUNG
⏱️ **Estimasi Waktu:** 04:15 – 09:30  
🖥️ **Tampilan Layar:** Demonstrasi langsung interaktif pada browser.

---

#### 6.1 Akses Awal & Halaman Beranda (Landing Page)
- **Aksi Layar:** Tunjukkan URL browser `http://localhost:5174/`. Scroll ke bagian Hero, Informasi, dan Alur 4 Langkah.
- **🎙️ Teks Suara:**
  > *"Kita mulai demonstrasi fitur langsung dari Halaman Beranda.*  
  > *Di bagian atas terdapat header bersih dengan logo dan nama resmi SPS Qurrota A'yun. Di bawahnya terdapat Hero Section dengan tombol **'Daftar Murid Baru'** dan **'Masuk ke Akun'**.*  
  > *Tersedia juga penjelasan profil sekolah dengan NPSN resmi 69854746 serta panduan 4 langkah pendaftaran.*  
  > *Sekarang mari kita klik tombol **'Daftar Murid Baru'**."*

---

#### 6.2 Registrasi Akun Wali Murid & Fitur Lupa Password
- **Aksi Layar:** Tunjukkan form login/register. Klik tab "Buat Akun Baru".
- **🎙️ Teks Suara:**
  > *"Pada halaman ini terdapat form autentikasi. Calon wali murid dapat memilih tab **Masuk** atau **Buat Akun Baru**.*  
  > *Kami juga menyediakan fitur **Lupa Kata Sandi** untuk pemulihan akun via email.*  
  > *Mari kita simulasikan pembuatan akun baru wali murid. Kita ketikkan Nama: **Budi Santoso**, No. WhatsApp: **081234567890**, Email: **budi.santoso@gmail.com**, lalu masukkan kata sandi.*  
  > *Kita klik **'Buat Akun & Masuk ke Dashboard'**."*

---

#### 6.3 Dashboard Wali Murid (Kondisi Awal)
- **Aksi Layar:** Tampilan dashboard yang baru terbuka. Tunjukkan banner profil dan tombol "Mulai Formulir Pendaftaran".
- **🎙️ Teks Suara:**
  > *"Sistem langsung mengarahkan pengguna ke **Dashboard Wali Murid**.*  
  > *Di sini tampak banner akun terverifikasi atas nama Budi Santoso beserta nomor telepon terdaftar. Terdapat tombol **'Edit Profil'** jika wali murid ingin memperbarui kontak.*  
  > *Karena akun ini baru dan belum mendaftarkan anak, sistem menampilkan instruksi yang ramah pengguna. Sekarang kita klik **'Mulai Formulir Pendaftaran'**."*

---

#### 6.4 Formulir Pendaftaran Multi-Step (3 Langkah)
- **Aksi Layar:** Masuk ke halaman Formulir Pendaftaran.

##### Step 1: Data Calon Anak
- **Aksi Layar:** Isi Nama: **Hasan Santoso**, Nama Panggilan: **Hasan**, Tempat Lahir: **Bogor**, Tanggal Lahir: pilih tanggal usia 4-5 tahun, Jenis Kelamin: **Laki-laki**, lalu klik **'Lanjutkan'**.
- **🎙️ Teks Suara:**
  > *"Formulir dirancang dalam 3 langkah terstruktur.*  
  > *Langkah 1 memuat biodata lengkap anak: nama lengkap, nama panggilan, tempat dan tanggal lahir, jenis kelamin, urutan anak, hingga data fisik dan hobi.*  
  > *Setelah lengkap, kita klik **'Lanjutkan'**."*

##### Step 2: Data Orang Tua / Wali (Fitur Tab & Salin Alamat)
- **Aksi Layar:** Tunjukkan tab Data Ayah sudah terisi nama ayah & nomor kontak secara otomatis. Tunjukkan tab Data Ibu, lalu klik tombol **"Salin Alamat dari Ayah"**.
- **🎙️ Teks Suara:**
  > *"Langkah 2 adalah Data Orang Tua. Perhatikan bahwa nama dan no HP yang dimasukkan saat registrasi otomatis terisi (*auto-fill*).*  
  > *Formulir dibagi menjadi dua sub-tab: **Data Ayah** dan **Data Ibu** agar tidak membingungkan.*  
  > *Pada Data Ibu, terdapat fitur cerdas **'Salin Alamat dari Ayah'**, sehingga orang tua tidak perlu mengetik ulang alamat yang sama.*  
  > *Kita klik **'Lanjutkan'**."*

##### Step 3: Unggah Dokumen Digital & Konfirmasi
- **Aksi Layar:** Pilih file simulasi untuk Akta Kelahiran, Kartu Keluarga, dan Pas Foto. Centang pernyataan persetujuan, lalu klik **"Kirim Formulir Pendaftaran"**.
- **🎙️ Teks Suara:**
  > *"Langkah 3 adalah unggah dokumen persyaratan digital: Akta Kelahiran, Kartu Keluarga, dan Pas Foto anak.*  
  > *Di bagian bawah terdapat pratinjau ringkasan data dan kotak persetujuan.*  
  > *Kita centang persetujuan lalu klik **'Kirim Formulir Pendaftaran'**."*

---

#### 6.5 Cetak Bukti Registrasi (PDF / Print View)
- **Aksi Layar:** Tampilkan lembar Bukti Pendaftaran dengan nomor registrasi unik. Klik tombol **"Cetak Bukti Pendaftaran (PDF)"** hingga dialog print browser muncul sejenak, lalu batalkan dialog dan klik **"Buka Dashboard Saya"**.
- **🎙️ Teks Suara:**
  > *"Pendaftaran langsung berhasil! Sistem secara otomatis menerbitkan **Nomor Registrasi Unik**, contohnya: **QA-2027-001**.*  
  > *Saat tombol **'Cetak Bukti Pendaftaran (PDF)'** diklik, sistem membuka lembar cetak resmi ber-kop SPS Qurrota A'yun lengkap dengan barcode dan kolom tanda tangan wali murid.*  
  > *Sekarang kita kembali ke Dashboard dengan klik **'Buka Dashboard Saya'**."*

---

#### 6.6 Fitur Unggulan: Pendaftaran Multi-Anak / Anak Kembar
- **Aksi Layar:** Tunjukkan status pendaftaran Hasan (anak pertama) aktif dengan Stepper 4 Tahap. Kemudian klik tombol **"+ Daftarkan Anak Lainnya"**.
- **🎙️ Teks Suara:**
  > *"Sekarang di dashboard tampak stepper 4 tahap status seleksi anak pertama.*  
  > *Kini kita demokan fitur unggulan sistem: **Kasus Anak Kembar / Multi-Anak**.*  
  > *Di sistem konvensional, orang tua harus logout dan membuat akun email baru. Di sistem kami, orang tua cukup menekan tombol **'+ Daftarkan Anak Lainnya'** di banner dashboard.*  
  > *(Klik tombol)*  
  > *Formulir terbuka kembali. Pada Langkah 1 kita cukup memasukkan identitas saudara kembarnya, misalnya: **Husain Santoso**.*  
  > *Lalu kita klik 'Lanjutkan'. Perhatikan pada Langkah 2: **seluruh data Ayah dan Ibu otomatis terisi lengkap dari pendaftaran sebelumnya**, tanpa perlu mengetik ulang.*  
  > *Kita klik 'Lanjutkan', unggah dokumen Husain, dan kirim formulir.*  
  > *(Submit formulir Husain lalu kembali ke Dashboard)*  
  > *Perhatikan di bagian atas dashboard sekarang muncul **Tab Pemilih Calon Murid (Hasan & Husain)**. Orang tua dapat berpindah antara kedua anak kembarnya dengan satu kali klik, lengkap dengan nomor pendaftaran dan status masing-masing!"*

---

#### 6.7 Sisi Administrator: Dashboard & Metrik Real-Time
- **Aksi Layar:** Logout dari akun wali murid. Masuk sebagai Admin (`admin@qurrotayun.sch.id` / `demo123`).
- **🎙️ Teks Suara:**
  > *"Sekarang kita beralih ke sudut pandang **Administrator / Panitia Sekolah**.*  
  > *Kita login menggunakan akun panitia.*  
  > *Pada Dashboard Admin, kita langsung disuguhkan **kartu statistik metrik real-time**: Total Pendaftar bertambah secara otomatis dari inputan tadi, bersama indikator pendaftar yang sedang menunggu verifikasi."*

---

#### 6.8 Sisi Administrator: Kelola Data Pendaftar
- **Aksi Layar:** Buka menu "Data Pendaftar". Ketik "Hasan" di kolom pencarian. Tunjukkan filter status dan tombol modal Detail.
- **🎙️ Teks Suara:**
  > *"Pada menu Data Pendaftar, panitia dapat memantau seluruh pendaftar dalam tabel terpadu.*  
  > *Tersedia fitur pencarian cepat berdasarkan nama anak atau nomor registrasi, filter berdasarkan status dan jenis kelamin, serta tombol inspeksi detail untuk melihat seluruh biodata calon siswa dan orang tua."*

---

#### 6.9 Sisi Administrator: Meja Verifikasi Berkas
- **Aksi Layar:** Buka menu "Verifikasi". Pilih berkas calon siswa Hasan. Ubah status menjadi **"Diterima"**, isi catatan: *"Dokumen lengkap dan memenuhi persyaratan usia"*, lalu klik Simpan.
- **🎙️ Teks Suara:**
  > *"Menu Verifikasi berfungsi sebagai meja kerja digital panitia.*  
  > *Di panel sebelah kiri terdapat daftar antrean verifikasi.*  
  > *Di sebelah kanan terdapat checklist berkas digital (Akta, KK, dan Foto) yang dapat diperiksa keabsahannya.*  
  > *Panitia dapat memperbarui status pendaftar menjadi **'Diterima'** atau **'Perlu Perbaikan'**, dilengkapi kolom catatan resmi. Catatan ini secara instan akan tampil di dashboard orang tua murid."*

---

#### 6.10 Sisi Administrator: Pengumuman Kelulusan & Kuota Rombel
- **Aksi Layar:** Buka menu "Pengumuman". Tunjukkan kuota rombel (60 kursi) dan daftar calon murid yang diterima.
- **🎙️ Teks Suara:**
  > *"Pada modul Pengumuman, panitia dapat mengelola kuota penerimaan rombongan belajar (rombel), mengatur jadwal serta lokasi daftar ulang fisik, dan mengaktifkan status publikasi.*  
  > *Siswa yang telah diverifikasi dan diterima otomatis terdaftar pada daftar kelulusan resmi."*

---

#### 6.11 Sisi Administrator: Laporan Rekapitulasi & Cetak PDF
- **Aksi Layar:** Buka menu "Laporan". Tunjukkan tabel rekapitulasi, lalu klik tombol **"Cetak / Simpan sebagai PDF"** hingga print stylesheet terbuka.
- **🎙️ Teks Suara:**
  > *"Modul terakhir adalah Laporan Rekapitulasi PPDB.*  
  > *Panitia dapat merekapitulasi data hasil seleksi berdasarkan kategori.*  
  > *Ketika tombol **'Cetak / Simpan sebagai PDF'** ditekan, sistem mengaktifkan format cetak resmi berstandar dokumen arsip, lengkap dengan Kop Surat Yayasan Biru Madani, nomor pendaftaran, dan lembar pengesahan tanda tangan Kepala Sekolah."*

---

### BAGIAN 7: PENUTUP (CLOSING)
⏱️ **Estimasi Waktu:** 09:30 – 10:15  
🖥️ **Tampilan Layar:** Tampilkan kembali Halaman Beranda atau Dashboard.

> **🎙️ Teks Suara (Voice-Over):**  
> *"Bapak dan Ibu Dosen yang saya hormati,  
> Dari demonstrasi yang telah kita saksikan bersama, dapat disimpulkan bahwa Sistem Informasi PPDB SPS Qurrota A'yun ini berhasil memenuhi seluruh kebutuhan yang dirancang:  
> 1. Mengubah proses pendaftaran konvensional menjadi digital, rapi, dan efisien.  
> 2. Memberikan solusi tuntas untuk kasus **anak kembar dan multi-anak** dengan pengisian data terpadu dan selector multi-anak.  
> 3. Memudahkan panitia sekolah dalam memverifikasi berkas dan menghasilkan laporan rekapitulasi yang siap dicetak.  
> 
> Demikian pemaparan dan video demonstrasi proyek ini saya sampaikan. Mohon maaf apabila terdapat kekurangan.  
> Terima kasih atas perhatian Bapak dan Ibu Dosen.  
> Wassalamu’alaikum Warahmatullahi Wabarakatuh."*

---

## 💡 PANDUAN TEKNIS PEREKAMAN VIDEO (UNTUK MAHASISWA)

1. **Aplikasi Perekam Layar yang Direkomendasikan:**
   - **OBS Studio** (Gratis, kualitas terbaik tanpa watermark).
   - **Xbox Game Bar** (Bawaan Windows, tekan tombol `Windows + G`).
   - Ekstensi Chrome (misalnya **Loom** atau **Awesome Screenshot**).
2. **Kamera (On-Camera):**
   - Sesuai ketentuan pada soal: **"Tidak wajib untuk on camera"**. Yang terpenting adalah suara terdengar jelas dan antarmuka aplikasi terlihat jernih (resolusi 1080p).
3. **Persiapan Browser Sebelum Rekam:**
   - Jalankan aplikasi dengan perintah: `npm run dev` di terminal.
   - Buka browser pada mode maximized / full screen (`F11` jika ingin menyembunyikan bookmark bar).
   - Buka dua jendela browser atau satu jendela reguler dan satu jendela *Incognito* agar mudah berpindah antara akun Wali Murid dan akun Admin.
4. **Penyimpanan & Pengumpulan:**
   - Simpan hasil rekaman dalam format MP4.
   - Unggah ke **YouTube** (setel visibilitas sebagai *Unlisted* atau *Public*) atau ke **Google Drive** (pastikan izin tautan diatur ke *"Siapa saja yang memiliki link dapat melihat"*).
   - Salin tautan video tersebut ke dalam file laporan Word (`LAPORAN_PROYEK_PPDB.docx`) pada Butir 7.

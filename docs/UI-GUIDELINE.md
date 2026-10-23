# UI Guideline — PPDB PAUD Qurrota A'yun

## 1. Arah visual
Modern, ramah, rapi, sedikit futuristik ala SaaS dashboard. Visual harus terasa terpercaya untuk orang tua, bukan terlalu teknis atau terlalu ramai.

## 2. Warna
- **Deep Green:** `#14532D` — CTA utama, sidebar, heading penting.
- **Leaf Green:** `#15803D` — link dan aksen.
- **Lime:** `#BEF264` — aksen CTA pada hero gelap.
- **Soft Green:** `#F0FDF4` — permukaan sekunder.
- **White:** `#FFFFFF` — kartu dan form.
- **Background:** `#F5FAF6` — latar aplikasi.
- **Text:** slate gelap `#17352A`; teks sekunder `#64748B`.
- **Status:** biru untuk menunggu, amber untuk perbaikan, hijau untuk diterima, merah muda/merah untuk ditolak.

## 3. Tipografi
Gunakan system sans-serif/Inter fallback. Judul hero tebal dan rapat; heading dashboard 20–32 px; body 14–16 px; metadata 12–13 px. Jangan mengandalkan warna saja untuk membedakan status—sertakan label.

## 4. Layout dan komponen
- Desktop admin: sidebar 256 px + topbar sticky + area konten.
- Mobile admin: sidebar menjadi panel yang dapat dibuka.
- Portal publik: header navigasi, hero, ringkasan informasi, alur, CTA, footer.
- Form: tahapan Data Anak → Data Orang Tua → Dokumen.
- Kartu: radius 16–24 px, border hijau pucat, shadow halus.
- Input: tinggi nyaman, label jelas, fokus dengan ring hijau.
- Tabel: header kontras lembut, baris terpisah, tabel dapat digulir horizontal di layar kecil.
- Status: badge berbentuk pil dengan teks yang eksplisit.
- Ikon: Lucide React, konsisten 16–24 px.

## 5. Interaksi dan aksesibilitas
- CTA utama memiliki kata kerja jelas.
- Semua tombol memiliki label bermakna dan area sentuh nyaman.
- Form wajib ditandai `*`, menggunakan label dan validasi HTML dasar.
- Pesan sukses/kesalahan ditampilkan dekat konteksnya.
- Jangan gunakan warna sebagai satu-satunya sinyal.
- Fokus keyboard tetap terlihat; kontras teks harus memadai.
- Konfirmasi dan peringatan disampaikan dengan bahasa Indonesia yang sederhana.

## 6. Responsif
- Mobile: satu kolom, CTA dapat membungkus, form full width.
- Tablet: dua kolom bila ruang cukup.
- Desktop: grid dashboard empat kartu statistik dan dua kolom konten.
- Hindari overflow; tabel admin menggunakan scroll horizontal.

## 7. Nada bahasa
Hangat, jelas, sopan, dan mudah dipahami orang tua. Label status konsisten: “Menunggu verifikasi”, “Perlu perbaikan”, “Diterima”, “Ditolak”.

## 8. Batas prototipe
Visual dan interaksi ini adalah demo front-end. Data dummy, upload, login, status, dan cetak hanya simulasi atau menggunakan fasilitas browser.

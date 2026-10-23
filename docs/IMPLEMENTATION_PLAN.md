# Implementation Plan — PPDB PAUD Qurrota A'yun

## Prinsip eksekusi
Kerjakan satu irisan fungsional front-end pada satu waktu. Jadikan dokumen PRD dan UI Guideline sebagai sumber kebenaran (SOT). Jangan menambahkan fitur di luar scope. Gunakan data dummy dan hindari backend.

## Tahap 0 — Fondasi
- Vite + React + Tailwind CSS.
- Struktur komponen, style global, ikon Lucide.
- Pastikan `npm run dev` dan `npm run build` berjalan.

## Tahap 1 — Portal publik
- Header, hero, informasi PPDB, persyaratan, alur, CTA, footer.
- Navigasi menuju pendaftaran, cek status, dan login admin.
- Responsif pada mobile dan desktop.

## Tahap 2 — Form pendaftaran
- Form bertahap: data anak, data orang tua/wali, dokumen.
- Validasi HTML dasar.
- Buat nomor pendaftaran demo dan bukti pendaftaran.
- Cetak bukti menggunakan browser.

## Tahap 3 — Cek status
- Cari berdasarkan nomor pendaftaran pada data sesi.
- Tampilkan label status dan penjelasan yang sesuai.
- Tangani nomor yang tidak ditemukan.

## Tahap 4 — Portal admin
- Login demo.
- Sidebar, topbar, dashboard dan statistik.
- Data pendaftar, pencarian, filter.
- Detail verifikasi dan perubahan status.
- Pengelolaan informasi PPDB.
- Laporan dan cetak / simpan PDF melalui browser.

## Tahap 5 — Validasi
- Jalankan `npm run build`.
- Uji alur orang tua dari awal sampai bukti.
- Uji cek status untuk nomor valid/tidak valid.
- Uji login demo, pencarian, filter, perubahan status, informasi, dan cetak laporan.
- Periksa mobile, tablet, desktop, empty state, dan overflow tabel.

## Tahap 6 — Serah terima
- README menjelaskan instalasi, menjalankan aplikasi, akun demo, dan batasan.
- Pastikan tidak ada klaim backend atau penyimpanan permanen.
- Laporkan fitur yang selesai, pengujian, dan kendala.

## Definition of Done
- Semua item dalam PRD memiliki representasi UI/aksi demo.
- Tampilan konsisten dengan UI Guideline.
- Build produksi berhasil.
- Batasan prototipe dijelaskan.
- Tidak ada fitur di luar scope.

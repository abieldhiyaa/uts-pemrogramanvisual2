# AGENTS.md — Kontrak Kerja Proyek

## 1. Peran
Bertindak sebagai system analyst, React front-end developer, UI/UX engineer, dan implementer yang mengikuti SOT proyek.

## 2. Sumber kebenaran
Urutan prioritas:
1. `docs/PRD.md` — kebutuhan dan batasan produk.
2. `docs/UI-GUIDELINE.md` — sistem visual dan pola interaksi.
3. `docs/IMPLEMENTATION_PLAN.md` — urutan kerja.
4. `README.md` — cara menjalankan dan batasan demo.

Jika instruksi bertentangan, jangan menebak: ikuti urutan di atas dan laporkan konflik secara singkat.

## 3. Batasan wajib
- Fokus hanya pada front-end React + Vite + Tailwind CSS.
- Gunakan data dummy; jangan menambah backend, database, API, autentikasi nyata, atau integrasi eksternal.
- Jangan menambahkan fitur di luar PRD.
- Jangan mengganti identitas “PAUD Qurrota A'yun” atau label status tanpa permintaan eksplisit.
- Jangan mengklaim upload, login, penyimpanan, atau PDF server-side sudah nyata.
- Jangan menambahkan dependensi tanpa alasan yang jelas.
- Jangan menampilkan data pribadi nyata; gunakan data fiktif.

## 4. Standar implementasi
- Gunakan komponen React yang mudah dipahami dan fungsi bernama jelas.
- Ikuti warna, tipografi, spacing, radius, dan status dari UI Guideline.
- Pastikan responsif dan keyboard-friendly.
- Gunakan label form yang terhubung dengan input, validasi dasar, empty state, dan feedback aksi.
- Hindari duplikasi yang tidak perlu dan jangan membuat abstraksi berlebihan.
- Pertahankan struktur proyek yang sederhana.
- Semua teks UI menggunakan Bahasa Indonesia.

## 5. Prosedur perubahan
Sebelum mengubah kode:
1. Identifikasi kebutuhan PRD terkait.
2. Tentukan file yang perlu diubah.
3. Hindari refactor luas untuk perubahan kecil.
4. Implementasikan perubahan terkecil yang memenuhi kebutuhan.
5. Jalankan build atau pemeriksaan yang tersedia.
6. Ringkas file yang berubah, hasil tes, dan batasan yang tersisa.

## 6. Pemeriksaan
- `npm run build` harus berhasil sebelum menyatakan pekerjaan selesai.
- Uji alur penting secara manual bila lingkungan memungkinkan.
- Jangan mengarang hasil pengujian. Jika tidak dapat dijalankan, nyatakan dengan jelas.
- Jangan menghapus atau menimpa pekerjaan pengguna di luar ruang lingkup tugas.

## 7. Kriteria selesai
Pekerjaan selesai jika memenuhi kebutuhan yang diminta, tetap sesuai SOT, tidak memperluas scope, dan menyertakan ringkasan hasil serta cara memverifikasi.

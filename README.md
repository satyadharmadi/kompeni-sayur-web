# Kompeni Sayur

Website Next.js untuk kebun hidroponik premium Kompeni Sayur.

## Jalankan lokal

1. Salin `.env.example` menjadi `.env` dan isi koneksi PostgreSQL.
2. Jalankan `npm install`.
3. Jalankan `npx prisma generate` lalu `npm run dev`.

## Aset gambar

Seluruh aset halaman berada di `public/images/`. Tambahkan foto produk dengan nama file yang stabil lalu daftarkan path-nya di `lib/data.ts` (atau kelola melalui CMS/database setelah integrasi).

## Deploy

Set environment variables di Vercel, siapkan database PostgreSQL, lalu deploy repositori. Konfigurasi Midtrans dan provider pengiriman disiapkan lewat environment variables/API layer saat kredensial tersedia.

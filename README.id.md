# Doa & Dzikir

Server RESTful API gratis yang menyajikan Doa dan Dzikir sesuai Sunnah Nabi Muhammad _shallallahu 'alaihi wa sallam_

## بسم الله الرحمن الرحيم

[English](./README.md)

## Persyaratan

- Node.js `>= 16.20.1`
- Yarn `>= 1.22.0`

## Memulai

1. Clone repositori ini

   ```bash
   git clone https://github.com/fitrahive/dua-dhikr.git
   ```

2. Pindah direktori saat ini ke repositori

   ```bash
   cd dua-dhikr
   ```

3. Install dependensi

   ```bash
   yarn install
   ```

4. Jalankan di lokal

   - Mode pengembangan (development)

     ```bash
     yarn dev
     ```

   - Mode produksi

     1. Build terlebih dulu

        ```bash
        yarn build
        ```

     2. Jalankan aplikasi

        ```bash
        yarn start
        ```

### One-click Deployment

Cara cepat untuk menggunakannya secara pribadi dengan PaaS yang ada

[![Deploy dengan Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffitrahive%2Fdua-dhikr%2Ftree%2Fmain)
[![Deploy dengan Cyclic](https://ik.imagekit.io/sooluh/cyclic.svg)](https://app.cyclic.sh/#/join/sooluh)

## Penggunaan

Base URL : [`http://localhost:3000`](https://dua-dhikr.vercel.app)

| Titik Akhir                                                           | Deskripsi                                                                  | Metode |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------ |
| [`/:lang`](https://dua-dhikr.vercel.app/id)                           | Mendapatkan daftar dengan bahasa spesifik                                  | `GET`  |
| [`/:lang/:category`](https://dua-dhikr.vercel.app/id/daily-dua)       | Mendapatkan daftar isi berdasarkan bahasa dan kategori                     | `GET`  |
| [`/:lang/:category/:id`](https://dua-dhikr.vercel.app/id/daily-dua/1) | Mengambil detail Doa & Dzikir berdasarkan bahasa, kategori dan ID spesifik | `GET`  |

### Pameran

Daftar proyek keren (اللّٰهُمَّ بَارِكْ) yang didukung oleh API ini

- **Kirimkan (dengan cara pull-request) proyek kamu!**

### Siap digunakan!

Daftar server API yang siap digunakan secara publik

- [https://dua-dhikr.vercel.app](https://dua-dhikr.vercel.app/id)

## Kontribusi

Lengkapi atau tambah data Doa & Dzikir sesuai Sunnah yang kamu tau, pastikan data tersebut shahih!

> **Warning**<br>
> Bertakwalah kepada Allah! Kontribusimu akan dihisab kelak di akhirat!

1. Clone repositori ini
2. Buka direktori `data/` dan pilih bahasa yang sudah ada (atau tambahkan baru), pastikan menggunakan kode `ISO 639`
3. Buka berkas JSON di kategori yang diinginkan
4. Lakukan perubahan dengan hati-hati!
5. Commit perubahan dengan perintah `yarn commit`.
6. Buat pull-request
7. Tunggu owner repositori melakukan merge

### Catatan

- `title` berisi judul Doa/Dzikir.
- `arabic` berisi Doa/Dzikir dalam tulisan arab.
- `latin` berisi transliterasi dari tulisan arab ke latin.
- `translation` berisi terjemahan (translasi) dalam bahasa yang diinginkan.
- `notes` berisi catatan (Semisal: Dibaca 3x).
- `fawaid` berisi faedah/fawaid dari Doa/Dzikir terkait.
- `source` berisi referensi hadits shahih.

## Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](./LICENSE).<br>

## جزاكما الله خيرا كثيرا

<a href="https://s.id/standwithpalestine"><img alt="I stand with Palestine" src="https://cdn.jsdelivr.net/gh/Safouene1/support-palestine-banner@master/banner-project.svg" width="100%" /></a>

# Doa & Dzikir

_Server_ RESTful API gratis yang menyajikan Doa dan Dzikir sesuai Sunnah Nabi Muhammad _shallallahu 'alaihi wa sallam_

## بسم الله الرحمن الرحيم

[English](./README.md)

## Persyaratan

- Node.js `>= 20.x`
- npm

## Memulai

1. _Clone_ repositori ini

   ```bash
   git clone https://github.com/fitrahive/dua-dhikr.git
   ```

2. Pindah ke direktori repositori

   ```bash
   cd dua-dhikr
   ```

3. _Install_ dependensi

   ```bash
   npm ci
   ```

4. Jalankan di lokal

   - Mode pengembangan (_development_)

     ```bash
     npm run dev
     ```

   - Mode produksi

     1. _Build_ terlebih dulu

        ```bash
        npm run build
        ```

     2. Jalankan aplikasi

        ```bash
        npm run start
        ```

### _One-click Deployment_

Cara cepat untuk menggunakannya secara pribadi dengan PaaS yang ada

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffitrahive%2Fdua-dhikr%2Ftree%2Fmain">
  <img alt="Deploy dengan Vercel" src="https://vercel.com/button" height="32" />
</a>
<a href="https://app.koyeb.com/deploy?type=git&repository=github.com/fitrahive/dua-dhikr&branch=main&name=dua-dhikr">
  <img alt="Deploy dengan Koyeb" src="https://www.koyeb.com/static/images/deploy/button.svg" height="32" />
</a>
<a href="https://render.com/deploy">
  <img alt="Deploy dengan Render" src="https://render.com/images/deploy-to-render-button.svg" height="32" />
</a>

## Penggunaan

URL Utama : [`http://localhost:3000`](https://dua-dhikr.vercel.app)

| Titik Akhir                                                                    | Deskripsi                                                     | Metode  |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------- |
| [`/languages`](https://dua-dhikr.vercel.app/languages)                         | Mendapatkan daftar bahasa yang di dukung                      | _`GET`_ |
| [`/categories`](https://dua-dhikr.vercel.app/categories)                       | Mendapatkan daftar kategori doa & dzikir                      | _`GET`_ |
| [`/categories/:slug`](https://dua-dhikr.vercel.app/categories/daily-dua)       | Mendapatkan daftar doa & dzikir berdasarkan kategori tertentu | _`GET`_ |
| [`/categories/:slug/:id`](https://dua-dhikr.vercel.app/categories/daily-dua/1) | Mendapatkan detail doa & dzikir berdasarkan kategori dan id   | _`GET`_ |

> [!IMPORTANT]
> Untuk mendapatkan data dengan bahasa yang didukung, gunakan header `Accept-Language`. Secara bawaan akan menggunakan `id` (Bahasa Indonesia).

### Pameran

Daftar proyek keren (اللّٰهُمَّ بَارِكْ) yang didukung oleh API ini

- [**Kaaba**](https://github.com/sooluh/kaaba)<br>
  Aplikasi doa & dzikir sesuai sunnah (berbasis web) oleh [@sooluh](https://github.com/sooluh)

### Siap digunakan!

Daftar _server_ API yang siap digunakan secara publik

- [https://dua-dhikr.vercel.app](https://dua-dhikr.vercel.app/categories)
- [https://dua-dhikr.onrender.com](https://dua-dhikr.onrender.com/categories)

## Kontribusi

Lengkapi atau tambah data Doa & Dzikir sesuai Sunnah yang kamu tahu, pastikan data tersebut shahih!

> [!WARNING]
> Bertakwalah kepada Allah! Kontribusimu akan dihisab kelak di akhirat!

1. _Fork_ repositori ini
2. Buka `data/dua-dhikr` dan pilih kategori yang tersedia
3. Buka berkas JSON pada bahasa yang diinginkan, atau tambah baru dengan kode `ISO 639`
4. Lakukan perubahan dengan hati-hati!
5. _Commit_ perubahan dengan perintah `npm run commit`.
6. Ajukan _pull-request_
7. Tunggu kami melakukan _merge_

### Deskripsi kolom

- _`title`_ berisi judul Doa/Dzikir.
- _`arabic`_ berisi Doa/Dzikir dalam tulisan arab.
- _`latin`_ berisi transliterasi dari tulisan arab ke latin.
- _`translation`_ berisi terjemahan (translasi) ke bahasa terkait.
- _`notes`_ berisi catatan (Contoh: Dibaca 3x).
- _`fawaid`_ berisi faedah/fawaid dari Doa/Dzikir terkait.
- _`source`_ berisi referensi hadits yang shahih.

## Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](./LICENSE).<br>

## جزاكما الله خيرا كثيرا

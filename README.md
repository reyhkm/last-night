# Surat Cinta Kosmik - Sebuah Pengalaman Liris

Sebuah evolusi dari penampil lirik sederhana, proyek ini adalah pengalaman visual dan audio yang imersif, dirancang untuk menyajikan lirik lagu "Last Night on Earth" dari Green Day sebagai sebuah surat cinta yang ditulis di antara bintang-bintang.

## Konsep
Konsep "Surat Cinta Kosmik" mengubah cara kita menikmati lirik. Dengan latar belakang langit malam yang dinamis dan penuh bintang berkelip, setiap baris lirik muncul secara sinematik, didahului oleh pesan puitis yang membangun suasana. Tujuannya adalah untuk menciptakan pengalaman yang mendalam, emosional, dan tak terlupakan.

## Setup dan Menjalankan Proyek

### 1. Prasyarat
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn

### 2. Tambahkan File Audio
Sebelum memulai, Anda hanya perlu menambahkan file audio ke dalam direktori `public`.

1.  **File Audio**: Dapatkan file MP3 untuk "Last Night on Earth" oleh Green Day dan letakkan di folder `public`. **File tersebut harus dinamai `last-night-on-earth.mp3`**.

Direktori `public` Anda akan terlihat seperti ini:
```
public/
├── last-night-on-earth.mp3
└── vite.svg
```
*Catatan: Latar belakang gambar tidak lagi diperlukan karena telah digantikan oleh langit berbintang yang dibuat secara dinamis.*

### 3. Instalasi Dependensi
Buka terminal Anda di root proyek dan jalankan:
```bash
npm install
```

### 4. Jalankan Server Pengembangan
Setelah dependensi terinstal, Anda dapat memulai server pengembangan:
```bash
npm run dev
```

hhe
Ini akan membuka situs web di browser default Anda, biasanya di `http://localhost:5173`.

## Teknologi
- **React & Vite**: Untuk membangun antarmuka pengguna yang cepat dan modern.
- **Tailwind CSS**: Untuk styling yang sangat dapat disesuaikan dan desain yang responsif.
- **Animasi CSS**: Animasi kustom yang dibuat untuk memberikan nuansa sinematik dan dinamis pada setiap elemen.

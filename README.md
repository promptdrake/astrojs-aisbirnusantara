# Aisbir Cloud Nusantara - Landing Page 

![Aisbir Cloud Banner](public/images/kakak_umi_chan.webp)

Template *landing page* [Aisbir Cloud Nusantara](https://aisbirnusantara.com), penyedia layanan *web hosting* dan server Pterodactyl. Proyek ini dibangun dari nol dengan fokus pada performa, aksesibilitas, dan SEO tingkat tinggi.

## Fitur Utama

- **Skor Lighthouse 100/100**: Optimasi pada metrik FCP, LCP, dan CLS hingga skor nyaris sempurna di perangkat seluler maupun desktop.
- **Ultra Ringan**: Semua aset gambar telah diubah ukurannya dan dikompresi menjadi WebP secara lokal
- **Astro SSG (Static Site Generation)**: Dibangun menggunakan [Astro](https://astro.build/)
- **SEO Ready**: Mendukung metadata lengkap, Open Graph, Twitter Cards, kanonikal URL, serta `sitemap.xml` yang dibuat secara otomatis menggunakan `@astrojs/sitemap`.
- **Desain Modern**: Antarmuka *glassmorphism* modern dengan animasi yang responsif.
- **Siap Cloudflare Pages**: Konfigurasi `_headers` khusus untuk instruksi *Cache-Control* dan *Expires Headers* yang sempurna di infrastruktur Cloudflare.

## Teknologi yang Digunakan

- [Astro](https://astro.build/) - *Web framework* utama
- CSS Murni - Styling kustom tingkat tinggi tanpa tambahan framework
- [Cloudflare Pages](https://pages.cloudflare.com/) - Infrastruktur *deployment* & *hosting*

## Panduan Instalasi 

### Persyaratan Sistem
Pastikan Anda menggunakan **Node.js versi 20.0.0 atau yang lebih baru**. Kami merekomendasikan Node.js versi 22.

### Langkah-langkah

1. **Clone repository:**
   ```bash
   git clone https://github.com/promptdrake/astrojs-aisbirnusantara.git
   cd astrojs-aisbirnusantara
   ```

2. **Instal dependency:**
   ```bash
   npm install
   ```

3. **Run Dev:**
   ```bash
   npm run dev
   ```
   *Buka web debug di: `http://localhost:4321`.*

4. **Compile (Build):**
   ```bash
   npm run build
   ```
   *Hasil compile nanti ada di .dist.*

## Deployment (Cloudflare Pages)

Untuk melakukan proses compile dan otomatis deploy ke Cloudflare, pastikan sudah login ke cf dulu (`npx wrangler login`), lalu run command:

```bash
npm run deploy
```

*Run `npm run build` sebelum `npm run deploy`.*

## 📄 Lisensi

Proyek ini sepenuhnya milik aisbir cloud nusantara, dan semua orang bebas menggunakan dan fork repository ini, tetapi harap cantumkan credit kita walaupun sudah kamu modifikasi

---

*Dibuat dengan ❤️ oleh [Aisbir Cloud Nusantara](https://aisbirnusantara.com).*
# Aisbir Cloud Nusantara - Landing Page 

![Aisbir Cloud Banner](public/images/kakak_umi_chan.webp)

Template *landing page* [Aisbir Cloud Nusantara](https://aisbirnusantara.com), penyedia layanan *web hosting* dan server Pterodactyl. Proyek ini dibangun dari nol dengan fokus pada performa, aksesibilitas, dan SEO tingkat tinggi.



## Tech yang digunakan

- [Astro](https://astro.build/) - *Web framework* utama
- [Cloudflare Pages](https://pages.cloudflare.com/)

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
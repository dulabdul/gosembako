# GoSembako Landing Page

Website landing page modern untuk grosir sembako, dibangun menggunakan Next.js (App Router), TypeScript, dan Tailwind CSS v4.

## Fitur Utama
- ⚡ **Next.js App Router** untuk performa tinggi dan SEO optimal.
- 🎨 **Tailwind CSS v4** dengan konfigurasi warna custom (Primary Teal & Secondary Cream).
- 📱 **Mobile-First Design** yang responsif sepenuhnya.
- 🛍️ **Katalog Produk Dinamis** dengan Modal detail harga.
- 💬 **Integrasi WhatsApp** dengan pesan otomatis berdasarkan produk.
- ♿ **Aksesibilitas (A11y)**: Semantic HTML, ARIA labels, dan keyboard navigation.
- 🚀 **SEO Ready**: Metadata, JSON-LD Structured Data, Sitemap, Robots.txt.

## Persyaratan Sistem
- Node.js >= 18.17.0

## Cara Menjalankan

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Jalankan Development Server:**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser.

3.  **Build untuk Production:**
    ```bash
    npm run build
    npm start
    ```

## Struktur Proyek
- `src/components`: Komponen UI yang dipisah (Sections, UI elements, Layout).
- `src/data`: Data produk dan konten teks (mudah diedit tanpa mengubah kode).
- `src/app`: Halaman dan routing Next.js.

## Instruksi Deployment (Vercel)
Proyek ini dioptimalkan untuk Vercel.
1. Push kode ke GitHub/GitLab/Bitbucket.
2. Buka dashboard Vercel -> "Add New Project".
3. Import repository ini.
4. Klik **Deploy**. (Tidak perlu konfigurasi tambahan, Vercel mendeteksi Next.js secara otomatis).
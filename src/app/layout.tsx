import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/data/content';

// FIX: Tambahkan URL produksi Anda di sini.
// Jika belum deploy, bisa pakai localhost dulu, tapi ganti saat production.
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
  : new URL(`https://${SITE_CONFIG.domain}`);

export const metadata: Metadata = {
  metadataBase: baseUrl, // PENTING UNTUK OG IMAGE
  title: {
    default: 'Grosir Sembako Termurah & Terlengkap | GoSembako',
    template: '%s | GoSembako',
  },
  description:
    'Pusat grosir sembako termurah: gula, minyak, beras, mie instan, dan lainnya. Siap kirim ke seluruh Indonesia. Pesan sekarang!',
  keywords: [
    'grosir sembako',
    'distributor sembako',
    'jual sembako murah',
    'gula pasir grosir',
    'minyak goreng murah',
    'agen sembako',
  ],
  authors: [{ name: 'GoSembako Team' }],
  creator: 'GoSembako',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: baseUrl,
    title: 'Grosir Sembako Termurah & Terlengkap | GoSembako',
    description: 'Pusat grosir sembako termurah siap kirim seluruh Indonesia.',
    siteName: SITE_CONFIG.name,
    // images: otomatis diambil dari opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grosir Sembako Termurah & Terlengkap | GoSembako',
    description: 'Pusat grosir sembako termurah siap kirim seluruh Indonesia.',
    // images: otomatis diambil dari opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    name: SITE_CONFIG.name,
    image: `${baseUrl}/images/hero-image.jpg`,
    description: 'Pusat grosir sembako termurah dan terlengkap di Indonesia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressCountry: 'ID',
    },
    priceRange: '$$',
    telephone: SITE_CONFIG.whatsapp,
    url: baseUrl.toString(),
  };

  return (
    <html
      lang='id'
      className='scroll-smooth'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

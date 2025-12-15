import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/data/content';

export const metadata: Metadata = {
  title: 'Grosir Sembako Termurah & Terlengkap | GoSembako',
  description:
    'Pusat grosir sembako termurah: gula, minyak, beras, mie instan, dan lainnya. Siap kirim ke seluruh Indonesia. Pesan sekarang!',
  keywords: [
    'grosir sembako',
    'distributor sembako',
    'jual sembako murah',
    'gula pasir grosir',
    'minyak goreng murah',
  ],
  openGraph: {
    title: 'Grosir Sembako Termurah & Terlengkap | GoSembako',
    description: 'Pusat grosir sembako termurah siap kirim seluruh Indonesia.',
    url: `https://${SITE_CONFIG.domain}`,
    siteName: SITE_CONFIG.name,
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}`,
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
    image: `https://${SITE_CONFIG.domain}/logo.png`,
    description: 'Pusat grosir sembako termurah dan terlengkap di Indonesia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressCountry: 'ID',
    },
    priceRange: '$$',
    telephone: SITE_CONFIG.whatsapp,
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

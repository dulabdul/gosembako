import React from 'react';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/content';

const CTABanner = () => {
  return (
    <section className='py-20 bg-primary text-white relative overflow-hidden'>
      {/* Decorative Circles */}
      <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl'></div>

      <div className='container-custom relative z-10 text-center'>
        <span className='inline-block py-1 px-3 rounded-full bg-white/20 text-sm font-semibold mb-4 backdrop-blur-sm'>
          {SITE_CONFIG.domain}
        </span>
        <h2 className='text-3xl md:text-5xl font-bold mb-6'>
          Mulai Belanja Sembako Grosir Termurah Sekarang!
        </h2>
        <p className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed'>
          Dapatkan penawaran terbatas untuk pembelian besar! Setiap transaksi
          grosir akan mendapatkan harga ekstra murah dengan jaminan stok aman
          dan pengiriman cepat ke seluruh Indonesia.
        </p>
        <Button
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          variant='secondary'
          className='text-lg font-bold px-10 py-4 shadow-xl'>
          Pesan Sekarang via WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;

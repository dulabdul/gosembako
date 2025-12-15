'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full bg-gray-100'>
      <div className='relative w-full'>
        {/* Logic Responsive:
          - width/height: Setting rasio aspek gambar (misal 1280x600).
          - w-full h-auto: Gambar akan melebar 100% layar, dan tingginya otomatis menyesuaikan.
            Hasil: Gambar TIDAK akan terpotong (cropping) dan tulisan di gambar akan selalu terbaca utuh.
        */}
        <Image
          src='/images/hero-image.jpg'
          alt='Banner Utama Go Sembako'
          width={1280}
          height={640}
          priority
          sizes='100vw'
          className='w-full h-auto block'
        />

        {/* Overlay sangat tipis (opsional, bisa dihapus jika ingin gambar 100% original) */}
        <div className='absolute inset-0 bg-black/5 pointer-events-none' />
      </div>
    </section>
  );
};

export default Hero;

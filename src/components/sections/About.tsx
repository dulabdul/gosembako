import React from 'react';
import Image from 'next/image'; // Pastikan import Image
import { ABOUT_CONTENT } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='container-custom'>
        {/* Header Section */}
        <div className='max-w-4xl mx-auto text-center mb-12'>
          <h2 className='text-primary font-bold tracking-wide uppercase text-sm mb-2'>
            Tentang Kami
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            {ABOUT_CONTENT.title}
          </h3>
          <p className='text-xl text-gray-600 font-medium'>
            {ABOUT_CONTENT.subtitle}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Kolom Kiri: Teks & Stats */}
          <div className='space-y-6 text-gray-600 leading-relaxed text-justify order-2 md:order-1'>
            {ABOUT_CONTENT.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Badges / Stats */}
            <div className='flex flex-wrap gap-4 pt-4'>
              {ABOUT_CONTENT.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-primary font-semibold text-sm'>
                  <CheckCircle2 className='w-5 h-5' />
                  {stat}
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          {/* PERBAIKAN DISINI: 
              - Mobile: h-64 (256px) agar tidak terlalu tinggi.
              - Desktop: md:h-[500px] agar tinggi dan gagah mengimbangi teks.
              - order-1 md:order-2: Di mobile gambar tampil DULUAN (di atas teks), 
                atau hapus class order jika ingin teks dulu baru gambar.
          */}
          <div className='relative h-64 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 order-1 md:order-2 border border-gray-100'>
            {/* Masukkan gambar About Anda disini */}
            <Image
              src='/images/image-about.jpg' // Ganti dengan nama file gambar Anda di folder public/images/
              alt='Gudang Sembako Go Sembako'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

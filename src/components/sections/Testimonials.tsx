import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Bu Siti Aminah',
    role: 'Pemilik Warung Sembako',
    // Foto wanita Indonesia (berhijab) agar lebih relevan dengan profil pemilik warung
    image: '/images/face1.jpg',
    content:
      'Alhamdulillah sejak ambil barang di GoSembako, keuntungan warung saya naik. Harganya beneran grosir termurah dibanding tempat lain. Pengiriman juga cepat sampai depan toko.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Agen Reseller',
    // Foto pria Asia/Indonesia
    image: '/images/face2.jpg',
    content:
      'Respon admin cepat banget via WA. Stok gula dan minyak selalu ready dalam jumlah besar. Sangat recommended buat yang mau mulai usaha grosiran.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ratna Dewi',
    role: 'Ibu Rumah Tangga / Katering',
    // Foto wanita Asia (Ibu rumah tangga/pengusaha katering)
    image: '/images/face3.jpg',
    content:
      'Awalnya ragu beli online, tapi ternyata amanah. Berasnya pulen dan wangi sesuai deskripsi. Langganan terus buat kebutuhan usaha katering saya.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className='py-24 bg-gray-50'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-primary font-bold tracking-wide uppercase text-sm mb-2'>
            Testimoni Pelanggan
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Apa Kata Mitra Kami?
          </h3>
          <p className='text-gray-600'>
            Ribuan mitra toko, agen, dan pelanggan rumahan telah mempercayakan
            kebutuhan sembako mereka kepada kami.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative border border-gray-100 flex flex-col'>
              {/* Ikon Kutipan Dekoratif */}
              <Quote className='absolute top-6 right-6 text-gray-100 w-12 h-12 fill-current' />

              {/* Header: Foto & Nama */}
              <div className='flex items-center gap-4 mb-6'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover'
                    sizes='60px'
                  />
                </div>
                <div>
                  <h4 className='font-bold text-gray-900'>{item.name}</h4>
                  <p className='text-xs text-gray-500 font-medium'>
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className='flex gap-1 mb-4'>
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>

              {/* Isi Testimoni */}
              <p className='text-gray-600 text-sm leading-relaxed italic flex-1'>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

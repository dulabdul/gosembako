import React from 'react';
import { ShoppingBag, MousePointerClick, Truck } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Produk Lengkap',
    desc: 'Semua kebutuhan sembako tersedia dalam satu tempat dengan standar kualitas terbaik.',
  },
  {
    icon: MousePointerClick,
    title: 'Pemesanan Mudah',
    desc: 'Proses pemesanan mudah lewat online cukup klik sekali, pesanan langsung diproses tanpa ribet.',
  },
  {
    icon: Truck,
    title: 'Pengiriman Luas',
    desc: 'Layanan pengiriman produk kami cepat, aman, dan menjangkau berbagai daerah di Indonesia.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className='py-20 bg-secondary/30'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Mengapa Memilih Kami?
          </h2>
          <div className='h-1 w-20 bg-primary mx-auto rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary mb-6 group-hover:scale-110 transition-transform duration-300'>
                <feature.icon className='w-8 h-8' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

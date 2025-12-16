import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTABanner from '@/components/sections/CTABanner';

import ScrollToTop from '@/components/ui/ScrollToTop';
import Products from '@/components/sections/Product';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsapp';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <Navbar />
      <div className='pt-20'></div>
      <Hero />
      <div className='relative z-10 bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.05)] rounded-t-[2.5rem] -mt-3'>
        <div className='pt-10'>
          <section className='container-custom text-center pb-8'>
            <span className='inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4'>
              Grosir Sembako Termurah
            </span>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              Siap Kirim ke Seluruh Indonesia!
            </h2>
          </section>
          <About />
        </div>
      </div>
      <WhyChooseUs />
      <CTABanner />
      <Products />
      <Testimonials />
      {/* Contact Section text before footer */}
      <section className='bg-primary-dark text-white py-16 text-center'>
        <div className='container-custom'>
          <h2 className='text-3xl font-bold mb-4'>Hubungi Kami!</h2>
          <p className='text-lg opacity-90'>
            Stok update setiap hari, harga grosir terbaik menanti Anda. Pesan
            sekarang!
          </p>
        </div>
      </section>

      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  );
}

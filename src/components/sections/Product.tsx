'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Opsional jika nanti pakai gambar asli
import { Star, ShoppingCart } from 'lucide-react'; // Tambah icon ShoppingCart
import { products } from '@/data/products';
import { Product, ProductGroup } from '@/types';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/content';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Helper untuk link WA
  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      `Halo, saya ingin pesan ${productName}. Mohon info ketersediaan stok dan total harganya.`
    );
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`;
  };

  // Helper untuk membuka WA (digunakan pada tombol di card)
  const handleOrderClick = (e: React.MouseEvent, productName: string) => {
    e.stopPropagation(); // Mencegah modal terbuka saat tombol diklik
    window.open(getWhatsAppLink(productName), '_blank');
  };

  return (
    <section
      id='products'
      className='py-24 bg-white'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Pilihan Produk Kami
          </h2>
          <p className='text-gray-600'>
            Kami menyediakan sembako murah untuk kebutuhan toko, warung, UMKM,
            hingga reseller. Semua produk tersedia dalam jumlah besar dan siap
            dikirim ke seluruh Indonesia.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full'
              onClick={() => setSelectedProduct(product)}>
              {/* Image Section */}
              <div className='relative h-80 w-full bg-gray-100 overflow-hidden'>
                <div className='absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-medium'>
                  {/* Placeholder Image */}
                  <span className='text-lg'>{product.name}</span>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>

              {/* Card Body */}
              <div className='p-6 flex-1 flex flex-col'>
                {/* Rating */}
                <div className='flex items-center gap-1 mb-2'>
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='text-xs text-gray-400 ml-1'>(Terlaris)</span>
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                  {product.name}
                </h3>

                {/* Description */}
                <p className='text-gray-600 text-sm line-clamp-2 mb-4'>
                  {product.description}
                </p>

                {/* Footer Card: Link Detail & Tombol CTA */}
                <div className='mt-auto pt-4 border-t border-gray-50 flex flex-col gap-3'>
                  {/* Text Link untuk memancing klik Modal */}
                  <span className='text-primary font-semibold text-sm hover:underline'>
                    Lihat Daftar Harga Lengkap &rarr;
                  </span>

                  {/* CTA BUTTON DI LUAR MODAL */}
                  <Button
                    onClick={(e) => handleOrderClick(e, product.name)}
                    variant='primary'
                    className='w-full py-2.5 text-sm font-bold shadow-none hover:shadow-lg flex items-center justify-center gap-2'>
                    <ShoppingCart className='w-4 h-4' />
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name || 'Detail Produk'}>
        {selectedProduct && (
          <div className='space-y-6'>
            <p className='text-gray-600 text-sm leading-relaxed'>
              {selectedProduct.description}
            </p>

            <div className='bg-gray-50 rounded-xl p-4 max-h-[50vh] overflow-y-auto border border-gray-100 scrollbar-thin'>
              {selectedProduct.priceList.map(
                (group: ProductGroup, idx: number) => (
                  <div
                    key={idx}
                    className='mb-6 last:mb-0'>
                    <h4 className='font-bold text-primary mb-3 sticky top-0 bg-gray-50 py-2 border-b border-gray-200'>
                      {group.groupName}
                    </h4>
                    <div className='space-y-3'>
                      {group.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className='flex justify-between items-center text-sm'>
                          <span className='text-gray-700 font-medium w-2/3'>
                            {item.name}
                          </span>
                          <span className='text-gray-900 font-bold bg-white px-2 py-1 rounded border border-gray-100 shadow-sm'>
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className='pt-4 border-t flex flex-col sm:flex-row gap-3'>
              <Button
                onClick={() =>
                  window.open(getWhatsAppLink(selectedProduct.name), '_blank')
                }
                variant='primary'
                fullWidth
                className='font-bold'>
                Pesan via WhatsApp
              </Button>
              <Button
                onClick={() => setSelectedProduct(null)}
                variant='outline'
                fullWidth>
                Tutup
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Products;

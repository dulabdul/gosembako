'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { SITE_CONFIG } from '@/data/content';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Produk', href: '#products' },
  { label: 'Kontak', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // FIX: Navbar dibuat FIXED dengan background PUTIH solid & shadow.
    // Tinggi diset h-20 (sekitar 80px).
    <nav className='fixed top-0 left-0 right-0 z-50 w-full h-20 bg-white shadow-md flex items-center'>
      <div className='container-custom flex items-center justify-between w-full'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 group'>
          <div className='bg-primary text-white p-2 rounded-lg'>
            <ShoppingCart className='h-6 w-6' />
          </div>
          <span className='text-xl font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors'>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='font-medium text-sm text-gray-600 hover:text-primary transition-colors'>
              {item.label}
            </Link>
          ))}
          <Link
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            className='px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-all'>
            Pesan Sekarang
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 rounded-md text-gray-900'
          aria-label='Toggle menu'>
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col p-4 space-y-4'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className='block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg font-medium'>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

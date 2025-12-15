import React from 'react';
import { ABOUT_CONTENT } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='container-custom'>
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
          <div className='space-y-6 text-gray-600 leading-relaxed text-justify'>
            {ABOUT_CONTENT.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

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

          <div className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200'>
            <Image
              src='/images/image-about.jpg'
              alt='about us'
              width={400}
              height={300}
              className='object-center bg-cover w-full h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'GoSembako - Grosir Sembako Termurah';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #0689a6, #05708a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
          textAlign: 'center',
        }}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          {/* Ikon Keranjang Simple */}
          <svg
            width='80'
            height='80'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            style={{ marginRight: 20 }}>
            <circle
              cx='9'
              cy='21'
              r='1'
            />
            <circle
              cx='20'
              cy='21'
              r='1'
            />
            <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
          </svg>
          <div style={{ fontSize: 70, fontWeight: 'bold' }}>GoSembako</div>
        </div>
        <div style={{ fontSize: 32, opacity: 0.9, marginTop: 10 }}>
          Pusat Grosir Sembako Termurah & Terlengkap
        </div>
        <div
          style={{
            marginTop: 40,
            padding: '10px 30px',
            background: 'white',
            color: '#0689a6',
            borderRadius: 50,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Siap Kirim Seluruh Indonesia
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

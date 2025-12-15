import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/content';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${SITE_CONFIG.domain}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
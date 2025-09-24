import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for SAJP website
 * Controls search engine crawling behavior
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://sajp.com/sitemap.xml',
  };
}

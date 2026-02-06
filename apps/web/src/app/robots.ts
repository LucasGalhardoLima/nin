import type { MetadataRoute } from 'next';
import { getSiteBaseUrl, trimTrailingSlash } from '@/lib/url';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = trimTrailingSlash(getSiteBaseUrl());
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/preferences', '/login', '/register'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

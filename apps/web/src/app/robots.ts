import type { MetadataRoute } from 'next';

const getSiteBaseUrl = () => process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

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

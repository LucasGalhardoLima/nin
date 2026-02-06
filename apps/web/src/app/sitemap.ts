import type { MetadataRoute } from 'next';
import { getApiBaseUrl, getSiteBaseUrl, trimTrailingSlash } from '@/lib/url';

type SitemapProperty = {
  id: string;
  updatedAt?: string | null;
  lastScrapedAt?: string | null;
  createdAt?: string | null;
};

type PropertyListResponse = {
  data?: SitemapProperty[];
  totalPages?: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = trimTrailingSlash(getSiteBaseUrl());

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/onboarding`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/login`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/register`, changeFrequency: 'monthly', priority: 0.4 },
  ];

  try {
    const limit = 200;
    const maxPagesSafety = 50;
    const propertyRoutes: MetadataRoute.Sitemap = [];

    const fetchPage = async (page: number): Promise<PropertyListResponse | null> => {
      const response = await fetch(
        `${getApiBaseUrl()}/properties?limit=${limit}&page=${page}`,
        { next: { revalidate: 3600 } },
      );
      if (!response.ok) return null;
      return response.json() as Promise<PropertyListResponse>;
    };

    const first = await fetchPage(1);
    if (!first) return staticRoutes;

    const totalPages = Math.min(first.totalPages || 1, maxPagesSafety);
    const collect = (data: PropertyListResponse) => {
      const items = Array.isArray(data?.data) ? data.data : [];
      propertyRoutes.push(
        ...items.map(
          (item) => ({
            url: `${baseUrl}/imovel/${item.id}`,
            lastModified: item.updatedAt
              ? new Date(item.updatedAt)
              : item.lastScrapedAt
              ? new Date(item.lastScrapedAt)
              : item.createdAt
              ? new Date(item.createdAt)
              : undefined,
            changeFrequency: 'daily' as const,
            priority: 0.8,
          }),
        ),
      );
    };

    collect(first);

    for (let page = 2; page <= totalPages; page += 1) {
      const data = await fetchPage(page);
      if (!data) break;
      collect(data);
    }

    return [...staticRoutes, ...propertyRoutes];
  } catch {
    return staticRoutes;
  }
}

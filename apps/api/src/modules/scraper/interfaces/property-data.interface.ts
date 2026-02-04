export interface PropertyData {
  sourceId: string;
  sourceUrl: string;
  sourceName: string;
  scrapingSource: string;
  title: string;
  description?: string;
  price?: number;
  propertyType: string; // 'APARTMENT', 'HOUSE', etc.
  transactionType: string; // 'RENT', 'BUY'
  bedrooms: number;
  bathrooms: number;
  area?: number;
  address?: string;
  cityName: string;
  neighborhoodName?: string;
  latitude?: number;
  longitude?: number;
  hasParking?: boolean;
  hasGarden?: boolean;
  hasPool?: boolean;
  hasSecurity?: boolean;
  petFriendly?: boolean;
  hasGym?: boolean;
  hasPlayground?: boolean;
  hasGreenArea?: boolean;
  images: string[];
}

export interface ScraperConfig {
  maxPages?: number;
  delayBetweenPages?: number;
  headless?: boolean;
}

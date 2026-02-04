import { Page } from 'playwright';
import { BaseScraper } from './base.scraper';
import { PropertyData } from '../interfaces/property-data.interface';

export class ThiagoFavaroScraper extends BaseScraper {
  private readonly baseUrl = 'https://www.thiagofavaroimoveis.com.br';
  private readonly cityMap: Record<string, string> = {
    araraquara: 'araraquara',
    matao: 'matao',
  };
  private readonly transactionMap: Array<{ slug: string; type: 'BUY' | 'RENT' }> = [
    { slug: 'venda', type: 'BUY' },
    { slug: 'locacao', type: 'RENT' },
  ];
  private readonly propertyTypeSlugs = [
    'casa',
    'apartamento',
    'casa-em-condominio',
    'sobrado',
    'terreno',
    'comercial',
    'cobertura',
  ];

  constructor() {
    super('thiagofavaro', {
      maxPages: 3,
      delayBetweenPages: 2000,
      headless: true,
    });
  }

  async scrapeListings(city: string): Promise<PropertyData[]> {
    try {
      await this.initBrowser();

      const citySlug = this.cityMap[city.toLowerCase()];
      if (!citySlug) {
        this.logger.warn(`City not supported by Thiago Favaro scraper: ${city}`);
        return [];
      }

      const allResults: PropertyData[] = [];
      const seen = new Set<string>();

      for (const transaction of this.transactionMap) {
        for (const typeSlug of this.propertyTypeSlugs) {
          for (let pageNum = 1; pageNum <= this.config.maxPages!; pageNum++) {
            const url = this.buildListUrl(transaction.slug, typeSlug, citySlug, pageNum);
            this.logger.log(`Scraping ${transaction.type} ${typeSlug} - ${citySlug} (page ${pageNum})`);

            const page = await this.browser.newPage();
            try {
              await this.gotoWithRetry(page, url);
              const listingUrls = await this.extractListingUrls(page);
              if (listingUrls.length === 0) {
                await page.close();
                break;
              }

              for (const listingUrl of listingUrls) {
                if (seen.has(listingUrl)) continue;
                seen.add(listingUrl);

                const property = await this.scrapePropertyDetails(listingUrl, transaction.type, city);
                if (property) {
                  allResults.push(property);
                }
              }
            } catch (error) {
              this.logger.warn(`Failed to scrape page ${url}: ${error.message}`);
            } finally {
              await page.close();
            }

            await this.delay(1500);
          }
        }
      }

      return allResults;
    } finally {
      await this.closeBrowser();
    }
  }

  async scrapePropertyDetails(url: string, transactionType?: 'BUY' | 'RENT', city?: string): Promise<PropertyData | null> {
    const page = await this.browser.newPage();

    try {
      await this.gotoWithRetry(page, url);

      const title =
        (await this.safeExtractText(page, 'h1')) ||
        (await page.evaluate(() => {
          const meta = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
          return meta?.content || '';
        }));

      if (!title) return null;

      const html = await page.content();
      const priceMatch = html.match(/R\$\s?[\d\.\,]+/);
      const price = priceMatch ? this.normalizePrice(priceMatch[0]) : 0;

      const counts = this.extractCountsFromHtml(html);

      const images = await page.evaluate(() => {
        const og = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
        const collected = new Set<string>();
        if (og?.content) collected.add(og.content);
        document.querySelectorAll('img').forEach((img) => {
          const src = img.getAttribute('data-src') || img.getAttribute('src');
          if (src && src.startsWith('http')) collected.add(src);
        });
        return Array.from(collected).slice(0, 10);
      });

      const sourceId = this.extractSourceId(url);

      return {
        sourceId,
        sourceUrl: url,
        sourceName: 'Thiago Favaro Imoveis',
        scrapingSource: this.source,
        title,
        description: '',
        price,
        propertyType: this.determinePropertyType(title),
        transactionType: transactionType || 'BUY',
        bedrooms: counts.bedrooms ?? 0,
        bathrooms: counts.bathrooms ?? 0,
        area: counts.area ?? 0,
        cityName: city || '',
        address: '',
        hasParking: (counts.parkingSpaces ?? 0) > 0,
        hasPool: title.toLowerCase().includes('piscina'),
        hasGarden: title.toLowerCase().includes('jardim'),
        hasSecurity: title.toLowerCase().includes('condomínio'),
        images,
      };
    } catch (error) {
      this.logger.warn(`Failed to scrape property details ${url}: ${error.message}`);
      return null;
    } finally {
      await page.close();
    }
  }

  private buildListUrl(transaction: string, typeSlug: string, citySlug: string, pageNum: number): string {
    const base = `${this.baseUrl}/imovel/${transaction}/${typeSlug}/${citySlug}/`;
    return pageNum > 1 ? `${base}?pagina=${pageNum}` : base;
  }

  private async extractListingUrls(page: Page): Promise<string[]> {
    const urls = await page.$$eval('a[href*="/imovel/"]', (anchors) =>
      anchors
        .map((a) => (a as HTMLAnchorElement).href)
        .filter((href) => href && href.includes('/imovel/'))
    );

    return Array.from(new Set(urls));
  }

  private extractCountsFromHtml(html: string): {
    bedrooms?: number;
    bathrooms?: number;
    parkingSpaces?: number;
    area?: number;
  } {
    const lower = html.toLowerCase();
    const extractByKeyword = (keyword: RegExp, max: number) => {
      const match = lower.match(new RegExp(`(\\d{1,2})\\s*${keyword.source}`));
      if (!match) return undefined;
      const value = parseInt(match[1], 10);
      if (Number.isNaN(value) || value <= 0 || value > max) return undefined;
      return value;
    };

    const bedrooms = extractByKeyword(/quarto|dorm/, 10);
    const bathrooms = extractByKeyword(/banh/, 10);
    const parkingSpaces = extractByKeyword(/vaga|garag/, 20);

    const areaMatch = lower.match(/(\d{2,4})\s*(m²|m2)/);
    const area = areaMatch ? parseInt(areaMatch[1], 10) : undefined;

    return { bedrooms, bathrooms, parkingSpaces, area };
  }

  private determinePropertyType(title: string): string {
    const text = title.toLowerCase();
    if (text.includes('apartamento') || text.includes('apto')) return 'APARTMENT';
    if (text.includes('cobertura')) return 'PENTHOUSE';
    if (text.includes('casa') || text.includes('sobrado')) return 'HOUSE';
    if (text.includes('terreno') || text.includes('lote')) return 'LAND';
    if (text.includes('comercial') || text.includes('sala')) return 'COMMERCIAL';
    return 'HOUSE';
  }

  private extractSourceId(url: string): string {
    const match = url.match(/id-(\d+)/i);
    if (match) return match[1];
    const fallback = url.match(/\/(\d+)(?:\/|$)/);
    return fallback ? fallback[1] : url;
  }

  private async gotoWithRetry(page: Page, url: string): Promise<void> {
    const attempts = [
      { timeout: 60000, waitUntil: 'domcontentloaded' as const },
      { timeout: 90000, waitUntil: 'domcontentloaded' as const },
    ];

    let lastError: Error | null = null;
    for (let i = 0; i < attempts.length; i++) {
      try {
        await page.goto(url, attempts[i]);
        await this.waitForPageReady(page);
        return;
      } catch (error) {
        lastError = error as Error;
        this.logger.warn(`Navigation attempt ${i + 1} failed: ${lastError.message}`);
      }
    }

    if (lastError) {
      throw lastError;
    }
  }
}

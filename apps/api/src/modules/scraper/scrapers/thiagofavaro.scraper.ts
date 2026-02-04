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
      const pageText = await page.evaluate(() => document.body.innerText || '');

      const priceMatch = html.match(/R\$\s?[\d\.\,]+/);
      const price = priceMatch ? this.normalizePrice(priceMatch[0]) : 0;

      const counts = this.extractCountsFromText(pageText);
      const areaDetails = this.extractAreaDetailsFromText(pageText);
      const area = areaDetails.built ?? areaDetails.total ?? counts.area ?? 0;

      const descriptionText = this.extractSectionText(pageText, /descri[cç][aã]o do im[oó]vel/i);
      const proximidades = this.extractProximidades(pageText);
      const combinedDescription = this.combineDescription(descriptionText, proximidades);

      const hasSecurity = /portaria\s*24|portaria\s*24h|seguran[cç]a|vigil[aâ]ncia|condom[ií]nio fechado/i.test(
        combinedDescription.toLowerCase()
      );
      const hasGarden = /jardim|quintal|gramado/i.test(combinedDescription.toLowerCase());
      const hasPool = /piscina/i.test(combinedDescription.toLowerCase());

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
      const resolvedType = this.determinePropertyType(title);

      if (resolvedType === 'LAND' || resolvedType === 'COMMERCIAL') {
        return null;
      }

      return {
        sourceId,
        sourceUrl: url,
        sourceName: 'Thiago Favaro Imoveis',
        scrapingSource: this.source,
        title,
        description: combinedDescription,
        price,
        propertyType: resolvedType,
        transactionType: transactionType || 'BUY',
        bedrooms: counts.bedrooms ?? 0,
        bathrooms: counts.bathrooms ?? 0,
        area,
        cityName: city || '',
        address: '',
        hasParking: (counts.parkingSpaces ?? 0) > 0,
        hasPool,
        hasGarden,
        hasSecurity,
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

  private extractCountsFromText(text: string): {
    bedrooms?: number;
    bathrooms?: number;
    parkingSpaces?: number;
    area?: number;
  } {
    const lower = text.toLowerCase();
    const extractByKeyword = (keyword: RegExp, max: number) => {
      const match = lower.match(new RegExp(`(\\d{1,2})\\s*${keyword.source}`, 'i'));
      if (!match) return undefined;
      const value = parseInt(match[1], 10);
      if (Number.isNaN(value) || value <= 0 || value > max) return undefined;
      return value;
    };

    const bedrooms = extractByKeyword(/dormit[oó]rio|quarto|dorm/, 10);
    const bathrooms = extractByKeyword(/banheiro|banh/, 10);
    const parkingSpaces = extractByKeyword(/vaga|garag/, 20);

    const areaMatch = lower.match(/(\d{2,4})\s*(m²|m2)/i);
    const area = areaMatch ? parseInt(areaMatch[1], 10) : undefined;

    return { bedrooms, bathrooms, parkingSpaces, area };
  }

  private extractAreaDetailsFromText(text: string): {
    total?: number;
    built?: number;
  } {
    const parseNumber = (value: string) => {
      const normalized = value.replace(/\./g, '').replace(',', '.');
      const parsed = parseFloat(normalized);
      return Number.isNaN(parsed) ? undefined : parsed;
    };

    const totalMatch = text.match(/Área Total:\s*([\d.,]+)\s*m²/i);
    const builtMatch = text.match(/Área Constru[ií]da:\s*([\d.,]+)\s*m²/i);
    const usefulMatch = text.match(/Área [ÚU]til:\s*([\d.,]+)\s*m²/i);
    const landMatch = text.match(/Área Terreno:\s*([\d.,]+)\s*m²/i);

    return {
      total: totalMatch ? parseNumber(totalMatch[1]) : undefined,
      built: builtMatch ? parseNumber(builtMatch[1]) : usefulMatch ? parseNumber(usefulMatch[1]) : landMatch ? parseNumber(landMatch[1]) : undefined,
    };
  }

  private extractSectionText(text: string, heading: RegExp): string {
    const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
    const index = lines.findIndex((line) => heading.test(line));
    if (index === -1) return '';

    const collected: string[] = [];
    for (let i = index + 1; i < lines.length; i++) {
      const line = lines[i];
      if (/^proximidades$/i.test(line)) break;
      if (/^caracter[ií]sticas$/i.test(line)) break;
      if (/^c[oô]modos$/i.test(line)) break;
      if (/^áreas comuns$/i.test(line)) break;
      if (/^observa[cç][aã]o/i.test(line)) break;
      if (/^área total/i.test(line)) break;
      collected.push(line);
      if (collected.length >= 12) break;
    }

    return collected.join('\n').trim();
  }

  private extractProximidades(text: string): string[] {
    const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
    const index = lines.findIndex((line) => /^proximidades$/i.test(line));
    if (index === -1) return [];

    const items: string[] = [];
    for (let i = index + 1; i < lines.length; i++) {
      const line = lines[i];
      if (/^caracter[ií]sticas$/i.test(line)) break;
      if (/^c[oô]modos$/i.test(line)) break;
      if (/^áreas comuns$/i.test(line)) break;
      if (/^descri[cç][aã]o do im[oó]vel$/i.test(line)) break;
      if (/^observa[cç][aã]o/i.test(line)) break;
      if (line.length > 40) continue;
      items.push(line);
      if (items.length >= 8) break;
    }

    return Array.from(new Set(items));
  }

  private combineDescription(description: string, proximidades: string[]): string {
    const parts = [];
    if (description) parts.push(description);
    if (proximidades.length > 0) {
      parts.push(`Proximidades: ${proximidades.join(', ')}`);
    }
    return parts.join('\n');
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

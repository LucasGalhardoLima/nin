import { Injectable, Logger } from '@nestjs/common';
import { chromium, Browser, Page, ElementHandle } from 'playwright';
import { BaseScraper } from './base.scraper';
import { PropertyData } from '../interfaces/property-data.interface';

interface Category {
  path: string;
  type: 'HOUSE' | 'APARTMENT' | 'PENTHOUSE';
  transaction: 'BUY' | 'RENT';
}

@Injectable()
export class ChavesNaMaoScraper extends BaseScraper {
  protected readonly logger = new Logger(ChavesNaMaoScraper.name);
  protected browser: Browser;
  private readonly baseUrl = 'https://www.chavesnamao.com.br';
  private readonly maxPagesPerCategory = 3;

  // Mapeamento de cidades: chave -> { urlKey, displayName }
  private readonly cityMap: Record<string, { urlKey: string; displayName: string }> = {
    'araraquara': { urlKey: 'sp-araraquara', displayName: 'Araraquara' },
    'matao': { urlKey: 'sp-matao', displayName: 'Matão' },
  };

  // Categorias a scraper
  private readonly categories: Category[] = [
    { path: 'casas-a-venda', type: 'HOUSE', transaction: 'BUY' },
    { path: 'casas-para-alugar', type: 'HOUSE', transaction: 'RENT' },
    { path: 'apartamentos-a-venda', type: 'APARTMENT', transaction: 'BUY' },
    { path: 'apartamentos-para-alugar', type: 'APARTMENT', transaction: 'RENT' },
    { path: 'coberturas-a-venda', type: 'PENTHOUSE', transaction: 'BUY' },
    { path: 'coberturas-para-alugar', type: 'PENTHOUSE', transaction: 'RENT' },
  ];

  constructor() {
    super('chavesnamao');
  }

  private normalizeCityKey(city: string): string {
    return city
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  protected async initBrowser(): Promise<void> {
    if (!this.browser) {
      this.logger.log('Initializing browser...');
      this.browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }
  }

  async scrapeListings(city: string): Promise<PropertyData[]> {
    try {
      await this.initBrowser();
      const allResults: PropertyData[] = [];
      const cityCfg = this.cityMap[this.normalizeCityKey(city)];

      if (!cityCfg) {
        this.logger.error(`City not found in mapping: ${city}`);
        return allResults;
      }

      for (const category of this.categories) {
        this.logger.log(
          `Scraping ${category.transaction} ${category.type} in ${cityCfg.displayName}...`
        );

        try {
          const results = await this.scrapeCategory(
            cityCfg.displayName,
            cityCfg.urlKey,
            category,
            this.maxPagesPerCategory
          );

          allResults.push(...results);
          this.logger.log(`Category complete: ${results.length} properties found`);

          // Delay entre categorias
          await this.delay(3000);
        } catch (error) {
          this.logger.error(
            `Error scraping category ${category.path}: ${error.message}`
          );
        }
      }

      this.logger.log(`✅ Scraping complete! Total properties found: ${allResults.length}`);
      return allResults;
    } finally {
      await this.closeBrowser();
    }
  }

  private async scrapeCategory(
    city: string,
    cityKey: string,
    category: Category,
    maxPages: number
  ): Promise<PropertyData[]> {
    const results: PropertyData[] = [];

    for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
      const baseUrl = `${this.baseUrl}/${category.path}/${cityKey}/`;
      const pageUrl = pageNum > 1 ? `${baseUrl}?pagina=${pageNum}` : baseUrl;

      this.logger.log(`Page ${pageNum}/${maxPages}: ${pageUrl}`);

      const page = await this.browser.newPage();

      try {
        await page.goto(pageUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 60000,
        });

        // Aguardar cards carregarem
        try {
          await page.waitForSelector('.styles_card__nU2_D, .card_card__ENqoy', {
            timeout: 15000,
          });
        } catch (e) {
          this.logger.warn(
            `No properties found on page ${pageNum} for ${category.path}`
          );
          await page.close();
          break; // Não há mais páginas
        }

        // Scroll para lazy loading
        await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
        await this.delay(2000);

        // Extrair cards
        const cards = await page.$$('.styles_card__nU2_D, .card_card__ENqoy');
        this.logger.log(`Found ${cards.length} properties on page ${pageNum}`);

        for (const card of cards) {
          try {
            const property = await this.extractPropertyData(
              page,
              card,
              category.type,
              category.transaction,
              city
            );

            if (property) {
              results.push(property);
            }
          } catch (error) {
            this.logger.warn(`Error extracting property: ${error.message}`);
          }
        }

        await page.close();

        // Delay entre páginas
        if (pageNum < maxPages) {
          await this.delay(3000);
        }
      } catch (error) {
        this.logger.error(`Error on page ${pageNum}: ${error.message}`);
        await page.close();
        break;
      }
    }

    return results;
  }

  private async extractPropertyData(
    page: Page,
    card: ElementHandle,
    propertyType: string,
    transactionType: string,
    city: string
  ): Promise<PropertyData | null> {
    // Link
    const link = await card.$('a');
    const propertyUrl = link ? await link.getAttribute('href') : null;

    if (!propertyUrl) {
      this.logger.warn('Property URL not found');
      return null;
    }

    const absoluteUrl = propertyUrl.startsWith('http')
      ? propertyUrl
      : `${this.baseUrl}${propertyUrl}`;

    // Imagem
    const imageElem = await card.$('.card_cardGallery__ep1mJ img, picture img');
    const imageUrl = imageElem ? await this.getImageUrl(imageElem) : null;

    // Conteúdo
    const content = await card.$('.card_cardContent__3O3v0');

    if (!content) {
      this.logger.warn('Card content not found');
      return null;
    }

    // Título
    const titleEl = await content.$(
      '.styles_address__Obe3s, h2, .styles_title__L3Xot, a'
    );
    const titleText = titleEl
      ? await page.evaluate((el) => el.textContent, titleEl)
      : '';

    // Preço
    const priceEl = await content.$('.styles_price__OdYPz, [class*="price"]');
    const priceText = priceEl
      ? await page.evaluate((el) => el.textContent, priceEl)
      : '';
    const price = this.extractPrice(priceText);

    const title = this.cleanText(titleText);

    // Características (quartos, banheiros, área, vagas)
    let features = await this.extractFeatures(page, content);

    const titleArea = this.parseAreaFromText(title);
    if (!features.area && titleArea) {
      features.area = titleArea;
    }

    const urlArea = this.parseAreaFromUrl(absoluteUrl);
    if (!features.area && urlArea) {
      features.area = urlArea;
    }

    if (
      this.isMissingBedrooms(features.bedrooms, title) ||
      this.isMissingBathrooms(features.bathrooms) ||
      this.isMissingArea(features.area)
    ) {
      const details = await this.fetchDetailsFromPropertyPage(absoluteUrl);
      if (details) {
        features = {
          bedrooms: this.isMissingBedrooms(features.bedrooms, title)
            ? details.bedrooms
            : features.bedrooms,
          bathrooms: this.isMissingBathrooms(features.bathrooms)
            ? details.bathrooms
            : features.bathrooms,
          parkingSpaces: features.parkingSpaces ?? details.parkingSpaces,
          area: this.isMissingArea(features.area) ? details.area : features.area,
        };
      }
    }

    const normalizedType = this.determinePropertyType(title, propertyType);

    if (!title || title.length < 5) {
      this.logger.warn('Invalid property title');
      return null;
    }

    // Extract sourceId from URL (format: /id-37738793/)
    const urlMatch = absoluteUrl.match(/\/id-(\d+)\//);
    const sourceId = urlMatch ? urlMatch[1] : '';
    
    if (!sourceId) {
      this.logger.warn(`Could not extract sourceId from URL: ${absoluteUrl}`);
      return null;
    }

    return {
      sourceId,
      sourceUrl: absoluteUrl,
      sourceName: 'Chaves na Mão',
      scrapingSource: this.source,
      title: title,
      description: '',
      price: price !== null ? price : undefined, 
      propertyType: normalizedType,
      transactionType,
      bedrooms: features.bedrooms || 0,
      bathrooms: features.bathrooms || 0,
      area: features.area || 0,
      cityName: city,
      address: '',
      hasParking: (features.parkingSpaces || 0) > 0,
      hasPool: title.toLowerCase().includes('piscina'),
      hasGarden: title.toLowerCase().includes('jardim'),
      hasSecurity: title.toLowerCase().includes('condomínio'),
      images: imageUrl ? [imageUrl] : [],
    };
  }

  private determinePropertyType(title: string, fallbackType: string): string {
    const text = title.toLowerCase();

    if (text.includes('apartamento') || text.includes('apto')) return 'APARTMENT';
    if (text.includes('cobertura')) return 'PENTHOUSE';
    if (text.includes('casa') || text.includes('sobrado')) return 'HOUSE';
    if (text.includes('terreno') || text.includes('lote')) return 'LAND';
    if (text.includes('comercial') || text.includes('sala')) return 'COMMERCIAL';

    return fallbackType;
  }

  private async getImageUrl(elem: ElementHandle): Promise<string | null> {
    const src = await elem.getAttribute('src');
    const dataSrc = await elem.getAttribute('data-src');
    const srcSet = await elem.getAttribute('srcset');
    const dataSrcSet = await elem.getAttribute('data-srcset');

    const pickFromSrcSet = (value: string | null) => {
      if (!value) return null;
      const first = value.split(',')[0]?.trim();
      return first ? first.split(' ')[0] : null;
    };

    return (
      dataSrc ||
      src ||
      pickFromSrcSet(dataSrcSet) ||
      pickFromSrcSet(srcSet) ||
      null
    );
  }

  private async extractFeatures(
    page: Page,
    content: ElementHandle
  ): Promise<{
    bedrooms?: number;
    bathrooms?: number;
    parkingSpaces?: number;
    area?: number;
  }> {
    // Procurar por elementos que contenham ícones/texto de características
    const featureElements = await content.$$(
      '[class*="badge"], [class*="feature"], [class*="icon"], span, p'
    );

    let bedrooms: number | undefined;
    let bathrooms: number | undefined;
    let parkingSpaces: number | undefined;
    let area: number | undefined;

    for (const elem of featureElements) {
      const data = await page.evaluate((el) => {
        return {
          text: el.textContent || '',
          aria: el.getAttribute('aria-label') || '',
          title: el.getAttribute('title') || '',
        };
      }, elem);
      const cleanText = `${data.aria} ${data.title} ${data.text}`.trim().toLowerCase();

      // Quartos
      if (!bedrooms) {
        const match = this.extractCountByKeyword(cleanText, /(quarto|dorm)/i, 20);
        if (match !== undefined) bedrooms = match;
      }

      // Banheiros
      if (!bathrooms) {
        const match = this.extractCountByKeyword(cleanText, /banh/i, 20);
        if (match !== undefined) bathrooms = match;
      }

      // Vagas
      if (!parkingSpaces) {
        const match = this.extractCountByKeyword(cleanText, /(vaga|garag)/i, 20);
        if (match !== undefined) parkingSpaces = match;
      }

      // Área
      if (cleanText.includes('m²') || cleanText.includes('m2')) {
        const parsedArea = this.parseArea(cleanText);
        if (parsedArea && !area) area = parsedArea;
      }
    }

    return {
      bedrooms,
      bathrooms,
      parkingSpaces,
      area,
    };
  }

  private extractPrice(priceText: string): number | null {
    if (!priceText) return null;

    // Remove tudo exceto números
    const cleaned = priceText.replace(/[^\d]/g, '');

    if (!cleaned) return null;

    return parseInt(cleaned);
  }

  private cleanText(text: string): string {
    return text.replace(/\s+/g, ' ').trim();
  }

  private parseArea(text: string): number | undefined {
    const match = text.match(/(\d{2,4})\s*(m²|m2)/i);
    if (match) return parseInt(match[1], 10);
    return undefined;
  }

  private extractCountByKeyword(text: string, keyword: RegExp, maxReasonable: number): number | undefined {
    const patterns = [
      new RegExp(`(\\d+)\\s*${keyword.source}`, 'i'),
      new RegExp(`${keyword.source}\\s*(\\d+)`, 'i'),
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) {
        const value = parseInt(match[1], 10);
        if (!Number.isNaN(value) && value > 0 && value <= maxReasonable) {
          return value;
        }
      }
    }

    return undefined;
  }

  private parseAreaFromText(text: string): number | undefined {
    return this.parseArea(text);
  }

  private parseAreaFromUrl(url: string): number | undefined {
    const match = url.match(/(\d{2,4})m2/i);
    if (match) return parseInt(match[1], 10);
    return undefined;
  }

  private isMissingBedrooms(value: number | undefined, title: string): boolean {
    if (value === undefined) return true;
    if (value > 0) return false;
    const text = title.toLowerCase();
    // Studios/kitnet can legitimately be 0 or 1 room
    if (text.includes('studio') || text.includes('kitnet') || text.includes('quitinete')) {
      return false;
    }
    return true;
  }

  private isMissingBathrooms(value: number | undefined): boolean {
    if (value === undefined) return true;
    if (value === 0) return true;
    return false;
  }

  private isMissingArea(value: number | undefined): boolean {
    if (value === undefined) return true;
    if (value < 10) return true;
    return false;
  }

  private async fetchDetailsFromPropertyPage(url: string): Promise<{
    bedrooms?: number;
    bathrooms?: number;
    parkingSpaces?: number;
    area?: number;
  } | null> {
    const detailPage = await this.browser.newPage();

    try {
      await detailPage.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await this.waitForPageReady(detailPage);

      const html = await detailPage.content();
      const regexNumber = (pattern: RegExp) => {
        const match = html.match(pattern);
        return match ? parseInt(match[1], 10) : undefined;
      };

      const bedrooms =
        regexNumber(/\"bedrooms\"\s*:\s*\{\s*\"count\"\s*:\s*(\d+)/i) ||
        regexNumber(/\"bedrooms\"\s*:\s*(\d+)/i);
      const bathrooms =
        regexNumber(/\"bathrooms\"\s*:\s*\{\s*\"count\"\s*:\s*(\d+)/i) ||
        regexNumber(/\"bathrooms\"\s*:\s*(\d+)/i);
      const parkingSpaces =
        regexNumber(/\"garages\"\s*:\s*\{\s*\"count\"\s*:\s*(\d+)/i) ||
        regexNumber(/\"garages\"\s*:\s*(\d+)/i);

      const area =
        regexNumber(/\"area\"\s*:\s*\{\s*\"total\"\s*:\s*\"?(\d{2,4})\"?/i) ||
        regexNumber(/\"area\"\s*:\s*\{\s*\"useful\"\s*:\s*\"?(\d{2,4})\"?/i) ||
        regexNumber(/\"area\"\s*:\s*\"?(\d{2,4})\"?\s*,/i) ||
        this.parseAreaFromUrl(url);

      return {
        bedrooms,
        bathrooms,
        parkingSpaces,
        area,
      };
    } catch (error) {
      this.logger.warn(`Failed to fetch property details: ${error.message}`);
      return null;
    } finally {
      await detailPage.close();
    }
  }

  async scrapePropertyDetails(url: string): Promise<PropertyData | null> {
    // Implementação básica - pode ser expandida depois
    this.logger.log(`Scraping details for: ${url}`);
    return null;
  }

  async cleanup(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null as any;
    }
  }

  protected delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

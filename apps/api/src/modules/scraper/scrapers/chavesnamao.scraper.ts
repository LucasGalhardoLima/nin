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
      const cityCfg = this.cityMap[city.toLowerCase()];

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
    const imageUrl = imageElem
      ? await imageElem.getAttribute('src')
      : null;

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

    // Características (quartos, banheiros, área, vagas)
    const features = await this.extractFeatures(page, content);

    const title = this.cleanText(titleText);

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
      propertyType,
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
      const text = await page.evaluate((el) => el.textContent || '', elem);
      const cleanText = text.trim().toLowerCase();

      // Quartos
      if (
        (cleanText.includes('quarto') || cleanText.includes('dorm')) &&
        !bedrooms
      ) {
        const match = cleanText.match(/(\d+)/);
        if (match) bedrooms = parseInt(match[1]);
      }

      // Banheiros
      if (cleanText.includes('banh') && !bathrooms) {
        const match = cleanText.match(/(\d+)/);
        if (match) bathrooms = parseInt(match[1]);
      }

      // Vagas
      if (
        (cleanText.includes('vaga') || cleanText.includes('garag')) &&
        !parkingSpaces
      ) {
        const match = cleanText.match(/(\d+)/);
        if (match) parkingSpaces = parseInt(match[1]);
      }

      // Área
      if (cleanText.includes('m²') || cleanText.includes('m2')) {
        const match = cleanText.match(/(\d+)/);
        if (match && !area) area = parseInt(match[1]);
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

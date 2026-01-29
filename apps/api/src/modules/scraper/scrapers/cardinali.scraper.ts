import { Page } from 'playwright';
import { BaseScraper } from './base.scraper';
import { PropertyData } from '../interfaces/property-data.interface';

export class CardinalScraper extends BaseScraper {
  constructor() {
    super('cardinali', {
      maxPages: 5,
      delayBetweenPages: 3000,
      headless: true,
    });
  }

  async scrapeListings(city: string): Promise<PropertyData[]> {
    await this.initBrowser();
    
    const allResults: PropertyData[] = [];
    
    // Scrape both BUY and RENT listings
    const transactionTypes: Array<{ type: 'BUY' | 'RENT', urlPath: string }> = [
      { type: 'BUY', urlPath: 'comprar' },
      { type: 'RENT', urlPath: 'alugar' },
    ];
    
    for (const transaction of transactionTypes) {
      this.logger.log(`Scraping ${transaction.type} properties for ${city}...`);
      
      const results = await this.scrapeByTransactionType(city, transaction.type, transaction.urlPath);
      allResults.push(...results);
      
      // Small delay between transaction types
      await this.delay(2000);
    }
    
    return allResults;
  }

  private async scrapeByTransactionType(
    city: string, 
    transactionType: 'BUY' | 'RENT',
    urlPath: string
  ): Promise<PropertyData[]> {
    // Cookie mapping for cities
    const cityIdMap: Record<string, string> = {
        'araraquara': '409',
        'sao carlos': '190',
        'ibate': '103'
    };
    
    const cityId = cityIdMap[city.toLowerCase()] || '190'; 
    
    // Create a new context with cookies
    const context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    });
    
    // Add cookies to context
    await context.addCookies([
      { name: 'sel_cid_id_cidade', value: cityId, domain: '.cardinali.com.br', path: '/' }
    ]);

    const url = `https://www.cardinali.com.br/${urlPath}/${city}`;
    this.logger.log(`Navigating to ${url} with city ID ${cityId}`);
    
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    // Wait for cards to load
    await this.waitForPageReady(page);
    try {
        await page.waitForSelector('.card.card-imo', { timeout: 15000 });
    } catch (e) {
        this.logger.warn(`No ${transactionType} properties found for ${city}`);
    }

    // Scroll to trigger lazy loading
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
    await this.delay(2000);

    const propertyCards = await page.$$('.card.card-imo');
    this.logger.log(`Found ${propertyCards.length} ${transactionType} property cards`);

    const results: PropertyData[] = [];

    for (const card of propertyCards) {
      try {
        const cardText = await card.innerText();
        let propertyUrl = await card.$eval('a', (el) => el.href).catch(() => null);
        
        if (!propertyUrl) continue;
        
        // Ensure URL is absolute
        if (!propertyUrl.startsWith('http')) {
          propertyUrl = `https://www.cardinali.com.br${propertyUrl.startsWith('/') ? '' : '/'}${propertyUrl}`;
        }
        
        this.logger.debug(`Processing property: ${propertyUrl}`);

        // Parse text for price and code
        const priceMatch = cardText.match(/R\$\s*([\d.,]+)/);
        const codeMatch = cardText.match(/Cód\.\s*(\d+)/);
        
        const price = priceMatch ? this.normalizePrice(priceMatch[1]) : 0;
        const sourceId = codeMatch ? codeMatch[1] : this.extractPropertyId(propertyUrl);

        // Extract title (usually the text line after standard info)
        const lines = cardText.split('\n').filter(l => l.trim().length > 0);
        const title = lines.find(l => !l.includes('R$') && !l.includes('Cód') && l.length > 10) || 'Imóvel sem título';
        
        // Extract Image (convert webp if needed or just take source)
        const imageElement = await card.$('img');
        let imageUrl = imageElement ? await imageElement.getAttribute('src') : null;
        
        // Ensure image URL is absolute
        if (imageUrl && !imageUrl.startsWith('http')) {
          imageUrl = `https://www.cardinali.com.br${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
        }
        
        const images = imageUrl ? [imageUrl] : [];

        // Extract bedroom/bathroom counts from card text
        const bedrooms = this.extractNumber(cardText, /dorms?/i) || 0;
        const bathrooms = this.extractNumber(cardText, /banhos?/i) || 0;
        const parking = this.extractNumber(cardText, /garegens?|vagas?/i) || 0;
        const suites = this.extractNumber(cardText, /suítes?/i) || 0;

        const data: PropertyData = {
          sourceId: sourceId,
          sourceUrl: propertyUrl,
          sourceName: 'Cardinali',
          scrapingSource: this.source,
          title: title,
          description: '', // Listing page usually doesn't have full description
          price: price,
          propertyType: this.determinePropertyType(title),
          transactionType: transactionType,
          bedrooms: bedrooms,
          bathrooms: bathrooms + suites, // Combine or keep separate logic
          area: 0, // Area is often not in card text
          cityName: city,
          address: '',
          hasParking: parking > 0,
          hasPool: title.toLowerCase().includes('piscina'),
          hasGarden: title.toLowerCase().includes('jardim'),
          hasSecurity: title.toLowerCase().includes('condomínio'),
          images: images,
        };

        results.push(data);
      } catch (error) {
        this.logger.error(`Error scraping card: ${error.message}`);
      }
    }

    await page.close();
    await context.close();
    return results;
  }

  async scrapePropertyDetails(url: string): Promise<PropertyData | null> {
    // This method can be used if we need more details than the listing page provides.
    // Currently relying on listing page for speed.
    return null; 
  }

  private extractPropertyId(url: string): string {
    const match = url.match(/\/(\d+)$/);
    return match ? match[1] : '';
  }

  private determinePropertyType(title: string): string {
    const text = title.toLowerCase();
    if (text.includes('apartamento') || text.includes('apto')) return 'APARTMENT';
    if (text.includes('casa') || text.includes('sobrado')) return 'HOUSE';
    if (text.includes('terreno') || text.includes('lote')) return 'LAND';
    if (text.includes('comercial') || text.includes('sala')) return 'COMMERCIAL';
    return 'HOUSE';
  }
  
  private extractNumber(text: string, regex: RegExp): number {
      const match = text.match(new RegExp(`(\\d+)\\s*${regex.source}`, 'i'));
      return match ? parseInt(match[1], 10) : 0;
  }
}

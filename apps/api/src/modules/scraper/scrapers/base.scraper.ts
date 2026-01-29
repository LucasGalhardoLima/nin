import { Browser, chromium, Page } from 'playwright';
import { PropertyData, ScraperConfig } from '../interfaces/property-data.interface';
import { Logger } from '@nestjs/common';

export abstract class BaseScraper {
  protected browser: Browser;
  protected source: string;
  protected logger: Logger;
  protected config: ScraperConfig;

  constructor(source: string, config: ScraperConfig = {}) {
    this.source = source;
    this.logger = new Logger(`${source}Scraper`);
    this.config = {
      maxPages: config.maxPages || 5,
      delayBetweenPages: config.delayBetweenPages || 2000,
      headless: config.headless !== false,
    };
  }

  /**
   * Scrape property listings from a city
   */
  abstract scrapeListings(city: string): Promise<PropertyData[]>;

  /**
   * Scrape detailed information from a property page
   */
  abstract scrapePropertyDetails(url: string): Promise<PropertyData | null>;

  /**
   * Initialize the browser instance
   */
  protected async initBrowser(): Promise<void> {
    this.logger.log('Initializing browser...');
    this.browser = await chromium.launch({
      headless: this.config.headless,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  /**
   * Close the browser instance
   */
  protected async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.logger.log('Browser closed');
    }
  }

  /**
   * Add delay between requests to avoid rate limiting
   */
  protected async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Normalize price string to number
   * Handles formats like "R$ 1.200,00" or "R$ 1200"
   */
  protected normalizePrice(priceStr: string): number {
    if (!priceStr) return 0;
    
    // Remove R$, spaces, and convert
    const cleaned = priceStr
      .replace(/R\$/g, '')
      .replace(/\s/g, '')
      .replace(/\./g, '') // Remove thousand separators
      .replace(',', '.'); // Convert decimal separator
    
    return parseFloat(cleaned) || 0;
  }

  /**
   * Extract image URLs from a page
   */
  protected async extractImages(page: Page, selector: string): Promise<string[]> {
    try {
      const images = await page.$$eval(selector, (imgs) =>
        imgs.map((img) => (img as HTMLImageElement).src).filter(Boolean)
      );
      return images.slice(0, 10); // Limit to 10 images
    } catch (error) {
      this.logger.warn(`Failed to extract images: ${error.message}`);
      return [];
    }
  }

  /**
   * Safe text extraction with fallback
   */
  protected async safeExtractText(
    page: Page,
    selector: string,
    defaultValue: string = ''
  ): Promise<string> {
    try {
      const element = await page.$(selector);
      if (!element) return defaultValue;
      const text = await element.textContent();
      return text?.trim() || defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }

  /**
   * Safe number extraction
   */
  protected async safeExtractNumber(
    page: Page,
    selector: string,
    defaultValue: number = 0
  ): Promise<number> {
    const text = await this.safeExtractText(page, selector);
    const num = parseInt(text.replace(/\D/g, ''));
    return isNaN(num) ? defaultValue : num;
  }

  /**
   * Check if element exists
   */
  protected async elementExists(page: Page, selector: string): Promise<boolean> {
    try {
      const element = await page.$(selector);
      return element !== null;
    } catch {
      return false;
    }
  }

  /**
   * Wait for page to be ready
   */
  protected async waitForPageReady(page: Page): Promise<void> {
    try {
      await page.waitForLoadState('networkidle', { timeout: 30000 });
    } catch (error) {
      this.logger.warn('Page load timeout, continuing anyway');
    }
  }
}

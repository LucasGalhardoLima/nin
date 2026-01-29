import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScraperService } from './scraper.service';

@Injectable()
export class ScraperCron {
  private readonly logger = new Logger(ScraperCron.name);

  constructor(private readonly scraperService: ScraperService) {}

  @Cron('0 2 * * *', {
    timeZone: 'America/Sao_Paulo',
  })
  async handleDailyScraping() {
    this.logger.log('Starting daily scraping job...');

    const sources = ['cardinali']; // Add other sources as they are implemented
    const cities = ['araraquara', 'matao'];

    for (const source of sources) {
      try {
        await this.scraperService.runScrapingJob(source, cities);
        this.logger.log(`Completed scraping for ${source}`);
      } catch (error) {
        this.logger.error(`Failed to scrape ${source}:`, error);
      }
    }

    // cleanup stale properties
    await this.scraperService.deactivateStaleProperties();

    this.logger.log('Daily scraping job completed');
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScraperService } from './scraper.service';

@Injectable()
export class ScraperCron {
  private readonly logger = new Logger(ScraperCron.name);
  private readonly cities = ['araraquara', 'matao'];

  constructor(private readonly scraperService: ScraperService) {}

  // Cardinali scraper runs at 2 AM BRT
  @Cron('0 2 * * *', {
    timeZone: 'America/Sao_Paulo',
  })
  async handleCardinaliScraping() {
    this.logger.log('🏠 Starting Cardinali scraping job...');

    try {
      await this.scraperService.runScrapingJob('cardinali', this.cities);
      this.logger.log('✅ Cardinali scraping completed');
    } catch (error) {
      this.logger.error(`❌ Cardinali scraping failed: ${error.message}`, error.stack);
    }
  }

  // Chaves na Mão scraper runs at 3 AM BRT
  @Cron('0 3 * * *', {
    timeZone: 'America/Sao_Paulo',
  })
  async handleChavesNaMaoScraping() {
    this.logger.log('🔑 Starting Chaves na Mão scraping job...');

    try {
      await this.scraperService.runScrapingJob('chavesnamao', this.cities);
      this.logger.log('✅ Chaves na Mão scraping completed');
    } catch (error) {
      this.logger.error(`❌ Chaves na Mão scraping failed: ${error.message}`, error.stack);
    }
  }

  // Thiago Favaro scraper runs at 3:30 AM BRT
  @Cron('30 3 * * *', {
    timeZone: 'America/Sao_Paulo',
  })
  async handleThiagoFavaroScraping() {
    this.logger.log('🏘️ Starting Thiago Favaro scraping job...');

    try {
      await this.scraperService.runScrapingJob('thiagofavaro', this.cities);
      this.logger.log('✅ Thiago Favaro scraping completed');
    } catch (error) {
      this.logger.error(`❌ Thiago Favaro scraping failed: ${error.message}`, error.stack);
    }
  }

  // Cleanup stale properties runs at 4 AM BRT (after all scrapers)
  @Cron('0 4 * * *', {
    timeZone: 'America/Sao_Paulo',
  })
  async handleStalePropertiesCleanup() {
    this.logger.log('🧹 Starting stale properties cleanup...');

    try {
      await this.scraperService.deactivateStaleProperties();
      this.logger.log('✅ Stale properties cleanup completed');
    } catch (error) {
      this.logger.error(`❌ Cleanup failed: ${error.message}`, error.stack);
    }
  }
}

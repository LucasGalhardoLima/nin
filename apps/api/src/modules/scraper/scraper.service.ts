import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service'; // Corrected import path
import { BaseScraper } from './scrapers/base.scraper';
import { CardinalScraper } from './scrapers/cardinali.scraper';
import { ChavesNaMaoScraper } from './scrapers/chavesnamao.scraper';
import { PropertyData } from './interfaces/property-data.interface';

@Injectable()
export class ScraperService {
  private scrapers: Map<string, BaseScraper>;
  private readonly logger = new Logger(ScraperService.name);

  constructor(private prisma: PrismaService) {
    this.scrapers = new Map<string, BaseScraper>([
      ['cardinali', new CardinalScraper()],
      ['chavesnamao', new ChavesNaMaoScraper()],
      // Add other scrapers here as they are implemented
    ]);
  }

  /**
   * Run a scraping job for a specific source
   */
  async runScrapingJob(source: string, cities: string[]): Promise<void> {
    const scraper = this.scrapers.get(source);
    if (!scraper) {
      this.logger.error(`Scraper not found for source: ${source}`);
      throw new Error(`Scraper not found for source: ${source}`);
    }

    // Create a new job record
    const job = await this.prisma.scrapingJob.create({
      data: {
        source,
        status: 'running',
        itemsFound: 0,
        itemsAdded: 0,
        itemsUpdated: 0,
      },
    });

    this.logger.log(`Starting scraping job ${job.id} for ${source}`);

    let totalFound = 0;
    let totalAdded = 0;
    let totalUpdated = 0;
    const errors: string[] = [];

    try {
      for (const city of cities) {
        this.logger.log(`Scraping ${source} for ${city}...`);
        
        try {
          const properties = await scraper.scrapeListings(city);
          totalFound += properties.length;
          
          // Upsert properties to database
          for (const propData of properties) {
            try {
              const result = await this.upsertProperty(propData);
              if (result.created) totalAdded++;
              else totalUpdated++;
            } catch (err) {
              const msg = `Failed to upsert property ${propData.sourceUrl}: ${err.message}`;
              this.logger.error(msg);
              errors.push(msg);
            }
          }
        } catch (err) {
          const msg = `Failed to scrape city ${city}: ${err.message}`;
          this.logger.error(msg);
          errors.push(msg);
        }
      }

      // Mark job as completed
      await this.prisma.scrapingJob.update({
        where: { id: job.id },
        data: {
          status: 'completed',
          completedAt: new Date(),
          itemsFound: totalFound,
          itemsAdded: totalAdded,
          itemsUpdated: totalUpdated,
          errors: errors.length > 0 ? JSON.stringify(errors) : null,
        },
      });

      this.logger.log(`Job ${job.id} completed. Added: ${totalAdded}, Updated: ${totalUpdated}`);
    } catch (error) {
      // Mark job as failed
      await this.prisma.scrapingJob.update({
        where: { id: job.id },
        data: {
          status: 'failed',
          completedAt: new Date(),
          errors: JSON.stringify([...errors, error.message]),
        },
      });
      
      this.logger.error(`Job ${job.id} failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Upsert a property into the database
   */
  private async upsertProperty(data: PropertyData): Promise<{ created: boolean }> {
    // 1. Find or create City
    let city = await this.prisma.city.findFirst({
      where: { name: { contains: data.cityName } }, 
    });

    if (!city) {
        this.logger.warn(`City not found: ${data.cityName}. Skipping property ${data.title}`);
        throw new Error(`City not found: ${data.cityName}`);
    }

    // 2. Find or create Neighborhood
    let neighborhoodId: string | undefined;
    if (data.neighborhoodName) {
      const neighborhood = await this.prisma.neighborhood.findFirst({
        where: { 
          name: { contains: data.neighborhoodName },
          cityId: city.id
        }
      });
      neighborhoodId = neighborhood?.id;
    }

    // 3. Upsert Property
    const existing = await this.prisma.property.findFirst({
      where: {
        sourceId: data.sourceId,
        scrapingSource: data.scrapingSource,
      },
    });

    if (existing) {
      await this.prisma.property.update({
        where: { id: existing.id },
        data: {
            title: data.title,
            description: data.description,
            price: data.price,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            area: data.area,
            transactionType: data.transactionType,
            propertyType: data.propertyType,
            address: data.address,
            hasParking: data.hasParking,
            hasPool: data.hasPool,
            hasGarden: data.hasGarden,
            hasSecurity: data.hasSecurity,
            isActive: true, // Reactivate if it was stale
            lastScrapedAt: new Date(),
        },
      });
      return { created: false };
    } else {
      await this.prisma.property.create({
        data: {
          title: data.title,
          description: data.description,
          price: data.price ?? 0,
          transactionType: data.transactionType,
          propertyType: data.propertyType,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          area: data.area || 0,
          sourceUrl: data.sourceUrl,
          sourceName: data.sourceName,
          sourceId: data.sourceId,
          scrapingSource: data.scrapingSource,
          lastScrapedAt: new Date(),
          cityId: city.id,
          neighborhoodId: neighborhoodId,
          address: data.address,
          hasParking: data.hasParking,
          hasPool: data.hasPool,
          hasGarden: data.hasGarden,
          hasSecurity: data.hasSecurity,
          petFriendly: data.petFriendly,
          images: {
            create: data.images.map((url, index) => ({
              url,
              isPrimary: index === 0,
            })),
          },
        },
      });
      return { created: true };
    }
  }

  // Preserve the cleanup capability
  async deactivateStaleProperties() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const result = await this.prisma.property.updateMany({
      where: {
        lastScrapedAt: { lt: sevenDaysAgo },
        isActive: true,
      },
      data: { isActive: false },
    });

    if (result.count > 0) {
      this.logger.log(`Deactivated ${result.count} stale properties`);
    }
  }
}

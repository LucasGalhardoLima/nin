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

  private normalizeText(value?: string | null): string | undefined {
    if (!value) return undefined;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  private normalizeCityName(value?: string | null): string | undefined {
    const text = this.normalizeText(value);
    if (!text) return undefined;
    return text;
  }

  private dedupeProperties(properties: PropertyData[]): PropertyData[] {
    const seen = new Set<string>();
    const unique: PropertyData[] = [];

    for (const prop of properties) {
      const sourceId = this.normalizeText(prop.sourceId);
      const sourceUrl = this.normalizeText(prop.sourceUrl);
      const key = `${prop.scrapingSource}::${sourceId || 'no-id'}::${sourceUrl || 'no-url'}`;
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push(prop);
    }

    return unique;
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
          const properties = this.dedupeProperties(await scraper.scrapeListings(city));
          totalFound += properties.length;
          
          // Process properties in batches for better performance
          const batchSize = 10;
          for (let i = 0; i < properties.length; i += batchSize) {
            const batch = properties.slice(i, i + batchSize);
            
            const results = await Promise.allSettled(
              batch.map(async (propData) => {
                try {
                  const result = await this.upsertProperty(propData);
                  return result;
                } catch (err) {
                  const msg = `Failed to upsert property ${propData.sourceUrl}: ${err.message}`;
                  this.logger.error(msg);
                  errors.push(msg);
                  return { created: false };
                }
              })
            );

            // Count successful upserts
            results.forEach((result) => {
              if (result.status === 'fulfilled' && result.value.created) {
                totalAdded++;
              } else if (result.status === 'fulfilled' && !result.value.created) {
                totalUpdated++;
              }
            });
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
    const sourceUrl = this.normalizeText(data.sourceUrl);
    if (!sourceUrl) {
      throw new Error('Missing sourceUrl');
    }

    const sourceId = this.normalizeText(data.sourceId);
    const scrapingSource = this.normalizeText(data.scrapingSource);
    if (!scrapingSource) {
      throw new Error('Missing scrapingSource');
    }

    const title = this.normalizeText(data.title) || 'Imóvel sem título';
    const cityName = this.normalizeCityName(data.cityName);
    if (!cityName) {
      throw new Error('Missing cityName');
    }

    // 1. Find or create City
    let city = await this.prisma.city.findFirst({
      where: { name: { equals: cityName, mode: 'insensitive' } },
    });

    if (!city) {
      city = await this.prisma.city.findFirst({
        where: { name: { contains: cityName, mode: 'insensitive' } },
      });
    }

    if (!city) {
        this.logger.warn(`City not found: ${cityName}. Skipping property ${title}`);
        throw new Error(`City not found: ${cityName}`);
    }

    // 2. Find or create Neighborhood
    let neighborhoodId: string | undefined;
    const neighborhoodName = this.normalizeText(data.neighborhoodName);
    if (neighborhoodName) {
      const neighborhood = await this.prisma.neighborhood.findFirst({
        where: { 
          name: { equals: neighborhoodName, mode: 'insensitive' },
          cityId: city.id
        }
      });
      if (!neighborhood) {
        const neighborhoodFallback = await this.prisma.neighborhood.findFirst({
          where: {
            name: { contains: neighborhoodName, mode: 'insensitive' },
            cityId: city.id
          }
        });
        neighborhoodId = neighborhoodFallback?.id;
      } else {
        neighborhoodId = neighborhood?.id;
      }
    }

    // 3. Upsert Property
    const existing = await this.prisma.property.findFirst({
      where: {
        OR: [
          { sourceId: sourceId || undefined, scrapingSource },
          { sourceUrl: sourceUrl },
        ],
      },
    });

    if (existing) {
      const updateData: Record<string, unknown> = {
        title: title,
        description: this.normalizeText(data.description) ?? existing.description,
        transactionType: data.transactionType || existing.transactionType,
        propertyType: data.propertyType || existing.propertyType,
        address: this.normalizeText(data.address) ?? existing.address,
        hasParking: data.hasParking ?? existing.hasParking,
        hasPool: data.hasPool ?? existing.hasPool,
        hasGarden: data.hasGarden ?? existing.hasGarden,
        hasSecurity: data.hasSecurity ?? existing.hasSecurity,
        petFriendly: data.petFriendly ?? existing.petFriendly,
        isActive: true,
        lastScrapedAt: new Date(),
        lastSeenAt: new Date(),
      };

      if (typeof data.price === 'number' && data.price > 0) {
        updateData.price = data.price;
      }
      if (typeof data.bedrooms === 'number' && data.bedrooms > 0) {
        updateData.bedrooms = data.bedrooms;
      }
      if (typeof data.bathrooms === 'number' && data.bathrooms > 0) {
        updateData.bathrooms = data.bathrooms;
      }
      if (typeof data.area === 'number' && data.area > 0) {
        updateData.area = data.area;
      }
      if (neighborhoodId) {
        updateData.neighborhoodId = neighborhoodId;
      }

      await this.prisma.property.update({
        where: { id: existing.id },
        data: updateData,
      });

      if (data.images?.length) {
        await this.prisma.propertyImage.deleteMany({ where: { propertyId: existing.id } });
        await this.prisma.propertyImage.createMany({
          data: data.images.map((url, index) => ({
            propertyId: existing.id,
            url,
            isPrimary: index === 0,
          })),
          skipDuplicates: true,
        });
      }

      return { created: false };
    } else {
      await this.prisma.property.create({
        data: {
          title: title,
          description: this.normalizeText(data.description),
          price: data.price ?? 0,
          transactionType: data.transactionType,
          propertyType: data.propertyType,
          bedrooms: data.bedrooms ?? 0,
          bathrooms: data.bathrooms ?? 0,
          area: data.area || 0,
          sourceUrl: sourceUrl,
          sourceName: data.sourceName,
          sourceId: sourceId,
          scrapingSource: scrapingSource,
          lastScrapedAt: new Date(),
          lastSeenAt: new Date(),
          cityId: city.id,
          neighborhoodId: neighborhoodId,
          address: this.normalizeText(data.address),
          hasParking: data.hasParking,
          hasPool: data.hasPool,
          hasGarden: data.hasGarden,
          hasSecurity: data.hasSecurity,
          petFriendly: data.petFriendly,
          images: {
            create: (data.images || []).map((url, index) => ({
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

import { Controller, Post, Get, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { AdminGuard } from '../../auth/guards/admin.guard'; // Assuming AdminGuard exists, otherwise just Jwt

@Controller('admin/scraper')
// @UseGuards(JwtAuthGuard) // TODO: Re-enable authentication after testing
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Post('run/:source')
  async triggerScraping(
    @Param('source') source: string,
    @Body() dto: { cities: string[] },
  ) {
    // Run in background (don't await)
    this.scraperService.runScrapingJob(source, dto.cities || ['araraquara', 'matao']);
    return { message: `Scraping triggered for ${source}`, cities: dto.cities || ['araraquara', 'matao'] };
  }

  // NOTE: Pagination and filtering for jobs would be implemented here in a real app
  // For now, this is a simplified version
}

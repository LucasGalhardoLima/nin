import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';
import { ScraperCron } from './scraper.cron';

@Module({
  imports: [
    PrismaModule, 
    ScheduleModule.forRoot()
  ],
  controllers: [ScraperController],
  providers: [ScraperService, ScraperCron],
  exports: [ScraperService],
})
export class ScraperModule {}

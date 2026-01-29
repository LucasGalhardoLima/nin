import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './common/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PreferencesModule } from './modules/preferences/preferences.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { MatchingModule } from './modules/matching/matching.module';
import { CitiesModule } from './modules/cities/cities.module';
import { NeighborhoodsModule } from './modules/neighborhoods/neighborhoods.module';
import { ScraperModule } from './modules/scraper/scraper.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuthModule,
    UsersModule,
    PreferencesModule,
    PropertiesModule,
    MatchingModule,
    CitiesModule,
    NeighborhoodsModule,
    ScraperModule,
  ],
})
export class AppModule {}

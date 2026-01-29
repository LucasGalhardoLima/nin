import { Module } from '@nestjs/common';
import { MatchingController } from './matching.controller';
import { MatchingService } from './matching.service';
import { PropertiesModule } from '../properties/properties.module';
import { PreferencesModule } from '../preferences/preferences.module';

@Module({
  imports: [PropertiesModule, PreferencesModule],
  controllers: [MatchingController],
  providers: [MatchingService],
  exports: [MatchingService],
})
export class MatchingModule {}

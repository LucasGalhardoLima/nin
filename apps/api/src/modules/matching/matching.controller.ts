import { Controller, Get, Post, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { MatchingService } from './matching.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MatchListDto } from './dto';
import { UpdatePreferencesDto } from '../preferences/dto';

@ApiTags('matches')
@Controller('matches')
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post('guest')
  @ApiOperation({ summary: 'Get property matches for guest' })
  async getGuestMatches(
    @Body() preferences: UpdatePreferencesDto,
    @Query() dto: MatchListDto,
  ) {
    return this.matchingService.getGuestMatches(preferences, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get property matches for current user' })
  async getMatches(
    @Request() req: { user: { id: string } },
    @Query() dto: MatchListDto,
  ) {
    return this.matchingService.getMatches(req.user.id, dto);
  }

  @Post(':id/save')
  @ApiOperation({ summary: 'Save/favorite a property match' })
  async saveMatch(
    @Request() req: { user: { id: string } },
    @Param('id') propertyId: string,
  ) {
    await this.matchingService.saveMatch(req.user.id, propertyId);
    return { success: true };
  }

  @Post(':id/hide')
  @ApiOperation({ summary: 'Hide a property match' })
  async hideMatch(
    @Request() req: { user: { id: string } },
    @Param('id') propertyId: string,
  ) {
    await this.matchingService.hideMatch(req.user.id, propertyId);
    return { success: true };
  }
}

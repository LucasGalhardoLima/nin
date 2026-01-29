import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PreferencesService } from './preferences.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdatePreferencesDto, UpdateFamilyDto, UpdateBudgetDto, UpdateLocationDto, UpdateLifestyleDto, UpdateAmenitiesDto } from './dto';

@ApiTags('preferences')
@Controller('preferences')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Get()
  @ApiOperation({ summary: 'Get user preferences' })
  async get(@Request() req: { user: { id: string } }) {
    const preferences = await this.preferencesService.findByUserId(req.user.id);
    return this.preferencesService.toResponse(preferences);
  }

  @Patch()
  @ApiOperation({ summary: 'Update all preferences' })
  async update(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdatePreferencesDto,
  ) {
    const preferences = await this.preferencesService.createOrUpdate(req.user.id, dto);
    return this.preferencesService.toResponse(preferences);
  }

  @Patch('family')
  @ApiOperation({ summary: 'Update family preferences' })
  async updateFamily(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdateFamilyDto,
  ) {
    const preferences = await this.preferencesService.createOrUpdate(req.user.id, { family: dto });
    return this.preferencesService.toResponse(preferences);
  }

  @Patch('budget')
  @ApiOperation({ summary: 'Update budget preferences' })
  async updateBudget(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdateBudgetDto,
  ) {
    const preferences = await this.preferencesService.createOrUpdate(req.user.id, { budget: dto });
    return this.preferencesService.toResponse(preferences);
  }

  @Patch('location')
  @ApiOperation({ summary: 'Update location preferences' })
  async updateLocation(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdateLocationDto,
  ) {
    const preferences = await this.preferencesService.createOrUpdate(req.user.id, { location: dto });
    return this.preferencesService.toResponse(preferences);
  }

  @Patch('lifestyle')
  @ApiOperation({ summary: 'Update lifestyle preferences' })
  async updateLifestyle(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdateLifestyleDto,
  ) {
    const preferences = await this.preferencesService.createOrUpdate(req.user.id, { lifestyle: dto });
    return this.preferencesService.toResponse(preferences);
  }

  @Patch('amenities')
  @ApiOperation({ summary: 'Update amenity preferences' })
  async updateAmenities(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdateAmenitiesDto,
  ) {
    const preferences = await this.preferencesService.createOrUpdate(req.user.id, { amenities: dto });
    return this.preferencesService.toResponse(preferences);
  }
}

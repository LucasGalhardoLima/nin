import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PropertiesService } from './properties.service';
import { PropertySearchDto } from './dto';

@ApiTags('properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  @ApiOperation({ summary: 'List all properties' })
  async findAll(@Query() dto: PropertySearchDto) {
    return this.propertiesService.search(dto);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search properties with filters' })
  async search(@Query() dto: PropertySearchDto) {
    return this.propertiesService.search(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get property by ID' })
  async findOne(@Param('id') id: string) {
    const property = await this.propertiesService.findById(id);
    return this.propertiesService.toResponse(property);
  }
}

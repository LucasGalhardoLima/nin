import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CitiesService } from './cities.service';

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  @ApiOperation({ summary: 'List all cities' })
  async findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get city by ID' })
  async findOne(@Param('id') id: string) {
    const city = await this.citiesService.findById(id);
    return this.citiesService.toResponse(city);
  }

  @Get(':id/neighborhoods')
  @ApiOperation({ summary: 'Get neighborhoods for a city' })
  async getNeighborhoods(@Param('id') id: string) {
    return this.citiesService.getNeighborhoods(id);
  }
}

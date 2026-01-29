import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NeighborhoodsService } from './neighborhoods.service';

@ApiTags('neighborhoods')
@Controller('neighborhoods')
export class NeighborhoodsController {
  constructor(private readonly neighborhoodsService: NeighborhoodsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get neighborhood by ID' })
  async findOne(@Param('id') id: string) {
    const neighborhood = await this.neighborhoodsService.findById(id);
    return this.neighborhoodsService.toResponse(neighborhood);
  }
}

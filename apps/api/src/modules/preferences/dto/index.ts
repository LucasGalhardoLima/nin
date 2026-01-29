import { IsOptional, IsNumber, IsBoolean, IsString, IsEnum, IsArray, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export enum TransactionType {
  RENT = 'RENT',
  BUY = 'BUY',
}

export class UpdateFamilyDto {
  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  adultsCount?: number;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(20)
  childrenCount?: number;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  minBedrooms?: number;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  minBathrooms?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  hasPets?: boolean;
}

export class UpdateBudgetDto {
  @ApiPropertyOptional({ example: 1000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @ApiPropertyOptional({ example: 3000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @ApiPropertyOptional({ enum: TransactionType, example: TransactionType.RENT })
  @IsOptional()
  @IsEnum(TransactionType)
  transactionType?: TransactionType;
}

export class UpdateLocationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  targetCityId?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preferredNeighborhoodIds?: string[];
}

export class UpdateLifestyleDto {
  @ApiPropertyOptional({ example: 7, minimum: 1, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  quietnessWeight?: number;

  @ApiPropertyOptional({ example: 8, minimum: 1, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  schoolProximityWeight?: number;

  @ApiPropertyOptional({ example: 5, minimum: 1, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  hospitalProximityWeight?: number;

  @ApiPropertyOptional({ example: 6, minimum: 1, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  commerceProximityWeight?: number;

  @ApiPropertyOptional({ example: 7, minimum: 1, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  safetyWeight?: number;

  @ApiPropertyOptional({ example: 3, minimum: 1, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  publicTransportWeight?: number;
}

export class UpdateAmenitiesDto {
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  needsParking?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  needsGarden?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  needsPool?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  needsSecurity?: boolean;
}

export class UpdatePreferencesDto {
  @ApiPropertyOptional({ type: UpdateFamilyDto })
  @IsOptional()
  @Type(() => UpdateFamilyDto)
  family?: UpdateFamilyDto;

  @ApiPropertyOptional({ type: UpdateBudgetDto })
  @IsOptional()
  @Type(() => UpdateBudgetDto)
  budget?: UpdateBudgetDto;

  @ApiPropertyOptional({ type: UpdateLocationDto })
  @IsOptional()
  @Type(() => UpdateLocationDto)
  location?: UpdateLocationDto;

  @ApiPropertyOptional({ type: UpdateLifestyleDto })
  @IsOptional()
  @Type(() => UpdateLifestyleDto)
  lifestyle?: UpdateLifestyleDto;

  @ApiPropertyOptional({ type: UpdateAmenitiesDto })
  @IsOptional()
  @Type(() => UpdateAmenitiesDto)
  amenities?: UpdateAmenitiesDto;
}

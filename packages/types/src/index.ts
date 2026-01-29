// ============== ENUMS ==============

export enum TransactionType {
  RENT = 'RENT',
  BUY = 'BUY',
}

export enum PropertyType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  CONDO = 'CONDO',
  STUDIO = 'STUDIO',
  LAND = 'LAND',
  COMMERCIAL = 'COMMERCIAL',
}

export enum POIType {
  SCHOOL = 'SCHOOL',
  HOSPITAL = 'HOSPITAL',
  SUPERMARKET = 'SUPERMARKET',
  PARK = 'PARK',
  BUS_STOP = 'BUS_STOP',
}

// ============== AUTH ==============

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  user: UserResponse;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  hasCompletedOnboarding: boolean;
}

// ============== PREFERENCES ==============

export interface FamilyPreferences {
  adultsCount: number;
  childrenCount: number;
  minBedrooms: number;
  minBathrooms: number;
  hasPets: boolean;
}

export interface BudgetPreferences {
  minPrice?: number;
  maxPrice?: number;
  transactionType: TransactionType;
}

export interface LocationPreferences {
  targetCityId?: string;
  preferredNeighborhoodIds: string[];
}

export interface LifestylePreferences {
  quietnessWeight: number;
  schoolProximityWeight: number;
  hospitalProximityWeight: number;
  commerceProximityWeight: number;
  safetyWeight: number;
  publicTransportWeight: number;
}

export interface AmenityPreferences {
  needsParking: boolean;
  needsGarden: boolean;
  needsPool: boolean;
  needsSecurity: boolean;
}

export interface UserPreferencesResponse {
  id: string;
  family: FamilyPreferences;
  budget: BudgetPreferences;
  location: LocationPreferences;
  lifestyle: LifestylePreferences;
  amenities: AmenityPreferences;
}

export interface UpdatePreferencesDto {
  family?: Partial<FamilyPreferences>;
  budget?: Partial<BudgetPreferences>;
  location?: Partial<LocationPreferences>;
  lifestyle?: Partial<LifestylePreferences>;
  amenities?: Partial<AmenityPreferences>;
}

// ============== PROPERTY ==============

export interface PropertyResponse {
  id: string;
  title: string;
  description?: string;
  price: number;
  propertyType: PropertyType;
  transactionType: TransactionType;
  bedrooms: number;
  bathrooms: number;
  area?: number;
  address?: string;
  city: CityResponse;
  neighborhood?: NeighborhoodResponse;
  latitude?: number;
  longitude?: number;
  hasParking: boolean;
  hasGarden: boolean;
  hasPool: boolean;
  hasSecurity: boolean;
  petFriendly: boolean;
  images: PropertyImageResponse[];
  sourceUrl: string;
  sourceName: string;
}

export interface PropertyImageResponse {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface PropertySearchParams {
  cityId?: string;
  neighborhoodId?: string;
  transactionType?: TransactionType;
  propertyType?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
  page?: number;
  limit?: number;
}

// ============== MATCHING ==============

export interface MatchScoreBreakdown {
  budget: number;
  space: number;
  location: number;
  lifestyle: number;
  amenities: number;
}

export interface PropertyMatchResponse {
  property: PropertyResponse;
  matchScore: number;
  scoreBreakdown: MatchScoreBreakdown;
  isFavorite: boolean;
  isHidden: boolean;
}

export interface MatchListParams {
  minScore?: number;
  sortBy?: 'score' | 'price' | 'date';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

// ============== LOCATION ==============

export interface CityResponse {
  id: string;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface NeighborhoodResponse {
  id: string;
  name: string;
  cityId: string;
  quietnessScore: number;
  safetyScore: number;
}

export interface PointOfInterestResponse {
  id: string;
  name: string;
  type: POIType;
  latitude: number;
  longitude: number;
}

// ============== API ==============

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

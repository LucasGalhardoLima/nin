const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class ApiClient {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
    if (typeof window !== 'undefined') {
      if (token) {
        localStorage.setItem('nin_token', token);
      } else {
        localStorage.removeItem('nin_token');
      }
    }
  }

  getToken(): string | null {
    if (this.token) return this.token;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('nin_token');
    }
    return this.token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken();
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Auth
  async register(data: { email: string; password: string; name: string }) {
    return this.request<{ accessToken: string; user: User }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data: { email: string; password: string }) {
    return this.request<{ accessToken: string; user: User }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async me() {
    return this.request<User>('/auth/me');
  }

  // Preferences
  async getPreferences() {
    return this.request<UserPreferences | null>('/preferences');
  }

  async updatePreferences(data: UpdatePreferencesDto) {
    return this.request<UserPreferences>('/preferences', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Matches
  async getMatches(params?: MatchListParams) {
    const searchParams = new URLSearchParams();
    if (params?.minScore !== undefined) searchParams.set('minScore', String(params.minScore));
    if (params?.sortBy) searchParams.set('sortBy', params.sortBy);
    if (params?.sortOrder) searchParams.set('sortOrder', params.sortOrder);
    if (params?.neighborhoodId) searchParams.set('neighborhoodId', params.neighborhoodId);
    if (params?.page) searchParams.set('page', String(params.page));
    if (params?.limit) searchParams.set('limit', String(params.limit));

    const query = searchParams.toString();
    return this.request<PaginatedResponse<PropertyMatch>>(
      `/matches${query ? `?${query}` : ''}`
    );
  }

  async getGuestMatches(preferences: UpdatePreferencesDto, params?: MatchListParams) {
    const searchParams = new URLSearchParams();
    if (params?.minScore !== undefined) searchParams.set('minScore', String(params.minScore));
    if (params?.sortBy) searchParams.set('sortBy', params.sortBy);
    if (params?.sortOrder) searchParams.set('sortOrder', params.sortOrder);
    if (params?.neighborhoodId) searchParams.set('neighborhoodId', params.neighborhoodId);
    if (params?.page) searchParams.set('page', String(params.page));
    if (params?.limit) searchParams.set('limit', String(params.limit));

    const query = searchParams.toString();
    return this.request<PaginatedResponse<PropertyMatch>>(
      `/matches/guest${query ? `?${query}` : ''}`,
      {
        method: 'POST',
        body: JSON.stringify(preferences),
      }
    );
  }

  // Guest Preference Persistence
  setGuestPreferences(preferences: UpdatePreferencesDto | null) {
    if (typeof window !== 'undefined') {
      if (preferences) {
        localStorage.setItem('nin_guest_prefs', JSON.stringify(preferences));
      } else {
        localStorage.removeItem('nin_guest_prefs');
      }
    }
  }

  getGuestPreferences(): UpdatePreferencesDto | null {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nin_guest_prefs');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  }

  async saveMatch(propertyId: string) {
    return this.request<{ success: boolean }>(`/matches/${propertyId}/save`, {
      method: 'POST',
    });
  }

  async hideMatch(propertyId: string) {
    return this.request<{ success: boolean }>(`/matches/${propertyId}/hide`, {
      method: 'POST',
    });
  }

  // Properties
  async getProperty(id: string) {
    return this.request<Property>(`/properties/${id}`);
  }

  // Cities
  async getCities() {
    return this.request<City[]>('/cities');
  }

  async getNeighborhoods(cityId: string) {
    return this.request<Neighborhood[]>(`/cities/${cityId}/neighborhoods`);
  }
}

export const api = new ApiClient();

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  hasCompletedOnboarding: boolean;
}

export interface UserPreferences {
  id: string;
  family: {
    adultsCount: number;
    childrenCount: number;
    minBedrooms: number;
    minBathrooms: number;
    hasPets: boolean;
  };
  budget: {
    minPrice: number | null;
    maxPrice: number | null;
    transactionType: 'RENT' | 'BUY';
  };
  location: {
    targetCityId: string | null;
    preferredNeighborhoodIds: string[];
  };
  lifestyle: {
    quietnessWeight: number;
    schoolProximityWeight: number;
    hospitalProximityWeight: number;
    commerceProximityWeight: number;
    safetyWeight: number;
    publicTransportWeight: number;
  };
  amenities: {
    needsParking: boolean;
    needsGarden: boolean;
    needsPool: boolean;
    needsSecurity: boolean;
    needsGym: boolean;
    needsPlayground: boolean;
    needsGreenArea: boolean;
  };
  personal: {
    prefersFamilyRhythm: boolean;
    prefersQuietRestful: boolean;
    prefersConvenience: boolean;
    prefersWorkFromHome: boolean;
    prefersOutdoorLife: boolean;
  };
}

export interface UpdatePreferencesDto {
  family?: Partial<UserPreferences['family']>;
  budget?: Partial<UserPreferences['budget']>;
  location?: Partial<UserPreferences['location']>;
  lifestyle?: Partial<UserPreferences['lifestyle']>;
  amenities?: Partial<UserPreferences['amenities']>;
  personal?: Partial<UserPreferences['personal']>;
}

export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  propertyType: string;
  transactionType: 'RENT' | 'BUY';
  bedrooms: number;
  bathrooms: number;
  area?: number;
  address?: string;
  city: City;
  neighborhood?: Neighborhood;
  latitude?: number;
  longitude?: number;
  hasParking: boolean;
  hasGarden: boolean;
  hasPool: boolean;
  hasSecurity: boolean;
  petFriendly: boolean;
  hasGym: boolean;
  hasPlayground: boolean;
  hasGreenArea: boolean;
  images: { id: string; url: string; isPrimary: boolean }[];
  sourceUrl: string;
  sourceName: string;
  lastScrapedAt?: string | null;
  lastSeenAt?: string | null;
  createdAt?: string;
}

export interface PropertyMatch {
  property: Property;
  matchScore: number;
  scoreBreakdown: {
    budget: number;
    space: number;
    location: number;
    lifestyle: number;
    amenities: number;
  };
  personalTags?: string[];
  isFavorite: boolean;
  isHidden: boolean;
}

export interface City {
  id: string;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  cityId: string;
  quietnessScore: number;
  safetyScore: number;
}

export interface MatchListParams {
  minScore?: number;
  sortBy?: 'score' | 'price' | 'date';
  sortOrder?: 'asc' | 'desc';
  neighborhoodId?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

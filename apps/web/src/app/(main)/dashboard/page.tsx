'use client';

import { memo, useCallback, useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { useVirtualizer } from '@tanstack/react-virtual';

import {
  Home,
  Heart,
  EyeOff,
  MapPin,
  Bed,
  Bath,
  Car,
  Trees,
  Shield,
  PawPrint,
  AlertTriangle,
  ExternalLink,
  Settings,
  LogOut,
  Loader2,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react';

import { api, PropertyMatch, User, PaginatedResponse } from '@/lib/api';

// SWR fetcher functions
const fetchUser = (): Promise<User | null> => api.me().catch(() => null);
const fetchNeighborhoods = (cityId: string | null) => cityId ? api.getNeighborhoods(cityId) : Promise.resolve([]);

const fetchMatches = ({ sortBy, sortOrder, neighborhoodId, minScore }: { sortBy: string; sortOrder: string; neighborhoodId: string | null; minScore: number }): Promise<PaginatedResponse<PropertyMatch>> => {
  const token = api.getToken();
  const params = {
    limit: 50,
    sortBy: sortBy as 'score' | 'price' | 'date',
    sortOrder: sortOrder as 'asc' | 'desc',
    neighborhoodId: neighborhoodId || undefined,
    minScore,
  };

  if (token) {
    return api.getMatches(params);
  }
  const guestPrefs = api.getGuestPreferences();
  if (guestPrefs) {
    return api.getGuestMatches(guestPrefs, params);
  }
  return Promise.resolve({ data: [], total: 0, page: 1, limit: 50, totalPages: 0 });
};

// Hoisted price formatter for performance
const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
});

const formatRelativeDate = (value?: string | null): string => {
  if (!value) return 'Atualizado recentemente';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Atualizado recentemente';

  const diffDays = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return 'Atualizado hoje';
  if (diffDays === 1) return 'Atualizado ontem';
  if (diffDays < 7) return `Atualizado há ${diffDays} dias`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `Atualizado há ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Atualizado há ${months} ${months === 1 ? 'mês' : 'meses'}`;
  }
  const years = Math.floor(diffDays / 365);
  return `Atualizado há ${years} ${years === 1 ? 'ano' : 'anos'}`;
};

// Grid configuration for virtualization
const CARD_HEIGHT = 680; // Adjusted to accommodate new filters/badges and action row
const GAP = 24; // Gap between cards (gap-6 = 1.5rem = 24px)

const defaultAmenityFilters = {
  parking: false,
  garden: false,
  pool: false,
  security: false,
  petFriendly: false,
};

export default function DashboardPage() {
  const router = useRouter();
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<string | null>(null);
  const [minScore, setMinScore] = useState(40);
  const [amenityFilters, setAmenityFilters] = useState(defaultAmenityFilters);
  const [hasMounted, setHasMounted] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  // Sync mounted state to avoid hydration issues
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // SWR for user data with deduplication and caching
  const { data: user, error: userError } = useSWR('user', fetchUser, {
    revalidateOnFocus: false,
  });

  // Fetch preferences to get cityId (if user is logged in)
  const { data: prefs } = useSWR(user ? 'preferences' : null, () => api.getPreferences());

  const guestPrefs = !user ? api.getGuestPreferences() : null;
  const targetCityId = user ? prefs?.location?.targetCityId : guestPrefs?.location?.targetCityId;
  const maxPrice = user ? prefs?.budget?.maxPrice ?? null : guestPrefs?.budget?.maxPrice ?? null;

  // SWR for neighborhoods
  const { data: neighborhoods = [] } = useSWR(
    targetCityId ? ['neighborhoods', targetCityId] : null,
    () => fetchNeighborhoods(targetCityId!)
  );

  // SWR for matches with deduplication and caching
  const { data: matchesData, mutate: mutateMatches } = useSWR(
    ['matches', sortBy, sortOrder, selectedNeighborhoodId, minScore],
    () => fetchMatches({ sortBy, sortOrder, neighborhoodId: selectedNeighborhoodId, minScore }),
    { revalidateOnFocus: false }
  );

  const matches = matchesData?.data ?? [];
  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      if (match.matchScore < minScore) return false;
      if (amenityFilters.parking && !match.property.hasParking) return false;
      if (amenityFilters.garden && !match.property.hasGarden) return false;
      if (amenityFilters.pool && !match.property.hasPool) return false;
      if (amenityFilters.security && !match.property.hasSecurity) return false;
      if (amenityFilters.petFriendly && !match.property.petFriendly) return false;
      return true;
    });
  }, [matches, minScore, amenityFilters]);

  const totalMatches = matches.length;
  const visibleMatches = filteredMatches.length;
  const isLoading = hasMounted && !user && !userError && api.getToken() !== null;
  const isGuest = hasMounted ? !api.getToken() : false;

  // Calculate columns based on container width (responsive grid)
  const getColumnCount = () => {
    if (typeof window === 'undefined') return 3;
    const width = parentRef.current?.clientWidth ?? window.innerWidth;
    if (width >= 1024) return 3; // lg:grid-cols-3
    if (width >= 768) return 2;  // md:grid-cols-2
    return 1;
  };

  const columnCount = hasMounted ? getColumnCount() : 3;
  const rowCount = Math.ceil(filteredMatches.length / columnCount);

  // Virtualize rows (each row contains 1-3 cards depending on screen size)
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CARD_HEIGHT + GAP,
    overscan: 2,
  });

  const handleSave = useCallback(async (propertyId: string) => {
    if (isGuest) {
      router.push('/register');
      return;
    }
    setActionLoading(propertyId);
    try {
      await api.saveMatch(propertyId);
      mutateMatches((current) => {
        if (!current) return current;
        return {
          ...current,
          data: current.data.map((m) =>
            m.property.id === propertyId ? { ...m, isFavorite: true } : m
          ),
        };
      }, false);
    } catch (error) {
      console.error('Failed to save match:', error);
    } finally {
      setActionLoading(null);
    }
  }, [isGuest, router, mutateMatches]);

  const handleHide = useCallback(async (propertyId: string) => {
    if (isGuest) {
      router.push('/register');
      return;
    }
    setActionLoading(propertyId);
    try {
      await api.hideMatch(propertyId);
      mutateMatches((current) => {
        if (!current) return current;
        return {
          ...current,
          data: current.data.filter((m) => m.property.id !== propertyId),
        };
      }, false);
    } catch (error) {
      console.error('Failed to hide match:', error);
    } finally {
      setActionLoading(null);
    }
  }, [isGuest, router, mutateMatches]);

  const handleLogout = useCallback(() => {
    api.setToken(null);
    api.setGuestPreferences(null);
    router.push('/');
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-nin-500" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-nin-50 overflow-hidden">
      {/* Header */}
      {/* Header */}
      <header className="flex-shrink-0 z-50 glass sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-nin-500 rounded-full flex items-center justify-center shadow-sm">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-2xl font-bold text-nin-900">Nin.</span>
          </div>
          <div className="flex items-center gap-4">
            {isGuest ? (
              <Link href="/register" className="btn btn-primary btn-sm">
                Criar conta
              </Link>
            ) : (
              <>
                <span className="text-nin-600 hidden sm:block">
                  Olá, {user?.name?.split(' ')[0] || 'usuário'}
                </span>
                <Link
                  href="/preferences"
                  className="p-2 rounded-full hover:bg-nin-100 text-nin-600 transition-colors"
                  title="Preferências"
                >
                  <Settings className="w-5 h-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full hover:bg-nin-100 text-nin-600 transition-colors"
                  title="Sair"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-shrink-0 max-w-7xl mx-auto px-6 pt-8 pb-6 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold text-nin-900 mb-2">
              Seus matches
            </h1>
            <p className="text-nin-600">
              {visibleMatches} imóveis compatíveis com seu perfil
              {visibleMatches !== totalMatches && (
                <span className="text-nin-400"> de {totalMatches}</span>
              )}
            </p>
          </div>

          {/* Filters/Sorting */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <label className="text-[10px] font-bold text-nin-400 uppercase tracking-wider absolute -top-2 left-3 bg-nin-50 px-1 z-10 transition-colors group-hover:text-nin-500">
                Ordenar por
              </label>
              <div className="relative">
                <select
                  value={`${sortBy}_${sortOrder}`}
                  onChange={(e) => {
                    const [newSort, newOrder] = e.target.value.split('_');
                    setSortBy(newSort);
                    setSortOrder(newOrder);
                  }}
                  className="appearance-none bg-white border-2 border-nin-200 rounded-nin-sm pl-10 pr-10 py-2 text-sm text-nin-700 focus:outline-none focus:border-nin-500 focus:ring-4 focus:ring-nin-500/10 transition-all cursor-pointer min-w-[180px]"
                >
                  <option value="score_desc">Mais compatíveis</option>
                  <option value="price_asc">Menor preço</option>
                  <option value="price_desc">Maior preço</option>
                </select>
                <SlidersHorizontal className="w-4 h-4 text-nin-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="w-4 h-4 text-nin-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-nin-500 transition-colors" />
              </div>
            </div>

            {/* Preferences Button */}
            <Link
              href="/preferences"
              className="btn btn-secondary btn-sm flex items-center gap-2"
              title="Ajustar preferências de busca"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Ajustar preferências</span>
            </Link>
          </div>
        </div>

        {/* Score + Amenity Filters */}
        <div className="flex-shrink-0 max-w-7xl mx-auto px-6 pb-4 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-4 bg-white border border-nin-200 rounded-nin-sm px-4 py-3 shadow-sm">
              <div className="flex-1 min-w-[220px]">
                <div className="flex items-center justify-between text-xs font-semibold text-nin-500 mb-2">
                  <span>Match mínimo</span>
                  <span className="text-nin-700">{minScore}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={minScore}
                  onChange={(e) => setMinScore(Number(e.target.value))}
                  className="w-full accent-nin-500"
                />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-nin-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-nin-50 px-2 py-1">
                  <SlidersHorizontal className="w-3 h-3" />
                  Filtrando
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {[
                { key: 'parking', label: 'Estacionamento', icon: Car },
                { key: 'garden', label: 'Jardim', icon: Trees },
                { key: 'pool', label: 'Piscina', icon: Heart },
                { key: 'security', label: 'Segurança', icon: Shield },
                { key: 'petFriendly', label: 'Pet friendly', icon: PawPrint },
              ].map(({ key, label, icon: Icon }) => {
                const active = amenityFilters[key as keyof typeof amenityFilters];
                return (
                  <button
                    key={key}
                    onClick={() =>
                      setAmenityFilters((prev) => ({
                        ...prev,
                        [key]: !prev[key as keyof typeof amenityFilters],
                      }))
                    }
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                      active
                        ? 'bg-nin-500 text-white shadow-md shadow-nin-500/20'
                        : 'bg-white text-nin-600 border border-nin-200 hover:border-nin-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Neighborhood Filter Pills */}
        {neighborhoods.length > 0 && (
          <div className="flex-shrink-0 max-w-7xl mx-auto px-6 mb-6 w-full">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedNeighborhoodId(null)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedNeighborhoodId === null
                  ? 'bg-nin-500 text-white shadow-md shadow-nin-500/20'
                  : 'bg-white text-nin-600 border border-nin-200 hover:border-nin-300'
                  }`}
              >
                Todos
              </button>
              {neighborhoods.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNeighborhoodId(n.id)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedNeighborhoodId === n.id
                    ? 'bg-nin-500 text-white shadow-md shadow-nin-500/20'
                    : 'bg-white text-nin-600 border border-nin-200 hover:border-nin-300'
                    }`}
                >
                  {n.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredMatches.length === 0 && !isLoading ? (
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="card text-center py-20 flex flex-col items-center">
              <div className="w-20 h-20 bg-nin-50 rounded-full flex items-center justify-center mb-6">
                <Home className="w-10 h-10 text-nin-300" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-nin-700 mb-2">
                Nenhum match encontrado
              </h2>
              <p className="text-nin-500 mb-8 max-w-sm mx-auto">
                Ajuste o match mínimo, filtros ou preferências para encontrar mais opções.
              </p>
              <Link href="/preferences" className="btn btn-primary">
                Editar preferências
              </Link>
            </div>
          </div>
        ) : (
          <div
            ref={parentRef}
            className="flex-1 overflow-y-auto px-6 overflow-x-hidden min-h-0"
          >
            <div className="max-w-7xl mx-auto w-full relative">
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: '100%',
                  position: 'relative',
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const startIndex = virtualRow.index * columnCount;
                  const rowMatches = filteredMatches.slice(startIndex, startIndex + columnCount);

                  return (
                    <div
                      key={virtualRow.key}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                        {rowMatches.map((match) => (
                          <PropertyCard
                            key={match.property.id}
                            match={match}
                            onSave={handleSave}
                            onHide={handleHide}
                            loading={actionLoading === match.property.id}
                            maxPrice={maxPrice}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Memoized PropertyCard to prevent unnecessary re-renders
const PropertyCard = memo(function PropertyCard({
  match,
  onSave,
  onHide,
  loading,
  maxPrice,
}: {
  match: PropertyMatch;
  onSave: (propertyId: string) => void;
  onHide: (propertyId: string) => void;
  loading: boolean;
  maxPrice: number | null;
}) {
  const { property, matchScore, scoreBreakdown, isFavorite } = match;
  const isOverBudget =
    maxPrice !== null &&
    property.price > maxPrice &&
    matchScore >= 70;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-gradient-to-br from-match-excellent to-emerald-600 shadow-sm ring-1 ring-white/20';
    if (score >= 70) return 'bg-gradient-to-br from-match-good to-green-600 shadow-sm ring-1 ring-white/20';
    if (score >= 50) return 'bg-gradient-to-br from-match-fair to-orange-400 shadow-sm ring-1 ring-white/20';
    return 'bg-gradient-to-br from-match-low to-red-600 shadow-sm ring-1 ring-white/20';
  };

  return (
    <div className="group glass-card rounded-nin overflow-hidden hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 bg-nin-100 overflow-hidden">
        {property.images[0] ? (
          <Image
            src={property.images[0].url}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-nin-50 to-nin-100 text-nin-300">
            <div className="p-4 rounded-full bg-white/50 mb-2">
              <Home className="w-8 h-8 opacity-50" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider opacity-60">Sem imagem</span>
          </div>
        )}
        {/* Score badge */}
        <div className={`absolute top-3 right-3 match-badge shadow-lg ${getScoreColor(matchScore)}`}>
          {matchScore}% match
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1 min-h-[56px]">
          <h3 className="font-heading text-lg font-bold text-nin-900 line-clamp-2 group-hover:text-nin-500 transition-colors">
            {property.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] text-nin-500 mb-3">
          <span className="px-2 py-0.5 rounded-full bg-nin-50 border border-nin-100">
            {property.sourceName}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-nin-100">
            {formatRelativeDate(property.lastScrapedAt || property.createdAt || null)}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-nin-500">
            {priceFormatter.format(property.price)}
            {property.transactionType === 'RENT' && (
              <span className="text-sm font-normal text-nin-400 ml-1">/mês</span>
            )}
          </span>
          {isOverBudget && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">
              <AlertTriangle className="w-3.5 h-3.5" />
              Acima do orçamento
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-nin-500 text-sm mb-5 bg-nin-50/50 p-2 rounded-lg -mx-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="line-clamp-1 font-medium">
            {property.neighborhood?.name ? `${property.neighborhood.name}, ` : ''}{property.city.name}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-4 text-nin-600 text-sm">
          <span className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            {property.bedrooms} quartos
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {property.bathrooms} banheiros
          </span>
          {property.hasParking && (
            <span className="flex items-center gap-1">
              <Car className="w-4 h-4" />
            </span>
          )}
          {property.hasGarden && (
            <span className="flex items-center gap-1">
              <Trees className="w-4 h-4" />
            </span>
          )}
          {property.hasSecurity && (
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
            </span>
          )}
        </div>

        <div className="text-xs text-nin-500 font-semibold mb-2">
          Por que combina
        </div>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {Object.entries(scoreBreakdown).map(([key, value]) => {
            const labels: Record<string, string> = {
              budget: 'Orçamento',
              space: 'Espaço',
              location: 'Localização',
              lifestyle: 'Estilo de Vida',
              amenities: 'Comodidades'
            };
            const label = labels[key] || key;

            return (
              <div key={key} className="flex flex-col gap-1 group/tooltip relative">
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-nin-900 text-white text-[10px] rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all whitespace-nowrap z-50 shadow-xl">
                  {label}: {value}%
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-nin-900" />
                </div>

                <div className="h-1.5 w-full bg-nin-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${value}%`,
                      backgroundColor: value >= 70 ? '#6B9B64' : value >= 40 ? '#D89F6A' : '#B94A48',
                    }}
                  />
                </div>
                <span className="text-[10px] text-nin-400 capitalize text-center">
                  {key === 'budget' ? 'Orç' : key === 'space' ? 'Esp' : key === 'location' ? 'Loc' : key === 'lifestyle' ? 'Est' : 'Amen'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onSave(property.id)}
            disabled={loading || isFavorite}
            className={`col-span-2 btn ${isFavorite ? 'bg-sage-100 text-sage-600' : 'btn-secondary'
              }`}
          >
            <Heart className={`w-4 h-4 mr-1 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Salvo' : 'Salvar'}
          </button>
          <a
            href={property.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary px-3"
            title="Ver original"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <button
          onClick={() => onHide(property.id)}
          disabled={loading}
          className="btn btn-secondary w-full mt-2"
        >
          <EyeOff className="w-4 h-4 mr-2" />
          Não é para mim
        </button>
      </div>
    </div>
  );
});

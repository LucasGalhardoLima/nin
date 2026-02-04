'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Bath,
  Bed,
  Bus,
  Car,
  GraduationCap,
  Hospital,
  ExternalLink,
  Heart,
  Home,
  ShoppingCart,
  MapPin,
  Shield,
  Trees,
  Dumbbell,
  Landmark,
  Loader2,
  PawPrint,
  Sparkles,
  Store,
  Utensils,
  Building2,
  DoorOpen,
} from 'lucide-react';
import { api, Property, UserPreferences, UpdatePreferencesDto } from '@/lib/api';

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

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [preferences, setPreferences] = useState<UpdatePreferencesDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const data = await api.getProperty(id);
        if (active) setProperty(data);
        if (api.getToken()) {
          const prefs = await api.getPreferences();
          if (active) setPreferences(prefs as UserPreferences);
        } else {
          const guestPrefs = api.getGuestPreferences();
          if (active) setPreferences(guestPrefs);
        }
      } catch (error) {
        console.error('Failed to load property:', error);
      } finally {
        if (active) setLoading(false);
      }
    };
    if (id) load();
    return () => {
      active = false;
    };
  }, [id]);

  const heroImage = property?.images?.[0]?.url || null;
  const addressText = useMemo(() => {
    if (!property) return '';
    const neighborhood = property.neighborhood?.name ? `${property.neighborhood.name}, ` : '';
    return `${neighborhood}${property.city.name}`;
  }, [property]);

  const { mainDescription, proximidades } = useMemo(() => {
    if (!property?.description) {
      return { mainDescription: '', proximidades: [] as string[] };
    }
    const [beforeProx, afterProx] = property.description.split(/proximidades:\s*/i);
    const main = (beforeProx || '').trim();
    const rawProx = (afterProx || '')
      .split(/,|\n|;/)
      .map((item) => item.trim())
      .filter(Boolean);

    const noisePattern = /(central de neg[oó]cios|thiago favaro|fale agora|corretor|imobili[aá]ria|creci|repita)/i;
    const phonePattern = /(\+?55)?\s*\(?\d{2}\)?\s*\d{4,5}[-\s]?\d{4}/;
    const numericNoise = /\d{3,}/;

    const prox = rawProx.filter((item) => {
      const normalized = item.replace(/\s+/g, ' ').trim();
      if (!normalized) return false;
      if (normalized.length < 3) return false;
      if (noisePattern.test(normalized)) return false;
      if (phonePattern.test(normalized)) return false;
      if (numericNoise.test(normalized)) return false;
      return true;
    });

    return { mainDescription: main, proximidades: Array.from(new Set(prox)) };
  }, [property?.description]);

  const matchReasons = useMemo(() => {
    if (!property) return [];
    const reasons: string[] = [];
    const prefs = preferences || {};

    if (prefs.budget?.maxPrice && property.price <= prefs.budget.maxPrice) {
      reasons.push('Dentro do orçamento definido');
    }
    if (prefs.family?.minBedrooms && property.bedrooms >= prefs.family.minBedrooms) {
      reasons.push(`Tem pelo menos ${prefs.family.minBedrooms} quartos`);
    }
    if (prefs.family?.minBathrooms && property.bathrooms >= prefs.family.minBathrooms) {
      reasons.push(`Atende ao mínimo de banheiros`);
    }
    if (prefs.amenities?.needsSecurity && property.hasSecurity) {
      reasons.push('Segurança 24h disponível');
    }
    if (prefs.amenities?.needsGym && property.hasGym) {
      reasons.push('Academia disponível no condomínio');
    }
    if (prefs.amenities?.needsPlayground && property.hasPlayground) {
      reasons.push('Playground para a rotina da família');
    }
    if (prefs.amenities?.needsGreenArea && property.hasGreenArea) {
      reasons.push('Área verde para relaxar');
    }
    if (prefs.lifestyle?.commerceProximityWeight && prefs.lifestyle.commerceProximityWeight >= 7 && proximidades.length > 0) {
      reasons.push('Comércio e serviços próximos');
    }
    if (prefs.personal?.prefersFamilyRhythm && (property.hasPlayground || property.hasGreenArea)) {
      reasons.push('Bom para rotina familiar');
    }
    if (prefs.personal?.prefersWorkFromHome && property.area && property.area >= 90) {
      reasons.push('Espaço confortável para home office');
    }
    if (prefs.personal?.prefersQuietRestful && property.neighborhood) {
      reasons.push('Bairro com perfil mais tranquilo');
    }

    if (reasons.length === 0) {
      if (property.area && property.area >= 80) reasons.push('Boa metragem para o dia a dia');
      if (property.hasGreenArea || property.hasGarden) reasons.push('Contato com área verde');
      if (property.hasGym) reasons.push('Academia no condomínio');
      if (proximidades.length > 0) reasons.push('Comércio próximo');
    }

    return reasons.slice(0, 5);
  }, [property, preferences, proximidades]);

  const handleSave = async () => {
    if (!property) return;
    if (!api.getToken()) {
      router.push('/register');
      return;
    }
    setSaving(true);
    try {
      await api.saveMatch(property.id);
      setSaved(true);
    } catch (error) {
      console.error('Failed to save property:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-nin-500" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-nin-600">
        <p>Imóvel não encontrado.</p>
        <Link href="/dashboard" className="btn btn-primary">
          Voltar ao dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nin-50/40">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link href="/dashboard" className="inline-flex items-center text-nin-600 hover:text-nin-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a busca
        </Link>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8">
          <div className="space-y-6">
            <div className="rounded-nin overflow-hidden bg-white shadow-sm">
              {heroImage ? (
                <div className="relative h-[360px]">
                  <Image
                    src={heroImage}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              ) : (
                <div className="h-[360px] flex items-center justify-center text-nin-300 bg-gradient-to-br from-nin-50 to-nin-100">
                  <Home className="w-12 h-12" />
                </div>
              )}
            </div>

            <div className="card">
              <div className="flex flex-wrap items-center gap-2 text-xs text-nin-500 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-nin-50 border border-nin-100">
                  {property.sourceName}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white border border-nin-100">
                  {formatRelativeDate(property.lastScrapedAt || property.createdAt || null)}
                </span>
              </div>

              <h1 className="font-heading text-2xl md:text-3xl font-bold text-nin-900 mb-3">
                {property.title}
              </h1>

              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <span className="text-2xl font-bold text-nin-500">
                  {priceFormatter.format(property.price)}
                  {property.transactionType === 'RENT' && (
                    <span className="text-base font-normal text-nin-400 ml-1">/mês</span>
                  )}
                </span>
                <a
                  href={property.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Ver no site original
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-nin-600 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{addressText}</span>
              </div>

              <div className="flex flex-wrap gap-3 text-nin-600 text-sm">
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  {property.bedrooms} quartos
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  {property.bathrooms} banheiros
                </span>
                {property.area ? (
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {property.area} m²
                  </span>
                ) : null}
                {property.hasParking && (
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" />
                    Garagem
                  </span>
                )}
                {property.hasSecurity && (
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    Segurança
                  </span>
                )}
                {property.hasGarden && (
                  <span className="flex items-center gap-1">
                    <Trees className="w-4 h-4" />
                    Jardim
                  </span>
                )}
                {property.hasGym && (
                  <span className="flex items-center gap-1">
                    <Dumbbell className="w-4 h-4" />
                    Academia
                  </span>
                )}
                {property.hasPlayground && (
                  <span className="flex items-center gap-1">
                    <Landmark className="w-4 h-4" />
                    Playground
                  </span>
                )}
                {property.hasGreenArea && (
                  <span className="flex items-center gap-1">
                    <Trees className="w-4 h-4" />
                    Área verde
                  </span>
                )}
                {property.petFriendly && (
                  <span className="flex items-center gap-1">
                    <PawPrint className="w-4 h-4" />
                    Pet friendly
                  </span>
                )}
              </div>
            </div>

            <DescriptionBlocks
              mainDescription={mainDescription}
              proximidades={proximidades}
              property={property}
            />
          </div>

          <aside className="space-y-6">
            <div className="card">
              <h2 className="font-heading text-lg font-semibold text-nin-900 mb-2">
                Pronto para agir?
              </h2>
              <p className="text-nin-600 text-sm mb-4">
                Salve este imóvel e acompanhe atualizações direto no Nin.
              </p>
              <button
                onClick={handleSave}
                disabled={saving || saved}
                className="btn btn-primary w-full"
              >
                <Heart className={`w-4 h-4 mr-2 ${saved ? 'fill-current' : ''}`} />
                {saved ? 'Salvo' : saving ? 'Salvando...' : 'Salvar imóvel'}
              </button>
            </div>

            <div className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-base font-semibold text-nin-900">
                  Por que combina com você
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-nin-900 text-white">
                  <Sparkles className="w-3 h-3" />
                  Resumo automático
                </span>
              </div>
              <p className="text-nin-500 text-xs mb-3">
                Sugestões geradas automaticamente a partir do anúncio e do seu perfil.
              </p>
              <ul className="space-y-2 text-sm text-nin-700">
                {matchReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-nin-500" />
                    <span>{reason}</span>
                  </li>
                ))}
                {matchReasons.length === 0 && (
                  <li className="text-nin-500">
                    Ainda não temos informações suficientes para explicar este match.
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// Description & proximity details
function DescriptionBlocks({
  mainDescription,
  proximidades,
  property,
}: {
  mainDescription: string;
  proximidades: string[];
  property: Property;
}) {
  const summary = mainDescription
    ? `${mainDescription}`.replace(/\s+/g, ' ').trim()
    : '';
  const shortSummary = summary.length > 280 ? `${summary.slice(0, 277)}...` : summary;

  const normalizedSummary = summary
    .replace(/Condom[ií]nio oferece:\s*/gi, 'Condomínio oferece - ')
    .replace(/Portaria\s*\d+\s*horas?/gi, 'Portaria 24 horas');

  const chunks = normalizedSummary
    .split(/;|\n|\.\s+/)
    .map((item) => item.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter((item) => !/(central de neg[oó]cios|thiago favaro|fale agora|corretor|imobili[aá]ria|creci|repita)/i.test(item));

  const splitList = (value: string) =>
    value
      .split(/,|\s+e\s+/i)
      .map((item) => item.trim())
      .filter(Boolean);

  const sections = {
    ambientes: [] as string[],
    comodidades: [] as string[],
    condominio: [] as string[],
    seguranca: [] as string[],
  };

  for (const chunk of chunks) {
    if (/condom[ií]nio oferece/i.test(chunk)) {
      const offers = chunk.split(/-\s*/)[1] || '';
      sections.condominio.push(...splitList(offers));
      continue;
    }

    if (/portaria|seguran[cç]a|vigil[aâ]ncia/i.test(chunk)) {
      sections.seguranca.push(chunk);
      continue;
    }

    if (/(dormit[oó]rio|quarto|su[ií]te|banheiro|sala|lavabo|cozinha|escrit[oó]rio|varanda|sacada)/i.test(chunk)) {
      sections.ambientes.push(chunk);
      continue;
    }

    if (/(churrasco|lavanderia|quintal|gramado|garagem|piscina|jardim|gourmet|dep[oó]sito|academia|playground|bosque|parque|area verde|área verde)/i.test(chunk)) {
      sections.comodidades.push(chunk);
      continue;
    }
  }

  const hasDetails =
    sections.ambientes.length > 0 ||
    sections.comodidades.length > 0 ||
    sections.condominio.length > 0 ||
    sections.seguranca.length > 0;

  const isCondoListing =
    /condom[ií]nio/i.test(property.title) || /condom[ií]nio/i.test(summary);

  const pushUnique = (target: string[], value: string) => {
    if (!value) return;
    if (!target.includes(value)) target.push(value);
  };

  // Enrich sections using structured flags when text is sparse
  if (property.hasSecurity) {
    pushUnique(sections.seguranca, 'Portaria 24 horas');
  }
  if (property.hasGarden) {
    pushUnique(sections.comodidades, 'Jardim/Quintal');
  }
  if (property.hasPool) {
    pushUnique(sections.comodidades, 'Piscina');
  }
  if (property.hasGym) {
    pushUnique(sections.comodidades, 'Academia');
  }
  if (property.hasPlayground) {
    pushUnique(sections.comodidades, 'Playground');
  }
  if (property.hasGreenArea) {
    pushUnique(sections.comodidades, 'Área verde');
  }
  if (property.hasParking) {
    pushUnique(sections.comodidades, 'Garagem');
  }

  if (property.bedrooms > 0) {
    pushUnique(sections.ambientes, `${property.bedrooms} dormitórios`);
  }
  if (property.bathrooms > 0) {
    pushUnique(sections.ambientes, `${property.bathrooms} banheiros`);
  }

  const normalizeItem = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const formatItem = (value: string) => {
    const cleaned = value.replace(/^(um|uma|o|a|os|as)\s+/i, '').replace(/\s+/g, ' ').trim();
    if (!cleaned) return value;

    const lowerWords = new Set([
      'de', 'da', 'do', 'das', 'dos', 'e', 'em', 'para', 'com', 'sem', 'ao', 'aos', 'à', 'às',
      'no', 'na', 'nos', 'nas', 'por', 'sobre',
    ]);

    const normalizeWord = (word: string, index: number) => {
      const plain = word.replace(/[^\p{L}\p{N}]/gu, '');
      if (!plain) return word;

      const isAcronym = plain.length <= 5 && plain === plain.toUpperCase();
      if (isAcronym) return word;

      const hasMixedDigits = /\d/.test(plain) && /[a-zA-ZÀ-ÿ]/.test(plain);
      if (hasMixedDigits) return word;

      const lower = plain.toLowerCase();
      if (index !== 0 && lowerWords.has(lower)) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    const words = cleaned.split(' ').map((word, index) => normalizeWord(word, index));

    const overrides = [
      { pattern: /\barea\b/gi, replacement: 'Área' },
      { pattern: /\bgourmet\b/gi, replacement: 'Gourmet' },
      { pattern: /\bhome office\b/gi, replacement: 'Home Office' },
      { pattern: /\bbanheiro social\b/gi, replacement: 'Banheiro Social' },
      { pattern: /\bbanheiro privativo\b/gi, replacement: 'Banheiro Privativo' },
      { pattern: /\bbanheiro (?:de )?servi[cç]o\b/gi, replacement: 'Banheiro de Serviço' },
      { pattern: /\blavabo\b/gi, replacement: 'Lavabo' },
      { pattern: /\bsu[ií]te master\b/gi, replacement: 'Suíte Master' },
      { pattern: /\bsu[ií]te\b/gi, replacement: 'Suíte' },
      { pattern: /\bcloset\b/gi, replacement: 'Closet' },
      { pattern: /\bservi[cç]o\b/gi, replacement: 'Serviço' },
      { pattern: /\bvaranda gourmet\b/gi, replacement: 'Varanda Gourmet' },
      { pattern: /\bvaranda\b/gi, replacement: 'Varanda' },
      { pattern: /\bsacada\b/gi, replacement: 'Sacada' },
      { pattern: /\barea verde\b/gi, replacement: 'Área Verde' },
      { pattern: /\barea de churrasco\b/gi, replacement: 'Área de Churrasco' },
      { pattern: /\bchurrasqueira\b/gi, replacement: 'Churrasqueira' },
      { pattern: /\barea externa\b/gi, replacement: 'Área Externa' },
      { pattern: /\barea de servi[cç]o\b/gi, replacement: 'Área de Serviço' },
      { pattern: /\blavanderia\b/gi, replacement: 'Lavanderia' },
      { pattern: /\bcozinha planejada\b/gi, replacement: 'Cozinha Planejada' },
      { pattern: /\bcozinha com arm[aá]rios\b/gi, replacement: 'Cozinha com Armários' },
      { pattern: /\barm[aá]rios planejados\b/gi, replacement: 'Armários Planejados' },
      { pattern: /\bmoveis planejados\b/gi, replacement: 'Móveis Planejados' },
      { pattern: /\bsala de jantar\b/gi, replacement: 'Sala de Jantar' },
      { pattern: /\bsala de estar\b/gi, replacement: 'Sala de Estar' },
      { pattern: /\bsala de tv\b/gi, replacement: 'Sala de TV' },
      { pattern: /\bsala para 2 ambientes\b/gi, replacement: 'Sala para 2 Ambientes' },
      { pattern: /\bsala dois ambientes\b/gi, replacement: 'Sala para 2 Ambientes' },
      { pattern: /\bquintal\b/gi, replacement: 'Quintal' },
      { pattern: /\bquintal gramado\b/gi, replacement: 'Quintal Gramado' },
      { pattern: /\bjardim\b/gi, replacement: 'Jardim' },
      { pattern: /\bgaragem coberta\b/gi, replacement: 'Garagem Coberta' },
      { pattern: /\bgaragem\b/gi, replacement: 'Garagem' },
      { pattern: /\bvaga\b/gi, replacement: 'Vaga' },
      { pattern: /\bportaria 24 horas\b/gi, replacement: 'Portaria 24 Horas' },
      { pattern: /\bcondominio\b/gi, replacement: 'Condomínio' },
      { pattern: /\bplayground\b/gi, replacement: 'Playground' },
      { pattern: /\bacademia ao ar livre\b/gi, replacement: 'Academia ao Ar Livre' },
      { pattern: /\bacademia\b/gi, replacement: 'Academia' },
      { pattern: /\barea de lazer\b/gi, replacement: 'Área de Lazer' },
      { pattern: /\bquadra\b/gi, replacement: 'Quadra' },
      { pattern: /\bsal[aã]o de festas\b/gi, replacement: 'Salão de Festas' },
      { pattern: /\bespa[cç]o gourmet\b/gi, replacement: 'Espaço Gourmet' },
      { pattern: /\bbrinquedoteca\b/gi, replacement: 'Brinquedoteca' },
      { pattern: /\bbosque\b/gi, replacement: 'Bosque' },
      { pattern: /\bparque\b/gi, replacement: 'Parque' },
      { pattern: /\bárea privativa\b/gi, replacement: 'Área Privativa' },
      { pattern: /\bbanheiro social\b/gi, replacement: 'Banheiro Social' },
      { pattern: /\bdespensa\b/gi, replacement: 'Despensa' },
      { pattern: /\bdep[oó]sito\b/gi, replacement: 'Depósito' },
      { pattern: /\bescrit[oó]rio\b/gi, replacement: 'Escritório' },
      { pattern: /\bmezanino\b/gi, replacement: 'Mezanino' },
      { pattern: /\bterra[cç]o\b/gi, replacement: 'Terraço' },
    ];

    let formatted = words.join(' ');
    for (const rule of overrides) {
      formatted = formatted.replace(rule.pattern, rule.replacement);
    }

    return formatted;
  };

  const uniqueByNormalized = (items: string[]) => {
    const byKey = new Map<string, string>();
    for (const item of items) {
      const key = normalizeItem(item);
      if (!key) continue;
      const existing = byKey.get(key);
      if (!existing || item.length > existing.length) {
        byKey.set(key, item);
      }
    }
    return Array.from(byKey.values());
  };

  sections.seguranca = uniqueByNormalized(sections.seguranca);
  sections.condominio = uniqueByNormalized(sections.condominio);
  sections.comodidades = uniqueByNormalized(sections.comodidades);
  sections.ambientes = uniqueByNormalized(sections.ambientes);

  if (isCondoListing && sections.condominio.length > 0) {
    const condoKeys = new Set(sections.condominio.map((item) => normalizeItem(item)));
    sections.comodidades = sections.comodidades.filter(
      (item) => !condoKeys.has(normalizeItem(item)),
    );
  }

  const removeCrossDuplicates = (base: string[], toFilter: string[]) => {
    const baseKeys = new Set(base.map((item) => normalizeItem(item)));
    return toFilter.filter((item) => !baseKeys.has(normalizeItem(item)));
  };

  sections.comodidades = removeCrossDuplicates(sections.seguranca, sections.comodidades);
  sections.ambientes = removeCrossDuplicates(sections.comodidades, sections.ambientes);
  sections.ambientes = removeCrossDuplicates(sections.seguranca, sections.ambientes);

  const getProximityMeta = (value: string) => {
    const text = value.toLowerCase();
    if (/farm[aá]cia/.test(text)) return { icon: Hospital, label: value };
    if (/hospital|cl[ií]nica|upa|posto de sa[úu]de/.test(text)) return { icon: Hospital, label: value };
    if (/escola|col[eé]gio|universidade|creche/.test(text)) return { icon: GraduationCap, label: value };
    if (/supermercado|mercado|mercearia/.test(text)) return { icon: ShoppingCart, label: value };
    if (/padaria|loja|shopping|com[eé]rcio|servi[cç]o/.test(text)) return { icon: Store, label: value };
    if (/restaurante|bar|lanchonete/.test(text)) return { icon: Utensils, label: value };
    if (/parque|bosque|[áa]rea verde|pra[cç]a/.test(text)) return { icon: Trees, label: value };
    if (/transporte|[ôo]nibus|terminal|ponto/.test(text)) return { icon: Bus, label: value };
    if (/banco|cart[oó]rio/.test(text)) return { icon: Landmark, label: value };
    return { icon: MapPin, label: value };
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-lg font-semibold text-nin-900">
          Sobre este imóvel
        </h2>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-nin-900 text-white">
          Extraído automaticamente
        </span>
      </div>

      {hasDetails ? (
        <div className="grid gap-3 md:grid-cols-2">
          {sections.seguranca.length > 0 && (
            <div className="rounded-nin-sm border border-nin-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-nin-700 font-semibold text-sm">
                <Shield className="w-4 h-4 text-nin-500" />
                Segurança
              </div>
              <div className="flex flex-wrap gap-2">
          {sections.seguranca.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-full text-xs bg-nin-100 text-nin-700 border border-nin-200"
            >
              {formatItem(item)}
            </span>
          ))}
        </div>
            </div>
          )}

          {sections.comodidades.length > 0 && (
            <div className="rounded-nin-sm border border-nin-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-nin-700 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-nin-500" />
                Comodidades
              </div>
              <div className="flex flex-wrap gap-2">
              {sections.comodidades.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-xs bg-nin-100 text-nin-700 border border-nin-200"
                >
                  {formatItem(item)}
                </span>
              ))}
            </div>
            </div>
          )}

          {isCondoListing && sections.condominio.length > 0 && (
            <div className="rounded-nin-sm border border-nin-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-nin-700 font-semibold text-sm">
                <Building2 className="w-4 h-4 text-nin-500" />
                Condomínio oferece
              </div>
              <div className="flex flex-wrap gap-2">
              {sections.condominio.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-xs bg-nin-100 text-nin-700 border border-nin-200"
                >
                  {formatItem(item)}
                </span>
              ))}
            </div>
            </div>
          )}

          {sections.ambientes.length > 0 && (
            <div className="rounded-nin-sm border border-nin-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-nin-700 font-semibold text-sm">
                <DoorOpen className="w-4 h-4 text-nin-500" />
                Ambientes & cômodos
              </div>
              <div className="flex flex-wrap gap-2">
              {sections.ambientes.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-xs bg-nin-100 text-nin-700 border border-nin-200"
                >
                  {formatItem(item)}
                </span>
              ))}
            </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-nin-500 text-sm">
          Sem detalhes adicionais no anúncio.
        </p>
      )}

      <div className="mt-4 rounded-nin-sm border border-nin-100 bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold text-nin-500 uppercase tracking-wide mb-3">
          Proximidades
        </p>
        {proximidades.length > 0 ? (
          <div className="grid gap-2 md:grid-cols-2">
            {proximidades.map((item) => {
              const meta = getProximityMeta(item);
              const Icon = meta.icon;
              return (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-nin-sm border border-nin-100 bg-nin-50/60 px-3 py-2 text-sm text-nin-700"
                >
                  <Icon className="w-4 h-4 text-nin-500" />
                  <span>{formatItem(meta.label)}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-nin-500 text-sm">
            Proximidades não informadas no anúncio.
          </p>
        )}
      </div>
    </div>
  );
}

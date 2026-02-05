import { cleanDescriptionForSource } from './description-cleaner';

export const normalizeText = (value?: string | null): string | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const sanitizeDescription = (
  value?: string | null,
  source?: string | null,
): string | undefined => {
  const text = normalizeText(value);
  if (!text) return undefined;
  const cleaned = cleanDescriptionForSource(text, source ?? '').replace(/\s+/g, ' ').trim();
  return cleaned.length > 0 ? cleaned : undefined;
};

export const normalizeCount = (
  value: number | undefined | null,
  max: number,
): number | undefined => {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  if (value <= 0 || value > max) return undefined;
  return Math.floor(value);
};

export const normalizeArea = (value: number | undefined | null): number | undefined => {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  if (value < 10 || value > 2000) return undefined;
  return value;
};

export const normalizePrice = (value: number | undefined | null): number | undefined => {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  if (value <= 0 || value > 50_000_000) return undefined;
  return value;
};

export const normalizeImages = (urls?: string[]): string[] => {
  if (!urls?.length) return [];
  const seen = new Set<string>();
  const cleaned: string[] = [];
  for (const url of urls) {
    const trimmed = normalizeText(url);
    if (!trimmed) continue;
    if (!/^https?:\/\//i.test(trimmed)) continue;
    if (seen.has(trimmed)) continue;
    seen.add(trimmed);
    cleaned.push(trimmed);
    if (cleaned.length >= 10) break;
  }
  return cleaned;
};

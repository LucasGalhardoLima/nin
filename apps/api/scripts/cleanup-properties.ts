import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const phonePattern = /(\+?55)?\s*\(?\d{2}\)?\s*\d{4,5}[-\s]?\d{4}/;
const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const noisePattern = /(central de neg[oó]cios|fale agora|whatsapp|contato|corretor|imobili[aá]ria|creci|repita|ligue|telefone|fone|zap)/i;

const sanitizeDescription = (value?: string | null) => {
  if (!value) return null;
  const lines = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !phonePattern.test(line))
    .filter((line) => !emailPattern.test(line))
    .filter((line) => !noisePattern.test(line))
    .filter((line) => !/^\d{3,}$/.test(line));

  const cleaned = lines.join('\n').replace(/\s+/g, ' ').trim();
  return cleaned.length > 0 ? cleaned : null;
};

const normalizeCount = (value: number | null, max: number) => {
  if (!value || value <= 0 || value > max) return 0;
  return Math.floor(value);
};

const normalizeArea = (value: number | null) => {
  if (!value || value < 10 || value > 2000) return 0;
  return value;
};

const normalizePrice = (value: number | null) => {
  if (!value || value <= 0 || value > 50_000_000) return 0;
  return value;
};

const normalizeImages = (urls: string[]) => {
  const seen = new Set<string>();
  const cleaned: string[] = [];
  for (const url of urls) {
    if (!url || !/^https?:\/\//i.test(url)) continue;
    if (seen.has(url)) continue;
    seen.add(url);
    cleaned.push(url);
    if (cleaned.length >= 10) break;
  }
  return cleaned;
};

async function main() {
  const properties = await prisma.property.findMany({
    include: { images: true },
  });

  for (const property of properties) {
    const description = sanitizeDescription(property.description);
    const bedrooms = normalizeCount(property.bedrooms, 10);
    const bathrooms = normalizeCount(property.bathrooms, 10);
    const area = normalizeArea(property.area);
    const price = normalizePrice(property.price);

    await prisma.property.update({
      where: { id: property.id },
      data: {
        description,
        bedrooms,
        bathrooms,
        area,
        price,
      },
    });

    const normalizedImages = normalizeImages(property.images.map((img) => img.url));
    if (normalizedImages.length !== property.images.length) {
      await prisma.propertyImage.deleteMany({ where: { propertyId: property.id } });
      if (normalizedImages.length > 0) {
        await prisma.propertyImage.createMany({
          data: normalizedImages.map((url, index) => ({
            propertyId: property.id,
            url,
            isPrimary: index === 0,
          })),
        });
      }
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

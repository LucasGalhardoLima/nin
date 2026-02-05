import { PrismaClient } from '@prisma/client';
import {
  normalizeArea,
  normalizeCount,
  normalizeImages,
  normalizePrice,
  sanitizeDescription,
} from '../src/modules/scraper/utils/property-normalizer';

const prisma = new PrismaClient();

async function main() {
  const properties = await prisma.property.findMany({
    include: { images: true },
  });

  const total = properties.length;
  let updatedProperties = 0;
  let updatedImages = 0;
  console.log(`[cleanup] Starting cleanup for ${total} properties`);

  for (let index = 0; index < properties.length; index += 1) {
    const property = properties[index];
    const description =
      sanitizeDescription(property.description, property.scrapingSource || property.sourceName) ?? null;
    const bedrooms = normalizeCount(property.bedrooms, 10) ?? 0;
    const bathrooms = normalizeCount(property.bathrooms, 10) ?? 0;
    const area = normalizeArea(property.area) ?? 0;
    const price = normalizePrice(property.price) ?? 0;

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
    updatedProperties += 1;

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
      updatedImages += 1;
    }

    if ((index + 1) % 100 === 0 || index + 1 === total) {
      console.log(`[cleanup] Processed ${index + 1}/${total} properties`);
    }
  }

  console.log(
    `[cleanup] Completed. Properties updated: ${updatedProperties}. Image sets normalized: ${updatedImages}.`,
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

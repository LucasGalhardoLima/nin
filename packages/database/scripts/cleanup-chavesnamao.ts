import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanChavesNaMao() {
  console.log('🧹 Cleaning Chaves na Mão properties...\n');

  try {
    // Delete images first (foreign key constraint)
    const deletedImages = await prisma.propertyImage.deleteMany({
      where: {
        property: {
          scrapingSource: 'chavesnamao',
        },
      },
    });
    console.log(`✅ Deleted ${deletedImages.count} images`);

    // Delete properties
    const deletedProperties = await prisma.property.deleteMany({
      where: {
        scrapingSource: 'chavesnamao',
      },
    });
    console.log(`✅ Deleted ${deletedProperties.count} properties`);

    // Delete scraping jobs
    const deletedJobs = await prisma.scrapingJob.deleteMany({
      where: {
        source: 'chavesnamao',
      },
    });
    console.log(`✅ Deleted ${deletedJobs.count} scraping jobs`);

    console.log('\n✅ Cleanup complete!');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanChavesNaMao();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanup() {
  console.log('🗑️  Cleaning up database...');
  
  // Delete all properties and their images
  const deletedImages = await prisma.propertyImage.deleteMany({});
  console.log(`✓ Deleted ${deletedImages.count} property images`);
  
  const deletedProperties = await prisma.property.deleteMany({});
  console.log(`✓ Deleted ${deletedProperties.count} properties`);
  
  const deletedJobs = await prisma.scrapingJob.deleteMany({});
  console.log(`✓ Deleted ${deletedJobs.count} scraping jobs`);
  
  console.log('\n✅ Database cleaned! Ready for fresh scraping.');
}

cleanup()
  .catch((e) => {
    console.error('Cleanup error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

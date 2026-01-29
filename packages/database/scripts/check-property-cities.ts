import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkPropertyCities() {
  const counts = await prisma.property.groupBy({
    by: ['cityId'],
    _count: {
      id: true,
    },
    where: { scrapingSource: 'chavesnamao' },
  });
  
  const cities = await prisma.city.findMany();
  const cityMap = new Map(cities.map(c => [c.id, c.name]));
  
  console.log('\n🏙️  Chaves na Mão Properties by City:');
  counts.forEach(c => {
    console.log(`   - ${cityMap.get(c.cityId) || 'Unknown'}: ${c._count.id} properties`);
  });
  
  await prisma.$disconnect();
}

checkPropertyCities();

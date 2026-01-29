import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkCities() {
  const cities = await prisma.city.findMany();
  console.log('\n🏙️  Cities in Database:');
  cities.forEach(c => {
    console.log(`   - ${c.name} (ID: ${c.id})`);
  });
  await prisma.$disconnect();
}

checkCities();

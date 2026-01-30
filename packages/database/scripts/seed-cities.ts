import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const cities = [
    { name: 'Araraquara', state: 'SP', latitude: -21.7946, longitude: -48.1766 },
    { name: 'Matão', state: 'SP', latitude: -21.6042, longitude: -48.3653 },
  ];

  for (const city of cities) {
    await prisma.city.upsert({
      where: { name_state: { name: city.name, state: city.state } },
      update: {},
      create: city,
    });
    console.log(`Upserted city: ${city.name}`);
  }

  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});

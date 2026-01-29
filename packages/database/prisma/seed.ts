import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CITY_MATAO = {
  name: 'Matão',
  state: 'SP',
  latitude: -21.6033,
  longitude: -48.3644,
};

const CITY_ARARAQUARA = {
  name: 'Araraquara',
  state: 'SP',
  latitude: -21.7946,
  longitude: -48.1766,
};

const MATAO_NEIGHBORHOODS = [
  { name: 'Centro', quietnessScore: 6, safetyScore: 8 },
  { name: 'Jardim das Acácias', quietnessScore: 8, safetyScore: 8 },
  { name: 'Nova Cidade', quietnessScore: 7, safetyScore: 7 },
  { name: 'Bairro Alto', quietnessScore: 7, safetyScore: 7 },
  { name: 'Jardim do Bosque', quietnessScore: 9, safetyScore: 8 },
  { name: 'Jardim Itália', quietnessScore: 8, safetyScore: 9 },
];

const ARARAQUARA_NEIGHBORHOODS = [
  { name: 'Centro', quietnessScore: 5, safetyScore: 7 },
  { name: 'Vila Xavier', quietnessScore: 6, safetyScore: 7 },
  { name: 'Vila Santana', quietnessScore: 7, safetyScore: 7 },
  { name: 'Vila Nossa Sra. do Carmo', quietnessScore: 8, safetyScore: 8 },
  { name: 'Jardim Santa Angelina', quietnessScore: 7, safetyScore: 7 },
  { name: 'Jardim Serra Azul', quietnessScore: 9, safetyScore: 9 },
];

async function main() {
  console.log('Start seeding ...');

  // --- CITIES ---
  const matao = await prisma.city.upsert({
    where: { name_state: { name: CITY_MATAO.name, state: CITY_MATAO.state } },
    update: {},
    create: CITY_MATAO,
  });

  const araraquara = await prisma.city.upsert({
    where: { name_state: { name: CITY_ARARAQUARA.name, state: CITY_ARARAQUARA.state } },
    update: {},
    create: CITY_ARARAQUARA,
  });

  console.log(`✓ Cities seeded: ${matao.name}, ${araraquara.name}`);

  // --- NEIGHBORHOODS ---
  const mataoNeighborhoodsMap = new Map();
  for (const n of MATAO_NEIGHBORHOODS) {
    const record = await prisma.neighborhood.upsert({
      where: { name_cityId: { name: n.name, cityId: matao.id } },
      update: {},
      create: { ...n, cityId: matao.id },
    });
    mataoNeighborhoodsMap.set(n.name, record.id);
  }

  const araraquaraNeighborhoodsMap = new Map();
  for (const n of ARARAQUARA_NEIGHBORHOODS) {
    const record = await prisma.neighborhood.upsert({
      where: { name_cityId: { name: n.name, cityId: araraquara.id } },
      update: {},
      create: { ...n, cityId: araraquara.id },
    });
    araraquaraNeighborhoodsMap.set(n.name, record.id);
  }

  console.log(`✓ Neighborhoods seeded: ${MATAO_NEIGHBORHOODS.length + ARARAQUARA_NEIGHBORHOODS.length} total`);

  // --- POIs ---
  const pois = [
    {
      name: 'Hospital Carlos Fernando Malzoni',
      type: 'HOSPITAL',
      latitude: -21.605,
      longitude: -48.365,
      cityId: matao.id,
    },
    {
      name: 'Shopping Matão',
      type: 'SHOPPING',
      latitude: -21.603,
      longitude: -48.364,
      cityId: matao.id,
    },
    {
      name: 'Parque dos Ipês',
      type: 'PARK',
      latitude: -21.600,
      longitude: -48.360,
      cityId: matao.id,
    },
    {
      name: 'Hospital São Paulo',
      type: 'HOSPITAL',
      latitude: -21.795,
      longitude: -48.177,
      cityId: araraquara.id,
    },
    {
      name: 'Shopping Jaraguá',
      type: 'SHOPPING',
      latitude: -21.790,
      longitude: -48.175,
      cityId: araraquara.id,
    },
    {
      name: 'Parque Ecológico',
      type: 'PARK',
      latitude: -21.800,
      longitude: -48.180,
      cityId: araraquara.id,
    },
  ];

  for (const poi of pois) {
    await prisma.pointOfInterest.create({ data: poi });
  }

  console.log(`✓ POIs seeded: ${pois.length} total`);

  // --- PROPERTIES ---
  // NO MOCK PROPERTIES! 
  // All properties will be populated by the scraping system with real data.
  console.log('✓ Properties: Skipped (will be populated by scraper)');

  console.log('\n🎉 Seeding finished successfully!');
  console.log('📊 Database is ready to receive real property data from scrapers.');
}

main()
  .catch((e) => {
    console.error('SEED ERROR:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

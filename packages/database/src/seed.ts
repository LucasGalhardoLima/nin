import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// String constants instead of enums (SQLite compatible)
const POIType = {
  SCHOOL: 'SCHOOL',
  HOSPITAL: 'HOSPITAL',
  SUPERMARKET: 'SUPERMARKET',
  PARK: 'PARK',
  BUS_STOP: 'BUS_STOP',
} as const;

const PropertyType = {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  CONDO: 'CONDO',
  STUDIO: 'STUDIO',
  LAND: 'LAND',
  COMMERCIAL: 'COMMERCIAL',
} as const;

const TransactionType = {
  RENT: 'RENT',
  BUY: 'BUY',
} as const;

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.savedMatch.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.property.deleteMany();
  await prisma.preferredNeighborhood.deleteMany();
  await prisma.userPreferences.deleteMany();
  await prisma.user.deleteMany();
  await prisma.pointOfInterest.deleteMany();
  await prisma.neighborhood.deleteMany();
  await prisma.city.deleteMany();

  console.log('📍 Creating cities...');

  // Cities
  const matao = await prisma.city.create({
    data: {
      name: 'Matão',
      state: 'SP',
      latitude: -21.6033,
      longitude: -48.3656,
    },
  });

  const araraquara = await prisma.city.create({
    data: {
      name: 'Araraquara',
      state: 'SP',
      latitude: -21.7946,
      longitude: -48.1756,
    },
  });

  console.log('🏘️ Creating neighborhoods...');

  // Matão neighborhoods
  const mataoNeighborhoods = await Promise.all([
    prisma.neighborhood.create({
      data: { name: 'Centro', cityId: matao.id, quietnessScore: 4, safetyScore: 7 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Jardim Paraíso', cityId: matao.id, quietnessScore: 8, safetyScore: 8 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Vila Santa Cruz', cityId: matao.id, quietnessScore: 7, safetyScore: 7 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Jardim Primavera', cityId: matao.id, quietnessScore: 6, safetyScore: 6 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Residencial dos Lagos', cityId: matao.id, quietnessScore: 9, safetyScore: 9 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Jardim América', cityId: matao.id, quietnessScore: 7, safetyScore: 8 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Vila Nova', cityId: matao.id, quietnessScore: 5, safetyScore: 5 },
    }),
  ]);

  // Araraquara neighborhoods
  const araraquaraNeighborhoods = await Promise.all([
    prisma.neighborhood.create({
      data: { name: 'Centro', cityId: araraquara.id, quietnessScore: 3, safetyScore: 7 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Jardim Primavera', cityId: araraquara.id, quietnessScore: 7, safetyScore: 8 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Vila Xavier', cityId: araraquara.id, quietnessScore: 6, safetyScore: 6 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Jardim Europa', cityId: araraquara.id, quietnessScore: 8, safetyScore: 9 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Carmo', cityId: araraquara.id, quietnessScore: 5, safetyScore: 7 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Jardim das Hortênsias', cityId: araraquara.id, quietnessScore: 8, safetyScore: 8 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Vila Harmonia', cityId: araraquara.id, quietnessScore: 7, safetyScore: 7 },
    }),
    prisma.neighborhood.create({
      data: { name: 'Parque São Paulo', cityId: araraquara.id, quietnessScore: 6, safetyScore: 6 },
    }),
  ]);

  console.log('📍 Creating points of interest...');

  // Matão POIs
  const mataoPOIs = [
    { name: 'E.E. Prof. José Cardoso', type: POIType.SCHOOL, lat: -21.6050, lng: -48.3670 },
    { name: 'E.M. Maria Apparecida', type: POIType.SCHOOL, lat: -21.6020, lng: -48.3640 },
    { name: 'Santa Casa de Matão', type: POIType.HOSPITAL, lat: -21.6040, lng: -48.3650 },
    { name: 'UBS Centro', type: POIType.HOSPITAL, lat: -21.6035, lng: -48.3660 },
    { name: 'Supermercado Pague Menos', type: POIType.SUPERMARKET, lat: -21.6038, lng: -48.3665 },
    { name: 'Supermercado Dia', type: POIType.SUPERMARKET, lat: -21.6025, lng: -48.3680 },
    { name: 'Praça Central', type: POIType.PARK, lat: -21.6033, lng: -48.3656 },
    { name: 'Parque Municipal', type: POIType.PARK, lat: -21.6015, lng: -48.3620 },
    { name: 'Terminal Rodoviário', type: POIType.BUS_STOP, lat: -21.6030, lng: -48.3640 },
    { name: 'Ponto de Ônibus Centro', type: POIType.BUS_STOP, lat: -21.6033, lng: -48.3660 },
  ];

  for (const poi of mataoPOIs) {
    await prisma.pointOfInterest.create({
      data: {
        name: poi.name,
        type: poi.type,
        latitude: poi.lat,
        longitude: poi.lng,
        cityId: matao.id,
      },
    });
  }

  // Araraquara POIs
  const araraquaraPOIs = [
    { name: 'UNESP Araraquara', type: POIType.SCHOOL, lat: -21.7960, lng: -48.1780 },
    { name: 'E.E. Bento de Abreu', type: POIType.SCHOOL, lat: -21.7940, lng: -48.1750 },
    { name: 'Colégio Arquidiocesano', type: POIType.SCHOOL, lat: -21.7930, lng: -48.1760 },
    { name: 'Santa Casa de Araraquara', type: POIType.HOSPITAL, lat: -21.7950, lng: -48.1740 },
    { name: 'Hospital São Paulo', type: POIType.HOSPITAL, lat: -21.7970, lng: -48.1770 },
    { name: 'Carrefour', type: POIType.SUPERMARKET, lat: -21.7955, lng: -48.1745 },
    { name: 'Extra Supermercado', type: POIType.SUPERMARKET, lat: -21.7935, lng: -48.1765 },
    { name: 'Atacadão', type: POIType.SUPERMARKET, lat: -21.7920, lng: -48.1720 },
    { name: 'Parque Ecológico', type: POIType.PARK, lat: -21.7915, lng: -48.1800 },
    { name: 'Praça da República', type: POIType.PARK, lat: -21.7946, lng: -48.1756 },
    { name: 'Bosque Municipal', type: POIType.PARK, lat: -21.7985, lng: -48.1730 },
    { name: 'Terminal Central', type: POIType.BUS_STOP, lat: -21.7946, lng: -48.1756 },
    { name: 'Ponto Vila Xavier', type: POIType.BUS_STOP, lat: -21.7960, lng: -48.1800 },
  ];

  for (const poi of araraquaraPOIs) {
    await prisma.pointOfInterest.create({
      data: {
        name: poi.name,
        type: poi.type,
        latitude: poi.lat,
        longitude: poi.lng,
        cityId: araraquara.id,
      },
    });
  }

  console.log('🏠 Creating properties...');

  const properties = [
    // Matão - Rental properties
    {
      title: 'Casa térrea com 3 quartos no Centro',
      description: 'Linda casa térrea, reformada, 3 quartos sendo 1 suíte, sala ampla, cozinha planejada.',
      price: 1800,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[0].id,
      latitude: -21.6035,
      longitude: -48.3658,
      hasParking: true,
      hasGarden: true,
      hasPool: false,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'],
    },
    {
      title: 'Apartamento 2 quartos Jardim Paraíso',
      description: 'Apartamento em excelente localização, 2 quartos, sala, cozinha, área de serviço.',
      price: 1200,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.RENT,
      bedrooms: 2,
      bathrooms: 1,
      area: 65,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[1].id,
      latitude: -21.6020,
      longitude: -48.3680,
      hasParking: true,
      hasGarden: false,
      hasPool: false,
      hasSecurity: true,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    },
    {
      title: 'Sobrado novo 4 quartos',
      description: 'Sobrado novo com acabamento de primeira, 4 quartos, 3 suítes, área gourmet.',
      price: 2800,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 4,
      bathrooms: 4,
      area: 180,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[4].id,
      latitude: -21.6010,
      longitude: -48.3700,
      hasParking: true,
      hasGarden: true,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    },
    {
      title: 'Kitnet mobiliada Centro',
      description: 'Kitnet totalmente mobiliada, ideal para estudantes ou solteiros.',
      price: 700,
      propertyType: PropertyType.STUDIO,
      transactionType: TransactionType.RENT,
      bedrooms: 1,
      bathrooms: 1,
      area: 28,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[0].id,
      latitude: -21.6040,
      longitude: -48.3655,
      hasParking: false,
      hasGarden: false,
      hasPool: false,
      hasSecurity: false,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    },
    {
      title: 'Casa com quintal grande Vila Santa Cruz',
      description: 'Casa espaçosa com quintal grande, ótima para família com crianças.',
      price: 1500,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 3,
      bathrooms: 2,
      area: 140,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[2].id,
      latitude: -21.6055,
      longitude: -48.3640,
      hasParking: true,
      hasGarden: true,
      hasPool: false,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    },
    // Matão - Sale properties
    {
      title: 'Casa 3 quartos à venda Centro',
      description: 'Excelente oportunidade! Casa bem localizada no centro, próxima a comércios.',
      price: 350000,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.BUY,
      bedrooms: 3,
      bathrooms: 2,
      area: 130,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[0].id,
      latitude: -21.6030,
      longitude: -48.3660,
      hasParking: true,
      hasGarden: true,
      hasPool: false,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800'],
    },
    {
      title: 'Sobrado alto padrão Residencial dos Lagos',
      description: 'Sobrado de alto padrão em condomínio fechado com segurança 24h.',
      price: 750000,
      propertyType: PropertyType.CONDO,
      transactionType: TransactionType.BUY,
      bedrooms: 4,
      bathrooms: 4,
      area: 250,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[4].id,
      latitude: -21.6005,
      longitude: -48.3710,
      hasParking: true,
      hasGarden: true,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    },
    {
      title: 'Apartamento novo 2 quartos',
      description: 'Apartamento novo, nunca habitado, pronto para morar.',
      price: 220000,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.BUY,
      bedrooms: 2,
      bathrooms: 1,
      area: 58,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[5].id,
      latitude: -21.6045,
      longitude: -48.3675,
      hasParking: true,
      hasGarden: false,
      hasPool: false,
      hasSecurity: true,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    },
    // Araraquara - Rental properties
    {
      title: 'Apartamento moderno Centro',
      description: 'Apartamento moderno no centro, próximo a universidades e comércios.',
      price: 1600,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.RENT,
      bedrooms: 2,
      bathrooms: 1,
      area: 70,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[0].id,
      latitude: -21.7945,
      longitude: -48.1755,
      hasParking: true,
      hasGarden: false,
      hasPool: false,
      hasSecurity: true,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'],
    },
    {
      title: 'Casa ampla Jardim Europa',
      description: 'Casa ampla em bairro nobre, 4 quartos, piscina, área gourmet completa.',
      price: 3500,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[3].id,
      latitude: -21.7920,
      longitude: -48.1800,
      hasParking: true,
      hasGarden: true,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    },
    {
      title: 'Apartamento 3 quartos Vila Xavier',
      description: 'Apartamento espaçoso, 3 quartos, varanda gourmet, 2 vagas.',
      price: 2200,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.RENT,
      bedrooms: 3,
      bathrooms: 2,
      area: 95,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[2].id,
      latitude: -21.7965,
      longitude: -48.1790,
      hasParking: true,
      hasGarden: false,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
    },
    {
      title: 'Kitnet próxima UNESP',
      description: 'Kitnet ideal para estudantes, a 5 minutos da UNESP.',
      price: 800,
      propertyType: PropertyType.STUDIO,
      transactionType: TransactionType.RENT,
      bedrooms: 1,
      bathrooms: 1,
      area: 25,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[0].id,
      latitude: -21.7958,
      longitude: -48.1775,
      hasParking: false,
      hasGarden: false,
      hasPool: false,
      hasSecurity: false,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800'],
    },
    {
      title: 'Sobrado 3 suítes Jardim das Hortênsias',
      description: 'Sobrado novo com 3 suítes, closet, home office, área gourmet.',
      price: 3200,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 3,
      bathrooms: 4,
      area: 170,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[5].id,
      latitude: -21.7935,
      longitude: -48.1820,
      hasParking: true,
      hasGarden: true,
      hasPool: false,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'],
    },
    {
      title: 'Casa simples Vila Harmonia',
      description: 'Casa simples e aconchegante, 2 quartos, ótimo custo-benefício.',
      price: 950,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 2,
      bathrooms: 1,
      area: 70,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[6].id,
      latitude: -21.7980,
      longitude: -48.1810,
      hasParking: false,
      hasGarden: true,
      hasPool: false,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800'],
    },
    // Araraquara - Sale properties
    {
      title: 'Casa térrea Jardim Primavera',
      description: 'Casa térrea em rua tranquila, 3 quartos, quintal amplo.',
      price: 420000,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.BUY,
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[1].id,
      latitude: -21.7925,
      longitude: -48.1765,
      hasParking: true,
      hasGarden: true,
      hasPool: false,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800'],
    },
    {
      title: 'Apartamento de luxo Centro',
      description: 'Apartamento de luxo no centro, acabamento premium, vista panorâmica.',
      price: 650000,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.BUY,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[0].id,
      latitude: -21.7940,
      longitude: -48.1750,
      hasParking: true,
      hasGarden: false,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    },
    {
      title: 'Sobrado duplex Jardim Europa',
      description: 'Sobrado duplex em condomínio de alto padrão, 5 suítes.',
      price: 1200000,
      propertyType: PropertyType.CONDO,
      transactionType: TransactionType.BUY,
      bedrooms: 5,
      bathrooms: 6,
      area: 350,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[3].id,
      latitude: -21.7910,
      longitude: -48.1815,
      hasParking: true,
      hasGarden: true,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'],
    },
    {
      title: 'Apartamento 2 quartos Parque São Paulo',
      description: 'Ótima oportunidade! Apartamento bem localizado com 2 quartos.',
      price: 180000,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.BUY,
      bedrooms: 2,
      bathrooms: 1,
      area: 55,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[7].id,
      latitude: -21.8000,
      longitude: -48.1795,
      hasParking: true,
      hasGarden: false,
      hasPool: false,
      hasSecurity: true,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800'],
    },
    // More varied properties
    {
      title: 'Casa com piscina Jardim América',
      description: 'Casa espaçosa com piscina, churrasqueira, ideal para família.',
      price: 2500,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[5].id,
      latitude: -21.6025,
      longitude: -48.3690,
      hasParking: true,
      hasGarden: true,
      hasPool: true,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    },
    {
      title: 'Cobertura duplex Centro',
      description: 'Cobertura duplex com terraço, churrasqueira, vista para a cidade.',
      price: 2800,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.RENT,
      bedrooms: 3,
      bathrooms: 2,
      area: 140,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[0].id,
      latitude: -21.7942,
      longitude: -48.1752,
      hasParking: true,
      hasGarden: false,
      hasPool: false,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800'],
    },
    {
      title: 'Casa em condomínio fechado',
      description: 'Casa em condomínio com segurança 24h, lazer completo.',
      price: 550000,
      propertyType: PropertyType.CONDO,
      transactionType: TransactionType.BUY,
      bedrooms: 3,
      bathrooms: 3,
      area: 160,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[4].id,
      latitude: -21.6000,
      longitude: -48.3715,
      hasParking: true,
      hasGarden: true,
      hasPool: true,
      hasSecurity: true,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'],
    },
    {
      title: 'Apartamento compacto Vila Nova',
      description: 'Apartamento compacto, ideal para casal, próximo ao centro.',
      price: 900,
      propertyType: PropertyType.APARTMENT,
      transactionType: TransactionType.RENT,
      bedrooms: 1,
      bathrooms: 1,
      area: 40,
      cityId: matao.id,
      neighborhoodId: mataoNeighborhoods[6].id,
      latitude: -21.6060,
      longitude: -48.3650,
      hasParking: false,
      hasGarden: false,
      hasPool: false,
      hasSecurity: false,
      petFriendly: false,
      images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800'],
    },
    {
      title: 'Casa ampla com edícula',
      description: 'Casa com 4 quartos mais edícula, quintal grande, garagem 3 carros.',
      price: 2200,
      propertyType: PropertyType.HOUSE,
      transactionType: TransactionType.RENT,
      bedrooms: 4,
      bathrooms: 3,
      area: 240,
      cityId: araraquara.id,
      neighborhoodId: araraquaraNeighborhoods[4].id,
      latitude: -21.7955,
      longitude: -48.1730,
      hasParking: true,
      hasGarden: true,
      hasPool: false,
      hasSecurity: false,
      petFriendly: true,
      images: ['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'],
    },
  ];

  let propertyCount = 0;
  for (const prop of properties) {
    const property = await prisma.property.create({
      data: {
        sourceUrl: `https://mock.nin.app/property/${++propertyCount}`,
        sourceName: 'Mock',
        title: prop.title,
        description: prop.description,
        price: prop.price,
        propertyType: prop.propertyType,
        transactionType: prop.transactionType,
        bedrooms: prop.bedrooms,
        bathrooms: prop.bathrooms,
        area: prop.area,
        cityId: prop.cityId,
        neighborhoodId: prop.neighborhoodId,
        latitude: prop.latitude,
        longitude: prop.longitude,
        hasParking: prop.hasParking,
        hasGarden: prop.hasGarden,
        hasPool: prop.hasPool,
        hasSecurity: prop.hasSecurity,
        petFriendly: prop.petFriendly,
      },
    });

    // Add image
    if (prop.images.length > 0) {
      await prisma.propertyImage.create({
        data: {
          propertyId: property.id,
          url: prop.images[0],
          isPrimary: true,
        },
      });
    }
  }

  console.log(`✅ Created ${propertyCount} properties`);
  console.log('🌱 Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

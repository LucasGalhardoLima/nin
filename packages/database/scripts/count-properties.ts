import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function countProperties() {
  const chavesnamao = await prisma.property.count({
    where: { scrapingSource: 'chavesnamao' },
  });
  
  const cardinali = await prisma.property.count({
    where: { scrapingSource: 'cardinali' },
  });
  
  const total = await prisma.property.count();
  
  console.log('\n📊 Property Count:');
  console.log(`   Chaves na Mão: ${chavesnamao}`);
  console.log(`   Cardinali: ${cardinali}`);
  console.log(`   Total: ${total}\n`);
  
  if (chavesnamao > 0) {
    const sample = await prisma.property.findMany({
      where: { scrapingSource: 'chavesnamao' },
      take: 3,
      select: {
        sourceId: true,
        title: true,
        price: true,
        propertyType: true,
        transactionType: true,
      },
    });
    
    console.log('Sample Chaves na Mão properties:');
    sample.forEach((p, i) => {
      console.log(`\n${i + 1}. ${p.title.slice(0, 60)}...`);
      console.log(`   ID: ${p.sourceId}`);
      console.log(`   Price: R$ ${p.price.toLocaleString()}`);
      console.log(`   Type: ${p.propertyType} - ${p.transactionType}`);
    });
  }
  
  await prisma.$disconnect();
}

countProperties();

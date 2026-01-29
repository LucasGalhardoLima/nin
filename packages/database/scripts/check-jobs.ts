import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkJobs() {
  const job = await prisma.scrapingJob.findFirst({
    where: { source: 'chavesnamao' },
    orderBy: { createdAt: 'desc' },
  });
  
  if (!job) {
    console.log('No job found for chavesnamao');
    return;
  }
  
  console.log(`\n📋 Job Status: ${job.status}`);
  console.log(`   ID: ${job.id}`);
  console.log(`   Status: ${job.status}`);
  console.log(`   Found: ${job.itemsFound}`);
  console.log(`   Added: ${job.itemsAdded}`);
  console.log(`   Updated: ${job.itemsUpdated}`);
  
  if (job.errors) {
    console.log('\n❌ Errors:');
    const errors = JSON.parse(job.errors);
    if (Array.isArray(errors)) {
      errors.slice(0, 10).forEach((err, i) => console.log(`   ${i + 1}. ${err}`));
      if (errors.length > 10) console.log(`   ... and ${errors.length - 10} more`);
    } else {
      console.log(`   ${job.errors}`);
    }
  }
  
  await prisma.$disconnect();
}

checkJobs();

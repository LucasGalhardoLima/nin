
const { chromium } = require('playwright');

async function analyzeDetail() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext();
  
  try {
    // Cookie might not be needed for direct detail access, but safer to have
    await context.addCookies([
      { name: 'sel_cid_id_cidade', value: '409', domain: '.cardinali.com.br', path: '/' }
    ]);

    const page = await context.newPage();
    const url = 'https://www.cardinali.com.br/comprar/Araraquara/Casa/Condominio/Condominio-Portal-das-Tipuanas/236854';
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    await page.waitForTimeout(3000);

    const details = await page.evaluate(() => {
        return {
            title: document.querySelector('h1')?.innerText || 'h1 not found',
            price: document.querySelector('.price, .valor, [class*="valor"]')?.innerText || 'price selector not found',
            description: document.querySelector('.description, .desc, #descricao')?.innerText.slice(0, 100) || 'description not found',
            specs: Array.from(document.querySelectorAll('.icones, .features, li')).map(el => el.innerText).filter(t => t.includes('Dorm') || t.includes('Suíte') || t.includes('Vaga')),
            images: Array.from(document.querySelectorAll('img')).map(i => i.src).slice(0, 3)
        };
    });

    console.log('Detail Page:', JSON.stringify(details, null, 2));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

analyzeDetail();

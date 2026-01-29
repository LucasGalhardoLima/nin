/**
 * Debug script to test Chaves na Mão scraper with detailed logging
 */

const { chromium } = require('playwright');

async function debugScraper() {
  console.log('🔍 Debugging Chaves na Mão Scraper\n');
  
  const browser = await chromium.launch({ 
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const url = 'https://www.chavesnamao.com.br/casas-a-venda/sp-araraquara/';
    console.log(`📌 URL: ${url}\n`);
    
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    console.log('⏳ Waiting for cards...');
    
    try {
      await page.waitForSelector('.styles_card__nU2_D, .card_card__ENqoy', { timeout: 15000 });
      console.log('✅ Cards selector found\n');
    } catch (e) {
      console.log('❌ Cards selector NOT found');
      console.log('Available classes:', await page.evaluate(() => {
        const allElements = document.querySelectorAll('*');
        const classes = new Set();
        allElements.forEach(el => {
          if (el.className && typeof el.className === 'string') {
            el.className.split(' ').forEach(c => classes.add(c));
          }
        });
        return Array.from(classes).filter(c => c.includes('card')).slice(0, 20);
      }));
      await browser.close();
      return;
    }
    
    // Scroll
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const cards = await page.$$('.styles_card__nU2_D, .card_card__ENqoy');
    console.log(`📦 Found ${cards.length} cards\n`);
    
    if (cards.length === 0) {
      console.log('❌ No cards found! Checking page structure...');
      const html = await page.content();
      console.log('Page title:', await page.title());
      console.log('HTML length:', html.length);
    } else {
      console.log('✅ Processing first card...\n');
      
      const card = cards[0];
      
      // Link
      const link = await card.$('a');
      const href = link ? await link.getAttribute('href') : null;
      console.log('Link href:', href);
      
      // Image
      const img = await card.$('.card_cardGallery__ep1mJ img, picture img');
      const imgSrc = img ? await img.getAttribute('src') : null;
      console.log('Image src:', imgSrc);
      
      // Content
      const content = await card.$('.card_cardContent__3O3v0');
      console.log('Content found:', !!content);
      
      if (content) {
        // Title
        const titleEl = await content.$('.styles_address__Obe3s, h2, .styles_title__L3Xot, a');
        const title = titleEl ? await page.evaluate(el => el.textContent, titleEl) : '';
        console.log('Title:', title.trim().slice(0, 100));
        
        // Price
        const priceEl = await content.$('.styles_price__OdYPz, [class*="price"]');
        const price = priceEl ? await page.evaluate(el => el.textContent, priceEl) : '';
        console.log('Price:', price.trim());
        
        // All text in content
        const allText = await page.evaluate(el => el.textContent, content);
        console.log('\nAll content text:', allText.trim().slice(0, 300));
      }
    }
    
    console.log('\n✅ Debug complete');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
  }
}

debugScraper().catch(console.error);

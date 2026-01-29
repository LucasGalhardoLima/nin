/**
 * Test script for Chaves na Mão scraper
 * Run with: node src/modules/scraper/test-chavesnamao-live.js
 */

const { chromium } = require('playwright');

async function testChavesNaMao() {
  console.log('🔍 Testing Chaves na Mão Scraper...\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Test URL: Casas à venda em Araraquara - Page 1
    const url = 'https://www.chavesnamao.com.br/casas-a-venda/sp-araraquara/';
    console.log(`📌 Testing URL: ${url}\n`);
    
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait for property cards
    await page.waitForSelector('.styles_card__nU2_D, .card_card__ENqoy', { timeout: 15000 });
    
    // Scroll to trigger lazy loading
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get all cards
    const cards = await page.$$('.styles_card__nU2_D, .card_card__ENqoy');
    console.log(`✅ Found ${cards.length} property cards\n`);
    
    // Extract data from first 3 cards
    console.log('📋 Sample Properties:\n');
    
    for (let i = 0; i < Math.min(3, cards.length); i++) {
      const card = cards[i];
      
      // URL
      const link = await card.$('a');
      const url = link ? await link.getAttribute('href') : null;
      
      // Image
      const img = await card.$('.card_cardGallery__ep1mJ img, picture img');
      const imageUrl = img ? await img.getAttribute('src') : null;
      
      // Content
      const content = await card.$('.card_cardContent__3O3v0');
      
      // Title
      const titleEl = await content?.$('.styles_address__Obe3s, h2, .styles_title__L3Xot, a');
      const title = titleEl ? await page.evaluate(el => el.textContent, titleEl) : '';
      
      // Price
      const priceEl = await content?.$('.styles_price__OdYPz, [class*="price"]');
      const priceText = priceEl ? await page.evaluate(el => el.textContent, priceEl) : '';
      
      // Features
      const featureEls = await content?.$$('[class*="badge"], span, p');
      const features = [];
      if (featureEls) {
        for (const el of featureEls.slice(0, 5)) {
          const text = await page.evaluate(e => e.textContent?.trim(), el);
          if (text && text.length > 0 && text.length < 50) {
            features.push(text);
          }
        }
      }
      
      console.log(`--- Property ${i + 1} ---`);
      console.log(`Title: ${title.trim().slice(0, 80)}...`);
      console.log(`Price: ${priceText.trim()}`);
      console.log(`URL: ${url}`);
      console.log(`Image: ${imageUrl ? 'Found' : 'Missing'}`);
      console.log(`Features: ${features.join(' | ')}`);
      console.log('');
    }
    
    console.log('✅ Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

testChavesNaMao().catch(console.error);

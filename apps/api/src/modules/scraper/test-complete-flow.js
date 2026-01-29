/**
 * Test complete scraping flow - simulates exactly what the scraper does
 */

const { chromium } = require('playwright');

async function testCompleteScraping() {
  console.log('🔍 Testing Complete Scraping Flow\n');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const categories = [
    { path: 'casas-a-venda', type: 'HOUSE', transaction: 'BUY' },
  ];
  
  const cityKey = 'sp-araraquara';
  const maxPages = 1; // Test with just 1 page
  const baseUrl = 'https://www.chavesnamao.com.br';
  
  let totalProperties = 0;
  
  try {
    for (const category of categories) {
      console.log(`\n📦 Category: ${category.path}`);
      console.log(`   Type: ${category.type}, Transaction: ${category.transaction}\n`);
      
      for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
        const url = pageNum > 1 
          ? `${baseUrl}/${category.path}/${cityKey}/?pagina=${pageNum}`
          : `${baseUrl}/${category.path}/${cityKey}/`;
        
        console.log(`📄 Page ${pageNum}: ${url}`);
        
        const page = await browser.newPage();
        
        try {
          await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
          
          // Wait for cards
          try {
            await page.waitForSelector('.styles_card__nU2_D, .card_card__ENqoy', { timeout: 15000 });
          } catch (e) {
            console.log(`   ⚠️  No cards found on page ${pageNum}`);
            await page.close();
            break;
          }
          
          // Scroll
          await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
          await new Promise(r => setTimeout(r, 2000));
          
          // Get cards
          const cards = await page.$$('.styles_card__nU2_D, .card_card__ENqoy');
          console.log(`   ✅ Found ${cards.length} cards`);
          
          let validProperties = 0;
          let invalidProperties = 0;
          
          for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            
            try {
              // Extract data
              const link = await card.$('a');
              const href = link ? await link.getAttribute('href') : null;
              
              if (!href) {
                invalidProperties++;
                continue;
              }
              
              const absoluteUrl = href.startsWith('http') ? href : `${baseUrl}${href}`;
              
              // Image
              const img = await card.$('.card_cardGallery__ep1mJ img, picture img');
              const imgSrc = img ? await img.getAttribute('src') : null;
              
              // Content
              const content = await card.$('.card_cardContent__3O3v0');
              if (!content) {
                invalidProperties++;
                continue;
              }
              
              // Title
              const titleEl = await content.$('.styles_address__Obe3s, h2, .styles_title__L3Xot, a');
              const title = titleEl ? await page.evaluate(el => el.textContent, titleEl) : '';
              
              if (!title || title.trim().length < 5) {
                invalidProperties++;
                continue;
              }
              
              // Price
              const priceEl = await content.$('.styles_price__OdYPz, [class*="price"]');
              const priceText = priceEl ? await page.evaluate(el => el.textContent, priceEl) : '';
              
              // Extract sourceId (FIXED PATTERN)
              const urlMatch = absoluteUrl.match(/\/id-(\d+)\//);
              const sourceId = urlMatch ? urlMatch[1] : '';
              
              if (!sourceId) {
                console.log(`   ⚠️  No sourceId for: ${absoluteUrl.slice(0, 80)}`);
                invalidProperties++;
                continue;
              }
              
              validProperties++;
              
              if (i < 3) {
                console.log(`   Property ${i + 1}:`);
                console.log(`     - ID: ${sourceId}`);
                console.log(`     - Title: ${title.trim().slice(0, 60)}...`);
                console.log(`     - Price: ${priceText.trim()}`);
                console.log(`     - URL: ${absoluteUrl.slice(0, 80)}...`);
              }
              
            } catch (error) {
              console.log(`   ⚠️  Error extracting card ${i + 1}: ${error.message}`);
              invalidProperties++;
            }
          }
          
          console.log(`\n   📊 Results: ${validProperties} valid, ${invalidProperties} invalid`);
          totalProperties += validProperties;
          
          await page.close();
          
        } catch (error) {
          console.log(`   ❌ Error on page ${pageNum}: ${error.message}`);
          await page.close();
          break;
        }
      }
    }
    
    console.log(`\n✅ Total properties extracted: ${totalProperties}`);
    console.log('\nIf this number is high but database only has 1, the issue is in:');
    console.log('  1. Database insertion (check for errors in ScraperService)');
    console.log('  2. Duplicate detection (sourceId matching)');
    console.log('  3. City/neighborhood matching');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
  } finally {
    await browser.close();
  }
}

testCompleteScraping().catch(console.error);


import { chromium } from 'playwright';

async function analyze() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to Cardinali...');
    await page.goto('https://www.cardinali.com.br/imoveis/araraquara', { timeout: 30000 });
    
    console.log('Page title:', await page.title());
    
    // Try to find property cards
    const cardSelectors = ['.property-card', '.imovel-card', '.card', '[data-property]'];
    let foundSelector = '';
    
    for (const selector of cardSelectors) {
      const count = await page.locator(selector).count();
      if (count > 0) {
        console.log(`Found ${count} elements matching "${selector}"`);
        foundSelector = selector;
        break;
      }
    }
    
    if (!foundSelector) {
        // If no common selector found, dump some class names from likely candidates
        console.log('Common card selectors not found. Dumping classes of div elements with images...');
        const classes = await page.evaluate(() => {
            const divs = Array.from(document.querySelectorAll('div'));
            const cards = divs.filter(d => d.querySelector('img') && d.textContent?.includes('R$'));
            return cards.slice(0, 5).map(c => c.className);
        });
        console.log('Potential card classes:', classes);
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

analyze();

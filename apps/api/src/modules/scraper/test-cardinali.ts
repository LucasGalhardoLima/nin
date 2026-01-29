
import { chromium } from 'playwright';

async function testCardinali() {
  console.log('Starting execution from:', process.cwd());
  console.log('Launching browser...');
  
  try {
    const browser = await chromium.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    
    console.log('Browser launched successfully');
    const page = await browser.newPage();
    
    console.log('Navigating to https://www.cardinali.com.br/ ...');
    await page.goto('https://www.cardinali.com.br/', { timeout: 60000 });
    
    const title = await page.title();
    console.log('Page Title:', title);
    
    // Quick search for search input or main elements
    const inputs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('input')).map(i => ({ 
            placeholder: i.placeholder, 
            id: i.id, 
            class: i.className 
        }));
    });
    console.log('Found inputs:', inputs.slice(0, 3));

    await browser.close();
    console.log('Browser closed successfully');
    
  } catch (error) {
    console.error('Fatal Error:', error);
  }
}

testCardinali();

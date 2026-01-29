/**
 * Quick test script to analyze Chaves na Mão - AUTO-TERMINATES after 30s
 * Run with: node src/modules/scraper/test-chavesnamao.js
 */

const { chromium } = require('playwright');

async function main() {
  console.log('🔍 Quick analysis of Chaves na Mão (30s timeout)...\n');
  
  const browser = await chromium.launch({ 
    headless: false,
    timeout: 30000 
  });
  
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to houses for sale in Araraquara
    const url = 'https://www.chavesnamao.com.br/casas-a-venda/sp-araraquara/';
    console.log(`📌 Navigating to: ${url}`);
    
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(5000); // Wait for lazy-loaded content
    
    // Analyze structure
    console.log('\n🔎 Analyzing card structure...');
    
    const analysis = await page.evaluate(() => {
      // Try to find property cards using common patterns
      const possibleSelectors = [
        'article',
        '[class*="card"]',
        '[class*="listing"]',
        '[class*="item"]',
        '[class*="property"]',
        '[data-id]',
        '.result',
      ];
      
      const results = {};
      
      for (const selector of possibleSelectors) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 5 && elements.length < 100) {
          // Likely found property cards
          const first = elements[0];
          results[selector] = {
            count: elements.length,
            hasPrice: !!first.textContent?.match(/R\$/),
            hasLink: !!first.querySelector('a'),
            hasImage: !!first.querySelector('img'),
            classes: first.className,
            sample: first.textContent?.slice(0, 150).replace(/\s+/g, ' '),
          };
        }
      }
      
      return results;
    });
    
    console.log('\nFound potential card selectors:');
    console.log(JSON.stringify(analysis, null, 2));
    
    // Save full HTML for offline analysis
    const content = await page.content();
    require('fs').writeFileSync(
      require('path').join(__dirname, '../../../chavesnamao_dump.html'),
      content
    );
    console.log('\n✅ HTML saved to apps/api/chavesnamao_dump.html');
    
    // Take screenshot
    await page.screenshot({ 
      path: require('path').join(__dirname, '../../../chavesnamao_screenshot.png'),
      fullPage: false 
    });
    console.log('✅ Screenshot saved to apps/api/chavesnamao_screenshot.png');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    console.log('\n🔒 Closing browser...');
    await browser.close();
    console.log('✅ Done!');
    process.exit(0);
  }
}

// Auto-timeout after 30 seconds
setTimeout(() => {
  console.log('\n⏰ 30s timeout reached - exiting...');
  process.exit(0);
}, 30000);

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

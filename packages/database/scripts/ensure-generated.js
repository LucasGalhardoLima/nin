const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', 'src', 'generated');
const destDir = path.resolve(__dirname, '..', 'dist', 'generated');

if (!fs.existsSync(srcDir)) {
  console.error(`Generated client not found at ${srcDir}. Run "pnpm db:generate" first.`);
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.cpSync(srcDir, destDir, { recursive: true });

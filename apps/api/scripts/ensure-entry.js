const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const entryFile = path.join(distDir, 'main.js');
const target = './apps/api/src/main';

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(entryFile, `module.exports = require('${target}');\n`);

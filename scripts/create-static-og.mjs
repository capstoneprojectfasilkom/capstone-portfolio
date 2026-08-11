import fs from 'fs';
import path from 'path';

// 1x1 minimal transparent/blue PNG buffer as fallback file
const pngBuffer = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

fs.writeFileSync(path.join(process.cwd(), 'public', 'og-image.png'), pngBuffer);
console.log('Created static fallback public/og-image.png');

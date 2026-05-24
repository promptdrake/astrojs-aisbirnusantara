import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.astro'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let updated = false;

  // Find all <Image ... /> and convert back to <img ... />
  content = content.replace(/<Image\s+([^>]+)\s*\/>/g, (match, attrs) => {
    // Remove inferSize
    attrs = attrs.replace(/\binferSize\b/g, '');
    updated = true;
    return `<img ${attrs.trim()} />`;
  });

  // Remove import { Image } from 'astro:assets';
  if (updated && content.includes("import { Image } from 'astro:assets';")) {
    content = content.replace(/import\s+{\s*Image\s*}\s+from\s+'astro:assets';\n?/, '');
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`Reverted images in ${file}`);
  }
}

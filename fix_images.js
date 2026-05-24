import fs from 'fs';
import path from 'path';

const componentsDir = './src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.astro'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('<img ') || content.includes('<img\n')) {
    // Add import if not present
    if (!content.includes("import { Image } from 'astro:assets';")) {
      if (content.startsWith('---')) {
        content = content.replace(/^---\n/, "---\nimport { Image } from 'astro:assets';\n");
      } else {
        content = `---\nimport { Image } from 'astro:assets';\n---\n\n` + content;
      }
    }

    // Replace <img with <Image inferSize
    // Use regex to catch <img ... /> and make sure inferSize is there
    // If it has alt, src, class etc., just change <img to <Image and add inferSize before /> or >
    content = content.replace(/<img\b([^>]*)>/g, (match, p1) => {
      // If it already has inferSize, don't add it again
      const hasInferSize = p1.includes('inferSize');
      const hasWidth = p1.includes('width=');
      // If the img tag doesn't end with /, we make it self-closing
      let newAttrs = p1;
      if (newAttrs.endsWith('/')) {
        newAttrs = newAttrs.slice(0, -1);
      }
      if (!hasInferSize && !hasWidth) {
        newAttrs += ' inferSize';
      }
      return `<Image ${newAttrs} />`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}

// Update astro.config.mjs
const configPath = './astro.config.mjs';
let configContent = fs.readFileSync(configPath, 'utf8');
if (!configContent.includes('remotePatterns')) {
  configContent = configContent.replace(
    'adapter: cloudflare()',
    "adapter: cloudflare(),\n  image: {\n    remotePatterns: [{ protocol: 'https' }]\n  }"
  );
  fs.writeFileSync(configPath, configContent);
  console.log('Updated astro.config.mjs');
}


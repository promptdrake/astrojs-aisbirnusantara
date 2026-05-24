import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aisbirnusantara.com',
  output: 'static',
  adapter: cloudflare(),
  image: {
    remotePatterns: [{ protocol: 'https' }]
  }
});

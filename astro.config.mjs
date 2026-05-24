import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aisbirnusantara.com',

  image: {
    remotePatterns: [{ protocol: 'https' }]
  },

  integrations: [sitemap()]
});
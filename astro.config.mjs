import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aisbirnusantara.com',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  image: {
    service: passthroughImageService(),
    remotePatterns: [{ protocol: 'https' }]
  }
});

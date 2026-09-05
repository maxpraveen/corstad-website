import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://corstad.com',
  compressHTML: true,
  build: {
    format: 'directory'
  },
  integrations: [sitemap()]
});

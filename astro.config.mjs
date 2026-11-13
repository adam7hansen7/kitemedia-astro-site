// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.kitemedia.com',
  // Match the WordPress URL style (/about-us/) so existing links and rankings carry over.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you/') })],
});

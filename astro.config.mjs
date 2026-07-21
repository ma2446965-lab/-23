// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PUBLIC_SITE_URL must be set to your production domain before building for deploy.
// Example: https://www.calcutils.com
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://calcutils.example';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Consistent trailing slashes keep canonical URLs and internal links unambiguous.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Filter out any non-indexable routes here if needed in the future.
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Inline small stylesheets to avoid extra render-blocking requests.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  scopedStyleStrategy: 'class',
});

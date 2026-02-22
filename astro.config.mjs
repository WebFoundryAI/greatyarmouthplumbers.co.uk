// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://greatyarmouthplumbers.co.uk',
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    icon(),
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') && !page.includes('/api/'),
      serialize(item) {
        if (item.url === 'https://greatyarmouthplumbers.co.uk/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/\/(services|areas)\/$/.test(item.url)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (/\/services\/[^/]+\/$/.test(item.url) && !/\/services\/[^/]+\/[^/]+\//.test(item.url)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (/\/areas\/[^/]+\/$/.test(item.url)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (/\/services\/[^/]+\/[^/]+\/$/.test(item.url)) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

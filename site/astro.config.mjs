import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Camp Claude — static Astro site config
// Phase 1: fully static. No SSR, no auth, no middleware.
// Phase 2 (paid video library) will flip `output` to 'server' and enable a Clerk integration.

// When deploying to GitHub Pages without the custom domain, set GH_PAGES=true
// so links resolve under /campclaude. Remove once campclaude.ai is the primary.
const isGhPages = process.env.GH_PAGES === 'true';

export default defineConfig({
  site: isGhPages ? 'https://learn-rudi.github.io' : 'https://campclaude.ai',
  base: isGhPages ? '/campclaude' : undefined,
  output: 'static',
  trailingSlash: 'ignore',

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/library/') && // Phase 2 placeholder — noindex
        !page.endsWith('/404'),
    }),
  ],

  build: {
    format: 'directory',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});

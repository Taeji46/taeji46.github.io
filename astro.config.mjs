import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://taeji46.github.io',
  // ルートのユーザーページ (taeji46.github.io) なので base は不要
  integrations: [tailwind(), sitemap()],
});

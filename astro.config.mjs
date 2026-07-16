// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mktventurus.github.io',
  base: process.env.GITHUB_ACTIONS ? '/rioquantumhack' : undefined,
});

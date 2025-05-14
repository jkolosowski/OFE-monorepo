/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['lit', 'lit/decorators.js'],
  },
  test: {
    browser: {
      enabled: true,
      name: 'chrome',
      headless: true,
      provider: 'webdriverio',
    },
  },
});

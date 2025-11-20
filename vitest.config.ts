import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    globals: true,
    // Excluir os testes e2e do Playwright para que o Vitest não tente executá-los
    exclude: ['playwright/**', 'playwright.config.*'],
  },
});

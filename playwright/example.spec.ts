import { test, expect } from '@playwright/test';

test('home page has title and main', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Escola Construindo Sonhos/);
  const main = await page.locator('main');
  await expect(main).toBeVisible();
});

import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('/overviews/layout-demo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/layout-demo');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

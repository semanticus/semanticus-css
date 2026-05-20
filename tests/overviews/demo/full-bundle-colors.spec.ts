import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1024, height: 900 } });

test('/overviews/demo/fullBundleColors - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

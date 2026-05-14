import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('/overviews/composites/modal-demo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/composites/modal-demo');
  const button = page.locator('body > main > button');
  const dialog = page.locator('dialog');

  button.click();

  await expect(dialog).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

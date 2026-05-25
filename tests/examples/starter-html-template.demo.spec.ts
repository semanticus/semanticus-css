import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1024, height: 900 } });

test('/examples/starter-html-template.demo/main - visual snapshot', async ({ page }) => {
  await page.goto('/examples/starter-html-template.demo/main');
  const main = page.locator('main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

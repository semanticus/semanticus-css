import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 400, height: 200 } });

test('/examples/documentation-page-demo - visual snapshot', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto('/examples/documentation-page-demo');
  const main = page.locator('main');

  await expect(main).toBeVisible();
  await expect(main).toHaveScreenshot({ animations: 'disabled' });
});

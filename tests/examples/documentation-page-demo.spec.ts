import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1024, height: 900 } });

test('/examples/documentation-page-demo - visual snapshot', async ({ page }) => {
  await page.goto('/examples/documentation-page-demo');
  const main = page.locator('main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled' });
});

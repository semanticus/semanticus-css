import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 400, height: 200 } });

test('/overviews/semantics-demo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/semantics-demo');
  const main = page.locator('main');

  await expect(main).toBeVisible();
  await expect(main).toHaveScreenshot({ animations: 'disabled' });
});

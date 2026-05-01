import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 400, height: 200 } });

test('Examples/Semantics - visual snapshot', async ({ page }) => {
  await page.goto('/iframe.html?id=examples-semantics--semantics');
  const main = page.locator('main');

  await expect(main).toBeVisible();
  await expect(main).toHaveScreenshot({ animations: 'disabled' });
});

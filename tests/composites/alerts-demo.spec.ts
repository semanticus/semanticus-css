import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('/composites/alerts.demo - interaction', async ({ page }) => {
  await page.goto('/composites/alerts.demo/overview');
  const hiddenAlert = page.locator('.info.subtle');

  await expect(hiddenAlert).not.toBeVisible();

  hiddenAlert.evaluate(el => el.textContent = 'Hello World!');

  await expect(hiddenAlert).toBeVisible();
});

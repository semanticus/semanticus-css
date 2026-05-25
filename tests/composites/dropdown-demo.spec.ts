import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('/composites/dropdown.demo - interaction', async ({ page }) => {
  await page.goto('/composites/dropdown.demo/main');

  const dropdown = page.locator('details');
  const dropdownSummary = dropdown.locator('summary');

  await dropdownSummary.click();

  await expect(dropdown.locator('[role="menu"]')).toBeVisible();

  await dropdownSummary.click();

  await expect(dropdown.locator('[role="menu"]')).not.toBeVisible();
});

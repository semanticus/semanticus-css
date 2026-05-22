import { test, expect, PageAssertionsToHaveScreenshotOptions } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: 'disabled',
  fullPage: true,
  maxDiffPixelRatio: 0.02
};

test('/composites/dropdown.demo/main - visual snapshot', async ({ page }) => {
  await page.goto('/composites/dropdown.demo/main');

  const dropdown = page.locator('details');
  const dropdownSummary = dropdown.locator('summary');

  await dropdownSummary.click();

  await expect(page).toHaveScreenshot('open-dropdown.png', screenshotOptions);
  await expect(dropdown.locator('[role="menu"]')).toBeVisible();

  await dropdownSummary.click();

  await expect(page).toHaveScreenshot('closed-dropdown.png', screenshotOptions);
  await expect(dropdown.locator('[role="menu"]')).not.toBeVisible();
});

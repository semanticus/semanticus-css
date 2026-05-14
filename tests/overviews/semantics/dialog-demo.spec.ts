import { test, expect, PageAssertionsToHaveScreenshotOptions } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: 'disabled',
  fullPage: true,
  maxDiffPixelRatio: 0.02
};

test('/overviews/semantics/dialog-demo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/semantics/dialog-demo');
  const button = page.locator('body > main > button');
  const dialog = page.locator('dialog');

  button.click();

  await expect(page).toHaveScreenshot('open-modal.png', screenshotOptions);
  await expect(dialog).toBeVisible();

  dialog.locator('[rel="prev"]').click();

  await expect(page).toHaveScreenshot('closed-modal.png', screenshotOptions);
  await expect(dialog).not.toBeVisible();
});

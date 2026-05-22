import { test, expect, PageAssertionsToHaveScreenshotOptions } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: 'disabled',
  fullPage: true,
  maxDiffPixelRatio: 0.02
};

test('/semantics/attributes/role-status.demo/overviewShowToasts - visual snapshot', async ({ page }) => {
  await page.goto('/semantics/attributes/role-status.demo/overviewShowToasts');
  const buttonTopStart = page.locator('[popovertarget="top-start-toast"].contrast');
  const buttonTopCenter = page.locator('[popovertarget="top-center-toast"].contrast');
  const buttonTopEnd = page.locator('[popovertarget="top-end-toast"].contrast');
  const buttonMiddleStart = page.locator('[popovertarget="middle-start-toast"].contrast');
  const buttonMiddleCenter = page.locator('[popovertarget="middle-center-toast"].contrast');
  const buttonMiddleEnd = page.locator('[popovertarget="middle-end-toast"].contrast');
  const buttonBottomStart = page.locator('[popovertarget="bottom-start-toast"].contrast');
  const buttonBottomCenter = page.locator('[popovertarget="bottom-center-toast"].contrast');
  const buttonBottomEnd = page.locator('[popovertarget="bottom-end-toast"].contrast');

  await buttonTopStart.click();
  await buttonTopCenter.click();
  await buttonTopEnd.click();
  await buttonMiddleStart.click();
  await buttonMiddleCenter.click();
  await buttonMiddleEnd.click();
  await buttonBottomStart.click();
  await buttonBottomCenter.click();
  await buttonBottomEnd.click();

  await expect(page.locator('#top-start-toast')).toBeVisible();
  await expect(page.locator('#top-center-toast')).toBeVisible();
  await expect(page.locator('#top-end-toast')).toBeVisible();
  await expect(page.locator('#middle-start-toast')).toBeVisible();
  await expect(page.locator('#middle-center-toast')).toBeVisible();
  await expect(page.locator('#middle-end-toast')).toBeVisible();
  await expect(page.locator('#bottom-start-toast')).toBeVisible();
  await expect(page.locator('#bottom-center-toast')).toBeVisible();
  await expect(page.locator('#bottom-end-toast')).toBeVisible();

  await expect(page).toHaveScreenshot(screenshotOptions);
});

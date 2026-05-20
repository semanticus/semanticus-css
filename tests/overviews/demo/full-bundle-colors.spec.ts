import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1024, height: 900 } });

test('/overviews/demo/fullBundleColors - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=amber - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=amber');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=blue - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=blue');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=cyan - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=cyan');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=fuchsia - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=fuchsia');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=green - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=green');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=grey - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=grey');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=indigo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=indigo');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=jade - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=jade');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=lime - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=lime');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=orange - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=orange');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=pink - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=pink');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=pumpkin - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=pumpkin');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=purple - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=purple');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=red - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=red');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=sand - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=sand');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=slate - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=slate');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=violet - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=violet');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=yellow - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=yellow');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundleColors?palette=zink - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundleColors?palette=zink');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

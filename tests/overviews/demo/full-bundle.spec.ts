import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1024, height: 900 } });

test('/overviews/demo/fullBundle - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=amber - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=amber');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=blue - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=blue');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=cyan - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=cyan');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=fuchsia - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=fuchsia');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=green - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=green');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=grey - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=grey');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=indigo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=indigo');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=jade - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=jade');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=lime - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=lime');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=orange - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=orange');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=pink - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=pink');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=pumpkin - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=pumpkin');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=purple - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=purple');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=red - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=red');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=sand - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=sand');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=slate - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=slate');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=violet - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=violet');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=yellow - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=yellow');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

test('/overviews/demo/fullBundle?palette=zink - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/demo/fullBundle?palette=zink');
  const main = page.locator('body > main');

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
});

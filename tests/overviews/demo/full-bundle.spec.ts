import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1024, height: 900 } });

const palettes = [
  'amber',
  'blue',
  'cyan',
  'fuchsia',
  'green',
  'grey',
  'indigo',
  'jade',
  'lime',
  'orange',
  'pink',
  'pumpkin',
  'purple',
  'red',
  'sand',
  'slate',
  'violet',
  'yellow',
  'zinc',
];
const themes = ['light', 'dark'];

themes.forEach((theme) => {
  test(`/overviews/demo/fullBundle?theme=${theme} - visual snapshot`, async ({ page }) => {
    await page.goto(`/overviews/demo/fullBundle?theme=${theme}`);
    const main = page.locator('body > main');

    await expect(main).toBeVisible();
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
  });

  palettes.forEach((palette) => {
    test(`/overviews/demo/fullBundle?theme=${theme}&palette=${palette} - visual snapshot`, async ({ page }) => {
      await page.goto(`/overviews/demo/fullBundle?theme=${theme}&palette=${palette}`);
      const main = page.locator('body > main');

      await expect(main).toBeVisible();
      await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
    });
  });
});

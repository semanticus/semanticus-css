import { test, expect } from '@playwright/test';
import { variations } from '@scripts/utils';

test.use({ viewport: { width: 1024, height: 900 } });

// const palettes = variations.palettes.map((p) => p.name).filter((n) => n !== 'default'); // Doesn't seem to add a lot of value and adds a lot of snapshots to maintain, so I'm leaving it out for now. We can always add it back later if we want to test palette variations in the full bundle demo.
const palettes = [];
const themes = variations.themes.map((p) => p.name);

themes.forEach((theme) => {
  test(`/components/content-grid.demo/overview?theme=${theme} - visual snapshot`, async ({ page }) => {
    await page.goto(`/components/content-grid.demo/overview?theme=${theme}`);
    const main = page.locator('.content-grid:first-of-type');

    await expect(main).toBeVisible();
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
  });

  palettes.forEach((palette) => {
    test(`/components/content-grid.demo/overview?theme=${theme}&palette=${palette} - visual snapshot`, async ({ page }) => {
      await page.goto(`/components/content-grid.demo/overview?theme=${theme}&palette=${palette}`);
      const main = page.locator('.content-grid:first-of-type');

      await expect(main).toBeVisible();
      await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, maxDiffPixelRatio: 0.02 });
    });
  });
});

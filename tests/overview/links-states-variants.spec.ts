import { test, expect } from "@playwright/test";
import { variations } from "@scripts/utils";

test.use({ viewport: { width: 1024, height: 900 } });

const themes = variations.themes.map((p) => p.name);

themes.forEach((theme) => {
  test(`/overview/links-states-variants.demo/main?theme=${theme} - visual snapshot`, async ({
    page,
  }) => {
    await page.goto(`/overview/links-states-variants.demo/main?theme=${theme}`);
    const main = page.locator("body > main");

    await expect(main).toBeVisible();
    await expect(page).toHaveScreenshot({
      animations: "disabled",
      fullPage: true,
    });
  });
});

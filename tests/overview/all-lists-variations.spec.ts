import {
  test,
  expect,
  PageAssertionsToHaveScreenshotOptions,
} from "@playwright/test";
import { variations } from "@scripts/utils";

test.use({ viewport: { width: 1024, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: "disabled",
  fullPage: true,
  // maxDiffPixelRatio: 0.02
};

const themes = variations.themes.map((p) => p.name);

themes.forEach((theme) => {
  test(`/overview/all-lists-variations.demo/main?theme=${theme} - visual snapshot`, async ({
    page,
  }) => {
    await page.goto(`/overview/all-lists-variations.demo/main?theme=${theme}`);
    const main = page.locator("body > main");

    await expect(main).toBeVisible();
    await expect(page).toHaveScreenshot(screenshotOptions);
  });
});

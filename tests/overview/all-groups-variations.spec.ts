import {
  test,
  expect,
  PageAssertionsToHaveScreenshotOptions,
} from "@playwright/test";
import { variations } from "@scripts/utils";
import { triggerState } from "@tests/support/utils";

test.use({ viewport: { width: 1024, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: "disabled",
  fullPage: true,
  // maxDiffPixelRatio: 0.02
};

const themes = variations.themes.map((p) => p.name);

themes.forEach((theme) => {
  test(`/overview/all-groups-variations.demo/main?theme=${theme} - visual snapshot`, async ({
    page,
  }) => {
    await page.goto(`/overview/all-groups-variations.demo/main?theme=${theme}`);
    const main = page.locator("body > main");

    await expect(main).toBeVisible();
    await expect(page).toHaveScreenshot(screenshotOptions);

    await triggerState(
      page,
      `button, [type="submit"], [type="reset"], [type="button"], [role="button"]`,
      ["hover"],
    );

    await expect(page).toHaveScreenshot(
      `all-groups-variations-hover-state-theme-${theme}.png`,
      screenshotOptions,
    );
  });
});

import {
  test,
  expect,
  PageAssertionsToHaveScreenshotOptions,
} from "@playwright/test";

test.use({ viewport: { width: 1024, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: "disabled",
  fullPage: true,
  maxDiffPixelRatio: 0.02,
};

test(`/overview/all-components.demo/main in RTL mode - visual snapshot`, async ({
  page,
}) => {
  await page.goto(`/overview/all-components.demo/rtlMode`);
  const main = page.locator("body > main");

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({
    ...screenshotOptions,
    mask: [page.locator(`[type="month"]`)],
  });
});

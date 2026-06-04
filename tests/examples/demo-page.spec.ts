import {
  test,
  expect,
  PageAssertionsToHaveScreenshotOptions,
} from "@playwright/test";

test.use({ viewport: { width: 1024, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: "disabled",
  fullPage: true,
  // maxDiffPixelRatio: 0.02
};

test("/examples/demo-page.html - visual snapshot", async ({ page }) => {
  await page.goto("/examples/demo-page.html");
  const main = page.locator("main");

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({
    ...screenshotOptions,
    mask: [page.locator("figure")], // Masking figures to avoid false positives due to dynamic content
  });
});

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
  // Preserve the masked image's layout without depending on the photo service.
  await page.route("https://picsum.photos/800/400", (route) =>
    route.fulfill({
      contentType: "image/svg+xml",
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"></svg>',
    }),
  );
  await page.goto("/examples/demo-page.html");
  const main = page.locator("main");

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot({
    ...screenshotOptions,
    mask: [page.locator("figure")], // Masking figures to avoid false positives due to dynamic content
  });
});

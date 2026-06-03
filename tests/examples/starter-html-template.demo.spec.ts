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

test("/examples/starter-html-template.demo/main - visual snapshot", async ({
  page,
}) => {
  await page.goto("/examples/starter-html-template.demo/main");
  const main = page.locator("main");

  await expect(main).toBeVisible();
  await expect(page).toHaveScreenshot(screenshotOptions);
});

import {
  test,
  expect,
  PageAssertionsToHaveScreenshotOptions,
} from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: "disabled",
  fullPage: true,
  // maxDiffPixelRatio: 0.02
};

test("/semantics/elements/dialog.demo - interaction", async ({ page }) => {
  await page.goto(
    "/semantics/elements/dialog.demo/showModalWithHeaderAndFooter",
  );
  const button = page.locator("body > button");
  const dialog = page.locator("dialog");

  await button.click();

  await expect(dialog).toBeVisible();

  await expect(page).toHaveScreenshot("dialog-open.png", screenshotOptions);

  await dialog.locator(".icon-close").click();

  await expect(dialog).not.toBeVisible();
});

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

test("/composites/dropdown.demo - interaction", async ({ page }) => {
  await page.goto("/composites/dropdown.demo/main");

  const dropdown = page.locator("details");
  const dropdownSummary = dropdown.locator("summary");

  await dropdownSummary.click();

  await expect(dropdown.locator('[role="menu"]')).toBeVisible();

  await expect(page).toHaveScreenshot("dropdown-open.png", screenshotOptions);

  await dropdownSummary.click();

  await expect(dropdown.locator('[role="menu"]')).not.toBeVisible();
});

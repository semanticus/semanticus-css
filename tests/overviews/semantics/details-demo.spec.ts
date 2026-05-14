import { test, expect, PageAssertionsToHaveScreenshotOptions } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: 'disabled',
  fullPage: true,
  maxDiffPixelRatio: 0.02
};

test('/overviews/semantics/details-demo - visual snapshot', async ({ page }) => {
  await page.goto('/overviews/semantics/details-demo');

  // dropdown interaction

  const dropdown = page.locator('#dropdown-1');
  const dropdownSummary = dropdown.locator('summary');

  dropdownSummary.click();

  await expect(page).toHaveScreenshot('open-dropdown.png', screenshotOptions);
  await expect(dropdown.locator('[role="menu"]')).toBeVisible();

  dropdownSummary.click();

  await expect(page).toHaveScreenshot('closed-dropdown.png', screenshotOptions);
  await expect(dropdown.locator('[role="menu"]')).not.toBeVisible();

  // entangled accordions interaction

  const firstEntangledAccordion = page.locator('[name="accordion-group"]:nth-of-type(1)');
  const secondEntangledAccordion = page.locator('[name="accordion-group"]:nth-of-type(2)');

  await expect(firstEntangledAccordion.locator('p')).not.toBeVisible();
  await expect(secondEntangledAccordion.locator('ul')).toBeVisible();

  firstEntangledAccordion.locator('summary').click();

  await expect(firstEntangledAccordion.locator('p')).toBeVisible();
  await expect(secondEntangledAccordion.locator('ul')).not.toBeVisible();
});

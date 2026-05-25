import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('/semantics/elements/details.demo - interaction', async ({ page }) => {
  await page.goto('/semantics/elements/details.demo/entangledAccordions');

  const firstEntangledAccordion = page.locator('[name="accordion-group"]:nth-of-type(1)');
  const secondEntangledAccordion = page.locator('[name="accordion-group"]:nth-of-type(2)');

  await expect(firstEntangledAccordion.locator('p')).not.toBeVisible();
  await expect(secondEntangledAccordion.locator('ul')).toBeVisible();

  await firstEntangledAccordion.locator('summary').click();

  await expect(firstEntangledAccordion.locator('p')).toBeVisible();
  await expect(secondEntangledAccordion.locator('ul')).not.toBeVisible();
});

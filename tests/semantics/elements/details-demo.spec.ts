import {
	expect,
	type PageAssertionsToHaveScreenshotOptions,
	test,
} from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

const screenshotOptions: PageAssertionsToHaveScreenshotOptions = {
	animations: "disabled",
	fullPage: true,
	maxDiffPixelRatio: 0.02,
};

test("/semantics/elements/details.demo/entangledAccordions - visual snapshot", async ({
	page,
}) => {
	await page.goto("/semantics/elements/details.demo/entangledAccordions");

	const firstEntangledAccordion = page.locator(
		'[name="accordion-group"]:nth-of-type(1)',
	);
	const secondEntangledAccordion = page.locator(
		'[name="accordion-group"]:nth-of-type(2)',
	);

	await expect(firstEntangledAccordion.locator("p")).not.toBeVisible();
	await expect(secondEntangledAccordion.locator("ul")).toBeVisible();

	await firstEntangledAccordion.locator("summary").click();

	await expect(firstEntangledAccordion.locator("p")).toBeVisible();
	await expect(secondEntangledAccordion.locator("ul")).not.toBeVisible();
});

test("/semantics/elements/details.demo/basicDropdown - visual snapshot", async ({
	page,
}) => {
	await page.goto("/semantics/elements/details.demo/basicDropdown");

	const dropdown = page.locator("details");
	const dropdownSummary = dropdown.locator("summary");

	await dropdownSummary.click();

	await expect(page).toHaveScreenshot("open-dropdown.png", screenshotOptions);
	await expect(dropdown.locator('[role="menu"]')).toBeVisible();

	await dropdownSummary.click();

	await expect(page).toHaveScreenshot("closed-dropdown.png", screenshotOptions);
	await expect(dropdown.locator('[role="menu"]')).not.toBeVisible();
});

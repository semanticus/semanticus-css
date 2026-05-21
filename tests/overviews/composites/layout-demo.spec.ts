import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

test("/overviews/composites/layout-demo - visual snapshot", async ({
	page,
}) => {
	await page.goto("/overviews/composites/layout.demo/main");
	const main = page.locator("body > main");

	await expect(main).toBeVisible();
	await expect(page).toHaveScreenshot({
		animations: "disabled",
		fullPage: true,
		maxDiffPixelRatio: 0.02,
	});
});

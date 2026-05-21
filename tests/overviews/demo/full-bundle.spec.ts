import { expect, test } from "@playwright/test";
import { variations } from "@scripts/utils";

test.use({ viewport: { width: 1024, height: 900 } });

const palettes = variations.palettes
	.map((p) => p.name)
	.filter((n) => n !== "default");
const themes = variations.themes.map((p) => p.name);

themes.forEach((theme) => {
	test(`/overviews/demo/fullBundle?theme=${theme} - visual snapshot`, async ({
		page,
	}) => {
		await page.goto(`/overviews/demo/fullBundle?theme=${theme}`);
		const main = page.locator("body > main");

		await expect(main).toBeVisible();
		await expect(page).toHaveScreenshot({
			animations: "disabled",
			fullPage: true,
			maxDiffPixelRatio: 0.02,
		});
	});

	palettes.forEach((palette) => {
		test(`/overviews/demo/fullBundle?theme=${theme}&palette=${palette} - visual snapshot`, async ({
			page,
		}) => {
			await page.goto(
				`/overviews/demo/fullBundle?theme=${theme}&palette=${palette}`,
			);
			const main = page.locator("body > main");

			await expect(main).toBeVisible();
			await expect(page).toHaveScreenshot({
				animations: "disabled",
				fullPage: true,
				maxDiffPixelRatio: 0.02,
			});
		});
	});
});

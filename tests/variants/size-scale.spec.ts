import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"]) {
  for (const width of [390, 1440]) {
    test(`size scale ${theme} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/variants/modifiers/size.demo/scale?theme=${theme}`);
      for (const selector of ['input:not([type])', 'button', '[type="checkbox"]', '[type="range"]', '.pane']) {
        let previous = 0;
        for (const size of ["size-sm", "size-md", "size-lg"]) {
          const el = page.locator("section").filter({ has: page.getByRole("heading", { name: `.${size}`, exact: true }) }).locator(selector);
          const height = (await el.boundingBox())!.height;
          expect(height, `${selector} ${size}`).toBeGreaterThan(previous);
          previous = height;
        }
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await expect(page).toHaveScreenshot(`scale-${theme}-${width}.png`, { fullPage: true, animations: "disabled" });
    });
  }
}

test("medium sizing applies explicit control dimensions and container spacing", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/scale");
  const medium = page.locator("section").filter({ has: page.getByRole("heading", { name: ".size-md", exact: true }) });
  const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
  for (const selector of ['input:not([type])', 'button']) {
    const control = medium.locator(selector);
    const metrics = await control.evaluate(el => {
      const style = getComputedStyle(el);
      return [style.fontSize, style.paddingTop, style.paddingInlineStart].map(parseFloat);
    });
    for (const [index, scale] of [1, 0.25, 0.375].entries()) {
      expect(metrics[index]).toBeCloseTo(rootFont * scale, 2);
    }
  }
  const normal = page.locator("section").filter({ has: page.getByRole("heading", { name: "No modifier", exact: true }) });
  expect((await medium.locator('.pane').boundingBox())!.height).toBeLessThan((await normal.locator('.pane').boundingBox())!.height);
  // Compare the rendered range geometry through its height; its width stays unchanged.
  expect((await medium.locator('[type="range"]').boundingBox())!.height).toBeLessThan((await normal.locator('[type="range"]').boundingBox())!.height);
  expect((await medium.locator('[type="range"]').boundingBox())!.width).toBeCloseTo((await normal.locator('[type="range"]').boundingBox())!.width, 1);
});

test("explicit sizes override group and wrapping-label sizes, including medium sizing", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/scale");
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", `
    <button class="size-md" id="medium-reference">Reference</button>
    <div role="group" class="size-sm" id="sized-group">
      <button>Inherited</button><button class="size-md">Medium</button><button class="size-lg">Large</button>
    </div>
    <label class="size-lg" id="sized-label">Label<input><input class="size-md"><input class="size-sm"></label>`));
  const reference = await page.locator("#medium-reference").evaluate(el => { const s = getComputedStyle(el); return [s.fontSize, s.paddingTop, s.paddingInlineStart]; });
  for (const alias of ["size-md"]) {
    expect(await page.locator(`#sized-group .${alias}`).evaluate(el => { const s = getComputedStyle(el); return [s.fontSize, s.paddingTop, s.paddingInlineStart]; })).toEqual(reference);
  }
  const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
  expect(parseFloat(await page.locator("#sized-group button").first().evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.875, 1);
  expect(parseFloat(await page.locator("#sized-group .size-lg").evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 1.125, 1);
  const inputs = page.locator("#sized-label input");
  for (const [index, scale] of [1.125, 1, 0.875].entries()) {
    expect(parseFloat(await inputs.nth(index).evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * scale, 1);
  }
});


test("all sizes align controls and dropdowns inside navigation groups", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/scale");
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", ["sm", "md", "lg"].map(n => `
    <nav><div role="group" class="size-${n}" id="nav-group-${n}">
      <input type="search" aria-label="Search ${n}">
      <details><summary role="button" aria-haspopup="menu">Options</summary><ul role="menu"><li><a role="menuitem" href="#all">All</a></li></ul></details>
      <button type="button">Search</button>
    </div></nav>`).join("")));
  for (const level of ["sm", "md", "lg"]) {
    const group = page.locator(`#nav-group-${level}`);
    const reference = (await group.locator("input").boundingBox())!.height;
    for (const selector of ["details", "summary", "button"]) {
      expect((await group.locator(selector).boundingBox())!.height, `${level} ${selector}`).toBeCloseTo(reference, 1);
    }
  }
});

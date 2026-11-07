import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"]) {
  for (const width of [390, 1440]) {
    test(`size scale ${theme} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/variants/modifiers/size.demo/scale?theme=${theme}`);
      for (const selector of ['input:not([type])', 'button', '[type="checkbox"]', '[type="range"]', '.pane']) {
        let previous = 0;
        for (const size of ["size-sm", "size-md", "size-lg"]) {
          const el = page.locator(`[data-size="${size}"]`).locator(selector);
          const height = (await el.boundingBox())!.height;
          expect(height, `${selector} ${size}`).toBeGreaterThan(previous);
          previous = height;
        }
        const reference = page.locator('[data-size="default"]').locator(selector);
        for (const alias of ["size-md"]) {
          const el = page.locator(`[data-size="${alias}"]`).locator(selector);
          expect((await el.boundingBox())!.height).toBeCloseTo((await reference.boundingBox())!.height, 1);
          expect(await el.evaluate(e => getComputedStyle(e).fontSize)).toBe(await reference.evaluate(e => getComputedStyle(e).fontSize));
        }
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await expect(page).toHaveScreenshot(`scale-${theme}-${width}.png`, { fullPage: true, animations: "disabled" });
    });
  }
}

const examples = ["buttons", "roleButtons", "inputButtons", "inputs", "selects", "textareas", "dropdowns", "cards", "panes", "alerts", "pagination", "dialogs", "accordions", "buttonGroups", "searchGroups", "checkboxes", "radios", "switches", "ranges", "colorPickers", "labels", "selectionGroups"];

for (const alias of ["size-md"]) {
  test(`${alias} matches the unmodified defaults for every supported example`, async ({ page }) => {
    test.setTimeout(60000);
    for (const example of examples) {
      await page.goto(`/variants/modifiers/size.demo/${example}`);
      const normal = page.locator('[data-size="default"]');
      const chosen = page.locator('[data-size="size-sm"]');
      await chosen.locator(".size-sm").evaluateAll((els, replacement) => els.forEach(el => el.classList.replace("size-sm", replacement)), alias);
      const selector = 'button, input, select, textarea, label, summary, .card, .pane, [role="alert"], [role="status"], dialog, header, footer';
      const metrics = (els: Element[]) => els.map(el => {
        const s = getComputedStyle(el);
        return [s.fontSize, s.lineHeight, s.paddingTop, s.paddingInlineStart, s.paddingBottom, s.paddingInlineEnd, s.borderTopLeftRadius, s.borderBottomRightRadius];
      });
      expect(await chosen.locator(selector).evaluateAll(metrics), example).toEqual(await normal.locator(selector).evaluateAll(metrics));
    }
  });
}

test("explicit sizes override group and wrapping-label sizes, including the default medium size", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/scale");
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", `
    <div role="group" id="normal-group"><button>Reference</button></div>
    <div role="group" class="size-sm" id="sized-group">
      <button>Inherited</button><button class="size-md">Medium</button><button class="size-lg">Large</button>
    </div>
    <label class="size-lg" id="sized-label">Label<input><input class="size-md"><input class="size-sm"></label>`));
  const reference = await page.locator("#normal-group button").evaluate(el => { const s = getComputedStyle(el); return [s.fontSize, s.paddingTop, s.paddingInlineStart]; });
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


test("non-default sizes align controls and dropdowns inside navigation groups", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/scale");
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", ["sm", "lg"].map(n => `
    <nav><div role="group" class="size-${n}" id="nav-group-${n}">
      <input type="search" aria-label="Search ${n}">
      <details><summary role="button" aria-haspopup="menu">Options</summary><ul role="menu"><li><a role="menuitem" href="#all">All</a></li></ul></details>
      <button type="button">Search</button>
    </div></nav>`).join("")));
  for (const level of ["sm", "lg"]) {
    const group = page.locator(`#nav-group-${level}`);
    const reference = (await group.locator("input").boundingBox())!.height;
    for (const selector of ["details", "summary", "button"]) {
      expect((await group.locator(selector).boundingBox())!.height, `${level} ${selector}`).toBeCloseTo(reference, 1);
    }
  }
});

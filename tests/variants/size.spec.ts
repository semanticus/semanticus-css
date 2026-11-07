import { test, expect } from "@playwright/test";

const examples = ["buttons", "roleButtons", "inputButtons", "inputs", "selects", "textareas", "dropdowns", "cards", "panes"];

for (const theme of ["light", "dark"]) {
  for (const width of [390, 1440]) {
    test(`size modifier ${theme} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const example of examples) {
        await page.goto(`/variants/modifiers/size.demo/${example}?theme=${theme}`);
        const normal = page.locator('[data-size="default"]');
        const compact = page.locator('[data-size="size-sm"]');
        const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
        const selector = example === "buttons" ? "button" : example === "roleButtons" ? '[role="button"]' : example === "inputButtons" || example === "inputs" ? "input" : example === "selects" ? "select" : example === "textareas" ? "textarea" : example === "dropdowns" ? "summary" : example === "cards" ? ".card" : ".pane";
        const before = normal.locator(selector).first();
        const after = compact.locator(selector).first();
        expect((await after.boundingBox())!.height).toBeLessThan((await before.boundingBox())!.height);
        if (example === "cards" || example === "panes") {
          expect(await after.evaluate(el => getComputedStyle(el).fontSize)).toBe(await before.evaluate(el => getComputedStyle(el).fontSize));
          if (example === "panes") {
            expect((await compact.locator("button").boundingBox())!.height).toBeCloseTo((await normal.locator("button").boundingBox())!.height, 1);
          } else {
            expect(parseFloat(await compact.locator("header").evaluate(el => getComputedStyle(el).paddingTop))).toBeLessThan(parseFloat(await normal.locator("header").evaluate(el => getComputedStyle(el).paddingTop)));
          }
        } else {
          expect(parseFloat(await after.evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.875, 1);
        }
        if (example === "roleButtons") {
          await after.focus();
          await page.keyboard.press("Space");
          await expect(after).toHaveAttribute("aria-pressed", "true");
          await page.keyboard.press("Enter");
          await expect(after).toHaveAttribute("aria-pressed", "false");
        }
        if (example === "buttons") {
          await expect(compact.getByRole("button", { name: "Unavailable" })).toBeDisabled();
          await compact.getByRole("button", { name: "Cancel" }).focus();
          await expect(compact.getByRole("button", { name: "Cancel" })).toBeFocused();
        }
        if (example === "inputs") {
          const file = compact.locator('[type="file"]');
          expect(parseFloat(await file.evaluate(el => getComputedStyle(el, "::file-selector-button").fontSize))).toBeCloseTo(rootFont * 0.875, 1);
          for (const type of ["search", "email", "number", "date", "file"]) {
            expect((await compact.locator(`[type="${type}"]`).boundingBox())!.height).toBeLessThan((await normal.locator(`[type="${type}"]`).boundingBox())!.height);
          }
        }
        if (example === "selects") {
          await compact.locator("select").first().selectOption({ label: "Portuguese" });
          await expect(compact.locator("select").first()).toHaveValue("Portuguese");
        }
        if (example === "textareas") {
          await expect(after).toHaveAttribute("rows", "3");
          await expect(after).toHaveCSS("resize", "vertical");
        }
        if (example === "dropdowns") {
          await after.focus();
          await page.keyboard.press("Enter");
          await expect(compact.locator("details").first()).toHaveAttribute("open", "");
          const menu = compact.locator('[role="menu"]').first();
          await expect(menu).toBeVisible();
          expect(parseFloat(await menu.evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.875, 1);
          expect((await compact.locator('summary[role="button"]').boundingBox())!.height).toBeLessThan((await normal.locator('summary[role="button"]').boundingBox())!.height);
          await normal.locator("details").first().evaluate((el: HTMLDetailsElement) => el.open = true);
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        await expect(page).toHaveScreenshot(`${example}-${theme}-${width}.png`, { fullPage: true, animations: "disabled" });
      }
    });
  }
}

test("size stays scoped, preserves fine print, and supports custom tokens and RTL", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/overview");
  await page.evaluate(() => {
    document.body.insertAdjacentHTML("beforeend", `<div id="scope" class="size-sm"><button>Default child</button><small>Fine print</small></div>
      <button id="regular">Default</button>
      <button id="custom" class="size-sm" style="--size-control-font-size: 12px; --size-padding-block: 3px">Custom</button>
      <input id="checkbox" type="checkbox"><input id="small-checkbox" class="size-sm" type="checkbox">
      <input id="radio" type="radio"><input id="small-radio" class="size-sm" type="radio">`);
  });
  expect((await page.locator("#scope button").boundingBox())!.height).toBe((await page.locator("#regular").boundingBox())!.height);
  const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
  expect(parseFloat(await page.locator("#scope small").evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.8, 1);
  await expect(page.locator("#custom")).toHaveCSS("font-size", "12px");
  await expect(page.locator("#custom")).toHaveCSS("padding-top", "3px");
  for (const type of ["checkbox", "radio"]) {
    expect((await page.locator(`#small-${type}`).boundingBox())!.width).toBeLessThan((await page.locator(`#${type}`).boundingBox())!.width);
  }
  await page.goto("/variants/modifiers/size.demo/selects");
  await page.evaluate(() => document.documentElement.dir = "rtl");
  await expect(page.locator('[data-size="size-sm"] select').first()).toHaveCSS("background-position-x", /^(left|[\d.]+px)/);
  await page.goto("/variants/modifiers/size.demo/buttons");
  await page.locator('link[rel="stylesheet"]').first().evaluate((el: HTMLLinkElement) => new Promise<void>((resolve, reject) => {
    el.onload = () => resolve();
    el.onerror = () => reject(new Error("Could not load no-utilities bundle"));
    el.href = "/dist/semanticus-no-utilities.css";
  }));
  expect(parseFloat(await page.locator('[data-size="size-sm"] button').first().evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.875, 1);
});


test("size controls align in groups and dropdowns also resize in navigation", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/buttons");
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", `
    <div role="search" id="compact-search">
      <input class="size-sm" type="search" aria-label="Search">
      <details class="size-sm"><summary role="button" aria-haspopup="menu">Options</summary><ul role="menu"><li><a role="menuitem" href="#">Item</a></li></ul></details>
      <button class="size-sm">Search</button>
    </div>
    <nav id="compact-nav"><ul>
      <li><details><summary aria-haspopup="menu">Default</summary></details></li>
      <li><details class="size-sm"><summary aria-haspopup="menu">Compact</summary></details></li>
    </ul></nav>`));
  const group = page.locator("#compact-search");
  const height = (await group.locator("input").boundingBox())!.height;
  for (const selector of ["details", "summary", "button"]) {
    expect((await group.locator(selector).boundingBox())!.height).toBeCloseTo(height, 1);
  }
  const padding = await group.locator("button").evaluate(el => parseFloat(getComputedStyle(el).paddingInlineStart));
  const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
  expect(padding).toBeCloseTo(rootFont * 0.5, 1);
  expect((await page.locator("#compact-nav .size-sm summary").boundingBox())!.height).toBeLessThan((await page.locator("#compact-nav details:not(.size-sm) summary").boundingBox())!.height);
});

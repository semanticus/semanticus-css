import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"]) {
  for (const width of [390, 1440]) {
    test(`compact selection controls and labels ${theme} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const example of ["checkboxes", "radios", "switches", "ranges", "colorPickers", "labels", "selectionGroups"]) {
        await page.goto(`/variants/modifiers/size.demo/${example}?theme=${theme}`);
        const normal = page.locator('[data-size="default"]');
        const compact = page.locator('[data-size="size-sm"]');
        const before = normal.locator("input").first();
        const after = compact.locator("input").first();
        expect((await after.boundingBox())!.height).toBeLessThan((await before.boundingBox())!.height);
        const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
        if (example !== "ranges") {
          expect(parseFloat(await compact.locator("label").first().evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.875, 1);
        }
        if (example === "checkboxes") {
          await compact.getByText("Checked option", { exact: true }).click();
          await expect(after).not.toBeChecked();
          const second = compact.getByRole("checkbox", { name: "Another option" });
          await second.evaluate((el: HTMLInputElement) => el.indeterminate = true);
          await second.focus();
          await page.keyboard.press("Space");
          await expect(second).toBeChecked();
          expect(await second.evaluate((el: HTMLInputElement) => el.indeterminate)).toBe(false);
          await expect(compact.getByRole("checkbox", { name: "Unavailable option" })).toBeDisabled();
        }
        if (example === "radios") {
          await compact.getByText("Second option", { exact: true }).click();
          await expect(compact.getByRole("radio", { name: "Second option" })).toBeChecked();
          await expect(after).not.toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(after).toBeChecked();
          await expect(compact.getByRole("radio", { name: "Unavailable option" })).toBeDisabled();
        }
        if (example === "switches") {
          await compact.getByText("Notifications", { exact: true }).click();
          await expect(after).not.toBeChecked();
          await after.focus();
          await page.keyboard.press("Space");
          await expect(after).toBeChecked();
          await expect(compact.getByRole("switch", { name: "Unavailable setting" })).toBeDisabled();
          const size = (await after.boundingBox())!;
          expect(size.width / size.height).toBeCloseTo(2.25 / 1.25, 1);
          await expect.poll(async () => parseFloat(await after.evaluate(el => getComputedStyle(el, "::before").marginInlineStart))).toBeCloseTo(rootFont * 0.875, 1);
        }
        if (example === "ranges") {
          expect((await after.boundingBox())!.width).toBeCloseTo((await before.boundingBox())!.width, 1);
          await after.focus();
          await page.keyboard.press("ArrowRight");
          await expect(after).toHaveValue("51");
          await expect(compact.getByRole("slider", { name: "Unavailable level" })).toBeDisabled();
        }
        if (example === "colorPickers") {
          await expect(after).toHaveValue("#0172ad");
          await expect(compact.getByLabel("Unavailable color")).toBeDisabled();
        }
        if (example === "labels") {
          await compact.getByText("Separate label", { exact: true }).click();
          await expect(after).toBeFocused();
          const wrapped = compact.getByRole("textbox", { name: "Wrapping label" });
          await expect(wrapped).not.toHaveClass(/size-sm/);
          expect(parseFloat(await wrapped.evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont * 0.875, 1);
          await compact.getByText("Clickable option label", { exact: true }).click();
          await expect(compact.getByRole("checkbox")).toBeChecked();
        }
        if (example === "selectionGroups") {
          for (const name of ["Direct checkbox", "Direct radio", "Direct switch"]) {
            const a = compact.getByLabel(name);
            const b = normal.getByLabel(name);
            expect((await a.boundingBox())!.height).toBeLessThan((await b.boundingBox())!.height);
            const size = (await a.boundingBox())!;
            expect(size.width / size.height).toBeCloseTo(name === "Direct switch" ? 2.25 / 1.25 : 1, 1);
          }
          await compact.getByText("One", { exact: true }).click();
          await expect(compact.getByRole("checkbox", { name: "One", exact: true })).not.toBeChecked();
          for (const name of ["Volume", "Accent color"]) {
            expect((await compact.getByLabel(name, { exact: true }).boundingBox())!.height).toBeLessThan((await normal.getByLabel(name, { exact: true }).boundingBox())!.height);
          }
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        await expect(page).toHaveScreenshot(`${example}-${theme}-${width}.png`, { fullPage: true, animations: "disabled" });
      }
    });
  }
}

test("range themes stay centered, RTL switch travel stays bounded, and input-only sizing leaves labels alone", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/ranges");
  const range = page.locator('[data-size="size-sm"] input').first();
  await range.evaluate((el: HTMLInputElement) => {
    el.style.setProperty("--input-range-thumb-size", "2rem");
    el.style.setProperty("--input-range-track-height", "0.5rem");
  });
  const rootFont = await page.locator("html").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
  expect((await range.boundingBox())!.height).toBeCloseTo(rootFont * 2 * 0.875, 1);
  const margin = await range.evaluate(el => {
    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.top = getComputedStyle(el).getPropertyValue("--_input-range-thumb-margin-top");
    document.body.append(probe);
    const top = parseFloat(getComputedStyle(probe).top);
    probe.remove();
    return top;
  });
  expect(margin).toBeCloseTo(rootFont * (0.5 - 2) * 0.875 / 2, 1);
  await page.goto("/variants/modifiers/size.demo/switches");
  await page.evaluate(() => document.documentElement.dir = "rtl");
  const toggle = page.locator('[data-size="size-sm"] input').first();
  await expect.poll(async () => toggle.evaluate(el => {
    const input = getComputedStyle(el);
    const thumb = getComputedStyle(el, "::before");
    return parseFloat(thumb.width) + parseFloat(thumb.marginInlineStart) + parseFloat(input.borderInlineStartWidth) + parseFloat(input.borderInlineEndWidth) - parseFloat(input.width);
  })).toBeCloseTo(0, 1);
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", '<label id="normal-label"><input class="size-sm" type="checkbox"> Normal label</label>'));
  expect(parseFloat(await page.locator("#normal-label").evaluate(el => getComputedStyle(el).fontSize))).toBeCloseTo(rootFont, 1);
});

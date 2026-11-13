import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"]) {
  for (const width of [390, 1440]) {
    test(`extended size modifier ${theme} ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const example of ["alerts", "pagination", "accordions", "buttonGroups", "searchGroups"]) {
        await page.goto(`/variants/modifiers/size.demo/${example}?theme=${theme}`);
        const normal = page.locator('[data-size="default"]');
        const compact = page.locator('[data-size="size-sm"]');
        const selector = example === "alerts" ? '[role="status"]' : example === "accordions" ? 'details' : example === "searchGroups" ? 'input' : 'button';
        const before = normal.locator(selector).first();
        const after = compact.locator(selector).first();
        expect((await after.boundingBox())!.height).toBeLessThan((await before.boundingBox())!.height);
        if (example === "alerts" || example === "accordions") {
          expect(await after.evaluate(el => getComputedStyle(el).fontSize)).toBe(await before.evaluate(el => getComputedStyle(el).fontSize));
        }
        if (example === "alerts") {
          expect((await compact.getByRole("button", { name: "Dismiss error" }).boundingBox())!.height).toBe((await normal.getByRole("button", { name: "Dismiss error" }).boundingBox())!.height);
        }
        if (example === "pagination") {
          await expect(compact.getByRole("button", { name: "Previous page" })).toBeDisabled();
          await compact.getByRole("button", { name: "Page 2", exact: true }).click();
          await expect(compact.getByRole("button", { name: "Page 2", exact: true })).toHaveAttribute("aria-current", "page");
          await expect(compact.getByRole("button", { name: "Page 1", exact: true })).not.toHaveAttribute("aria-current");
        }
        if (example === "accordions") {
          const summary = compact.locator("summary").first();
          await summary.focus();
          await page.keyboard.press("Enter");
          await expect(compact.locator("details").first()).not.toHaveAttribute("open");
          await page.keyboard.press("Space");
          await expect(compact.locator("details").first()).toHaveAttribute("open", "");
          expect((await compact.locator('summary[role="button"]').boundingBox())!.height).toBeLessThan((await normal.locator('summary[role="button"]').boundingBox())!.height);
        }
        if (example === "buttonGroups") {
          await expect(compact.getByRole("button", { name: "Delete" })).toBeDisabled();
          await compact.getByRole("button", { name: "Copy" }).focus();
          await expect(compact.getByRole("button", { name: "Copy" })).toBeFocused();
        }
        if (example === "searchGroups") {
          for (const group of await compact.locator('[role="search"], [role="group"]').all()) {
            const boxes = await group.locator(":scope > *").evaluateAll(els => els.map(el => el.getBoundingClientRect().height));
            for (const height of boxes) expect(height).toBeCloseTo(boxes[0], 1);
          }
          await compact.locator("form").getByRole("button", { name: "Search", exact: true }).click();
          await expect(compact.getByRole("status")).toHaveText("Search submitted");
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        await expect(page).toHaveScreenshot(`${example}-${theme}-${width}.png`, { fullPage: true, animations: "disabled" });
        if (example === "alerts") {
          await compact.getByRole("button", { name: "Dismiss error" }).click();
          await expect(compact.getByRole("alert")).toHaveCount(0);
        }
      }

      await page.goto(`/variants/modifiers/size.demo/dialogs?theme=${theme}`);
      await page.getByRole("button", { name: "Open default dialog" }).click();
      const dialog = page.getByRole("dialog");
      const defaultWidth = (await dialog.boundingBox())!.width;
      const defaultPadding = await dialog.evaluate(el => getComputedStyle(el).paddingTop);
      // An unset dialog slot must fall back to the framework's base spacing.
      const baseSpacing = await dialog.evaluate(el => {
        const probe = document.createElement("div");
        probe.style.paddingTop = "var(--spacing)";
        el.append(probe);
        const height = parseFloat(getComputedStyle(probe).paddingTop);
        probe.remove();
        return height;
      });
      expect(parseFloat(defaultPadding)).toBeCloseTo(baseSpacing, 2);
      const defaultHeaderPadding = await dialog.locator("header").evaluate(el => getComputedStyle(el).paddingTop);
      const defaultFont = await dialog.locator("p").evaluate(el => getComputedStyle(el).fontSize);
      const defaultButtonHeight = (await dialog.getByRole("button", { name: "Cancel" }).boundingBox())!.height;
      await page.keyboard.press("Escape");
      const opener = page.getByRole("button", { name: "Open size-sm dialog" });
      await opener.click();
      expect((await dialog.boundingBox())!.width).toBeCloseTo(defaultWidth, 1);
      expect(parseFloat(await dialog.evaluate(el => getComputedStyle(el).paddingTop))).toBeLessThan(parseFloat(defaultPadding));
      expect(parseFloat(await dialog.locator("header").evaluate(el => getComputedStyle(el).paddingTop))).toBeLessThan(parseFloat(defaultHeaderPadding));
      await expect(dialog.locator("p")).toHaveCSS("font-size", defaultFont);
      expect((await dialog.getByRole("button", { name: "Cancel" }).boundingBox())!.height).toBeCloseTo(defaultButtonHeight, 1);
      await expect(dialog.getByRole("button", { name: "Cancel" })).toBeFocused();
      expect(await dialog.evaluate(el => el.matches(":modal"))).toBe(true);
      await expect(page).toHaveScreenshot(`dialogs-${theme}-${width}.png`, { animations: "disabled" });
      await page.keyboard.press("Escape");
      await expect(dialog).not.toBeVisible();
      await expect(opener).toBeFocused();
      await opener.click();
      await dialog.getByRole("button", { name: "Confirm" }).click();
      await expect(dialog).not.toBeVisible();
    });
  }
}

test("compact groups resize direct controls including checkboxes while retaining nested-group boundaries", async ({ page }) => {
  await page.goto("/variants/modifiers/size.demo/buttonGroups");
  await page.evaluate(() => document.body.insertAdjacentHTML("beforeend", `
    <button id="reference">Reference</button><input id="reference-check" type="checkbox">
    <div class="size-sm" role="group" id="scoped-group">
      <button id="direct">Direct</button><input id="direct-check" type="checkbox">
      <div role="group"><button id="nested">Nested</button></div>
    </div>`));
  const normalHeight = (await page.locator("#reference").boundingBox())!.height;
  expect(parseFloat(await page.locator("#direct").evaluate(el => getComputedStyle(el).fontSize))).toBeLessThan(parseFloat(await page.locator("#reference").evaluate(el => getComputedStyle(el).fontSize)));
  expect((await page.locator("#nested").boundingBox())!.height).toBe(normalHeight);
  expect((await page.locator("#direct-check").boundingBox())!.height).toBeLessThan((await page.locator("#reference-check").boundingBox())!.height);
  await page.locator("#nested").evaluate(el => el.parentElement!.classList.add("size-sm"));
  expect((await page.locator("#nested").boundingBox())!.height).toBeLessThan(normalHeight);
});

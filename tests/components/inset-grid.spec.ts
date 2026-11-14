import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

for (const width of [390, 1440]) {
  for (const direction of ['ltr', 'rtl']) {
    test(`inset grid gutters and full bleed at ${width}px ${direction}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.setContent(`<section class="inset-grid" dir="${direction}" style="--card-spacing: 24px">
        <div id="regular">Inset content</div>
        <div id="bleed" class="bleed-inline">Full width</div>
        <section class="inset-grid" id="nested"><div>Nested content</div></section>
      </section>`);
      await page.addStyleTag({ content: readFileSync('dist/semanticus-no-utilities.css', 'utf8') });
      const container = page.locator('section').first();
      const bounds = await container.boundingBox();
      const regular = await page.locator('#regular').boundingBox();
      const bleed = await page.locator('#bleed').boundingBox();
      expect(regular!.x - bounds!.x).toBeCloseTo(24);
      expect(regular!.width).toBeCloseTo(bounds!.width - 48);
      expect(regular!.y - bounds!.y).toBeCloseTo(24);
      expect(bleed!.x).toBeCloseTo(bounds!.x);
      expect(bleed!.width).toBeCloseTo(bounds!.width);
      const nested = await page.locator('#nested').boundingBox();
      const nestedChild = await page.locator('#nested > div').boundingBox();
      expect(nestedChild!.x - nested!.x).toBeCloseTo(24);
      await container.evaluate(el => {
        (el as HTMLElement).style.setProperty('--inset-grid-padding-inline', '12px');
      });
      const customized = await page.locator('#regular').boundingBox();
      expect(customized!.width).toBeCloseTo(bounds!.width - 24);
    });
  }
}

for (const direction of ['ltr', 'rtl']) {
  test(`directional bleed and block spacers in ${direction}`, async ({ page }) => {
    await page.setContent(`<section class="inset-grid" dir="${direction}" style="--card-spacing: 24px">
      <header class="bleed-inline bleed-top">Header</header>
      <div class="bleed-start" id="start">Start</div>
      <div class="bleed-end" id="end">End</div>
      <div class="bleed-start bleed-end" id="both">Both</div>
      <footer class="bleed-inline bleed-bottom">Footer</footer>
    </section>`);
    await page.addStyleTag({ content: readFileSync('dist/semanticus-no-utilities.css', 'utf8') });
    const container = page.locator('section');
    const bounds = (await container.boundingBox())!;
    const header = (await page.locator('header').boundingBox())!;
    const footer = (await page.locator('footer').boundingBox())!;
    expect(header.y).toBeCloseTo(bounds.y);
    expect(footer.y + footer.height).toBeCloseTo(bounds.y + bounds.height);
    for (const id of ['start', 'end']) {
      const item = (await page.locator(`#${id}`).boundingBox())!;
      const leftBleed = (id === 'start') === (direction === 'ltr');
      expect(item.x - bounds.x).toBeCloseTo(leftBleed ? 0 : 24);
      expect(item.width).toBeCloseTo(bounds.width - 24);
    }
    expect((await page.locator('#both').boundingBox())!.width).toBeCloseTo(bounds.width);
    expect(await container.evaluate(el => getComputedStyle(el).padding)).toBe('0px');
    await page.locator('header').evaluate(el => el.classList.remove('bleed-top'));
    expect((await page.locator('header').boundingBox())!.y - bounds.y).toBeCloseTo(24);
    await container.evaluate(el => { el.innerHTML = '<div class="bleed-inline bleed-block">Only child</div>'; });
    const singleContainer = (await container.boundingBox())!;
    const single = (await container.locator('div').boundingBox())!;
    expect(single.y).toBeCloseTo(singleContainer.y);
    expect(single.height).toBeCloseTo(singleContainer.height);
  });
}

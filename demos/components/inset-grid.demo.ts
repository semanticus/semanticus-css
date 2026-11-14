import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(
  tagName: string = "section",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    classMergeAttributes("inset-grid border", attrs),
    slot || `<h2>Comfortably inset</h2>
<p>Every direct child sits inside gutters matching the default card spacing.</p>`,
  );
}

export function fullBleed() {
  return main("section", {}, `<header class="bleed-inline bleed-top bg-primary-subtle"><h2>Inset text, full-width feature</h2></header>
<p>The heading and this paragraph stay inside the gutters.</p>
<div class="bleed-inline bg-primary-subtle">
  <p>A bleed-inline band reaches both inline edges. Its contents keep their normal layout.</p>
</div>
<p>Following content returns to the inset column.</p>`);
}

export function customSpacing() {
  return main("section", {
    style: "--inset-grid-padding-inline: var(--spacing-6); --inset-grid-padding-block: var(--spacing-2)",
  }, `<h2>Independent spacing</h2>
<p>Wider inline gutters and smaller block padding use the existing spacing scale.</p>
<div class="bleed-inline bg-primary-subtle">This band still spans the entire container.</div>`);
}

export function nested() {
  return main("section", {}, `<h2>Nested gutters</h2>
<p>The inner section spans the outer gutters and establishes its own inset.</p>
<section class="bleed-inline inset-grid bg-primary-subtle">
  <h3>Inset content inside a bleed-inline section</h3>
  <p>Combining both classes restores gutters for the section’s own children.</p>
  <div class="bleed-inline bg-secondary-subtle">This child spans the inner gutters too.</div>
</section>`);
}

export function rtl() {
  return main("section", { dir: "rtl", lang: "ar" }, `<h2>محتوى بهوامش داخلية</h2>
<p>يبقى النص داخل الهوامش الجانبية.</p>
<div class="bleed-inline bg-primary-subtle">يمتد هذا القسم إلى حافتي الحاوية.</div>`);
}

export function directionalBleed() {
  return main("section", {}, `<header class="bleed-inline bleed-top bg-primary-subtle"><h2>Flush with the top edge</h2></header>
<p>Normal content keeps both inline gutters.</p>
<div class="bleed-start bg-primary-subtle">This band reaches the inline start edge.</div>
<div class="bleed-end bg-secondary-subtle">This band reaches the inline end edge.</div>
<footer class="bleed-inline bleed-bottom bg-primary-subtle">Flush with the bottom edge</footer>`);
}

export function blockBleed() {
  return main("section", {}, `<div class="bleed-inline bleed-block bg-primary-subtle">A single child can reach all four edges.</div>`);
}

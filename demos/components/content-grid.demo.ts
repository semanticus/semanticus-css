import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(tagName: string = "main", attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(tagName, classMergeAttributes('content-grid', attrs), slot || `<h1>Page title</h1>
<p>This paragraph stays within the content column automatically.</p>
<p>Every direct child is constrained to "--content-grid-content-max-width".</p>`);
}

export function breakout(tagName: string = "main", attrs: Record<string, string> = {}) {
  return main(tagName, attrs, `<h1>Article Title</h1>
<p>Regular content stays constrained.</p>
<blockquote class="breakout">
  This pull quote breaks out of the content column into the breakout area —
  noticeably wider, but still with padding on each side.
</blockquote>
<p>Back to regular content width.</p>`);
}

export function fullWidth(tagName: string = "main", attrs: Record<string, string> = {}) {
  return main(tagName, attrs, `<h1>My Page</h1>

<div class="full-width text-bg-primary py-5 mb-d">
  <h2>Full-width section</h2>
  <p>This section spans edge-to-edge, but the text inside is still constrained
      to the content column because ".full-width" creates a nested grid.</p>
  <p>You can even use <code>.breakout</code> inside a <code>.full-width</code>.</p>
</div>

<p>Back to normal content flow.</p>`);
}

export function nested(tagName: string = "main", attrs: Record<string, string> = {}) {
  return main(tagName, attrs, `<section class="full-width text-bg-primary py-d">
  <h2>Services</h2>
  <p>All children of a ".full-width" inherit the content grid.</p>
  <div class="breakout text-bg-contrast my-d p-d">
    This card breaks out wider than the surrounding content.
  </div>
</section>`);
}

export function nestedFullWidth(tagName: string = "main", attrs: Record<string, string> = {}) {
  return main(tagName, attrs, `<section class="full-width text-bg-primary py-d">
  <h2>Outer full-width section</h2>
  <p>This section spans edge-to-edge and creates a nested content grid.</p>

  <div class="full-width text-bg-contrast mb-d py-d">
    <h3>Nested full-width section</h3>
    <p>This inner ".full-width" also spans edge-to-edge within the outer one,
        and its children are still constrained to the content column.</p>
  </div>

  <div class="breakout text-bg-contrast mb-d p-d">
    This card breaks out wider than the surrounding content.
  </div>

  <p>Back to the outer section's content column.</p>
</section>

<p>Back to the top-level content column.</p>`);
}

export function overview() {
  return `<br>
<br>
${main('div')}
<br>
<br>
${breakout('div')}
<br>
<br>
${fullWidth('div')}
<br>
<br>
${nested('div')}
<br>
<br>
${nestedFullWidth('div')}`;
}

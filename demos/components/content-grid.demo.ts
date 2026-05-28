import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(
  tagName: string = "main",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    classMergeAttributes("content-grid", attrs),
    slot ||
      `<hgroup>
  <h1>Page title</h1>
  <p>This paragraph stays within the content column automatically.</p>
</hgroup>

<p>Every direct child is constrained to <code>--content-grid-content-max-width</code>.</p>`,
  );
}

export function breakout(
  tagName: string = "main",
  attrs: Record<string, string> = {},
) {
  return main(
    tagName,
    attrs,
    `<hgroup>
  <h1>Article Title</h1>
  <p>Regular content stays constrained.</p>
</hgroup>

<blockquote class="breakout">
  This pull quote breaks out of the content column into the breakout area —
  noticeably wider, but still with padding on each side.
</blockquote>

<p>Back to regular content width.</p>`,
  );
}

export function fullWidth(
  tagName: string = "main",
  attrs: Record<string, string> = {},
) {
  return main(
    tagName,
    classMergeAttributes("", attrs),
    `<hgroup>
  <h1>Top Level section</h1>
  <p>This section is the one that started the content grid.</p>
</hgroup>

<div class="full-width pane primary">
  <hgroup>
    <h2>Full-width section</h2>
    <p>This section spans edge-to-edge, but the text inside is still constrained
      to the content column because <code>.full-width</code> creates a nested grid.</p>
  </hgroup>

  <p>You can even use <code>.breakout</code> inside a <code>.full-width</code>.</p>

  <blockquote class="breakout">
    This pull quote breaks out of the content column into the breakout area —
    noticeably wider, but still with padding on each side.
  </blockquote>
</div>

<p>Back to normal content flow.</p>`,
  );
}

export function nestedFullWidth(
  tagName: string = "main",
  attrs: Record<string, string> = {},
) {
  return main(
    tagName,
    classMergeAttributes("", attrs),
    `<hgroup>
  <h1>Top Level section</h1>
  <p>This section is the one that started the content grid.</p>
</hgroup>

<div role="status" class="breakout">
  This alert message breaks out of the content column into the breakout area —
</div>

<section class="full-width pane primary">
  <hgroup>
    <h2>Outer full-width section</h2>
    <p>This section spans edge-to-edge, but the text inside is still constrained
      to the content column because <code>.full-width</code> creates a nested grid.</p>
  </hgroup>

  <p>You can even nest another <code>.full-width</code> inside a <code>.full-width</code>.</p>

  <div class="full-width pane">
    <hgroup>
      <h3>Nested full-width section</h3>
      <p>This inner ".full-width" also spans edge-to-edge within the outer one,
        and its children are still constrained to the content column.</p>
    </hgroup>
  </div>

  <div class="breakout pane contrast">
    This pane breaks out wider than the surrounding content.
  </div>

  <p>Back to the outer section's content column.</p>
</section>

<p>Back to the top-level content column.</p>`,
  );
}

export function overview() {
  return `<br>
<br>
${main("div")}
<br>
<br>
${breakout("div")}
<br>
<br>
${fullWidth("div")}
<br>
<br>
${nested("div")}
<br>
<br>
${nestedFullWidth("div")}`;
}

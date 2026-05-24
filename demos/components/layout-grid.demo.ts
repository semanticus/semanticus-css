// import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main() {
  return `<main class="layout-grid">
  <h1>Page title</h1>
  <p>This paragraph stays within the content column automatically.</p>
  <p>Every direct child is constrained to "--layout-grid-content-max-width".</p>
</main>`;
}

export function breakout() {
  return `<main class="layout-grid">
  <h1>Article Title</h1>
  <p>Regular content stays constrained.</p>
  <blockquote class="breakout">
    This pull quote breaks out of the content column into the breakout area —
    noticeably wider, but still with padding on each side.
  </blockquote>
  <p>Back to regular content width.</p>
</main>`;
}

export function fullWidth() {
  return `<main class="layout-grid">
  <h1>My Page</h1>

  <div class="full-width" style="background: var(--color-primary-fill); padding-block: 3rem;">
    <h2>Full-width section</h2>
    <p>This section spans edge-to-edge, but the text inside is still constrained
       to the content column because ".full-width" creates a nested grid.</p>
    <p>You can even use <code>.breakout</code> inside a <code>.full-width</code>.</p>
  </div>

  <p>Back to normal content flow.</p>
</main>`;
}

export function nested() {
  return `<main class="layout-grid">
  <section class="full-width" style="background: var(--color-primary-fill);">
    <h2>Services</h2>
    <p>All children of a ".full-width" inherit the layout grid.</p>
    <div class="breakout" style="background: var(--color-primary-fill-hover); padding: 1rem;">
      This card breaks out wider than the surrounding content.
    </div>
  </section>
</main>`;
}

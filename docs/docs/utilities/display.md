<script setup>
const displayByThemeHtml = `<div class="d-theme-system-none p-2 text-bg-contrast">.d-theme-system-none | visible when [data-theme] is not set to either "light" or "dark"</div>
<div class="d-theme-manual-none p-2 text-bg-contrast">.d-theme-manual-none | visible when [data-theme] is set to either "light" or "dark"</div>
<hr>
<div class="d-theme-light-none p-2 text-bg-contrast">.d-theme-light-none | visible when color scheme is not ligh</div>
<div class="d-theme-dark-none p-2 text-bg-contrast">.d-theme-dark-none | visible when color scheme is not dark</div>
`;
const displayInlineHtml = `<div class="d-inline p-2 text-bg-primary">d-inline</div>
<div class="d-inline p-2 text-bg-secondary">d-inline</div>
`;
const displayBlockHtml = `<span class="d-block p-2 text-bg-primary mb-2">d-block</span>
<span class="d-block p-2 text-bg-secondary">d-block</span>
`;
const displayFlexHtml = `<div class="d-flex p-2 text-bg-primary">d-flex</div>
`;
const displayInlineFlexHtml = `<div class="d-inline-flex p-2 text-bg-primary">d-inline-flex</div>
`;
const hidingHtml = `<div class="d-lg-none p-2 text-bg-primary mb-2">Hidden on lg and wider</div>
<div class="d-none d-lg-block p-2 text-bg-secondary">Hidden on screens smaller than lg</div>
`;
const printHtml = `<div class="d-print-none p-2 text-bg-primary mb-2">Screen only (hidden on print)</div>
<div class="d-none d-print-block p-2 text-bg-secondary mb-2">Print only (hidden on screen)</div>
<div class="d-none d-lg-block d-print-block p-2 text-bg-contrast">Hidden up to lg on screen, always shown on print</div>
`;
const overflowHtml = `<div class="overflow-auto p-3 mb-3 border" style="max-width:300px;max-height:100px">
  This is an example of using <code>.overflow-auto</code>. Content will scroll when it overflows the container boundaries.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="overflow-hidden p-3 mb-3 border" style="max-width:300px;max-height:100px">
  This is an example of using <code>.overflow-hidden</code>. Content is clipped when it overflows.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
<div class="overflow-visible p-3 mb-3 border" style="max-width:300px;max-height:100px">
  This is an example of using <code>.overflow-visible</code>. Content overflows the container.
</div>
<div class="overflow-scroll p-3 border" style="max-width:300px;max-height:100px">
  This is an example of using <code>.overflow-scroll</code>. Scrollbars are always visible.
</div>
`;
const overflowXHtml = `<div class="overflow-x-auto p-3 border" style="max-width:200px;white-space:nowrap">
  This content is wider than the container and will scroll horizontally.
</div>
`;
const overflowYHtml = `<div class="overflow-y-auto p-3 border" style="max-height:100px">
  <p>Line 1</p><p>Line 2</p><p>Line 3</p><p>Line 4</p><p>Line 5</p><p>Line 6</p>
</div>
`;
const visibilityHtml = `<div class="visible p-2 mb-2 border">This element is visible.</div>
<div class="invisible p-2 mb-2 border">This element is invisible (but still takes up space).</div>
<div class="p-2 border">This element is below the invisible one.</div>
`;
const visuallyHiddenHtml = `<p>There is a visually hidden heading between these two paragraphs:</p>
<h2 class="visually-hidden">Hidden Heading</h2>
<p>The heading above is hidden visually but accessible to screen readers.</p>
`;
</script>

# Display

Toggle the display value of elements responsively with display utilities. Also includes utilities for overflow and visibility.

## Display: none by theme

<HtmlPreviewer :code="displayByThemeHtml" />

## Display Property

### Inline

<HtmlPreviewer :code="displayInlineHtml" />

### Block

<HtmlPreviewer :code="displayBlockHtml" />

### Flex

<HtmlPreviewer :code="displayFlexHtml" />

### Inline Flex

<HtmlPreviewer :code="displayInlineFlexHtml" />

## Responsive Display

Classes are named using the format `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Values include: `none`, `inline`, `inline-block`, `block`, `grid`, `inline-grid`, `table`, `table-row`, `table-cell`, `flex`, `inline-flex`.

### Hiding Elements

Use responsive display classes to show and hide elements by screen size.

<HtmlPreviewer :code="hidingHtml" />

### Print Display

Change display when printing with `.d-print-*` utilities.

<HtmlPreviewer :code="printHtml" />

## Overflow

Control how content overflows an element.

<HtmlPreviewer :code="overflowHtml" />

### Overflow X

<HtmlPreviewer :code="overflowXHtml" />

### Overflow Y

<HtmlPreviewer :code="overflowYHtml" />

## Visibility

Control element visibility without modifying display. `.invisible` hides the element but preserves its space in the layout.

<HtmlPreviewer :code="visibilityHtml" />

### Visually Hidden

Use `.visually-hidden` to hide content visually while keeping it accessible to screen readers.

<HtmlPreviewer :code="visuallyHiddenHtml" />

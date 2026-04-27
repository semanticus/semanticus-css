<script setup>
const addBorderHtml = `<span class="border p-3 d-inline-block me-2 mb-2">all</span>
<span class="border-top p-3 d-inline-block me-2 mb-2">top</span>
<span class="border-end p-3 d-inline-block me-2 mb-2">end</span>
<span class="border-bottom p-3 d-inline-block me-2 mb-2">bottom</span>
<span class="border-start p-3 d-inline-block me-2 mb-2">start</span>
`;
const removeBorderHtml = `<span class="border border-0 p-3 d-inline-block me-2 mb-2">none</span>
<span class="border border-top-0 p-3 d-inline-block me-2 mb-2">no top</span>
<span class="border border-end-0 p-3 d-inline-block me-2 mb-2">no end</span>
<span class="border border-bottom-0 p-3 d-inline-block me-2 mb-2">no bottom</span>
<span class="border border-start-0 p-3 d-inline-block me-2 mb-2">no start</span>
`;
const borderColorHtml = `<span class="border border-primary p-3 d-inline-block me-2 mb-2">primary</span>
<span class="border border-secondary p-3 d-inline-block me-2 mb-2">secondary</span>
<span class="border border-success p-3 d-inline-block me-2 mb-2">success</span>
<span class="border border-info p-3 d-inline-block me-2 mb-2">info</span>
<span class="border border-warning p-3 d-inline-block me-2 mb-2">warning</span>
<span class="border border-danger p-3 d-inline-block me-2 mb-2">danger</span>
<span class="border border-contrast p-3 d-inline-block me-2 mb-2">contrast</span>
`;
const borderSubtleHtml = `<span class="border border-primary-subtle p-3 d-inline-block me-2 mb-2">primary subtle</span>
<span class="border border-secondary-subtle p-3 d-inline-block me-2 mb-2">secondary subtle</span>
<span class="border border-success-subtle p-3 d-inline-block me-2 mb-2">success subtle</span>
<span class="border border-info-subtle p-3 d-inline-block me-2 mb-2">info subtle</span>
<span class="border border-warning-subtle p-3 d-inline-block me-2 mb-2">warning subtle</span>
<span class="border border-danger-subtle p-3 d-inline-block me-2 mb-2">danger subtle</span>
`;
const borderWidthHtml = `<span class="border border-0 p-3 d-inline-block me-2 mb-2">0</span>
<span class="border border-d p-3 d-inline-block me-2 mb-2">d</span>
<span class="border border-1 p-3 d-inline-block me-2 mb-2">1</span>
<span class="border border-2 p-3 d-inline-block me-2 mb-2">2</span>
<span class="border border-3 p-3 d-inline-block me-2 mb-2">3</span>
<span class="border border-4 p-3 d-inline-block me-2 mb-4">4</span>
<span class="border border-5 p-3 d-inline-block me-2 mb-2">5</span>
`;
const borderOpacityHtml = `<div class="border border-success p-2 mb-2">Default success border</div>
<div class="border border-success border-opacity-75 p-2 mb-2">75% opacity success border</div>
<div class="border border-success border-opacity-50 p-2 mb-2">50% opacity success border</div>
<div class="border border-success border-opacity-25 p-2 mb-2">25% opacity success border</div>
<div class="border border-success border-opacity-10 p-2">10% opacity success border</div>
`;
const borderRadiusHtml = `<span class="border rounded p-3 d-inline-block me-2 mb-2">rounded</span>
<span class="border rounded-top p-3 d-inline-block me-2 mb-2">top</span>
<span class="border rounded-end p-3 d-inline-block me-2 mb-2">end</span>
<span class="border rounded-bottom p-3 d-inline-block me-2 mb-2">bottom</span>
<span class="border rounded-start p-3 d-inline-block me-2 mb-2">start</span>
`;
const borderRadiusSizesHtml = `<span class="border rounded-0 p-3 d-inline-block me-2 mb-2">0</span>
<span class="border rounded-d p-3 d-inline-block me-2 mb-2">d</span>
<span class="border rounded-1 p-3 d-inline-block me-2 mb-2">1</span>
<span class="border rounded-2 p-3 d-inline-block me-2 mb-2">2</span>
<span class="border rounded-3 p-3 d-inline-block me-2 mb-2">3</span>
<span class="border rounded-4 p-3 d-inline-block me-2 mb-2">4</span>
<span class="border rounded-5 p-3 d-inline-block me-2 mb-2">5</span>
<span class="border rounded-circle p-3 d-inline-block me-2 mb-2">circle</span>
<span class="border rounded-pill px-4 py-3 d-inline-block me-2 mb-2">pill</span>
`;
const practicalHtml = `<input type="email" class="border-success" placeholder="Valid email" aria-invalid="false" />
<div class="p-3 bg-info-subtle border border-info rounded">
  Informational message with matching border color.
</div>
`;
</script>

# Borders

Use border utilities to add or remove an element's borders, change color, width, and radius.

## Additive

Add borders to elements.

<HtmlPreviewer :code="addBorderHtml" />

## Subtractive

Remove borders from elements.

<HtmlPreviewer :code="removeBorderHtml" />

## Color

Change the border color using semantic color utilities.

<HtmlPreviewer :code="borderColorHtml" />

### Subtle Colors

<HtmlPreviewer :code="borderSubtleHtml" />

## Width

Border width utilities range from `0` (no border) to `5` (thickest). Use `d` for the default border width (matches `--border-width`).

<HtmlPreviewer :code="borderWidthHtml" />

## Opacity

Control border opacity with `.border-opacity-*` utilities.

<HtmlPreviewer :code="borderOpacityHtml" />

## Border Radius

Add rounded corners to elements.

<HtmlPreviewer :code="borderRadiusHtml" />

### Radius Sizes

Scale the border radius with size modifiers from `0` to `5`, plus `d` (default), `circle` and `pill`.

<HtmlPreviewer :code="borderRadiusSizesHtml" />

## Practical Examples

### Form Input with Border Color

<HtmlPreviewer :code="practicalHtml" />

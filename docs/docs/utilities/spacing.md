<script setup>
const marginHtml = `<div class="vstack gap-d">
  <div class="border">
    <div class="m-d text-bg-primary">m-d (default margin on all sides)</div>
  </div>
  <div class="border">
    <div class="m-1 text-bg-primary">m-1 (margin 1 on all sides)</div>
  </div>
  <div class="border">
    <div class="m-2 text-bg-primary">m-2 (margin 2 on all sides)</div>
  </div>
  <div class="border">
    <div class="m-3 text-bg-primary">m-3 (margin 3 on all sides)</div>
  </div>
  <div class="border">
    <div class="m-4 text-bg-primary">m-4 (margin 4 on all sides)</div>
  </div>
  <div class="border">
    <div class="m-5 text-bg-primary">m-5 (margin 5 on all sides)</div>
  </div>
</div>`;
const marginDirectionalHtml = `<div class="vstack gap-d">
  <div class="border">
    <div class="mt-5 text-bg-primary">mt-5 (margin top)</div>
  </div>
  <div class="border">
    <div class="ms-5 text-bg-primary">ms-5 (margin start)</div>
  </div>
  <div class="border">
    <div class="me-5 text-bg-primary">me-5 (margin end)</div>
  </div>
  <div class="border">
    <div class="mx-3 text-bg-primary">mx-3 (horizontal margin)</div>
  </div>
  <div class="border">
    <div class="my-2 text-bg-primary">my-2 (vertical margin)</div>
  </div>
  <div class="border">
    <div class="mb-5 text-bg-primary">mb-5 (margin bottom)</div>
  </div>
</div>`;
const paddingHtml = `<div class="vstack gap-d">
<div class="p-0 text-bg-primary">p-0</div>
<div class="p-d text-bg-primary">p-d (default)</div>
<div class="p-1 text-bg-primary">p-1</div>
<div class="p-2 text-bg-primary">p-2</div>
<div class="p-3 text-bg-primary">p-3</div>
<div class="p-4 text-bg-primary">p-4</div>
<div class="p-5 text-bg-primary">p-5</div>
</div>`;
const paddingDirectionalHtml = `<div class="pt-3 text-bg-primary mb-2">pt-3 (padding top)</div>
<div class="pe-5 text-bg-primary mb-2">pe-5 (padding end)</div>
<div class="pb-3 text-bg-primary mb-2">pb-3 (padding bottom)</div>
<div class="ps-5 text-bg-primary mb-2">ps-5 (padding start)</div>
<div class="px-5 text-bg-primary mb-2">px-5 (horizontal padding)</div>
<div class="py-4 text-bg-primary">py-4 (vertical padding)</div>
`;
const horizontalCenterHtml = `<div class="mx-auto p-d text-bg-primary w-50">
  Centered element
</div>
`;
const gapHtml = `<div class="d-grid gap-d mb-3" style="grid-template-columns:1fr 1fr">
  <div class="p-d text-bg-primary">Grid item 1 (gap-d)</div>
  <div class="p-d text-bg-primary">Grid item 2</div>
  <div class="p-d text-bg-primary">Grid item 3</div>
  <div class="p-d text-bg-primary">Grid item 4</div>
</div>
<div class="d-grid gap-3" style="grid-template-columns:1fr 1fr">
  <div class="p-d text-bg-primary">Grid item 1 (gap-3)</div>
  <div class="p-d text-bg-primary">Grid item 2</div>
  <div class="p-d text-bg-primary">Grid item 3</div>
  <div class="p-d text-bg-primary">Grid item 4</div>
</div>
`;
const rowGapHtml = `<div class="d-grid gap-0 row-gap-3" style="grid-template-columns:1fr 1fr">
  <div class="p-d text-bg-primary">Grid item 1</div>
  <div class="p-d text-bg-primary">Grid item 2</div>
  <div class="p-d text-bg-primary">Grid item 3</div>
  <div class="p-d text-bg-primary">Grid item 4</div>
</div>
`;
const columnGapHtml = `<div class="d-grid gap-0 column-gap-3" style="grid-template-columns:1fr 1fr">
  <div class="p-d text-bg-primary">Grid item 1</div>
  <div class="p-d text-bg-primary">Grid item 2</div>
  <div class="p-d text-bg-primary">Grid item 3</div>
  <div class="p-d text-bg-primary">Grid item 4</div>
</div>
`;
const practicalHtml = `<form>
  <div class="d-flex gap-3 mb-3">
    <div class="flex-fill">
      <label for="first">First name</label>
      <input type="text" id="first" placeholder="First name" />
    </div>
    <div class="flex-fill">
      <label for="last">Last name</label>
      <input type="text" id="last" placeholder="Last name" />
    </div>
  </div>
  <div class="mb-3">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email" />
  </div>
  <button type="submit">Submit</button>
</form>
`;
</script>

# Spacing

Responsive margin, padding, and gap utilities to control spacing.

## Margin

Classes use the format `.m{side}-{size}`, where side is `t` (top), `b` (bottom), `s` (start), `e` (end), `x` (horizontal), `y` (vertical), or blank (all sides). Sizes range from `0` to `5`, plus `d` (default) and `auto`.

<HtmlPreviewer :code="marginHtml" />

### Directional Margin

<HtmlPreviewer :code="marginDirectionalHtml" />

## Padding

Classes use the format `.p{side}-{size}`. Sizes range from `0` to `5`, plus `d` (default).

<HtmlPreviewer :code="paddingHtml" />

### Directional Padding

<HtmlPreviewer :code="paddingDirectionalHtml" />

## Horizontal Centering

Use `.mx-auto` to center fixed-width block elements.

<HtmlPreviewer :code="horizontalCenterHtml" />

## Gap

Use `.gap-{size}` on grid or flex containers to set spacing between children. Sizes range from `0` to `5`, plus `d` (default). All gap utilities support responsive breakpoints.

<HtmlPreviewer :code="gapHtml" />

### Row Gap

Use `.row-gap-{size}` for vertical spacing only.

<HtmlPreviewer :code="rowGapHtml" />

### Column Gap

Use `.column-gap-{size}` for horizontal spacing only.

<HtmlPreviewer :code="columnGapHtml" />

## Practical Examples

### Form Layout with Spacing

<HtmlPreviewer :code="practicalHtml" />

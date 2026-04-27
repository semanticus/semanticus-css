<script setup>
const marginHtml = `<div class="bg-primary-subtle border p-2 mb-2">
  <div class="m-3 bg-primary p-2 rounded" style="color:white">m-3 (margin on all sides)</div>
</div>
<div class="bg-primary-subtle border p-2 mb-2">
  <div class="mt-3 bg-primary p-2 rounded" style="color:white">mt-3 (margin top)</div>
</div>
<div class="bg-primary-subtle border p-2 mb-2">
  <div class="mx-5 bg-primary p-2 rounded" style="color:white">mx-5 (horizontal margin)</div>
</div>
<div class="bg-primary-subtle border p-2">
  <div class="my-4 bg-primary p-2 rounded" style="color:white">my-4 (vertical margin)</div>
</div>
`;
const paddingHtml = `<div class="p-0 bg-primary-subtle border mb-2">p-0</div>
<div class="p-d bg-primary-subtle border mb-2">p-d (default)</div>
<div class="p-1 bg-primary-subtle border mb-2">p-1</div>
<div class="p-2 bg-primary-subtle border mb-2">p-2</div>
<div class="p-3 bg-primary-subtle border mb-2">p-3</div>
<div class="p-4 bg-primary-subtle border mb-2">p-4</div>
<div class="p-5 bg-primary-subtle border">p-5</div>
`;
const paddingDirectionalHtml = `<div class="pt-3 bg-primary-subtle border mb-2">pt-3 (padding top)</div>
<div class="pe-5 bg-primary-subtle border mb-2">pe-5 (padding end)</div>
<div class="pb-3 bg-primary-subtle border mb-2">pb-3 (padding bottom)</div>
<div class="ps-5 bg-primary-subtle border mb-2">ps-5 (padding start)</div>
<div class="px-5 bg-primary-subtle border mb-2">px-5 (horizontal padding)</div>
<div class="py-4 bg-primary-subtle border">py-4 (vertical padding)</div>
`;
const horizontalCenterHtml = `<div class="mx-auto p-2 bg-primary-subtle border w-50">
  Centered element
</div>
`;
const gapHtml = `<div class="d-grid gap-d mb-3" style="grid-template-columns:1fr 1fr">
  <div class="p-2 bg-primary-subtle border">Grid item 1 (gap-d)</div>
  <div class="p-2 bg-primary-subtle border">Grid item 2</div>
  <div class="p-2 bg-primary-subtle border">Grid item 3</div>
  <div class="p-2 bg-primary-subtle border">Grid item 4</div>
</div>
<div class="d-grid gap-3" style="grid-template-columns:1fr 1fr">
  <div class="p-2 bg-primary-subtle border">Grid item 1 (gap-3)</div>
  <div class="p-2 bg-primary-subtle border">Grid item 2</div>
  <div class="p-2 bg-primary-subtle border">Grid item 3</div>
  <div class="p-2 bg-primary-subtle border">Grid item 4</div>
</div>
`;
const rowGapHtml = `<div class="d-grid gap-0 row-gap-3" style="grid-template-columns:1fr 1fr">
  <div class="p-2 bg-primary-subtle border">Grid item 1</div>
  <div class="p-2 bg-primary-subtle border">Grid item 2</div>
  <div class="p-2 bg-primary-subtle border">Grid item 3</div>
  <div class="p-2 bg-primary-subtle border">Grid item 4</div>
</div>
`;
const columnGapHtml = `<div class="d-grid gap-0 column-gap-3" style="grid-template-columns:1fr 1fr">
  <div class="p-2 bg-primary-subtle border">Grid item 1</div>
  <div class="p-2 bg-primary-subtle border">Grid item 2</div>
  <div class="p-2 bg-primary-subtle border">Grid item 3</div>
  <div class="p-2 bg-primary-subtle border">Grid item 4</div>
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

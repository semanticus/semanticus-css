<script setup>
const widthHtml = `<div class="w-25 p-2 mb-2 text-bg-primary">Width 25%</div>
<div class="w-50 p-2 mb-2 text-bg-primary">Width 50%</div>
<div class="w-75 p-2 mb-2 text-bg-primary">Width 75%</div>
<div class="w-100 p-2 mb-2 text-bg-primary">Width 100%</div>
<div class="w-auto p-2 text-bg-primary d-inline-block">Width auto</div>
`;
const heightHtml = `<div style="height:200px" class="border">
  <div class="h-100 d-inline-block text-bg-primary p-2 w-auto">Height 100%</div>
  <div class="h-75 d-inline-block text-bg-primary p-2 w-auto">Height 75%</div>
  <div class="h-50 d-inline-block text-bg-primary p-2 w-auto">Height 50%</div>
  <div class="h-25 d-inline-block text-bg-primary p-2 w-auto">Height 25%</div>
  <div class="h-auto d-inline-block text-bg-primary p-2 w-auto">Height auto</div>
</div>
`;
const maxWidthHtml = `<div class="mw-100">
  <div class="mw-100 text-bg-primary p-2" style="width:200%">Max-width 100%</div>
</div>
`;
const maxHeightHtml = `<div style="height:100px">
  <div class="mh-100 text-bg-primary p-2 w-25" style="height:200px">Max-height 100%</div>
</div>
`;
const viewportHtml = `<div class="vh-100 border text-bg-primary p-3" style="max-height:150px;overflow:auto">
  This element has <code>.vh-100</code> (100vh height), constrained here for demonstration.
</div>
`;
const practicalHtml = `<div class="d-flex gap-3">
  <div class="w-25 p-3 text-bg-secondary rounded">Sidebar (25%)</div>
  <div class="w-75 p-3 text-bg-primary rounded">Main content (75%)</div>
</div>
`;
</script>

# Sizing

Set the width and height of elements with sizing utilities.

## Width

<HtmlPreviewer :code="widthHtml" />

## Height

<HtmlPreviewer :code="heightHtml" />

## Max Width

Use `.mw-100` to constrain an element's maximum width to 100% of its parent.

<HtmlPreviewer :code="maxWidthHtml" />

## Max Height

Use `.mh-100` to constrain an element's maximum height to 100% of its parent.

<HtmlPreviewer :code="maxHeightHtml" />

## Viewport Relative

Use `.vw-100`, `.vh-100`, `.min-vw-100`, and `.min-vh-100` for viewport-relative sizing.

<HtmlPreviewer :code="viewportHtml" />

## Practical Examples

### Sidebar Layout

<HtmlPreviewer :code="practicalHtml" />

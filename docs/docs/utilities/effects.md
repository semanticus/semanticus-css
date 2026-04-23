<script setup>
const opacityHtml = `<div class="opacity-100 p-3 mb-2 bg-primary text-bg-primary d-inline-block">100%</div>
<div class="opacity-75 p-3 mb-2 bg-primary text-bg-primary d-inline-block">75%</div>
<div class="opacity-50 p-3 mb-2 bg-primary text-bg-primary d-inline-block">50%</div>
<div class="opacity-25 p-3 mb-2 bg-primary text-bg-primary d-inline-block">25%</div>
<div class="opacity-0 p-3 mb-2 bg-primary text-bg-primary d-inline-block">0%</div>
`;
const shadowsHtml = `<div class="shadow-none p-3 mb-4 rounded">No shadow</div>
<div class="shadow-sm p-3 mb-4 rounded">Small shadow</div>
<div class="shadow p-3 mb-4 rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-4 rounded">Large shadow</div>
`;
const focusRingHtml = `<a href="#" class="d-inline-block p-2 me-2 focus-ring focus-ring-primary" tabindex="0">Primary</a>
<a href="#" class="d-inline-block p-2 me-2 focus-ring focus-ring-success" tabindex="0">Success</a>
<a href="#" class="d-inline-block p-2 me-2 focus-ring focus-ring-danger" tabindex="0">Danger</a>
<a href="#" class="d-inline-block p-2 focus-ring focus-ring-info" tabindex="0">Info</a>
`;
const translateHtml = `<div class="position-relative border" style="width:200px;height:200px">
  <div class="position-absolute top-0 start-0 bg-primary p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute top-50 start-50 translate-middle bg-danger p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute top-50 start-50 translate-middle-x bg-success p-2 rounded" style="width:40px;height:40px"></div>
</div>
`;
const practicalHtml = `<article class="card shadow rounded p-0" style="overflow:hidden">
  <div class="bg-primary p-3">
    <h3 class="mb-0" style="color:white">Featured</h3>
  </div>
  <div class="p-3">
    <p>This card uses shadow and opacity utilities for visual hierarchy.</p>
    <p class="opacity-50 mb-0">Secondary information with reduced opacity.</p>
  </div>
</article>
`;
</script>

# Effects

Control opacity, shadows, and transforms with effect utilities.

## Opacity

Set the opacity of an element using `.opacity-{value}` utilities.

<HtmlPreviewer :code="opacityHtml" />

## Shadows

Add or remove box shadows.

<HtmlPreviewer :code="shadowsHtml" />

## Focus Rings

Colored focus rings for interactive elements. Tab into the elements below to see them.

<HtmlPreviewer :code="focusRingHtml" />

## Transforms

### Translate Middle

Center elements using `.translate-middle`, `.translate-middle-x`, and `.translate-middle-y` combined with position utilities.

<HtmlPreviewer :code="translateHtml" />

## Practical Examples

### Card with Shadow and Opacity

<HtmlPreviewer :code="practicalHtml" />

<script setup>
const objectFitHtml = `<div class="d-flex gap-3 flex-wrap">
  <div>
    <p><code>.object-fit-contain</code></p>
    <div class="border rounded w-25" style="height:150px">
      <img src="https://picsum.photos/300/200" class="object-fit-contain border rounded w-100 h-100" alt="Contain" />
    </div>
  </div>
  <div>
    <p><code>.object-fit-cover</code></p>
    <div class="border rounded w-25" style="height:150px">
      <img src="https://picsum.photos/300/200" class="object-fit-cover border rounded w-100 h-100" alt="Cover" />
    </div>
  </div>
  <div>
    <p><code>.object-fit-fill</code></p>
    <div class="border rounded w-25" style="height:150px">
      <img src="https://picsum.photos/300/200" class="object-fit-fill border rounded w-100 h-100" alt="Fill" />
    </div>
  </div>
  <div>
    <p><code>.object-fit-scale</code></p>
    <div class="border rounded w-25" style="height:150px">
      <img src="https://picsum.photos/300/200" class="object-fit-scale border rounded w-100 h-100" alt="Scale down" />
    </div>
  </div>
  <div>
    <p><code>.object-fit-none</code></p>
    <div class="border rounded overflow-hidden w-25" style="height:150px">
      <img src="https://picsum.photos/300/200" class="object-fit-none border rounded w-100 h-100" alt="None" />
    </div>
  </div>
</div>
`;
const gridHtml = `<div class="grid gap-3">
  <div class="p-3 bg-primary-subtle border rounded">Auto-fit column 1</div>
  <div class="p-3 bg-primary-subtle border rounded">Auto-fit column 2</div>
  <div class="p-3 bg-primary-subtle border rounded">Auto-fit column 3</div>
  <div class="p-3 bg-primary-subtle border rounded">Auto-fit column 4</div>
</div>
`;
const ratioHtml = `<div class="d-flex gap-3 flex-wrap">
  <div class="w-25">
    <p><code>.ratio-1x1</code></p>
    <div class="ratio ratio-1x1">
      <div class="bg-primary-subtle border rounded d-flex align-items-center justify-content-center">1x1</div>
    </div>
  </div>
  <div class="w-25">
    <p><code>.ratio-4x3</code></p>
    <div class="ratio ratio-4x3">
      <div class="bg-primary-subtle border rounded d-flex align-items-center justify-content-center">4x3</div>
    </div>
  </div>
  <div class="w-25">
    <p><code>.ratio-16x9</code></p>
    <div class="ratio ratio-16x9">
      <div class="bg-primary-subtle border rounded d-flex align-items-center justify-content-center">16x9</div>
    </div>
  </div>
  <div class="w-25">
    <p><code>.ratio-21x9</code></p>
    <div class="ratio ratio-21x9">
      <div class="bg-primary-subtle border rounded d-flex align-items-center justify-content-center">21x9</div>
    </div>
  </div>
</div>
`;
const vrHtml = `<div class="d-flex" style="height:80px">
  <div class="p-2">Left content</div>
  <div class="vr"></div>
  <div class="p-2">Right content</div>
</div>
`;
const stretchedLinkHtml = `<article class="card position-relative">
  <h3>Card with stretched link</h3>
  <p>Some content that describes the linked destination.</p>
  <a href="#" class="stretched-link">Go somewhere</a>
</article>
`;
const userSelectHtml = `<p class="user-select-all border p-2 mb-2">This paragraph will be entirely selected when clicked.</p>
<p class="user-select-auto border p-2 mb-2">This paragraph has default select behavior.</p>
<p class="user-select-none border p-2">This paragraph will not be selectable.</p>
`;
const pointerEventsHtml = `<a href="#" class="pe-none p-2 d-inline-block mb-2 border">This link is not clickable (pe-none)</a>
<a href="#" class="pe-auto p-2 d-inline-block border">This link is clickable (pe-auto)</a>
`;
const clearfixHtml = `<div class="clearfix border p-2">
  <div class="float-start bg-primary-subtle p-3 me-2 border rounded">Float start</div>
  <p>This text wraps around the floated element. The parent uses <code>.clearfix</code> to properly contain the float.</p>
</div>
`;
</script>

# Layout

Grid, aspect ratios, object-fit, and miscellaneous layout helpers.

## Object Fit

Control how replaced elements (images, videos) are resized to fit their container. Responsive variants available: `.object-fit-{breakpoint}-{value}`.

<HtmlPreviewer :code="objectFitHtml" />

## Grid

The `.grid` utility creates a responsive grid container with auto-fit columns.

<HtmlPreviewer :code="gridHtml" />

## Aspect Ratios

Maintain aspect ratios on containers with `.ratio` and size modifiers.

<HtmlPreviewer :code="ratioHtml" />

## Vertical Rule

Use `.vr` for a vertical divider within flex containers.

<HtmlPreviewer :code="vrHtml" />

## Stretched Link

Make an entire containing block clickable with `.stretched-link`.

<HtmlPreviewer :code="stretchedLinkHtml" />

## Clearfix

Clear floats on a parent element.

<HtmlPreviewer :code="clearfixHtml" />

## User Select

Control how text is selected.

<HtmlPreviewer :code="userSelectHtml" />

## Pointer Events

Control whether an element responds to pointer events.

<HtmlPreviewer :code="pointerEventsHtml" />

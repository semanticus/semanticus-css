<script setup>
const buttonHtml = `<div role="toolbar">
  <button class="subtle">Primary</button>
  <button class="subtle secondary">Secondary</button>
  <button class="subtle contrast">Contrast</button>
  <button class="subtle success">Success</button>
  <button class="subtle info">Info</button>
  <button class="subtle warning">Warning</button>
  <button class="subtle danger">Danger</button>
</div>
`;

const accordionHtml = `<details>
  <summary role="button" class="subtle">Primary</summary>
  <p>Elephants are the largest land animals and highly intelligent with intricate communication systems.</p>
</details>

<details>
  <summary role="button" class="subtle secondary">Secondary</summary>
  <p>Crows are intelligent birds that are known for their problem-solving abilities.</p>
</details>

<details>
  <summary role="button" class="subtle contrast">Contrast</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="subtle success">Success</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="subtle info">Info</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="subtle warning">Warning</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="subtle danger">Danger</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>`;
</script>

# Subtle Variant

The `.subtle` class creates buttons with a light background fill and colored text. This style is ideal for less prominent actions that still require some visual emphasis.

## Buttons

Apply `.subtle` to `<button>` elements or elements with `[role="button"]`. Subtle buttons can be combined with `.secondary` and `.contrast` for different color variations.

<HtmlPreviewer :code="buttonHtml" />

## Accordion

Apply `.subtle` to accordion `<summary>` elements with `role="button"` for a lighter expandable section style.

<HtmlPreviewer :code="accordionHtml" />

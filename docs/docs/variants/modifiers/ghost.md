<script setup>
const buttonHtml = `<div role="toolbar">
  <button class="ghost">Primary</button>
  <button class="ghost secondary">Secondary</button>
  <button class="ghost contrast">Contrast</button>
  <button class="ghost success">Success</button>
  <button class="ghost info">Info</button>
  <button class="ghost warning">Warning</button>
  <button class="ghost danger">Danger</button>
</div>
`;

const accordionHtml = `<details>
  <summary role="button" class="ghost">Primary</summary>
  <p>Elephants are the largest land animals and highly intelligent with intricate communication systems.</p>
</details>

<details>
  <summary role="button" class="ghost secondary">Secondary</summary>
  <p>Crows are intelligent birds that are known for their problem-solving abilities.</p>
</details>

<details>
  <summary role="button" class="ghost contrast">Contrast</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="ghost success">Success</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="ghost info">Info</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="ghost warning">Warning</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>

<details>
  <summary role="button" class="ghost danger">Danger</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>`;
</script>

# Ghost Modifier

The `.ghost` class creates transparent background buttons with colored text and borders. This "outline" or "ghost" style is useful for secondary actions where you want minimal visual weight.

## Buttons

Apply `.ghost` to `<button>` elements or elements with `[role="button"]`. Ghost buttons can be combined with `.secondary` and `.contrast` for different color variations.

<HtmlPreviewer :code="buttonHtml" />

## Accordion

Apply `.ghost` to accordion `<summary>` elements with `role="button"` for a lighter expandable section style.

<HtmlPreviewer :code="accordionHtml" />

<!-- markdownlint-enable MD033 -->

<script setup>
const buttonHtml = `<div role="toolbar">
  <button class="ghost">Primary Ghost</button>
  <button class="ghost secondary">Secondary Ghost</button>
  <button class="ghost contrast">Contrast Ghost</button>
</div>
`;

const resetHtml = `<form onsubmit="return false;">
  <input type="text" placeholder="Type something...">
  <div role="toolbar">
    <button type="submit">Submit</button>
    <button type="reset" class="ghost">Reset (Ghost)</button>
  </div>
</form>
`;

const accordionHtml = `<!-- Ghost accordions -->
<details>
  <summary role="button" class="ghost">Primary Ghost</summary>
  <p>Elephants are the largest land animals and highly intelligent with intricate communication systems.</p>
</details>

<details>
  <summary role="button" class="ghost secondary">Secondary Ghost</summary>
  <p>Crows are intelligent birds that are known for their problem-solving abilities.</p>
</details>

<details>
  <summary role="button" class="ghost contrast">Contrast Ghost</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance.</p>
</details>
`;
</script>

# Ghost Variant

The `.ghost` class creates transparent background buttons with colored text and borders. This "outline" or "ghost" style is useful for secondary actions where you want minimal visual weight.

## Buttons

Apply `.ghost` to `<button>` elements or elements with `[role="button"]`. Ghost buttons can be combined with `.secondary` and `.contrast` for different color variations.

<HtmlPreviewer :code="buttonHtml" />

## Reset Buttons

Ghost style works particularly well for reset buttons, providing a subtle way to clear forms without competing with submit buttons.

<HtmlPreviewer :code="resetHtml" />

## Accordion

Apply `.ghost` to accordion `<summary>` elements with `role="button"` for a lighter expandable section style.

<HtmlPreviewer :code="accordionHtml" />

<!-- markdownlint-enable MD033 -->

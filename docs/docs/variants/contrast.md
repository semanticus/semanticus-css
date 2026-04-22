<script setup>
const linkHtml = `<a href="#">Primary link</a>
<hr>
<a href="#" class="contrast">Contrast link</a>
`;

const buttonHtml = `<div role="toolbar">
  <button>Primary</button>
  <button class="contrast">Contrast</button>
</div>
`;

const accordionHtml = `<!-- Contrast accordion -->
<details>
  <summary role="button" class="contrast">Contrast Accordion</summary>
  <p>Koalas are arboreal marsupials that are native to Australia. They are known for their cute and cuddly appearance, but they can be quite aggressive if provoked.</p>
</details>
`;
</script>

# Contrast Variant

The `.contrast` class provides a high-contrast visual style for links, buttons, and accordion elements. Use it to draw attention or indicate primary actions in high-visibility contexts.

## Links

Apply `.contrast` to `<a>` elements or elements with `[role="link"]` for high-contrast links.

<HtmlPreviewer :code="linkHtml" />

## Buttons

Apply `.contrast` to `<button>` elements or elements with `[role="button"]` for high-contrast action buttons.

<HtmlPreviewer :code="buttonHtml" />

## Accordion

Apply `.contrast` to accordion `<summary>` elements with `role="button"` for high-contrast expandable sections.

<HtmlPreviewer :code="accordionHtml" />

<!-- markdownlint-enable MD033 -->

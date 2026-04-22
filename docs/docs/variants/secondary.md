<script setup>
const linkHtml = `<a href="#">Primary link</a>
<hr>
<a href="#" class="secondary">Secondary link</a>
`;

const buttonHtml = `<div role="toolbar">
  <button>Primary</button>
  <button class="secondary">Secondary</button>
</div>
`;

const accordionHtml = `<!-- Secondary accordion -->
<details>
  <summary role="button" class="secondary">Secondary Accordion</summary>
  <p>Ostriches are the largest birds in the world and are native to Africa. They have long, powerful legs that they use to run at high speeds, and they can reach up to 45 miles per hour.</p>
</details>
`;
</script>

# Secondary Variant

The `.secondary` class provides a lower-emphasis visual style for links and buttons. Use it to indicate an alternative or less prominent action in a group of controls.

## Links

Apply `.secondary` to `<a>` elements or elements with `[role="link"]` to de-emphasize them.

<HtmlPreviewer :code="linkHtml" />

## Buttons

Apply `.secondary` to `<button>` elements or elements with `[role="button"]` for a secondary action button.

<HtmlPreviewer :code="buttonHtml" />

## Accordion

Apply `.secondary` to accordion `<summary>` elements with `role="button"` for a secondary expandable section style.

<HtmlPreviewer :code="accordionHtml" />

<!-- markdownlint-enable MD033 -->

# Components

Minimal set of reusable building blocks that extend the **Semantic Styling**.

## Why do we need them?

Components provide reusable structure and presentation for common UI patterns that are not tied to a specific semantic state. They help keep layouts and repeated interface patterns consistent by offering shared building blocks such as containers, cards, and striped tables instead of re-creating the same styling in each feature.

## Available Components

| Component | Description | Elements |
|-----------|-------------|----------|
| [`.card`](./card) | Visual container with background, shadow, and optional header/footer | Any block element |
| [`.inset-grid`](./inset-grid) | Card-sized insets using flex layout and padding, with directional bleed modifiers | Any block element |
| [`.container`](./container) | Responsive width wrapper with horizontal padding | Any block element |
| [`.nav`](./nav) | Same styling and layout behavior as `<nav>` | For example, `<header>` or `<footer>` |
| [`.striped`](/docs/variants/modifiers/striped) | Alternating row background colors | `<table>` |

## Inset Grid and Bleed Modifiers

Use [`.inset-grid`](./inset-grid) for card-sized internal padding without negative margins. A column flex layout allows direct children to expand across the inline gutters. The component adds layout only; borders, backgrounds, and other decoration are optional.

Apply bleed modifiers to direct children:

| Modifier | Effect |
|----------|--------|
| `.bleed-inline` | Spans both inline gutters |
| `.bleed-start` | Reaches the inline start edge: left in LTR, right in RTL |
| `.bleed-end` | Reaches the inline end edge: right in LTR, left in RTL |
| `.bleed-top` | Removes the top padding when used on the first child |
| `.bleed-bottom` | Removes the bottom padding when used on the last child |
| `.bleed-block` | Removes the top padding for the first child and the bottom padding for the last child |

```html
<section class="inset-grid">
  <header class="bleed-inline bleed-top">
    <h2>Header reaching the top and both inline edges</h2>
  </header>
  <p>Content stays inside the gutters.</p>
  <footer class="bleed-inline bleed-bottom">Footer reaching the bottom and both inline edges</footer>
</section>
```

Existing child margins still apply. Top and bottom refer to the block edges in horizontal writing mode. See the [Inset Grid documentation](./inset-grid) for spacing variables, nested layouts, and live examples.

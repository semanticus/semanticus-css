# Variants

Minimal set of CSS classes that add visual variation to the **Semantic Styling**, without affecting the underlying semantics.

## Why do we need them?

The purpose of **ARIA** is to communicate semantics and interaction state to assistive technologies: **pressed**, **expanded**, **selected**, **disabled**, **current**, etc. Things like *This button is visually less important* is a presentation concern, not an accessibility semantic.

## Available Variants

| Variant | Description | Elements |
|---------|-------------|----------|
| [`.container`](./container.md) | Responsive width wrapper with horizontal padding | Any block element |
| [`.secondary`](./secondary.md) | Lower-emphasis style for links and buttons | `<a>`, `<button>` |
| [`.contrast`](./contrast.md) | High-contrast style for links, buttons, and accordions | `<a>`, `<button>`, `<details>` |
| [`.ghost`](./ghost.md) | Transparent background with colored text/border | `<button>`, `<details>` |
| [`.striped`](./striped.md) | Alternating row background colors | `<table>` |

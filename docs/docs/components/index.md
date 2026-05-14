# Components

Minimal set of reusable building blocks, that extend the **Semantic Styling**.

## Why do we need them?

The purpose of **ARIA** is to communicate semantics and interaction state to assistive technologies: **pressed**, **expanded**, **selected**, **disabled**, **current**, etc. Things like *This button is visually less important* is a presentation concern, not an accessibility semantic.

## Available Variants

| Variant | Description | Elements |
|---------|-------------|----------|
| [`.card`](./card.md) | Visual container with background, shadow, and optional header/footer | Any block element |
| [`.container`](./container.md) | Responsive width wrapper with horizontal padding | Any block element |
| [`.striped`](./striped.md) | Alternating row background colors | `<table>` |

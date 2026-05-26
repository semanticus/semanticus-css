---
aside: false
---

# Auto Grid

> **Inspired by** [Kevin Powell's auto grid technique](https://www.youtube.com/watch?v=OZ6qKoq7RJU).

The `.auto-grid` class creates a **responsive grid** that automatically adjusts the number of columns based on the available space — **without media queries**.

It uses `grid-template-columns: repeat(auto-fit, minmax(min(var(--auto-grid-min-column), 100%), 1fr))` under the hood.

## Basic Usage

Apply `.auto-grid` to any container. Children will wrap into as many columns as fit, with a default minimum column width of `100px`:

<HtmlPreviewer :code="GridDemo.main()" />

## Customizing Column Width

Override `--auto-grid-min-column` to control when items wrap. Larger values mean fewer columns:

<HtmlPreviewer :code="GridDemo.largerMinColumn()" />

In this example, each column is at least `200px` wide, so fewer columns fit per row.

## Auto-Fit vs Auto-Fill

By default the grid uses `auto-fit`, which **collapses empty tracks** when there aren't enough items to fill a row. Switch to `auto-fill` via `--auto-grid-type` to **preserve empty column tracks** — useful for maintaining consistent sizing when content changes:

<HtmlPreviewer :code="GridDemo.autoFill()" />

Notice how `auto-fill` keeps empty column tracks reserved (visible as gaps), while `auto-fit` would collapse them.

## Custom Gap

Control spacing between items with `--auto-grid-gap`:

<HtmlPreviewer :code="GridDemo.customGap()" />

## CSS Custom Properties

Customise the grid by overriding these variables on any `.auto-grid` element:

| Variable | Default | Description |
| --- | --- | --- |
| `--auto-grid-gap` | `var(--spacing, 1rem)` | Gap between grid items |
| `--auto-grid-type` | `auto-fit` | Repeat type: `auto-fit` (collapses empty tracks) or `auto-fill` (preserves them) |
| `--auto-grid-min-column` | `100px` | Minimum width of each column before wrapping |

### Examples of modifier classes

If you don't want to use inline styles, you can also set these variables in a "modifier" class, to use in combination with `.auto-grid`

**Photo gallery grid**

```css
.auto-grid-gallery {
  --auto-grid-min-column: 250px;
  --auto-grid-gap: 0.5rem;
}
```

**Dashboard card layout**

```css
.auto-grid-dashboard {
  --auto-grid-min-column: 300px;
  --auto-grid-gap: 1.5rem;
  --auto-grid-type: auto-fill;
}
```



<script setup>
import { GridDemo } from "@demos/components";
</script>

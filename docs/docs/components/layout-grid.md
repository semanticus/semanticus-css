# Layout Grid

> **Inspired by** [Kevin Powell's content grid technique](https://www.youtube.com/watch?v=c13gpBrnGEw), based on original ideas from [Stephanie Eckles (smolcss.dev)](https://smolcss.dev/) and [Ryan Mulligan](https://ryanmulligan.dev/blog/layout-breakouts/).

The `.layout-grid` class eliminates the need for wrapper or container divs. Instead of nesting content inside `<div class="container">` inside each `<section>`, you put a single `.layout-grid` on your `<main>` (or any top-level element) and use mini-classes to control width at the element level.

The grid provides **three width levels** via three CSS Grid named lines:

| Level | Grid area | Class | Width |
|---|---|---|---|
| **Content** | `content` | *(none — default)* | Constrained to `--layout-grid-content-max-width` (default `70ch`) |
| **Breakout** | `breakout` | `.breakout` | Wider than content, up to `--layout-grid-breakout-max-width` (default `90ch`) |
| **Full-width** | `full-width` | `.full-width` | Edge-to-edge spanning the entire viewport |

## Basic Usage

Apply `.layout-grid` to your `<main>` (or `<body>`, or any wrapper). All direct children are automatically placed in the **content** column:

<HtmlPreviewer :code="LayoutGridDemo.main()" />

## Breakout

Use `.breakout` on an element that should be wider than the default content column but not the full viewport — great for pull quotes, wider images, or call-to-action sections:

<HtmlPreviewer :code="LayoutGridDemo.breakout()" />

## Full-width

Use `.full-width` on an element that should span edge-to-edge — sections with background colours, hero banners, full-bleed images:

<HtmlPreviewer :code="LayoutGridDemo.fullWidth()" />

### How full-width works

`.full-width` spans the entire viewport via `grid-column: full-width` and simultaneously creates a **nested layout grid** with `grid-template-columns: inherit`. This means:

- Its background fills the full width (great for section backgrounds)
- Its children are still automatically constrained to the content column
- `.breakout` and `.full-width` work inside it as well

## Nested full-width with children

<HtmlPreviewer :code="LayoutGridDemo.nested()" />

## Responsive Behaviour

The content grid is **fully responsive with zero media queries**. It works at every viewport size:

- **Wide viewport**: content is constrained to `--layout-grid-content-max-width`, breakout extends past it
- **Medium viewport**: breakout columns shrink; content and breakout converge
- **Narrow viewport**: breakout columns collapse to zero; `.breakout` content sits at the same width as regular content

This is powered by `minmax()` for the side columns and `min()` for the content column:

```css
/* Side padding columns — at minimum padding-inline, can grow */
minmax(var(--layout-grid-padding-inline), 1fr)

/* Breakout columns — can shrink to 0 on small screens */
minmax(0px, var(--_breakout))

/* Content column — chooses the smaller of max-width vs available space */
min(var(--layout-grid-content-max-width), 100% - var(--layout-grid-padding-inline) * 2)
```

## CSS Custom Properties

Customise the layout by overriding these variables on any `.layout-grid` element:

| Variable | Default | Description |
|---|---|---|
| `--layout-grid-padding-inline` | `var(--spacing)` | Minimum padding on each side (between viewport edge and content) |
| `--layout-grid-content-max-width` | `70ch` | Maximum width of the content column |
| `--layout-grid-breakout-max-width` | `90ch` | Maximum total width when using `.breakout` |

### Example: Tighter layout

```css
.layout-grid {
  --layout-grid-padding-inline: 1rem;
  --layout-grid-content-max-width: 60ch;
  --layout-grid-breakout-max-width: 80ch;
}
```

### Example: Wide reading layout

```css
.layout-grid {
  --layout-grid-content-max-width: 80ch;
  --layout-grid-breakout-max-width: 110ch;
}
```

You can also set these inline or scope them to a specific region:

```html
<div class="layout-grid" style="--layout-grid-content-max-width: 60ch;">
  ...
</div>
```

## How It Works

The technique relies on CSS Grid **named lines**. The grid template defines five columns bracketed by named lines that follow the `{name}-start` / `{name}-end` pattern, which creates implicit named grid areas:

```
┌─────────────┬────────────┬──────────────────┬────────────┬─────────────┐
│  full-width │  breakout  │    content       │  breakout  │  full-width │
│   padding   │   column   │    column        │   column   │   padding   │
├─────────────┼────────────┼──────────────────┼────────────┼─────────────┤
│  minmax(    │  minmax(   │  min(max-width,  │  minmax(   │  minmax(    │
│  padding,   │  0, size)  │  100%-padding*2) │  0, size)  │  padding,   │
│  1fr)       │            │                  │            │  1fr)       │
└─────────────┴────────────┴──────────────────┴────────────┴─────────────┘
   [full-       [breakout-    [content-         [content-    [breakout-    [full-
   width-start] start]        start]            end]         end]          width-end]
```

Any child can target one of these areas by setting `grid-column` to its name:

| CSS | Spans |
|---|---|
| `grid-column: content` | Just the content column |
| `grid-column: breakout` | From breakout-start to breakout-end (content + both breakout columns) |
| `grid-column: full-width` | From full-width-start to full-width-end (everything) |

The framework sets `grid-column: content` on **all direct children** by default (excluding `.breakout` and `.full-width`), so regular content is automatically constrained.

## References

- [Kevin Powell — No more containers (video)](https://www.youtube.com/watch?v=c13gpBrnGEw)
- [Ryan Mulligan — Layout breakouts with CSS Grid](https://ryanmulligan.dev/blog/layout-breakouts/)
- [smolcss.dev by Stephanie Eckles](https://smolcss.dev/)

<script setup>
import { LayoutGridDemo } from "@demos/components";
</script>

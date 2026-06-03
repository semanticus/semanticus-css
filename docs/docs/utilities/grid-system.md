# Grid System

Responsive, 12-column grid system built with CSS Flexbox. Available in the full bundle (`semanticus.css`) and the utilities-only bundle (`semanticus-utilities.css`).

<script setup>
import { GridDemo } from '@demos/utilities';
</script>

## How it works

The grid uses three building blocks:

- **`.row`** — a flex container that wraps columns and applies negative horizontal margins to compensate for column gutters.
- **`[class*="col-"]` / `.col`** — flex children that define the column width. All columns are full-width by default (mobile-first) and sized by breakpoint modifiers.
- **`--grid-gutter-x`** — a CSS custom property (defaults to `--spacing`) that controls the horizontal gap between columns.
- **`--grid-gutter-y`** — a CSS custom property (defaults to `0`) that controls the vertical gap between wrapped rows of columns.

Columns in a row should sum to **12** or fewer. Columns that overflow wrap to the next line automatically.

## Grid options

| | Default (all sizes) | `sm` (≥ 576px) | `md` (≥ 768px) | `lg` (≥ 1024px) |
|---|---|---|---|---|
| **Class prefix** | `.col-` | `.col-sm-` | `.col-md-` | `.col-lg-` |
| **Auto-width** | `.col` | `.col-sm` | `.col-md` | `.col-lg` |
| **# of columns** | 12 | 12 | 12 | 12 |
| **H. Gutter** | `--grid-gutter-x` (= `--spacing`) | ← same | ← same | ← same |
| **V. Gutter** | `--grid-gutter-y` (= `0`) | ← same | ← same | ← same |
| **Nestable** | Yes | Yes | Yes | Yes |
| **Offsets** | `.col-offset-*` | `.col-offset-sm-*` | `.col-offset-md-*` | `.col-offset-lg-*` |

## Equal-width columns

Use `.col` (no number) for equal-width auto columns. They share the available space equally regardless of count.

<HtmlPreviewer :code="GridDemo.equalWidth()" />

## Fixed-width columns

Use `.col-{1–12}` to span an explicit number of columns. Values must sum to 12 per row.

<HtmlPreviewer :code="GridDemo.fixedWidth()" />

## Responsive columns

Combine breakpoint modifiers on the same element to change layout at each viewport width. The grid is **mobile-first** — a class applies at its breakpoint and up.

<HtmlPreviewer :code="GridDemo.responsive()" />

## Stacked to horizontal

Use `col-sm-*` (or `col-md-*` / `col-lg-*`) to stack columns on small screens and display them side-by-side once the viewport reaches the target breakpoint.

<HtmlPreviewer :code="GridDemo.stackedToHorizontal()" />

## Mix and match

Combine breakpoint classes freely to build layouts that change shape at multiple breakpoints.

<HtmlPreviewer :code="GridDemo.mixAndMatch()" />

## Offsets

Push a column to the right by adding a left margin equal to N columns. Use `.col-offset-{n}` for all sizes, or `.col-offset-{sm|md|lg}-{n}` for responsive offsets.

<HtmlPreviewer :code="GridDemo.offsets()" />

## Nesting

Place a new `.row` inside any column to create nested grids. Nested columns still reference the 12-column width of their parent column.

<HtmlPreviewer :code="GridDemo.nesting()" />

## Column ordering

Reorder columns visually without changing the DOM order. Use the flexbox `.order-{0–5}`, `.order-first`, and `.order-last` utilities on columns, or add `.flex-row-reverse` to the row to reverse all columns at once.

<HtmlPreviewer :code="GridDemo.columnOrdering()" />

## Alignment

Use flexbox alignment utilities directly on `.row` to align all columns vertically (`align-items-*`) or distribute them horizontally (`justify-content-*`).

<HtmlPreviewer :code="GridDemo.alignment()" />

## Gutter classes

Use `.g-*`, `.gx-*`, and `.gy-*` classes on a `.row` to control gutters via the spacing scale (`0`–`5`). These classes set `--grid-gutter-x` (horizontal) and/or `--grid-gutter-y` (vertical) on the row.

| Class | Axis | Effect |
|---|---|---|
| `.g-{0–5}` | Both | Sets horizontal **and** vertical gutter |
| `.gx-{0–5}` | Horizontal | Sets column padding / row negative margin |
| `.gy-{0–5}` | Vertical | Sets `row-gap` between wrapped rows |

All three families have responsive variants: `.g-sm-*`, `.g-md-*`, `.g-lg-*` (and likewise for `.gx-*` / `.gy-*`).

The scale maps to the project spacing scale:

| Step | Value |
|---|---|
| `0` | `0` |
| `1` | `--spacing-1` (× 0.25) |
| `2` | `--spacing-2` (× 0.5) |
| `3` | `--spacing-3` (× 1, default horizontal gutter) |
| `4` | `--spacing-4` (× 1.5) |
| `5` | `--spacing-5` (× 3) |

<HtmlPreviewer :code="GridDemo.gutterClasses()" />

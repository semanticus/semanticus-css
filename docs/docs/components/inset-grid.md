---
aside: false
---

# Inset Grid

Use `.inset-grid` on a block element to give its content the same inset as a card. Direct children sit in a flexible central column, with grid tracks forming the inline gutters. Add `.bleed-inline` to a direct child to span both gutters and reach the container’s inline edges.

## Basic Usage

Apply `.inset-grid` to a container. Each direct child is placed in the central content column:

<HtmlPreviewer :code="InsetGridDemo.main()" />

## Full Bleed

Add `.bleed-inline` to a direct child to span the gutters without negative margins or width calculations:

<HtmlPreviewer :code="InsetGridDemo.fullBleed()" />

The child keeps its normal display behavior. Its background spans the container, and its own content starts at its edge unless you give it an inset.

The component supplies layout only. It does not add a card background, border, radius, or header/footer treatment. Use it independently of `.card`; card headers and footers have their own margin-based spacing rules.

## Directional Bleed

Combine these classes on direct children:

| Class | Effect |
| --- | --- |
| `.bleed-inline` | Reaches both inline edges |
| `.bleed-start` | Reaches the inline start edge (left in LTR, right in RTL) |
| `.bleed-end` | Reaches the inline end edge (right in LTR, left in RTL) |
| `.bleed-top` | Removes the top spacer when applied to the first child |
| `.bleed-bottom` | Removes the bottom spacer when applied to the last child |
| `.bleed-block` | Removes the top spacer for the first child and the bottom spacer for the last child |

For a header that reaches the top and both sides, use `class="bleed-inline bleed-top"`. For a footer, use `class="bleed-inline bleed-bottom"`:

<HtmlPreviewer :code="InsetGridDemo.directionalBleed()" />

A single child with `.bleed-block` removes both block spacers. Add `.bleed-inline` to reach all four edges:

<HtmlPreviewer :code="InsetGridDemo.blockBleed()" />

Block modifiers only affect the container’s outer spacing; they do not move middle children or remove their margins. Top and bottom refer to the block edges in the normal horizontal writing mode.

## Spacing

| Variable | Default | Purpose |
| --- | --- | --- |
| `--inset-grid-padding-inline` | `var(--card-spacing)` | Width of each inline gutter |
| `--inset-grid-padding-block` | `var(--card-spacing)` | Top and bottom spacer size |

Spacing uses grid gutters and generated `::before` / `::after` spacer items, with no container padding or negative margins. These pseudo-elements are reserved for this layout. The existing `--inset-grid-padding-*` variable names remain available for configuring the inset.

Override the inline and block spacing independently using the existing spacing tokens:

<HtmlPreviewer :code="InsetGridDemo.customSpacing()" />

`.bleed-inline` affects only the inline axis; block spacers remain unless a block bleed modifier removes them. Existing child margins still apply. Wrap bare text in an element so it can be placed in the content column. The modifier affects direct children only and does not change their display type or create another grid. Nested `.inset-grid` elements establish their own gutters.

Unlike `.content-grid`, this component has no maximum content width or breakout tier. It fills its available container width and works in both left-to-right and right-to-left layouts. It is included in the full and no-utilities bundles.

## Nested Inset Grids

Combine `.bleed-inline` and `.inset-grid` on a direct child when its background should reach the edges while its content stays inset. Each nested grid creates its own content and bleed-inline tracks:

<HtmlPreviewer :code="InsetGridDemo.nested()" />

## Right-to-Left Layouts

The gutters follow the inline axis automatically. No additional modifier is needed for RTL content:

<HtmlPreviewer :code="InsetGridDemo.rtl()" />

## Choosing a Layout

| Component | Use it for |
| --- | --- |
| `.inset-grid` | Local containers with fixed inline gutters and optional bleed-inline children |
| `.content-grid` | Page layouts with constrained content, breakout, and full-width columns |
| `.card` | A styled surface with background, border, radius, and header/footer treatment |

These examples use border and background utilities to make the layout visible. Those decorative utilities require the full bundle; `.inset-grid` and `.bleed-inline` also work in the no-utilities bundle.

<script setup>
import { InsetGridDemo } from "@demos/components";
</script>

---
aside: false
---

# Inset Grid

Use `.inset-grid` on a block element to give its content the same inset as a card. Direct children sit in a flexible central column, with padding forming the inline gutters. Add `.bleed-inline` to a direct child to span both gutters and reach the container’s inline edges.

## Basic Usage

Apply `.inset-grid` to a container. Each direct child is placed in the central content column:

<HtmlPreviewer :code="InsetGridDemo.main()" />

## Full Bleed

Add `.bleed-inline` to a direct child to span the gutters without negative margins:

<HtmlPreviewer :code="InsetGridDemo.fullBleed()" />

The child keeps its normal display behavior. Its background spans the container, and its own content starts at its edge unless you give it an inset.

The component supplies layout only. It does not add a card background, border, radius, or header/footer treatment. Use it independently of `.card`; card headers and footers have their own margin-based spacing rules.

## Directional Bleed

Combine these classes on direct children. Using `.bleed-start` and `.bleed-end` together has the same effect as `.bleed-inline`:

| Class | Effect |
| --- | --- |
| `.bleed-inline` | Reaches both inline edges |
| `.bleed-start` | Reaches the inline start edge (left in LTR, right in RTL) |
| `.bleed-end` | Reaches the inline end edge (right in LTR, left in RTL) |
| `.bleed-top` | Removes the top padding when applied to the first child |
| `.bleed-bottom` | Removes the bottom padding when applied to the last child |
| `.bleed-block` | Removes the top padding for the first child and the bottom padding for the last child |

For a header that reaches the top and both sides, use `class="bleed-inline bleed-top"`. For a footer, use `class="bleed-inline bleed-bottom"`:

<HtmlPreviewer :code="InsetGridDemo.directionalBleed()" />

A single child with `.bleed-block` removes both sides of block padding. Add `.bleed-inline` to reach all four edges:

<HtmlPreviewer :code="InsetGridDemo.blockBleed()" />

Block modifiers only affect the container’s outer spacing; they do not move middle children or remove their margins. Top and bottom refer to the block edges in the normal horizontal writing mode.

## Spacing

| Variable | Default | Purpose |
| --- | --- | --- |
| `--_inset-grid-inline` | `var(--spacing)` | Width of each inline gutter |
| `--_inset-grid-block` | `var(--spacing)` | Top and bottom padding size |

Despite its name, `.inset-grid` uses a column flex layout with padding. Bleeding children expand across one or both inline gutters; no negative margins are needed.

Override the inline and block spacing independently using the existing spacing tokens:

<HtmlPreviewer :code="InsetGridDemo.customSpacing()" />

`.bleed-inline` affects only the inline axis; block padding remains unless a block bleed modifier removes them. Existing child margins still apply. Bare text stays inside the padding. Wrap mixed inline content, such as text with a link, in a paragraph so it flows together instead of becoming separate flex items. The modifier affects direct children only and does not change their display type or create another grid. Nested `.inset-grid` elements establish their own gutters.

Unlike `.content-grid`, this component has no maximum content width or breakout tier. It fills its available container width and works in both left-to-right and right-to-left layouts. It is included in the full and no-utilities bundles.

## Nested Inset Grids

Combine `.bleed-inline` and `.inset-grid` on a direct child when its background should reach the edges while its content stays inset. Each nested container establishes its own padding:

<HtmlPreviewer :code="InsetGridDemo.nested()" />

## Right-to-Left Layouts

The gutters follow the inline axis automatically. No additional modifier is needed for RTL content:

<HtmlPreviewer :code="InsetGridDemo.rtl()" />

<script setup>
import { InsetGridDemo } from "@demos/components";
</script>

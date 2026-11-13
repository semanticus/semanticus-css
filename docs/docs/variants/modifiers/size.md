# Size Modifiers

The `.size-sm`, `.size-md`, and `.size-lg` modifiers size supported controls and adjust container spacing through CSS variables.

| Modifier | Control/label font | Block / inline padding | Container spacing | Range scale |
| --- | --- | --- | --- | --- |
| `.size-sm` | `0.875rem` | `0.25rem` / `0.5rem` | 0.5 × `--spacing` | 0.875 |
| `.size-md` | `1rem` | `0.25rem` / `0.375rem` | 0.75 × `--spacing` | 0.9 |
| `.size-lg` | `1.125rem` | `0.625rem` / `1rem` | 1.5 × `--spacing` | 1.125 |

## Examples

<HtmlPreviewer :code="SizeDemo.scale()" />

## Breakdown

- A generic wrapper such as `<div class="size-sm">` does not resize its descendants, except for: `[role="group"]`, `[role="search"]` and `<label>` which do affect their input children.
- Cards and panes keep their typography and the size of nested controls; apply a size modifier to an individual child control if desired.
- Textarea rows and select options still determine their content height.

| Supported element | Effect |
| --- | --- |
| `button`, `[role="button"]`, button/submit/reset inputs | Sized text and padding |
| Text-like inputs, file inputs, color inputs, `select`, `textarea` | Sized text and padding; input height follows the new size |
| Checkboxes, radio buttons, switches | Sized indicators; switch thumb travel follows its track |
| Ranges | Scaled thumb and track, with unchanged width |
| `label` | Sized label text; direct wrapped controls follow the size |
| `details` with a direct `summary[aria-haspopup="menu"]` | Sized trigger and menu text and padding, including button-style triggers |
| `.card` | Adjusted content, header, footer, and list-item spacing |
| `.pane` | Adjusted internal padding |
| `[role="alert"]`, `[role="status"]` | Adjusted padding, keeping message text unchanged |
| `dialog` | Adjusted content, header, and footer spacing; independent of width |
| Non-dropdown `details` | Adjusted content spacing and sized button-style summaries |
| `[role="group"]`, `[role="search"]` | Coordinated sizing of direct controls |
| Pagination | Apply a size modifier to its `role="group"` wrapper or individual button controls |

### Buttons

<HtmlPreviewer :code="SizeDemo.buttons()" />

### Role Buttons

Prefer native buttons. A custom `[role="button"]` also needs focusability and Enter/Space keyboard activation. This toggle example implements both and exposes its state through `aria-pressed`.

<HtmlPreviewer :code="SizeDemo.roleButtons()" />

## Input Buttons

<HtmlPreviewer :code="SizeDemo.inputButtons()" />

### Inputs

Search and validation icons retain their reserved space. File inputs also use the selected font on their file-selector button.

<HtmlPreviewer :code="SizeDemo.inputs()" />

### Checkboxes, Radio Buttons, and Switches

The indicators scale through their input font size. Switch tracks, thumbs, and thumb travel scale together. Use a wrapping label to keep the option text clickable; checked, disabled, and keyboard focus styles remain available.

<HtmlPreviewer :code="SizeDemo.checkboxes()" />

<HtmlPreviewer :code="SizeDemo.radios()" />

<HtmlPreviewer :code="SizeDemo.switches()" />

### Ranges

The selected level scales the existing thumb and track sizes and recalculates thumb centering. The `.size-sm`, `.size-md`, and `.size-lg` levels use 87.5%, 90%, and 112.5%, respectively. Slider width, min/max/step values, and native keyboard behavior remain unchanged. The existing `--input-range-thumb-size` and `--input-range-track-height` tokens still provide the base dimensions.

<HtmlPreviewer :code="SizeDemo.ranges()" />

### Color Pickers

Color inputs use the same selected height and padding as text inputs. The native color picker remains unchanged.

<HtmlPreviewer :code="SizeDemo.colorPickers()" />

### Labels

Apply `.size-sm` to a wrapping label to resize both its text and its direct input, select, or textarea. For a separate label connected with `for`/`id`, put `.size-sm` on both the label and the control. Styling an input alone does not resize a separate label. Labels use the `--label-font-size` slot, which otherwise inherits the surrounding text size.

<HtmlPreviewer :code="SizeDemo.labels()" />

### Select

<HtmlPreviewer :code="SizeDemo.selects()" />

### Textarea

<HtmlPreviewer :code="SizeDemo.textareas()" />

### Dropdowns

Put the size modifier on `details` to resize the complete dropdown. Putting it only on `summary[role="button"]` resizes that button, leaving the menu unchanged. Styling does not add menu keyboard behavior; see the [dropdown composite](/docs/composites/dropdown) for its structure and interaction requirements.

<HtmlPreviewer :code="SizeDemo.dropdowns()" :minHeight="400" />

### Cards

<HtmlPreviewer :code="SizeDemo.cards()" />

### Panes

<HtmlPreviewer :code="SizeDemo.panes()" />

### Alerts

Both `role="alert"` and `role="status"` support size-dependent padding. Message text and nested action buttons retain their normal size. Use the role appropriate to the urgency of the message.

<HtmlPreviewer :code="SizeDemo.alerts()" />

### Pagination

Pagination uses the existing group composite. Put the size modifier on its `role="group"` wrapper to size all page controls, or on an individual button. Navigation gaps and current/disabled state styles are preserved. The demo changes `aria-current`; loading the selected page remains application behavior.

<HtmlPreviewer :code="SizeDemo.pagination()" />

### Dialogs and Modals

Put the size modifier on the native `dialog`. It adjusts padding and header/footer spacing, without changing width, text size, or child control sizing. Modal behavior still comes from `showModal()`, Escape dismissal, and native focus handling. The examples use the same explicit width to make that distinction visible.

<HtmlPreviewer :code="SizeDemo.dialogs()" :minHeight="360" />

### Accordions

Apply the size modifier to non-dropdown `details`. Plain summaries have no default padding to scale; the modifier adjusts the gap below the open summary and content paragraph/list margins. Button-style summaries also follow the chosen control size. Content text remains unchanged, and native keyboard/disclosure behavior is preserved.

<HtmlPreviewer :code="SizeDemo.accordions()" />

### Button Groups

Group-level sizing applies to direct buttons and button-role controls, rather than requiring `.size-sm` on every child. Disabled and focus states remain available.

<HtmlPreviewer :code="SizeDemo.buttonGroups()" />

### Search and Form Groups

Direct inputs, selects, textareas, buttons, dropdowns, and labels share the selected sizing. Controls directly wrapped by those labels also follow the group size. Generic wrappers and nested groups do not automatically propagate sizing.

<HtmlPreviewer :code="SizeDemo.searchGroups()" :minHeight="320" />

<HtmlPreviewer :code="SizeDemo.selectionGroups()" />

### Customization

All three size classes define these local tokens:

| Token | Purpose |
| --- | --- |
| `--size-control-font-size` | Control and label font size; also scales checkbox/radio/switch geometry |
| `--size-padding-block` | Control vertical padding |
| `--size-padding-inline` | Control horizontal padding |
| `--size-spacing` | Container and content spacing |
| `--size-range-scale` | Multiplier for the existing range thumb and track dimensions |

Override tokens on an instance or in a size-class rule loaded after Semanticus:

```css
.size-lg {
  --size-padding-inline: 1.25rem;
}
```

Generic wrappers still do not apply size behavior. Explicit child size classes override group/label sizing without compounding the scale.

The component slots `--buttons-font-size`, `--inputs-font-size`, and `--label-font-size` remain available. Dropdowns expose `--details-dropdown-font-size`, `--details-menu-font-size`, `--details-menu-padding-block`, and `--details-menu-padding-inline`, alongside their trigger-padding tokens. `--details-dropdown-height` keeps grouped controls aligned. `--dialog-spacing` controls dialog interiors and marginals; `--details-spacing` controls the gap after an open accordion summary.

Controls retain their semantic focus, disabled, and validation styles. Smaller levels also reduce hit areas, so keep enough separation and assess touch target sizes. Container sizing changes spacing rather than content typography, dialog width, or slider width. The HTML `small` element and its existing `--font-size-sm` token retain their fine-print semantics.

<script setup>
import { SizeDemo } from "@demos/variants";
</script>

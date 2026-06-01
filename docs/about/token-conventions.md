# Token Naming Conventions

**Semanticus CSS** uses a 4-tier token system. Each tier builds on the previous,
giving you precise control over how broadly or narrowly a style change applies.

## Four Token Tiers

```
Tier 1: System Tokens        --property[-state]              page-level defaults
Tier 2: Palette Tokens       --{intent}-property[-state]      variant definitions
Tier 3: Component Tokens     --{component}-property[-state]   component-scoped slots
Tier 4: Individual Tokens    --_{component}-property[-state]  per-instance overrides
```

The flow: System → Palette → Component → Individual (`--_`).

---

## Tier 1: System Tokens

No scope prefix. These define the document-wide baseline and **must match
a CSS longhand property name** whenever possible.

```css
:root, :host {
  /* Background */
  --background-color
  --background-color-opacity
  --selection-background-color

  /* Color & Typography */
  --color
  --color-opacity
  --color-muted
  --typography-color
  --typography-spacing-vertical
  --font-family
  --font-size
  --font-weight
  --line-height
  --text-underline-offset

  /* Spacing */
  --spacing
  --spacing-base
  --spacing-scale

  /* Borders & Effects */
  --border-color
  --border-color-opacity
  --border-radius
  --border-width
  --outline-width
  --focus-ring-width
  --focus-ring-color
  --transition
  --disabled-opacity

  /* Overlays */
  --backdrop-background-color
}
```

System Tokens affect the entire page. Setting `--background-color` on a modifier
class changes the background of every component that reads it.

---

## Tier 2: Palette Tokens

Intent-specific definitions for design variants. These provide the raw color
values consumed by variant modifier classes. Users override these to define
custom palettes.

```
--{intent}-{property}[-{state}]
```

```css
:root, :host {
  --primary-color
  --primary-color-hover
  --primary-background-color
  --primary-background-color-hover
  --primary-focus-ring-color

  --secondary-color
  --secondary-color-hover
  --secondary-background-color
  --secondary-background-color-hover
  --secondary-focus-ring-color

  --contrast-color
  --contrast-color-hover
  --contrast-background-color
  --contrast-background-color-hover
  --contrast-focus-ring-color

  --success-color / --success-background-color / --success-focus-ring-color
  --info-color    / --info-background-color    / --info-focus-ring-color
  --warning-color / --warning-background-color / --warning-focus-ring-color
  --danger-color  / --danger-background-color  / --danger-focus-ring-color
  /* (each with *-hover variants) */
}
```

Palette Tokens are referenced by variant classes but don't directly style
elements — they feed into the tiers below.

---

## Tier 3: Component Tokens

Scoped to a component type. Setting one of these changes **every instance**
of that component (e.g., all buttons, all inputs, all dialogs).

```
--{component}[-{part}]-{property}[-{state}]
```

```css
:root, :host {
  /* Buttons — button, input[type=button/submit/reset], [role=button] */
  --buttons-font-size
  --buttons-color / --buttons-color-hover
  --buttons-spacing-vertical / --buttons-spacing-horizontal
  --buttons-background-color / --buttons-background-color-hover
  --buttons-border-color / --buttons-border-color-hover

  /* Inputs — input, select, textarea, details */
  --inputs-spacing-vertical / --inputs-spacing-horizontal
  --inputs-background-color / --inputs-background-color-focus
  --inputs-border-color
  --inputs-color
  --inputs-accent-color
  --inputs-placeholder-color
  --inputs-focus-ring-width

  /* Input subtypes */
  --input-checkbox-border-width
  --input-range-track-border-color
  --input-range-thumb-border-color
  --input-search-border-radius
  --input-switch-background-color
  --input-switch-thumb-background-color
  --input-switch-border-width
  --input-switch-border-radius

  /* Dialog — also affects cards */
  --dialog-border-color / --dialog-background-color / --dialog-box-shadow
  --dialog-marginals-background-color / --dialog-marginals-border-color

  /* Details — accordions and dropdowns */
  --details-summary-background-color
  --details-summary-color / --details-summary-color-focus / --details-summary-color-open
  --details-dropdown-color / --details-dropdown-border-color
  --details-dropdown-spacing-vertical / --details-dropdown-spacing-horizontal
  --details-menu-background-color / --details-menu-border-color
  --details-menu-color / --details-menu-background-color-hover

  /* Links */
  --links-color / --links-text-decoration

  /* Headings */
  --heading-font-weight
  --h1-font-size / --h1-line-height / --h1-margin-top
  --h2-font-size / --h2-line-height / --h2-margin-top
  /* ... through h6 */

  /* Lists */
  --lists-marker-color

  /* Code */
  --code-background-color / --code-color
  --kbd-background-color / --kbd-color / --kbd-font-weight

  /* Table */
  --table-header-font-weight / --table-header-border-width

  /* Navigation */
  --nav-link-gap / --nav-breadcrumb-divider

  /* Progress */
  --progress-accent-color / --progress-track-background-color

  /* Tooltip */
  --tooltip-background-color / --tooltip-color

  /* Misc */
  --small-font-size
  --sidebar-size
  --group-button-spacing-horizontal
  --icons-background-position-gap / --icons-width
}
```

---

## Tier 4: Individual Component Tokens

Private tokens prefixed with `--_`. Defined **in each component's CSS file**
and initialized from the Component Token tier. These are the values the
component actually consumes for its own styling.

```
--_{component}[-{part}]-{property}[-{state}]
```

```css
/* Inside _buttons.css */
button, [role="button"] {
  --_buttons-color: var(--buttons-color);
  --_buttons-background-color: var(--buttons-background-color);
  --_buttons-border-color: var(--buttons-border-color);
  --_buttons-focus-ring-color: var(--focus-ring-color);

  background-color: var(--_buttons-background-color);
  color: var(--_buttons-color);
  border-color: var(--_buttons-border-color);
}

/* Inside inputs/_common.css */
:where(input, select, textarea) {
  --_inputs-background-color: var(--inputs-background-color);
  --_inputs-border-color: var(--inputs-border-color);
  --_inputs-focus-ring-color: var(--focus-ring-color);

  background-color: var(--_inputs-background-color);
  border-color: var(--_inputs-border-color);
}

/* Inside _dialog.css */
dialog {
  --_dialog-border-color: var(--dialog-border-color);
  --_dialog-background-color: var(--dialog-background-color);

  border-color: var(--_dialog-border-color);
  background: var(--_dialog-background-color);
}
```

---

## How Modifier Classes Work Across Tiers

Modifier classes (`.primary`, `.secondary`, etc.) can target any tier to control
the scope of their effect:

### Override System Tokens → affects entire page
```css
.primary {
  --color: var(--primary-color);
  --background-color: var(--primary-background-color);
}
```

### Override Component Tokens → affects all instances of that component
```css
.primary {
  --buttons-background-color: var(--primary-background-color);  /* all buttons */
  --links-color: var(--primary-color);                          /* all links */
}
```

### Override Individual Tokens → affects only this specific instance
```css
/* Inside variants/intent/_common.css */
.primary {
  --_buttons-color: #fff;
  --_buttons-background-color: var(--intent-background-color);
  --_card-background-color: var(--intent-background-color);
}
```

The 4-tier cascade means no combinatorial explosion — `.ghost` works with any
intent class without separate blocks for `.ghost.primary`, `.ghost.secondary`, etc.

---

## Property Name Rules

Tokens at Tiers 1-3 must use CSS longhand property names:

| ✓ Do this | ✖ Not this | Because |
| --- | --- | --- |
| `--background-color` | `--background` | `background` resets image, position, etc. |
| `--border-color` | `--border` | `border` resets width and style |
| `--border-width` | `--border-size` | CSS property is `border-width` |
| `--outline-width` | `--outline-size` | CSS property is `outline-width` |

### Genuine Exceptions

| Token | Reason |
| --- | --- |
| `--spacing` / `--spacing-base` / `--spacing-scale` | Density values used across multiple properties |
| `--transition` | Composite value — splitting adds tokens without benefit |
| `--nav-breadcrumb-divider` | Content string, not a CSS property value |
| `--disabled-opacity` | Generic opacity applied to multiple properties |

### State Ordering

State always comes last:
```css
--buttons-background-color-hover
--input-switch-background-color-checked
--details-summary-color-open
```

### Opacity Tokens

Append `-opacity` for use with `oklch(from ... l c h / var(...))`:
```css
--background-color-opacity
--color-opacity
--border-color-opacity
```

### Spacing Tokens

Use `spacing` as the property segment:
```css
--spacing                       /* global density */
--typography-spacing-vertical   /* block margins */
--inputs-spacing-vertical       /* form padding */
--buttons-spacing-vertical
--details-dropdown-spacing-vertical
```

### Cascade-Seed Tokens

Tokens on `:root` that propagate via inheritance use the CSS property name:
```css
--font-size      /* seeds rem calculations */
--line-height    /* inherited by all text */
--font-weight    /* inherited baseline */
--text-underline-offset
```

---

## Migration from v2.2.0 to v3.0.0

| Old (v2.2.0) | New (v3.0.0) | Notes |
| --- | --- | --- |
| `--color-primary-fill` | `--primary-background-color` | `fill` → `background-color` |
| `--color-primary-text` | `--primary-color` | `text` → `color` |
| `--color-primary-focus-ring` | `--primary-focus-ring-color` | Property-mapped |
| `--color-background` | `--background-color` | Global, no `--color-` wrapper |
| `--color-text` | `--color` | Global text |
| `--color-text-muted` | `--color-muted` | Muted variant |
| `--color-border` | `--border-color` | Global border |
| `--dialog-fill` | `--dialog-background-color` | Component + property |
| `--input-border-focus` | `--inputs-border-color-focus` | State at end |
| `--switch-thumb-glow` | `--input-switch-thumb-box-shadow` | Property name |
| `--loading-spinner-opacity` | removed | Unused |
| `--shadow` | `--_buttons-box-shadow` / `--_inputs-box-shadow` | Scoped private tokens |
| `--button-*` | `--buttons-*` | Pluralized |
| `--input-*` | `--inputs-*` | Pluralized |
| `--h1-gap-top` | `--h1-margin-top` | Property-mapped |
| `--dialog-section-*` | `--dialog-marginals-*` | Renamed |
| `--menu-*` | `--details-menu-*` | Scoped under details |
| `--pane-*` | `--dialog-*` | Consolidated |
| `--range-*` | `--input-range-*` | Scoped under inputs |
| `--switch-*` | `--input-switch-*` | Scoped under inputs |
| `--search-*` | `--input-search-*` | Scoped under inputs |
| `--checkbox-*` | `--input-checkbox-*` | Scoped under inputs |
| `--progress-background-color` | `--progress-accent-color` | Property-mapped |

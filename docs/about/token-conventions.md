# Token Naming Conventions

Semanticus CSS tokens map directly to CSS property names whenever possible.
No memorizing role names — if you know CSS, you know the tokens.

## Core principle

**Token names match the CSS property they control.**

| Instead of | Use | Because |
| --- | --- | --- |
| `--color-primary-fill` | `.primary { --background-color: var(--primary-background-color); }` | `background-color` is the property. The variant is the *selector*, not the token name. |
| `--switch-thumb-glow` | `--switch-thumb-box-shadow` | `box-shadow` is the property that creates the glow. |
| `--input-border-focus` | `--input-border-color-focus` | `border-color` is the property. No guesswork. |

Every token name is a CSS property name, optionally prefixed by a component or variant scope.
If you know the CSS property you want to change, you know the token name.

## Token structure

```
[--{scope}-]{property}[-{state}]
```

| Segment | Description | Examples |
| --- | --- | --- |
| `scope` *(optional)* | Component, variant, or part name | `button`, `card`, `primary`, `dialog-header` |
| `property` | A CSS longhand property name | `background-color`, `color`, `border-color`, `border-width`, `font-size`, `box-shadow` |
| `state` *(optional)* | Interaction or ARIA state | `hover`, `focus`, `active`, `checked`, `disabled`, `open` |

### Three token tiers

#### 1. Global tokens — page-level defaults

No scope prefix. These define the document-wide baseline.

```
--{property}[-{state}]
```

```css
:root,
:host {
  --background-color          /* page background */
  --color                     /* page text color */
  --color-muted               /* muted/secondary text */
  --border-color              /* page border color */
  --border-width              /* global border thickness */
  --border-radius             /* global corner radius */
  --font-family               /* default body font stack */
  --font-size                 /* root font size */
  --font-weight               /* root font weight */
  --line-height               /* root line height */
  --outline-width             /* focus ring thickness */
  --focus-ring-color          /* focus ring color (used in box-shadow) */
  --box-shadow                /* global shadow stack */
  --transition                /* default transition duration + easing */
  --backdrop-background-color /* global background for modals, dialogs, and other overlays */
}
```

#### 2. Palette tokens — variant-specific definitions

These are raw color definitions for design variants (`primary`, `secondary`, etc.).
They are *consumed* by variant classes — users rarely set these directly unless defining a custom palette.

```
--{variant}-{property}[-{state}]
```

```css
:root,
:host {
  --primary-background-color           /* .primary background */
  --primary-background-color-hover     /* .primary background on hover */
  --primary-color                      /* .primary text color */
  --primary-color-hover                /* .primary text color on hover */
  --primary-border-color               /* .primary border color */
  --primary-focus-ring-color           /* .primary focus ring color */

  --secondary-background-color
  --secondary-background-color-hover
  --secondary-color
  --secondary-color-hover
  --secondary-border-color
  --secondary-focus-ring-color

  --contrast-background-color
  --contrast-background-color-hover
  --contrast-color
  --contrast-color-hover
  --contrast-border-color
  --contrast-focus-ring-color

  /* ... same pattern for success, info, warning, danger */
}
```

Note: the variant is part of the token *name* here because multiple palettes coexist in `:root`.
But when writing styles, the variant is the CSS *class selector* — see the Variants section below.

#### 3. Component tokens — component-scoped overrides

Every component defines its own variable slots with the component name as the scope prefix.
These fall back to the global tokens.

```
--{component}[-{part}]-{property}[-{state}]
```

```css
:root,
:host {
  --button-background-color
  --button-background-color-hover
  --button-color
  --button-color-hover
  --button-border-color
  --button-border-width
  --button-border-radius
  --button-box-shadow
  --button-box-shadow-hover
  --button-focus-ring-color

  --card-background-color
  --card-border-color
  --card-header-background-color
  --card-footer-background-color

  --input-background-color
  --input-background-color-focus
  --input-color
  --input-border-color
  --input-border-color-focus
  --input-placeholder-color
  --input-opacity-disabled

  --dialog-background-color
  --dialog-border-color
  --dialog-section-background-color

  --switch-background-color
  --switch-background-color-checked
  --switch-thumb-background-color

  --progress-background-color
  --progress-track-background-color

  --nav-background-color
  --nav-link-gap
  --nav-breadcrumb-divider

  --menu-background-color
  --menu-border-color
  --menu-color
  --menu-background-color-hover
  --menu-box-shadow

  --code-background-color
  --code-color
  --kbd-background-color
  --kbd-color

  --tooltip-background-color
  --tooltip-color

  --details-summary-color
  --details-summary-color-hover
  --details-summary-color-open

  --table-header-background-color
  --table-row-background-color-striped
}
```

## How components, variants, and modifiers compose

### Components set up their own slots

```css
.button, [role="button"] {
  background-color: var(--button-background-color, var(--background-color));
  color: var(--button-color, var(--color));
  border-color: var(--button-border-color, var(--border-color));
  border-width: var(--button-border-width, var(--border-width));
  border-radius: var(--button-border-radius, var(--border-radius));
}

.card {
  background-color: var(--card-background-color, var(--background-color));
  border-color: var(--card-border-color, var(--border-color));
}
```

Every property uses a component-scoped variable with a fallback to the global token.
This means any component can be styled independently.

### Variants override generically or per-component

```css
.primary {
  --background-color: var(--primary-background-color);
  --color: var(--primary-color);
  --border-color: var(--primary-border-color);
}

.primary:hover,
.primary:focus {
  --background-color: var(--primary-background-color-hover);
  --color: var(--primary-color-hover);
}

/* Override just buttons within primary contexts */
.primary {
  --button-focus-ring-color: var(--primary-focus-ring-color);
}
```

Because components read `var(--button-background-color, var(--background-color))`,
setting `--background-color` on `.primary` changes all components equally.
To differentiate, set the component-scoped variable:

```css
.secondary {
  --background-color: var(--secondary-background-color);
  --color: var(--secondary-color);
  --button-background-color: black;  /* different for buttons only */
}
```

### Modifiers set explicit values

```css
.ghost {
  --button-background-color: transparent;
  --button-border-color: var(--border-color);   /* inherits whatever variant is active */
  --button-color: var(--color);                  /* inherits whatever variant is active */
}
```

No combinatorial explosion — `.ghost` doesn't need separate blocks for `.ghost.primary`,
`.ghost.secondary`, etc. The cascade handles it.

## Property name rules

### Use CSS longhand property names

| ✓ Do this | ✖ Not this | Because |
| --- | --- | --- |
| `--background-color` | `--background` | `background` is a shorthand — it resets `background-image`, `background-position`, etc. |
| `--border-color` | `--border` | `border` is a shorthand for `border-width`, `border-style`, `border-color` |
| `--margin-top` | `--margin` | `margin` is a shorthand for all four sides |
| `--border-radius` | — | fine, `border-radius` is a longhand (the shorthand sets all four corners) |
| `--border-width` | `--border-size` | CSS property is `border-width` |
| `--outline-width` | `--outline-size` | CSS property is `outline-width` |

### Genuine exceptions

A small number of tokens don't map directly to a CSS longhand property name.
These are the *only* exceptions — every other token follows the rule.

| Token | CSS property | Reason |
| --- | --- | --- |
| `--spacing` | (multiple) | Not a CSS property — a density value used across `padding`, `margin`, `gap`, etc. |
| `--transition` | `transition` | A shorthand used as a single composite value (`0.2s ease-in-out`). Breaking it into `--transition-duration` and `--transition-timing-function` would add tokens without practical benefit. |

## State ordering

State always comes last. Multiple states are hyphenated in interaction order:

```css
:root,
:host {
  --button-background-color-hover
  --button-background-color-active
  --switch-background-color-checked
  --switch-thumb-background-color-checked-hover   /* checked AND hovered */
}
```

## Theme-invariant tokens

Some tokens have the same value in both light and dark mode. Define them as plain values — no `light-dark()` needed:

```css
:root,
:host {
  --button-box-shadow: 0 0 0 rgb(0 0 0 / 0);   /* always transparent */
  --input-opacity-disabled: 0.5;                 /* always half-opacity */
  --switch-thumb-background-color: white;        /* thumb always white */
}
```

The absence of `light-dark()` is intentional, not an omission.

## Opacity tokens

When a color token needs a separate opacity channel (for `oklch(from ... l c h / var(...))` patterns),
append `-opacity`:

```css
:root,
:host {
  --background-color-opacity   /* default: 100% */
  --color-opacity              /* default: 100% */
  --border-color-opacity       /* default: 100% */
}
```

These are property-mapped: the property name + `-opacity`.

## Spacing tokens

Spacing tokens use `spacing` as the property segment for internal padding/gap values
that don't map to a single CSS property:

```css
:root,
:host {
  --spacing                       /* base spacing unit (used in padding, margin, gap) */
  --input-spacing-vertical        /* input internal vertical padding */
  --input-spacing-horizontal      /* input internal horizontal padding */
  --typography-spacing-vertical   /* vertical margin between typographic blocks */
}
```

## Cascade-seed tokens

Some tokens are set on `:root` or an ancestor and propagate via CSS inheritance
rather than explicit `var()` references. These use the CSS property name directly:

```css
:root,
:host {
  --font-size                  /* root font-size — seeds rem calculations */
  --line-height                /* root line-height — inherited by all text */
  --font-weight                /* root font-weight — inherited baseline */
  --text-underline-offset      /* root underline offset — inherited by links */
}
```

The property name *is* the intent — the inheritance mechanism is the feature.

## Font family tokens

Font family tokens use `font-family` as the base, with an optional variant:

```css
:root,
:host {
  --font-family                /* default body font stack */
  --font-family-sans-serif     /* sans-serif stack override */
  --font-family-monospace      /* monospace stack (code, pre, kbd) */
  --font-family-emoji          /* emoji font stack */
}
```

## Internal / calculation helper tokens

Tokens prefixed with `--base-` are **internal helpers** used only inside `calc()` expressions.
They are not part of the public API:

```css
--spacing-base           /* base unit for the spacing scale */
```

Do not reference these directly in component or utility CSS; derive via `calc()` only.

## Content / string tokens

Tokens whose value is a CSS `content` string (for `::before` / `::after` pseudo-elements)
use the `-content` suffix:

```css
--nav-breadcrumb-divider    /* breadcrumb separator content string */
```

These follow the component token pattern (`{component}[-{part}]-content`) and hold an arbitrary CSS string value, not a colour or size.

## Migration from v0.x (role-based convention)

If you're upgrading from an earlier version that used role-based names:

| Old (v0.x) | New (v1.x) | Notes |
| --- | --- | --- |
| `--color-primary-fill` | `--primary-background-color` | `fill` → `background-color`; variant is prefix, no `--color-` wrapper |
| `--color-primary-text` | `--primary-color` | `text` → `color` |
| `--color-primary-on-fill` | `--primary-color` | Same as text — the "on fill" role is context-dependent and doesn't need a separate token |
| `--color-primary-focus-ring` | `--primary-focus-ring-color` | `focus-ring` + `color` suffix |
| `--color-background` | `--background-color` | Global page background |
| `--color-text` | `--color` | Global page text |
| `--color-text-muted` | `--color-muted` | Muted text variant |
| `--color-border` | `--border-color` | Global border color |
| `--dialog-fill` | `--dialog-background-color` | Component + property |
| `--input-border-focus` | `--input-border-color-focus` | State at end, `border-color` |
| `--switch-thumb-glow` | `--switch-thumb-box-shadow` | Property name replaces role name |

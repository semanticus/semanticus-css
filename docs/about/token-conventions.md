# Token Naming Conventions

## Two token patterns

### 1. System tokens — palette/theme level

```
--{type}[-{variant}]-{role-or-effect}[-{state}]
```

| Segment | Description | Examples |
|---------|-------------|-------|
| `type` | What kind of value | `color`, `shadow`, `filter`, `font-family`, `radius`, `border`, `outline` |
| `variant` *(optional)* | Design variant — omit for global/page-level tokens that apply to the whole document | `primary`, `secondary`, `contrast`, `muted` |
| `role-or-effect` | What it styles or does *(not the CSS property)* | `text`, `fill`, `on-fill`, `underline`, `focus-ring`, `selection`, `border`, `radius`, `glow`, `shadow`, `ring`, `opacity` |
| `state` *(optional)* | Interaction state | `hover`, `active`, `focus`, `disabled` |

**Examples:**

```css
--color-primary-text          /* color / primary / text foreground */
--color-primary-fill          /* color / primary / background fill */
--color-primary-on-fill       /* color / primary / text rendered on top of the fill */
--color-primary-focus-ring    /* color / primary / focus ring indicator */
--color-primary-text-hover    /* color / primary / text foreground / hover state */
--color-primary-fill-hover    /* color / primary / background fill / hover state */
--color-selection             /* color / (no variant) / global text selection highlight */
--color-text                  /* color / (no variant) / page body text */
--color-text-muted            /* color / (no variant) / page body text / muted state */
--color-background            /* color / (no variant) / page background fill */
```

> **Omitting the variant:** drop the variant segment only for page-level global tokens
> that apply to the document as a whole — body text, page background, text selection.
> Design-role tokens (`primary`, `secondary`, `contrast`, `muted`) always include a variant.

---

### 2. Component tokens — component level

```
--{component}[-{part}]-{role-or-effect}[-{state}]
```

| Segment | Description | Examples |
|---------|-------------|---------|
| `component` | The component targeted | `switch`, `button`, `input`, `dialog`, `nav`, `progress`, `details`, `table`, `range`, `select` |
| `part` *(optional)* | Sub-element — include whenever the effect targets a specific part, even if it's the only part with that effect | `thumb`, `track`, `trigger`, `overlay`, `header`, `row`, `cell`, `indicator` |
| `role-or-effect` | What it styles or does *(not the CSS property)* | `text`, `fill`, `on-fill`, `underline`, `focus-ring`, `border`, `radius`, `glow`, `shadow`, `ring`, `gap`, `size`, `spacing`, `opacity` |
| `state` *(optional)* | Interaction or ARIA state | `hover`, `active`, `focus`, `checked`, `disabled`, `invalid`, `valid`, `open`, `expanded` |

**`component` — targeting a specific element or widget:**

```css
--button-radius               /* button / corner radius */
--button-border               /* button / border color */
--input-fill                  /* input / background fill */
--input-border                /* input / border color */
--input-border-focus          /* input / border color / focused */
--dialog-overlay              /* dialog / backdrop overlay color */
--nav-fill                    /* nav / background fill */
--progress-fill               /* progress bar / filled track color */
--progress-track-fill         /* progress bar / unfilled track (background) */
--table-row-fill-striped      /* table / row fill / striped variant */
--switch-fill                 /* switch / background fill */
--switch-fill-checked         /* switch / background fill / checked state */
--switch-thumb-glow           /* switch / thumb / glow effect */
--range-thumb-fill            /* range input / thumb fill */
--range-track-fill            /* range input / track fill */
```

**`part` — when to include it:**

```css
/* Include part whenever the effect targets a specific sub-element */
--switch-thumb-glow           /* ✓ the glow is on the thumb, name it */
--range-thumb-fill            /* ✓ fill is on the thumb specifically */
--range-track-fill            /* ✓ fill is on the track specifically */
--progress-track-fill         /* ✓ fill is on the track, not the indicator */
--table-row-fill-striped      /* ✓ fill is on rows, not cells */

/* Omit part only when the role belongs to the component as an undivided whole */
--button-radius               /* ✓ the whole button has one radius */
--nav-fill                    /* ✓ the nav as a whole has a background */
--dialog-overlay              /* ✓ the overlay is the dialog's backdrop, not a sub-part */
```

> **Rule:** include `part` whenever the effect targets a specific sub-element, even if
> it's the only sub-element with that effect. Omit it only when the role belongs to the
> component as an undivided whole — where no reasonable sub-element reading exists.

---

## Core principle

**Role names describe intent, not CSS properties.**

| Instead of | Use | Because |
|---|---|---|
| `--color-primary-background-color` | `--color-primary-fill` | `fill` survives if you switch from `background-color` to `background` |
| `--switch-thumb-box-shadow` | `--switch-thumb-glow` | `glow` describes the visual effect; `box-shadow` describes the implementation |
| `--button-border-radius` | `--button-radius` | Shorter, property-agnostic |

---

## State ordering

State always comes last. Multiple states are hyphenated in interaction order:

```css
--color-primary-fill-hover
--color-primary-fill-active
--switch-fill-checked
--switch-thumb-glow-checked-hover   /* checked AND hovered — uncommon, but valid */
```

---

## Theme-invariant tokens

Some component tokens have the same value in both light and dark mode. Define them as plain values — no `light-dark()` needed:

```css
--button-shadow: 0 0 0 rgb(0 0 0 / 0);   /* always transparent */
--input-opacity-disabled: 0.5;            /* always half-opacity */
--switch-thumb-fill: white;               /* thumb always white */
--loading-spinner-opacity: 0.5;
```

These still follow the naming convention; the absence of `light-dark()` is intentional, not an omission.

---

## Standalone multi-value tokens

Not all tokens carry a `--color-` prefix. Properties like `box-shadow` or `backdrop-filter` produce multi-value output and get a plain descriptive name at the component or global level:

```css
--shadow                      /* global page/card shadow stack */
--button-shadow               /* button-specific shadow */
--button-shadow-hover         /* button shadow on hover */
```

For theme-aware shadows, use `light-dark()` inside each layer's color rather than duplicating the whole declaration:

```css
--shadow:
  0.5rem 1rem 6rem light-dark(rgb(129 145 181 / 0.06), rgb(7 9 12 / 0.06)),
  0 0 0 0.0625rem  light-dark(rgb(129 145 181 / 0.015), rgb(7 9 12 / 0.015));
```

---

## Global size tokens

A small number of tokens represent global geometric defaults — the baseline radius, border thickness, and outline thickness used across all interactive elements. These sit at the top of the component token hierarchy and use a short, role-only name with no component prefix (identical to `--shadow` in the standalone multi-value section):

```css
--radius          /* global default corner radius */
--border-size     /* global default border thickness */
--outline-size    /* global default outline/focus-ring thickness */
```

Individual components override these as needed:

```css
--button-radius           /* button overrides the global radius */
[type="search"] { --radius: 5rem; }  /* search overrides inline */
```

---

## Spacing role

`spacing` is a valid `role-or-effect` segment for component tokens when the token controls internal padding rather than a colour, size, or shadow:

```css
--input-spacing-vertical    /* input / internal vertical padding */
--input-spacing-horizontal  /* input / internal horizontal padding */
--nav-link-gap              /* nav / gap between link icon and label */
```

---

## Global cascade-seed tokens

A handful of tokens intentionally use CSS property names as their role segment. These are **cascade seeds** — they are set on a root or ancestor element and propagate to descendant elements via CSS inheritance, not via explicit `var()` references in child rules. The property name *is* the intent here; using a semantic alias would obscure the mechanism.

```css
--font-size                  /* root font-size — seeds rem calculations */
--line-height                /* root line-height — inherited by all text */
--font-weight                /* root font-weight — inherited baseline */
--text-underline-offset      /* root underline offset — inherited by links */
--typography-spacing-vertical /* vertical margin between typographic blocks */
```

These tokens are exempt from the "role describes intent, not the CSS property" rule because they *are* the property — the inheritance mechanism is the feature.

---

## Font family tokens

Font family tokens use `font-family` as the type prefix, with an optional variant for specific stacks:

```css
--font-family               /* default body font stack */
--font-family-sans-serif    /* sans-serif stack override */
--font-family-monospace     /* monospace stack (code, pre, kbd) */
--font-family-emoji         /* emoji font stack */
```

The `font-family` prefix is permitted here even though `font-family` is a CSS property name, because the tokens exist solely to expose font stack overrides — there is no semantic alias that would be more meaningful.

---

## Internal / calculation helper tokens

Tokens prefixed with `--base-` or named `--spacing` are **internal helpers** used only inside `calc()` expressions. They are not part of the public API and do not need to follow the two-pattern convention:

```css
--base-spacing           /* base unit for the spacing scale */
--spacing                /* computed spacing step derived from base × responsive multiplier */
```

Do not reference these tokens directly in component or utility CSS; derive from `--spacing` via `calc()` only.

---

## Content / string tokens

Tokens whose value is a CSS `content` string (for `::before` / `::after` pseudo-elements) use a `-content` role suffix:

```css
--nav-breadcrumb-divider    /* breadcrumb separator content string */
```

These follow the component token pattern (`{component}[-{part}]-content`) and hold an arbitrary CSS string value, not a colour or size.

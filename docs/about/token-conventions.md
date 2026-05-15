# Token Naming Conventions

## Two token patterns

### 1. System tokens — palette/theme level

```
--{type}-{variant}-{role-or-effect}[-{state}]
```

| Segment | Description | Examples |
|---------|-------------|-------|
| `type` | What kind of value | `color`, `shadow`, `filter` |
| `variant` | Design variant | `primary`, `secondary`, `contrast` |
| `role-or-effect` | What it styles or does *(not the CSS property)* | `text`, `fill`, `on-fill`, `underline`, `focus-ring`, `selection`, `border`, `radius`, `glow`, `shadow`, `ring`, `opacity` |
| `state` *(optional)* | Interaction state | `hover`, `active`, `focus`, `disabled` |

**Examples:**

```css
--color-primary-text          /* color / primary / text foreground */
--color-primary-fill          /* color / primary / background fill */
--color-primary-underline     /* color / primary / link underline decoration */
--color-primary-on-fill       /* color / primary / text rendered on top of the fill */
--color-primary-focus-ring    /* color / primary / focus ring indicator */
--color-primary-text-hover    /* color / primary / text foreground / hover state */
--color-primary-fill-hover    /* color / primary / background fill / hover state */
--color-selection             /* color / (no variant — global) / selection highlight */
```

---

### 2. Component tokens — component level

```
--{component}[-{part}]-{role-or-effect}[-{state}]
```

| Segment | Description | Examples |
|---------|-------------|---------|
| `component` | The component targeted | `switch`, `button`, `input`, `dialog`, `nav`, `progress`, `details`, `table`, `range`, `select` |
| `part` *(optional)* | Sub-element — include whenever the effect targets a specific part, even if it's the only part with that effect | `thumb`, `track`, `trigger`, `overlay`, `header`, `row`, `cell`, `indicator` |
| `role-or-effect` | What it styles or does *(not the CSS property)* | `text`, `fill`, `on-fill`, `underline`, `focus-ring`, `border`, `radius`, `glow`, `shadow`, `ring`, `gap`, `size`, `opacity` |
| `state` *(optional)* | Interaction or ARIA state | `hover`, `active`, `focus`, `checked`, `disabled`, `invalid`, `valid`, `open`, `expanded` |

**`component` — targeting a specific element or widget:**

```css
--button-radius               /* button / corner radius */
--button-border               /* button / border color */
--input-fill                  /* input / background fill */
--input-border                /* input / border color */
--input-border-focus          /* input / border color / focused */
--input-border-invalid        /* input / border color / invalid state */
--input-border-valid          /* input / border color / valid state */
--dialog-overlay              /* dialog / backdrop overlay color */
--nav-fill                    /* nav / background fill */
--progress-fill               /* progress bar / filled track color */
--progress-track-fill         /* progress bar / unfilled track (background) */
--table-border                /* table / border color */
--table-row-fill-striped      /* table / row fill / striped variant */
--details-border              /* details/summary / border color */
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

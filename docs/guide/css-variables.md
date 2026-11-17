# CSS Variables

Load the full bundle or `/no-utilities`, then load your overrides after it. The utility-only bundle supplies utility tokens; it expects shared theme values such as `--spacing` from a base theme.

```css
:root {
  --primary-background-color: #0172ad;
  --primary-color: light-dark(#0172ad, #79c0ff);
  --spacing: 1rem;
  --border-radius: 0.5rem;
}
```

Use the [Palettes](/guide/palettes) builder for color customization. For component sizing, see [size modifiers](/docs/variants/modifiers/size); these adjust individual controls and containers.

## The 4-Tier Token System

| Tier | Pattern | Purpose |
| --- | --- | --- |
| System | `--{property}` | Shared defaults for typography, spacing, borders, and colors |
| Variant | `--{intent}-{property}[-{state}]` | Intent colors, including primary, secondary, contrast, success, info, warning, and danger |
| Component | `--{component}-{property}[-{state}]` | Defaults inherited by instances of a component |
| Individual | `--_{component}-{property}[-{state}]` | Internal values set on a component and adjusted by variants |

Not every token follows this pattern: layout controls, icon assets, utility scales, and private helpers also exist. A `--_` prefix marks an internal implementation value, not a stable public customization API. Prefer public tokens; an internal token may be reset on the component itself or by a modifier.

The definitions below mirror `src/variables/_theme.css`, `_variants.css`, and `_utilities.css`. References to private color helpers are shown as defined in source; those helpers are supplied by the theme. They are not additional tokens you need to define.

## Tier 1: System Tokens

These are the base defaults before responsive adjustments. `--font-size` starts at `1rem`, and `--spacing` starts at `1rem`. Text uses `--typography-color`, which defaults to `--color`; muted text also depends on `--color-muted-fade`.

```css
:root,
:host {
/* --- Exceptions --- */

  /* --- Base values used for padding, margins and other space related calculations --- */
  --spacing: 1rem;
  --spacing-1: calc(var(--spacing) * 0.25); /* 2 fourths smaller */
  --spacing-2: calc(var(--spacing) * 0.5); /* half smaller */
  --spacing-3: calc(var(--spacing) * 0.75); /* fourth smaller */
  --spacing-4: var(--spacing); /* default */
  --spacing-5: calc(var(--spacing) * 1.25); /* fourth larger */
  --spacing-6: calc(var(--spacing) * 1.5); /* half larger */
  --spacing-7: calc(var(--spacing) * 1.75); /* 3 fourths larger */
  --spacing-8: calc(var(--spacing) * 2); /* double */
  --spacing-9: calc(var(--spacing) * 3); /* triple */

  /* Internal helper used to derive colors representing the hover state */
  --color-hover-shade: light-dark(
    var(--_color-zinc-700),
    var(--_color-zinc-300)
  );

  /* --- Background Color --- */
  --background-color: light-dark(
    white,
    color-mix(in srgb, var(--_color-slate-950), var(--_color-slate-900))
  );

  /* --- Color --- */
  --color: light-dark(var(--_color-zinc-750), var(--_color-zinc-200));
  --color-muted-fade: 40%;
  --color-muted: color-mix(in srgb, var(--typography-color), transparent var(--color-muted-fade));

  /* --- Typography --- */
  --typography-margin-block: var(--spacing);
  --typography-color: var(--color);
  --line-height: 1.5;
  --font-weight: 400; /* normal */
  --font-size: 1rem;
  --text-underline-offset: 0.1rem;
  --font-family-emoji:
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-sans-serif:
    system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial,
    "Helvetica Neue", sans-serif, var(--font-family-emoji);
  --font-family-monospace:
    ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono",
    monospace, var(--font-family-emoji);
  --font-family: var(--font-family-sans-serif);

  /* --- Border --- */
  --border-color: light-dark(var(--_color-slate-100), var(--_color-slate-800));
  --border-radius: 0.25rem;
  --border-width: 0.0625rem;

  /* --- Outline --- */
  --outline-width: 1px;

  /* --- Opacity --- */
  --opacity-disabled: 0.5;

  /* --- Transition --- */
  --transition: 0.2s ease-in-out;
}
```

### Spacing scales

The semantic spacing scale and utility suffixes use different mappings:

| Semantic token | Multiple of `--spacing` |
| --- | --- |
| `--spacing-1` | 0.25 |
| `--spacing-2` | 0.5 |
| `--spacing-3` | 0.75 |
| `--spacing-4` | 1 |
| `--spacing-5` | 1.25 |
| `--spacing-6` | 1.5 |
| `--spacing-7` | 1.75 |
| `--spacing-8` | 2 |
| `--spacing-9` | 3 |

Utility suffixes `1`–`5` read `--spacer-1`–`--spacer-5`, which map to `--spacing-1`, `--spacing-2`, `--spacing`, `--spacing-6`, and `--spacing-9`. For example, `.p-3` uses the full base spacing, whereas `--spacing-3` is three quarters of it. See [spacing utilities](/docs/utilities/spacing).

### Responsive defaults

The theme adjusts these values at its custom-media breakpoints:

| Breakpoint | `--font-size` | `--spacing` | `--sidebar-size` |
| --- | --- | --- | --- |
| Base | 1rem | 1rem | 25% |
| sm | 1.01rem | 1.02rem | max(25%, 150px) |
| md | 1.02rem | 1.03rem | max(22%, 180px) |
| lg | 1.03rem | 1.05rem | max(20%, 200px) |
| xl | 1.035rem | 1.1rem | max(18%, 220px) |
| xxl | 1.04rem | 1.2rem | clamp(240px, 16%, 300px) |

## Tier 2: Variant Tokens

The selected palette supplies `--primary-background-color` and `--primary-color`. The theme derives hover and outline colors and defines secondary, success, and danger colors:

```css
:root,
:host {
/* --- Primary Intent --- */
  --primary-background-color-hover: color-mix(
    in srgb,
    var(--primary-background-color),
    var(--color-hover-shade) 30%
  );
  --primary-color-hover: color-mix(
    in srgb,
    var(--primary-color),
    var(--color-hover-shade) 30%
  );
  --primary-outline-color: color-mix(
    in srgb,
    var(--primary-color),
    light-dark(white, black) 30%
  );

  /* --- Secondary Intent --- */
  --secondary-background-color: var(--_color-slate-550);
  --secondary-background-color-hover: color-mix(
    in srgb,
    var(--secondary-background-color),
    var(--color-hover-shade) 30%
  );
  --secondary-color: light-dark(
    var(--_color-slate-550),
    var(--_color-zinc-350)
  );
  --secondary-color-hover: color-mix(
    in srgb,
    var(--secondary-color),
    var(--color-hover-shade) 30%
  );
  --secondary-outline-color: color-mix(
    in srgb,
    var(--secondary-color) 70%,
    light-dark(white, black)
  );

  /* --- Success Intent --- */
  --success-background-color: var(--_color-jade-450);
  --success-background-color-hover: color-mix(
    in srgb,
    var(--success-background-color),
    var(--color-hover-shade) 30%
  );
  --success-color: light-dark(var(--_color-jade-450), var(--_color-jade-250));
  --success-color-hover: color-mix(
    in srgb,
    var(--success-color),
    var(--color-hover-shade) 30%
  );
  --success-outline-color: color-mix(
    in srgb,
    var(--success-color) 70%,
    light-dark(white, black)
  );

  /* --- Danger Intent --- */
  --danger-background-color: var(--_color-red-450);
  --danger-background-color-hover: color-mix(
    in srgb,
    var(--danger-background-color),
    var(--color-hover-shade) 30%
  );
  --danger-color: light-dark(var(--_color-red-450), var(--_color-red-250));
  --danger-color-hover: color-mix(
    in srgb,
    var(--danger-color),
    var(--color-hover-shade) 30%
  );
  --danger-outline-color: color-mix(
    in srgb,
    var(--danger-color) 70%,
    light-dark(white, black)
  );
}
```

Additional intents and subtle background colors come from `_variants.css`:

```css
:root,
:host {
/* ===== VARIANT TOKENS ===== */

  /* --- Contrast --- */
  --contrast-background-color: light-dark(
    var(--_color-slate-900),
    var(--_color-slate-50)
  );
  --contrast-background-color-hover: color-mix(
    in srgb,
    var(--contrast-background-color),
    var(--color-hover-shade) 30%
  );
  --contrast-color: light-dark(var(--_color-slate-900), var(--_color-slate-100));
  --contrast-color-hover: color-mix(
    in srgb,
    var(--contrast-color),
    var(--color-hover-shade) 30%
  );
  --contrast-outline-color: color-mix(
    in srgb,
    var(--contrast-color) 70%,
    light-dark(white, black)
  );

  /* --- Info --- */
  --_color-azure-450: #018cd4;
  --_color-azure-250: #79c0ff;
  --info-background-color: var(--_color-azure-450);
  --info-background-color-hover: color-mix(
    in srgb,
    var(--info-background-color),
    var(--color-hover-shade) 30%
  );
  --info-color: light-dark(var(--_color-azure-450), var(--_color-azure-250));
  --info-color-hover: color-mix(
    in srgb,
    var(--info-color),
    var(--color-hover-shade) 30%
  );
  --info-outline-color: color-mix(
    in srgb,
    var(--info-color) 70%,
    light-dark(white, black)
  );

  /* --- Warning --- */
  --_color-amber-350: #c79400;
  --_color-amber-250: #e8ae01;
  --warning-background-color: var(--_color-amber-350);
  --warning-background-color-hover: color-mix(
    in srgb,
    var(--warning-background-color),
    var(--color-hover-shade) 30%
  );
  --warning-color: light-dark(var(--_color-amber-350), var(--_color-amber-250));
  --warning-color-hover: color-mix(
    in srgb,
    var(--warning-color),
    var(--color-hover-shade) 30%
  );
  --warning-outline-color: color-mix(
    in srgb,
    var(--warning-color) 70%,
    light-dark(white, black)
  );

  /* Subtle colors */

  /* Private helper to derive subtle color variants from the base colors */
  --_subtle-color-shade: light-dark(
    var(--_color-zinc-250),
    var(--_color-slate-750)
  );

  /* Primary subtle colors */
  --primary-subtle-background-color: color-mix(
    in srgb,
    var(--primary-background-color),
    var(--_subtle-color-shade) 60%
  );

  /* Secondary subtle colors */
  --secondary-subtle-background-color: light-dark(
    color-mix(in srgb, var(--_color-slate-50), white 25%),
    color-mix(in srgb, var(--_color-slate-50), black 75%)
  );

  /* Contrast subtle colors */
  --contrast-subtle-background-color: color-mix(
    in srgb,
    var(--contrast-background-color),
    var(--_subtle-color-shade) 60%
  );

  /* Success subtle colors */
  --success-subtle-background-color: color-mix(
    in srgb,
    var(--success-background-color),
    var(--_subtle-color-shade) 60%
  );

  /* Info subtle colors */
  --info-subtle-background-color: color-mix(
    in srgb,
    var(--info-background-color),
    var(--_subtle-color-shade) 60%
  );

  /* Warning subtle colors */
  --warning-subtle-background-color: color-mix(
    in srgb,
    var(--warning-background-color),
    var(--_subtle-color-shade) 60%
  );

  /* Danger subtle colors */
  --danger-subtle-background-color: color-mix(
    in srgb,
    var(--danger-background-color),
    var(--_subtle-color-shade) 60%
  );
}
```

## Tier 3: Component Tokens

These defaults include buttons, inputs, headings, menus, cards, panes, and alerts. See the notes below for consumer-specific behavior.

```css
:root,
:host {
/* --- Building Blocks --- */

  /* Styling, used by any component (like ul[role="menu"]) that requires a menu like features */
  --menu-color: var(--color);
  --menu-padding-block: var(--inputs-padding-block);
  --menu-padding-inline: var(--inputs-padding-inline);
  --menu-background-color: light-dark(white, var(--_color-slate-900));
  --menu-background-color-hover: light-dark(
    var(--_color-slate-50),
    var(--_color-slate-850)
  );
  --menu-border-width: var(--border-width);
  --menu-border-radius: var(--border-radius);
  --menu-border-color: var(--inputs-border-color);
  --menu-box-shadow:
    0.0145rem 0.029rem 0.174rem
      light-dark(rgb(129 145 181 / 0.01698), rgb(7 9 12 / 0.01698)),
    0.0335rem 0.067rem 0.402rem
      light-dark(rgb(129 145 181 / 0.024), rgb(7 9 12 / 0.024)),
    0.0625rem 0.125rem 0.75rem
      light-dark(rgb(129 145 181 / 0.03), rgb(7 9 12 / 0.03)),
    0.1125rem 0.225rem 1.35rem
      light-dark(rgb(129 145 181 / 0.036), rgb(7 9 12 / 0.036)),
    0.2085rem 0.417rem 2.502rem
      light-dark(rgb(129 145 181 / 0.04302), rgb(7 9 12 / 0.04302)),
    0.5rem 1rem 6rem light-dark(rgb(129 145 181 / 0.06), rgb(7 9 12 / 0.06)),
    0 0 0 0.0625rem light-dark(rgb(129 145 181 / 0.015), rgb(7 9 12 / 0.015));

  /* All overlay background, used by dialog */
  --backdrop-background-color: light-dark(
    oklch(
      from color-mix(in srgb, var(--_color-zinc-100), var(--_color-zinc-50)) l c
        h / 0.75
    ),
    oklch(from color-mix(in srgb, black, var(--_color-zinc-950)) l c h / 0.75)
  );

  /* Focus ring used across interactive elements, typically used in combination with --outline-width */
  /* each component decides to which css property they should be applied */
  --focus-ring-width: 0.125rem;

  /* --- Buttons --- */
  /* Affects button, input[type="button"], input[type="submit"], input[type="reset"], and elements with role="button" */
  --buttons-background-color-hover: var(--primary-background-color-hover);
  --buttons-background-color: var(--primary-background-color);
  --buttons-color-hover: white;
  --buttons-color: white;
  --buttons-border-radius: var(--border-radius);
  --buttons-font-size: var(--font-size);
  --buttons-padding-block: var(--spacing-2);
  --buttons-padding-inline: var(--spacing-3);

  /* --- Code --- */
  --code-background-color: light-dark(
    color-mix(in srgb, var(--_color-slate-50) 75%, white),
    color-mix(in srgb, var(--_color-slate-900) 75%, var(--_color-slate-850))
  );
  --code-color: light-dark(var(--_color-zinc-550), var(--_color-zinc-400));
  --kbd-background-color: var(--color);
  --kbd-color: var(--background-color);
  --kbd-font-weight: bolder;

  /* --- Details --- */
  /* Affects accordions and dropdowns */
  --details-summary-color: var(--color);
  --details-summary-color-open: var(--color-muted);

  /* --- Group --- */
  /* Affects elements with role="group" and its children */
  --group-buttons-padding-inline: var(--spacing);

  /* --- Headings --- */
  --h1-color-fade: 0;
  --h1-font-size: 200%;
  --h1-font-weight: 700;  /* bold */
  --h1-line-height: 1.2;
  --h1-margin-top: var(--spacing-6);

  --h2-color-fade: 10%;
  --h2-font-size: 150%;
  --h2-font-weight: 700;  /* bold */
  --h2-line-height: 1.25;
  --h2-margin-top: var(--spacing-6);

  --h3-color-fade: 20%;
  --h3-font-size: 125%;
  --h3-font-weight: 600;  /* semi bold */
  --h3-line-height: 1.3;
  --h3-margin-top: var(--spacing-6);

  --h4-color-fade: 30%;
  --h4-font-size: 100%;
  --h4-font-weight: 600;  /* semi bold */
  --h4-line-height: 1.35;
  --h4-margin-top: var(--spacing-6);

  --h5-color-fade: 35%;
  --h5-font-size: 90%;
  --h5-font-weight: 600;  /* semi bold */
  --h5-line-height: 1.4;
  --h5-margin-top: var(--spacing-6);

  --h6-color-fade: 40%; /* same as muted */
  --h6-font-size: 80%; /* same as <small> */
  --h6-font-weight: 600;  /* semi bold */
  --h6-line-height: 1.4;
  --h6-margin-top: var(--spacing-6);

  /* --- Icons --- */
  --icons-background-position-gap: 0.75rem;
  --icons-width: 1em;

  /* --- Inputs --- */
  /* Affects input, select, textarea and details elements */
  --inputs-accent-color: var(--primary-background-color);
  --inputs-accent-color-muted: light-dark(
    var(--_color-slate-200),
    var(--_color-slate-750)
  );
  --inputs-font-size: var(--font-size);
  --inputs-padding-block: var(--spacing-2);
  --inputs-padding-inline: var(--spacing-3);
  --inputs-margin-block: var(--margin-block);
  --inputs-border-width: var(--border-width);
  --inputs-border-radius: var(--border-radius);
  --inputs-background-color: light-dark(
    color-mix(in srgb, var(--_color-slate-50) 25%, white),
    color-mix(in srgb, var(--_color-slate-900), var(--_color-slate-850))
  );
  --inputs-background-color-focus: light-dark(
    white,
    color-mix(in srgb, var(--_color-slate-900) 75%, var(--_color-slate-850))
  );
  --inputs-border-color: light-dark(
    var(--_color-slate-150),
    var(--_color-slate-800)
  );
  --inputs-color: light-dark(var(--_color-zinc-850), var(--_color-zinc-100));
  --inputs-placeholder-color: var(--color-muted);
  --input-autofill-box-shadow: 0 0 0 100px var(--inputs-background-color-focus) inset;
  --input-autofill-text-fill-color: var(--inputs-color);

  /* --- Input Checkbox --- */
  --input-checkbox-border-width: 0.125rem;

  /* --- Input Radio --- */
  --input-radio-background-color: white;

  /* --- Input Range --- */
  --input-range-thumb-size: 1.25rem;
  --input-range-thumb-margin-top: -0.4375rem;
  --input-range-thumb-border-color: var(--background-color);
  --input-range-thumb-border-width: var(--focus-ring-width);
  --input-range-track-background-color: var(--inputs-border-color);
  --input-range-track-height: 0.375rem;

  /* --- Input Search --- */
  --input-search-border-radius: 5rem;

  /* --- Input Switch --- */
  --input-switch-thumb-background-color: white;
  --input-switch-border-width: 0.1875rem;
  --input-switch-border-radius: 1.25em;

  /* --- Links (anchor and role="link") --- */
  --links-color: var(--primary-color);
  --links-color-hover: var(--primary-color-hover);
  --links-text-decoration: underline;
  --links-text-decoration-active: underline;

  /* --- Lists (ul, ol and role="list") --- */
  --lists-marker-color: var(--primary-color);

  /* --- Mark --- */
  --mark-background-color: light-dark(#c79400, #e8ae01);

  /* --- Navigation --- */
  --nav-breadcrumb-divider: ">";

  /* --- Progress Bar --- */
  --progress-accent-color: var(--primary-background-color);
  --progress-track-background-color: light-dark(
    var(--_color-slate-100),
    var(--_color-slate-850)
  );

  /* --- Selection of text --- */
  --selection-color: var(--typography-color);
  --selection-background-color: color-mix(
    in srgb,
    var(--primary-color),
    white 75%
  );

  /* --- Sidebar --- */
  --sidebar-size: 25%;

  /* --- Table --- */
  --table-header-font-weight: 600;
  --table-header-border-width: 0.1875rem;

  /* --- Tooltip --- */
  --tooltip-background-color: var(--contrast-background-color);
  --tooltip-color: light-dark(white, var(--_color-zinc-900));

  /* --- Alert Default Styling --- */
  --alert-color: var(--color);
  --alert-background-color: var(--background-color);
  --alert-padding-inline: var(--spacing);
  --alert-padding-block: var(--spacing-3);
  --alert-margin-block: var(--margin-block;
  --alert-border-color: var(--border-color);
  --alert-border-width: var(--border-width);
  --alert-border-accent-width: var(--alert-border-width);
  --alert-border-radius: var(--border-radius);

  /* --- Card Default Styling --- */
  --card-color: var(--color);
  --card-background-color: var(--background-color);
  --card-padding-inline: var(--spacing);
  --card-padding-block: var(--spacing-3);
  --card-margin-block: var(--margin-block);
  --card-border-color: var(--border-color);
  --card-border-width: var(--border-width);
  --card-border-radius: var(--border-radius);
  /* Shade styling, applied to header & footer elements */
  --card-marginals-background-color: light-dark(
    color-mix(in srgb, var(--_color-slate-50) 25%, white),
    color-mix(in srgb, var(--_color-slate-50), transparent 95%)
  );
  --card-marginals-border-color: color-mix(
    in srgb,
    light-dark(var(--_color-slate-900), var(--_color-zinc-350)),
    transparent 90%
  );

  /* --- Pane Default Styling --- */
  --pane-color: var(--color);
  --pane-background-color: var(--background-color);
  --pane-padding-inline: var(--spacing);
  --pane-padding-block: var(--spacing-3);
  --pane-border-color: var(--background-color);
  --pane-border-width: 0;
}
```

## Utility Tokens

The full and utility-only bundles include these utility scales and defaults:

```css
:root,
:host {
--max-z-index: 1050;

  /* Base spacing value */
  --spacer: var(--spacing);

  /* Spacing scale */
  --spacer-1: var(--spacing-1);
  --spacer-2: var(--spacing-2);
  --spacer-3: var(--spacing);
  --spacer-4: var(--spacing-6);
  --spacer-5: var(--spacing-9);

  /* Grid */
  --grid-gutter-x: var(--spacer);
  --grid-gutter-y: 0;

  /* Gradient */
  --gradient: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0)
  );

  /* Borders & radii */
  --border-radius-pill: 50rem;
  --border-radius-1: var(--border-radius);
  --border-radius-2: calc(var(--border-radius) * 2);
  --border-radius-3: calc(var(--border-radius) * 4);
  --border-radius-4: calc(var(--border-radius) * 6);
  --border-radius-5: calc(var(--border-radius) * 8);

  /* Border-width scale */
  --border-style: solid;
  --border-width-1: var(--border-width);
  --border-width-2: calc(var(--border-width) * 2);
  --border-width-3: calc(var(--border-width) * 3);
  --border-width-4: calc(var(--border-width) * 4);
  --border-width-5: calc(var(--border-width) * 5);



  /* Shadows */
  --shadow-sm: 0 0.05rem 0.3rem
    light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.1));
  --shadow-md: 0 0.15rem 0.6rem
    light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.1));
  --shadow-lg: 0 0.15rem 1rem
    light-dark(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.1));
}
```

## Tier 4: Individual Component Tokens

Components initialize internal slots from public values. For example, buttons read `--buttons-background-color` into `--_buttons-background-color`, and `.card` reads `--card-background-color` into `--_card-background-color`. Intent and modifier classes then adjust those internal slots. Use a public token on a wrapper to configure descendants, or a selector on the component for a local override:

```css
.checkout {
  --buttons-padding-inline: 1.25rem;
}

.card.featured {
  --card-background-color: light-dark(#eef2ff, #202632);
  --card-border-color: var(--primary-color);
}
```

A custom property inherits only where no declaration on the descendant replaces it. Public tokens are not automatically aliases for every native CSS property.

## Layout and Component Hooks

Some public hooks are consumed with a fallback rather than declared on `:root`. Examples include `--dialog-border-radius` (falls back to `--border-radius`), `--summary-line-height` (falls back to `1rem`), and the [auto-grid](/docs/classes/auto-grid) and [content-grid](/docs/classes/content-grid) controls.

Menus consume `--menu-*`. Dropdown triggers consume `--inputs-background-color`, `--inputs-placeholder-color`, `--inputs-border-color`, and input padding tokens. Plain details summaries currently consume `--summary-color` and `--summary-color-open`; the theme still declares `--details-summary-color` and `--details-summary-color-open`, but these are not wired to those summary slots.

Dialogs expose `--dialog-border-radius`, use `--menu-box-shadow` and `--backdrop-background-color`, and have no dialog background/border color tokens. For a card inside a dialog, customize `--card-*` on that card. Panes use their own `--pane-*` tokens.

## Updating Older Overrides

| Older override | Current customization |
| --- | --- |
| `--details-menu-*` | Use the matching `--menu-*` token |
| `--details-dropdown-background-color` | `--inputs-background-color` |
| `--details-dropdown-color` | `--inputs-placeholder-color` |
| `--details-dropdown-border-color` | `--inputs-border-color` |
| `--dialog-background-color`, `--dialog-border-color` | Use `--card-background-color` and `--card-border-color` for a card inside the dialog |
| `--dialog-marginals-background-color`, `--dialog-marginals-border-color` | Use the matching `--card-marginals-*` tokens for card headers and footers |
| `--font-size-sm` | `<small>` uses `--h6-font-size` |

Heading defaults now use per-level font size, weight, line height, color fade, and top margin tokens. Button and input padding defaults are `--spacing-2` vertically and `--spacing-3` horizontally. Review numeric overrides against the current defaults rather than retaining the old density assumptions.

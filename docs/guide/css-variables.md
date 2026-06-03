# CSS Variables

**Semanticus CSS** uses a 4-tier token system for maximum customization control.

After importing any semanticus-css bundle, override CSS variables defined on `:root`:

```css
:root {
  --primary-background-color: #0172ad;
  --primary-background-color-hover: #02659a;
  --spacing: 1rem;
}
```

To help you create your own custom styles, check out the [Palettes](/guide/palettes)
or [Sizes](/guide/sizes) builder tools.

## The 4-Tier Token System

Every token belongs to one of four tiers. Changing a token at a higher tier
affects more of the page; changing it at a lower tier gives more precision.

| Tier | Prefix | Scope |
|------|--------|-------|
| 1. System | `--property` | Entire page |
| 2. Variant | `--{variant}-property[-state]` | Variant definitions |
| 3. Component | `--{component}-property` | All instances of a component |
| 4. Individual | `--_{component}-property` | A single component instance |

## Tier 1: System Tokens

These set the document-wide baseline.

To avoid having to memorize arbitrary token names, these type of tokens (with only 2 exceptions) always start with a  **CSS longhand property** name.

```css
:root {
  /* --- Background Color --- */
  --background-color: light-dark(
    white,
    color-mix(in srgb, #0e1118, #181c25)
  );

  /* --- Color --- */
  --color: light-dark(#373c44, #c2c7d0);

  /* --- Typography --- */
  --typography-spacing-vertical: 1rem;
  --typography-color: var(--color);
  --color-muted: color-mix(in srgb, var(--typography-color), transparent 40%);
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 97%;
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
  --border-color: light-dark(#dfe3eb, #2a3140);
  --border-radius: 0.25rem;
  --border-width: 0.0625rem;

  /* --- Outline --- */
  --outline-width: 1px;

  /* --- Opacity --- */
  --opacity-disabled: 0.5;

  /* --- Transition --- */
  --transition: 0.2s ease-in-out;

  /* --- Exceptions --- */

  /* Responsive value used for margins and padding throughout the page */
  --spacing: calc(0.75rem * var(--_spacing-scale));

  /* Internal helper used to derive colors representing the hover state */
  --color-hover-shade: light-dark(
    #424751,
    #a4acba
  );
}
```

## Tier 2: Variant Tokens

Define the color values for each intent variant. Override these to create custom color themes.

```css
:root {
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
  --secondary-background-color: #5d6b89;
  --secondary-background-color-hover: color-mix(
    in srgb,
    var(--secondary-background-color),
    var(--color-hover-shade) 30%
  );
  --secondary-color: light-dark(
    #5d6b89,
    #969eaf
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
  --success-background-color: #029764;
  --success-background-color-hover: color-mix(
    in srgb,
    var(--success-background-color),
    var(--color-hover-shade) 30%
  );
  --success-color: light-dark(#029764, #00cc88);
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
  --danger-background-color: #ee402e;
  --danger-background-color-hover: color-mix(
    in srgb,
    var(--danger-background-color),
    var(--color-hover-shade) 30%
  );
  --danger-color: light-dark(#ee402e, #f5a390);
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

  --contrast-color: /* ... */;
  --info-color: /* ... */;
  --warning-color: /* ... */;
}
```

## Tier 3: Component Tokens

Scoped to a component type. Change one of these and every instance updates.

### Selection

```css
:root {
  /* --- Buttons --- */
  /* Affects button, input[type="button"], input[type="submit"], input[type="reset"], and elements with role="button" */
  --buttons-background-color-hover: var(--primary-background-color-hover);
  --buttons-background-color: var(--primary-background-color);
  --buttons-color-hover: white;
  --buttons-color: white;
  --buttons-padding-block: var(--inputs-spacing-vertical);
  --buttons-padding-inline: var(--inputs-spacing-horizontal);

  /* --- Code --- */
  --code-background-color: light-dark(
    color-mix(in srgb, #eff1f4 75%, white),
    color-mix(in srgb, #181c25 75%, #202632)
  );
  --code-color: light-dark(#646b79, #8891a4);
  --kbd-background-color: var(--color);
  --kbd-color: var(--background-color);
  --kbd-font-weight: bolder;

  /* --- Details --- */
  /* Affects accordions and dropdowns */
  --details-summary-background-color: var(--inputs-background-color);
  --details-summary-color: var(--color);
  --details-summary-color-open: var(--color-muted);

  /* --- Dropdown styling applied to the summary element --- */
  --details-dropdown-color: var(--inputs-placeholder-color);
  --details-dropdown-border-color: var(--inputs-border-color);
  --details-dropdown-spacing-vertical: var(--inputs-spacing-vertical);
  --details-dropdown-spacing-horizontal: var(--inputs-spacing-horizontal);

  /* --- Menu styling applied to the ul[role="menu"] element --- */
  --details-menu-background-color: light-dark(white, #181c25);
  --details-menu-border-color: light-dark(
    #eff1f4,
    #202632
  );
  --details-menu-color: var(--color);
  --details-menu-background-color-hover: light-dark(
    #eff1f4,
    #202632
  );

  /* --- Dialog --- */
  --dialog-border-color: var(--border-color);
  --dialog-background-color: var(--background-color);

  /* Shade styling, applied to header & footer elements */
  --dialog-marginals-background-color: light-dark(
    color-mix(in srgb, #eff1f4 25%, white),
    color-mix(in srgb, #eff1f4, transparent 95%)
  );
  --dialog-marginals-border-color: color-mix(
    in srgb,
    light-dark(#181c25, #969eaf),
    transparent 90%
  );

  /* --- Group --- */
  /* Affects elements with role="group" and its children */
  --group-buttons-padding-inline: 1rem;

  /* --- Headings --- */
  --heading-font-weight: 700;
  --h1-font-size: 2rem;
  --h1-margin-top: 3rem;
  --h1-line-height: 1.125;
  --h2-font-size: 1.75rem;
  --h2-margin-top: 2.625rem;
  --h2-line-height: 1.15;
  --h3-font-size: 1.5rem;
  --h3-margin-top: 2.25rem;
  --h3-line-height: 1.175;
  --h4-font-size: 1.25rem;
  --h4-margin-top: 1.874rem;
  --h4-line-height: 1.2;
  --h5-font-size: 1.125rem;
  --h5-margin-top: 1.6875rem;
  --h5-line-height: 1.225;
  --h6-font-size: 1rem;
  --h6-margin-top: 1.5rem;
  --h6-line-height: 1.25;

  /* --- Icons --- */
  --icons-background-position-gap: 0.75rem;
  --icons-width: 1em;

  /* --- Inputs --- */
  /* Affects input, select, textarea and details elements */
  --inputs-accent-color: var(--primary-background-color);
  --inputs-accent-color-muted: light-dark(
    #bfc7d9,
    #333c4e
  );
  --inputs-spacing-vertical: 0.5rem;
  --inputs-spacing-horizontal: 0.7rem;
  --inputs-background-color: light-dark(
    color-mix(in srgb, #eff1f4 25%, white),
    color-mix(in srgb, #181c25, #202632)
  );
  --inputs-background-color-focus: light-dark(
    white,
    color-mix(in srgb, #181c25 75%, #202632)
  );
  --inputs-border-color: light-dark(
    #cfd5e2,
    #2a3140
  );
  --inputs-color: light-dark(#23262c, #e0e3e7);
  --inputs-placeholder-color: var(--color-muted);

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

  /* --- Lists (ul, ol and role="list") --- */
  --lists-marker-color: var(--primary-color);

  /* --- Mark --- */
  --mark-background-color: light-dark(#c79400, #e8ae01);

  /* --- Navigation --- */
  --nav-link-gap: calc(var(--spacing) * 0.5);
  --nav-breadcrumb-divider: ">";

  /* --- Progress Bar --- */
  --progress-accent-color: var(--primary-background-color);
  --progress-track-background-color: light-dark(
    #dfe3eb,
    #202632
  );

  /* --- Selection of text --- */
  --selection-background-color: color-mix(
    in srgb,
    var(--primary-color),
    white 75%
  );

  /* --- Sidebar --- */
  --sidebar-size: 25%;

  /* --- Small --- */
  --small-font-size: 80%;

  /* --- Table --- */
  --table-header-font-weight: 600;
  --table-header-border-width: 0.1875rem;

  /* --- Tooltip --- */
  --tooltip-background-color: var(--contrast-background-color);
  --tooltip-color: light-dark(white, #191c20);
}
```

## Tier 4: Individual Component Tokens

Private `--_` tokens defined inside component CSS files. These initialize from
the Component Token tier and are the values the component actually consumes.

```css
/* Inside _buttons.css */
button, [role="button"] {
  --_buttons-color: var(--buttons-color);
  --_buttons-background-color: var(--buttons-background-color);
  --_buttons-border-color: var(--_buttons-background-color);
  --_buttons-outline-color: var(--primary-outline-color);

  background-color: var(--_buttons-background-color);
  color: var(--_buttons-color);
}

/* Inside inputs/_common.css */
:where(input, select, textarea) {
  --_inputs-background-color: var(--inputs-background-color);
  --_inputs-border-color: var(--inputs-border-color);
  --_inputs-outline-color: var(--primary-outline-color);

  background-color: var(--_inputs-background-color);
  border-color: var(--_inputs-border-color);
}
```

Modifier classes override Individual Tokens to affect **only that specific
component instance**:

```css
.primary {
  --_buttons-color: #fff;
  --_buttons-background-color: var(--primary-background-color);
}
```

## How Tiers Compose: A Complete Example

```css
/* custom.css — import after semanticus-css */
@import "semanticus-css";

:root {
  /* Tier 2: Custom variant colors */
  --primary-background-color: #6366f1;
  --primary-background-color-hover: light-dark(#4f46e5, #818cf8);
  --primary-color: white;
  --primary-outline-color: light-dark(
    oklch(from #6366f1 l c h / 0.5),
    oklch(from #818cf8 l c h / 0.375)
  );

  /* Tier 1: System overrides */
  --border-radius: 0.5rem;
  --line-height: 1.7;

  /* Tier 3: Component overrides — all buttons get custom spacing */
  --buttons-padding-block: 0.75rem;
  --buttons-padding-inline: 1.25rem;
}
```

For interactive builders, use the [Palettes](/guide/palettes) or [Sizes](/guide/sizes) tools.

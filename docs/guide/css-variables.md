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

---

## The 4-Tier Token System

Every token belongs to one of four tiers. Changing a token at a higher tier
affects more of the page; changing it at a lower tier gives more precision.

| Tier | Prefix | Scope |
|------|--------|-------|
| 1. System | `--property` | Entire page |
| 2. Palette | `--{intent}-property` | Variant definitions |
| 3. Component | `--{component}-property` | All instances of a component |
| 4. Individual | `--_{component}-property` | A single component instance |

---

## Tier 1: System Tokens

These set the document-wide baseline. They use the CSS property name directly.

### Typography

```css
:root {
  --font-family: var(--font-family-sans-serif);
  --font-family-sans-serif: system-ui, "Segoe UI", Roboto, sans-serif;
  --font-family-monospace: ui-monospace, SFMono-Regular, "SF Mono", monospace;
  --font-size: 97%;          /* scales with breakpoints: 98%@sm … 102%@xxl */
  --font-weight: 400;
  --line-height: 1.5;
  --text-underline-offset: 0.1rem;
  --typography-color: var(--color);
  --color-muted: color-mix(in srgb, var(--typography-color), transparent 40%);
  --typography-spacing-vertical: 1rem;
}
```

### Colors

```css
:root {
  --background-color: light-dark(white, #0e1118);
  --color: light-dark(#373c44, #c2c7d0);
  --border-color: light-dark(#dfe3eb, #202632);
  --selection-background-color: color-mix(in srgb, var(--primary-background-color), white 75%);
  --backdrop-background-color: light-dark(
    oklch(from color-mix(in srgb, var(--color-zinc-100), var(--color-zinc-50)) l c h / 0.75),
    oklch(from color-mix(in srgb, black, var(--color-zinc-950)) l c h / 0.75)
  );
}
```

### Spacing

```css
:root {
  --spacing-base: 0.75rem;
  --spacing-scale: 1;
  --spacing: calc(var(--spacing-base) * var(--spacing-scale));
  --typography-spacing-vertical: 1rem;
}
```

### Borders & Effects

```css
:root {
  --border-radius: 0.25rem;
  --border-width: 0.0625rem;
  --outline-width: 1px;
  --focus-ring-width: 0.125rem;
  --focus-ring-color: var(--primary-focus-ring-color);
  --transition: 0.2s ease-in-out;
  --disabled-opacity: 0.5;
}
```

---

## Tier 2: Palette Tokens

Defined by palette files. Override these to create custom color themes.

```css
:root {
  --primary-color: white;
  --primary-color-hover: white;
  --primary-background-color: #0172ad;
  --primary-background-color-hover: light-dark(#02659a, #017fc0);
  --primary-focus-ring-color: light-dark(
    oklch(from #029ae8 l c h / 0.5),
    oklch(from #01aaff l c h / 0.375)
  );

  --secondary-color: white;
  --secondary-background-color: #525f7a;
  --secondary-background-color-hover: light-dark(#48536b, #5d6b89);
  --secondary-focus-ring-color: light-dark(
    oklch(from #5d6b89 l c h / 0.25),
    oklch(from #909ebe l c h / 0.25)
  );

  --contrast-color: light-dark(white, black);
  --contrast-background-color: light-dark(#181c25, #eff1f4);
  --contrast-focus-ring-color: light-dark(
    oklch(from #5d6b89 l c h / 0.25),
    oklch(from #cfd5e2 l c h / 0.25)
  );

  --success-color: light-dark(#029764, #00cc88);
  --success-background-color: #029764;
  --success-focus-ring-color: /* ... */;

  --info-color: /* ... */;
  --warning-color: /* ... */;
  --danger-color: /* ... */;
  /* (each with *-background-color, *-focus-ring-color, and *-hover variants) */
}
```

---

## Tier 3: Component Tokens

Scoped to a component type. Change one of these and every instance updates.

### Buttons

```css
:root {
  --buttons-font-size: 1rem;
  --buttons-color: white;
  --buttons-color-hover: white;
  --buttons-spacing-vertical: var(--inputs-spacing-vertical);
  --buttons-spacing-horizontal: var(--inputs-spacing-horizontal);
  --buttons-background-color: var(--primary-background-color);
  --buttons-background-color-hover: var(--primary-background-color-hover);
  --buttons-border-color: var(--primary-background-color);
  --buttons-border-color-hover: var(--primary-background-color-hover);
}
```

### Inputs

```css
:root {
  --inputs-spacing-vertical: 0.5rem;
  --inputs-spacing-horizontal: 0.7rem;
  --inputs-background-color: light-dark(#fbfcfc, #1c212c);
  --inputs-background-color-focus: light-dark(white, #1a1f28);
  --inputs-border-color: light-dark(#cfd5e2, #2a3140);
  --inputs-color: light-dark(#23262c, #e0e3e7);
  --inputs-accent-color: var(--primary-background-color);
  --inputs-placeholder-color: var(--color-muted);
  --inputs-focus-ring-width: 0.0625rem;
}
```

### Input Subtypes

```css
:root {
  --input-checkbox-border-width: 0.125rem;
  --input-search-border-radius: 5rem;
  --input-switch-background-color: light-dark(#bfc7d9, #333c4e);
  --input-switch-thumb-background-color: white;
  --input-switch-border-width: 0.1875rem;
  --input-switch-border-radius: 1.25em;
  --input-range-track-border-color: light-dark(#bfc7d9, #333c4e);
  --input-range-thumb-border-color: var(--background-color);
}
```

### Dialog & Card

```css
:root {
  --dialog-border-color: var(--border-color);
  --dialog-background-color: var(--background-color);
  --dialog-box-shadow: var(--menu-box-shadow);
  --dialog-marginals-background-color: light-dark(#fbfcfc, #2a3140);
  --dialog-marginals-border-color: color-mix(
    in srgb, light-dark(#181c25, #a4acba), transparent 90%
  );
}
```

### Details (Accordions & Dropdowns)

```css
:root {
  --details-summary-background-color: var(--inputs-background-color);
  --details-summary-color: var(--color);
  --details-summary-color-focus: var(--primary-color-hover);
  --details-summary-color-open: var(--color-muted);
  --details-dropdown-color: var(--inputs-placeholder-color);
  --details-dropdown-border-color: var(--inputs-border-color);
  --details-dropdown-spacing-vertical: var(--inputs-spacing-vertical);
  --details-dropdown-spacing-horizontal: var(--inputs-spacing-horizontal);
  --details-menu-background-color: light-dark(white, #181c25);
  --details-menu-border-color: light-dark(#eff1f4, #202632);
  --details-menu-color: var(--color);
  --details-menu-background-color-hover: light-dark(#eff1f4, #202632);
}
```

### Links

```css
:root {
  --links-color: var(--primary-color);
  --links-text-decoration: underline;
}
```

### Headings

```css
:root {
  --heading-font-weight: 700;
  --h1-font-size: 2rem;
  --h1-line-height: 1.125;
  --h1-margin-top: 3rem;
  --h2-font-size: 1.75rem;
  --h2-line-height: 1.15;
  --h2-margin-top: 2.625rem;
  /* ... through h6 */
}
```

### Lists

```css
:root {
  --lists-marker-color: var(--primary-color);
}
```

### Code

```css
:root {
  --code-background-color: light-dark(#f3f5f7, #1a1f28);
  --code-color: light-dark(#646b79, #8891a4);
  --kbd-background-color: var(--color);
  --kbd-color: var(--background-color);
  --kbd-font-weight: bolder;
}
```

### Table

```css
:root {
  --table-header-font-weight: 600;
  --table-header-border-width: 0.1875rem;
}
```

### Navigation

```css
:root {
  --nav-link-gap: calc(var(--spacing) * 0.5);
  --nav-breadcrumb-divider: ">";
}
```

### Progress

```css
:root {
  --progress-accent-color: var(--primary-background-color);
  --progress-track-background-color: light-dark(#dfe3eb, #202632);
}
```

### Tooltip

```css
:root {
  --tooltip-background-color: var(--contrast-background-color);
  --tooltip-color: light-dark(white, #191c20);
}
```

### Misc

```css
:root {
  --small-font-size: 80%;
  --sidebar-size: 25%;
  --group-button-spacing-horizontal: 1rem;
  --icons-background-position-gap: 0.75rem;
  --icons-width: 1em;
}
```

---

## Tier 4: Individual Component Tokens

Private `--_` tokens defined inside component CSS files. These initialize from
the Component Token tier and are the values the component actually consumes.

```css
/* Inside _buttons.css */
button, [role="button"] {
  --_buttons-color: var(--buttons-color);
  --_buttons-background-color: var(--buttons-background-color);
  --_buttons-border-color: var(--buttons-border-color);

  background-color: var(--_buttons-background-color);
  color: var(--_buttons-color);
}

/* Inside inputs/_common.css */
:where(input, select, textarea) {
  --_inputs-background-color: var(--inputs-background-color);
  --_inputs-border-color: var(--inputs-border-color);

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

---

## How Tiers Compose: A Complete Example

```css
/* custom.css — import after semanticus-css */
@import "semanticus-css";

:root {
  /* Tier 2: Custom palette colors */
  --primary-background-color: #6366f1;
  --primary-background-color-hover: light-dark(#4f46e5, #818cf8);
  --primary-color: white;
  --primary-focus-ring-color: light-dark(
    oklch(from #6366f1 l c h / 0.5),
    oklch(from #818cf8 l c h / 0.375)
  );

  /* Tier 1: System overrides */
  --border-radius: 0.5rem;
  --line-height: 1.7;

  /* Tier 3: Component overrides — all buttons get custom spacing */
  --buttons-spacing-vertical: 0.75rem;
  --buttons-spacing-horizontal: 1.25rem;
}
```

For interactive builders, use the [Palettes](/guide/palettes) or [Sizes](/guide/sizes) tools.

# CSS Variables

Semanticus CSS is built with CSS variables, making it easy to customize colors, spacing, typography, and more.

After importing any of semanticus-css's css files, you can further customize it by overriding specific CSS variables defined in the `:root` selector:

```css
:root {
  --color-primary-fill: #0172ad;
  --color-primary-fill-hover: #02659a;
  --spacing: 1rem;
}
```

To help you create your own custom styles, check out the [Theme Builder](/guide/theme-builder) tool.

## Color Variables List

Colors use the `light-dark()` CSS function so a single declaration covers both themes automatically.

```css
:root {
  /* Primary colors (defined by the active palette) */
  --color-primary-fill: #0172ad;
  --color-primary-fill-hover: light-dark(#02659a, #017fc0);
  --color-primary-on-fill: white;
  --color-primary-text: light-dark(#0172ad, #01aaff);
  --color-primary-text-hover: light-dark(#015887, #79c0ff);
  --color-primary-focus-ring: light-dark(oklch(from #029ae8 l c h / 0.5), oklch(from #01aaff l c h / 0.375));

  /* Secondary colors */
  --color-secondary-fill: #525f7a;
  --color-secondary-fill-hover: light-dark(#48536b, #5d6b89);
  --color-secondary-on-fill: white;
  --color-secondary-text: light-dark(#5d6b89, #969eaf);
  --color-secondary-text-hover: light-dark(#48536b, #b3b9c5);
  --color-secondary-focus-ring: light-dark(oklch(from #5d6b89 l c h / 0.25), oklch(from #909ebe l c h / 0.25));

  /* Contrast colors */
  --color-contrast-fill: light-dark(#181c25, #eff1f4);
  --color-contrast-fill-hover: light-dark(black, white);
  --color-contrast-on-fill: light-dark(white, black);
  --color-contrast-text: light-dark(#181c25, #dfe3eb);
  --color-contrast-text-hover: light-dark(black, white);
  --color-contrast-focus-ring: light-dark(oklch(from #5d6b89 l c h / 0.25), oklch(from #cfd5e2 l c h / 0.25));

  /* Text colors */
  --color-text: light-dark(#373c44, #c2c7d0);
  --color-text-muted: light-dark(#8891a4, #7b8495);

  /* Background / surface */
  --color-background: light-dark(white, #0e1118);
  --color-border: light-dark(#dfe3eb, #202632);
}
```

## Palette Variables

Each palette defines these CSS custom properties:

| Variable | Description |
|----------|-------------|
| `--color-primary-fill` | Fill color for primary buttons and active controls |
| `--color-primary-fill-hover` | Fill color on hover |
| `--color-primary-on-fill` | Text color on top of primary fill |
| `--color-primary-text` | Primary text / link color |
| `--color-primary-text-hover` | Primary text / link color on hover |
| `--color-primary-focus-ring` | Primary focus ring color |

All palettes automatically adapt to light and dark modes via the `light-dark()` CSS function.

## Typography Customization

### Font Family

```css
:root {
  --font-family: var(--font-family-sans-serif);
  --font-family-sans-serif: system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial, "Helvetica Neue", sans-serif, var(--font-family-emoji);
  --font-family-monospace: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, var(--font-family-emoji);
  --font-family-emoji: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

### Font Sizes

```css
:root {
  --font-size: 97%; /* Base size - responsive: 98%@sm, 99%@md, 100%@lg, 101%@xl, 102%@xxl */

  /* Font size scale for headings */
  --h1-size: 2rem;
  --h2-size: 1.75rem;
  --h3-size: 1.5rem;
  --h4-size: 1.25rem;
  --h5-size: 1.125rem;
  --h6-size: 1rem;
}
```

For smaller text, use the scoped variable:

```css
small {
  --font-size: 0.875em;
}
```

### Line Height

```css
:root {
  --line-height: 1.5;
}

/* Headings have scoped line heights */
h1 { --line-height: 1.125; }
h2 { --line-height: 1.15; }
h3 { --line-height: 1.175; }
h4 { --line-height: 1.2; }
h5 { --line-height: 1.225; }
h6 { --line-height: 1.25; }
```

### Font Weight

```css
:root {
  --font-weight: 400;
}

/* Headings have scoped font weights */
h1, h2, h3, h4, h5, h6 {
  --font-weight: 700;
}
```

## Spacing Customization

```css
:root {
  --base-spacing: 0.75rem;
  --spacing: var(--base-spacing); /* scales with each breakpoint */
  --typography-spacing-vertical: 1rem;
  --input-spacing-vertical: 0.5rem;
  --input-spacing-horizontal: 0.7rem;
}
```

## Borders & Effects

```css
:root {
  --radius: 0.25rem;
  --border-size: 0.0625rem;
  --outline-size: 0.125rem;
  --transition: 0.2s ease-in-out;
}
```

## Shadows

```css
:root {
  --shadow:
    0.0145rem 0.029rem 0.174rem light-dark(rgb(129 145 181 / 0.01698), rgb(7 9 12 / 0.01698)),
    0.0335rem 0.067rem 0.402rem light-dark(rgb(129 145 181 / 0.024), rgb(7 9 12 / 0.024)),
    0.0625rem 0.125rem 0.75rem  light-dark(rgb(129 145 181 / 0.03),   rgb(7 9 12 / 0.03)),
    0.1125rem 0.225rem 1.35rem  light-dark(rgb(129 145 181 / 0.036),  rgb(7 9 12 / 0.036)),
    0.2085rem 0.417rem 2.502rem light-dark(rgb(129 145 181 / 0.04302),rgb(7 9 12 / 0.04302)),
    0.5rem    1rem     6rem     light-dark(rgb(129 145 181 / 0.06),   rgb(7 9 12 / 0.06)),
    0 0 0 0.0625rem             light-dark(rgb(129 145 181 / 0.015),  rgb(7 9 12 / 0.015));
}
```

## Component Variables

### Dialog, Alerts and Card

```css
:root {
  --dialog-fill: light-dark(white, #181c25);
  --dialog-border: light-dark(var(--color-border), #181c25);
  --dialog-section-fill: light-dark(#fbfcfc, #2a3140);
  --dialog-shadow: var(--shadow);
  --dialog-overlay: light-dark(oklch(from #e8eaed l c h / 0.75), oklch(from #07090c l c h / 0.75));
}
```

### Forms & Inputs

```css
:root {
  --input-fill: light-dark(#fbfcfc, #1c212c);
  --input-fill-active: light-dark(white, #1a1f28);
  --input-border: light-dark(#cfd5e2, #2a3140);
  --input-text: light-dark(#23262c, #e0e3e7);
  --input-placeholder-text: var(--color-text-muted);
  --input-border-focus: var(--color-primary-fill);
  --input-opacity-disabled: 0.5;
}
```

### Buttons

```css
:root {
  --button-shadow: 0 0 0 rgb(0 0 0 / 0);
  --button-shadow-hover: 0 0 0 rgb(0 0 0 / 0);
}
```

### Navigation

```css
:root {
  --nav-link-gap: calc(var(--spacing) * 0.5);
  --nav-breadcrumb-divider: ">";
}
```

### Switch

```css
:root {
  --switch-fill: light-dark(#bfc7d9, #333c4e);
  --switch-fill-checked: var(--color-primary-fill);
  --switch-thumb-fill: white;
}
```

### Code

```css
:root {
  --code-fill: light-dark(#f3f5f7, #1a1f28);
  --code-text: light-dark(#646b79, #8891a4);
  --kbd-fill: var(--color-text);
  --kbd-text: var(--color-background);
}
```

### Accordion (Details)

```css
:root {
  --details-summary-text: var(--color-text);
  --details-summary-text-hover: var(--color-primary-text-hover);
  --details-summary-text-open: var(--color-text-muted);
}
```

### Menus & Dropdowns

```css
:root {
  --menu-fill: light-dark(white, #181c25);
  --menu-border: light-dark(#eff1f4, #202632);
  --menu-shadow: var(--shadow);
  --menu-text: var(--color-text);
  --menu-fill-hover: light-dark(#eff1f4, #202632);
}
```

### Progress

```css
:root {
  --progress-track-fill: light-dark(#dfe3eb, #202632);
  --progress-fill: var(--color-primary-fill);
}
```

### Tooltip

```css
:root {
  --tooltip-fill: var(--color-contrast-fill);
  --tooltip-text: var(--color-contrast-on-fill);
}
```

## Variable File Organization

CSS variables are organized into separate files for maintainability:

| File | Contents |
|------|----------|
| `_breakpoints.css` | Responsive breakpoint custom media queries |
| `_theme.css` | Colors, typography, spacing, effects, component tokens, and icons |
| `_elements.css` | Element-scoped variable overrides (headings, forms, etc.) |

## Complete Example

Here is a complete customization file:

```css
/* custom.css */
@import "semanticus-css";

:root {
  /* Primary brand color (via palette override) */
  --color-primary-fill: #6366f1;
  --color-primary-fill-hover: light-dark(#4f46e5, #818cf8);
  --color-primary-focus-ring: light-dark(oklch(from #6366f1 l c h / 0.5), oklch(from #818cf8 l c h / 0.375));

  /* Typography */
  --font-family-sans-serif: "Inter", system-ui, sans-serif;
  --line-height: 1.7;

  /* Borders */
  --radius: 0.5rem;
}
```

To help you create your own custom styles, check out the [Theme Builder](/guide/theme-builder) tool.

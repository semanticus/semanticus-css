# CSS Variables

**Semanticus CSS** is built with CSS variables, making it easy to customize colors, spacing, typography, and more.

After importing any of semanticus-css's css files, you can further customize it by overriding specific CSS variables defined in the `:root` selector:

```css
:root {
  --primary-background-color: #0172ad;
  --primary-background-color-hover: #02659a;
  --spacing: 1rem;
}
```

To help you create your own custom styles, check out the [Palettes](/guide/palettes) or [Sizes](/guide/sizes) builder tools.

## Color Variables List

Colors use the `light-dark()` CSS function so a single declaration covers both themes automatically.

```css
:root {
  /* Primary colors (defined by the active palette) */
  --primary-background-color: #0172ad;
  --primary-background-color-hover: light-dark(#02659a, #017fc0);
  --primary-color: white;
  --primary-color-hover: light-dark(#015887, #79c0ff);
  --primary-focus-ring-color: light-dark(oklch(from #029ae8 l c h / 0.5), oklch(from #01aaff l c h / 0.375));

  /* Secondary colors */
  --secondary-background-color: #525f7a;
  --secondary-background-color-hover: light-dark(#48536b, #5d6b89);
  --secondary-color: white;
  --secondary-color-hover: light-dark(#48536b, #b3b9c5);
  --secondary-focus-ring-color: light-dark(oklch(from #5d6b89 l c h / 0.25), oklch(from #909ebe l c h / 0.25));

  /* Contrast colors */
  --contrast-background-color: light-dark(#181c25, #eff1f4);
  --contrast-background-color-hover: light-dark(black, white);
  --contrast-color: light-dark(white, black);
  --contrast-color-hover: light-dark(black, white);
  --contrast-focus-ring-color: light-dark(oklch(from #5d6b89 l c h / 0.25), oklch(from #cfd5e2 l c h / 0.25));

  /* Text colors */
  --color: light-dark(#373c44, #c2c7d0);
  --color-muted: light-dark(#8891a4, #7b8495);

  /* Background / surface */
  --background-color: light-dark(white, #0e1118);
  --border-color: light-dark(#dfe3eb, #202632);
}
```

## Palette Variables

Each palette defines these CSS custom properties:

| Variable | Description |
|----------|-------------|
| `--primary-background-color` | Background color for primary buttons and controls |
| `--primary-background-color-hover` | Background color on hover |
| `--primary-color` | Text color on primary backgrounds |
| `--primary-color-hover` | Text color on hover |
| `--primary-focus-ring-color` | Primary focus ring color |

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

/* Headings use the --heading-font-weight token */
h1, h2, h3, h4, h5, h6 {
  --font-weight: var(--heading-font-weight);
}
```

## Spacing Customization

```css
:root {
  --spacing-base: 0.75rem;
  --spacing-scale: 1;
  --spacing: calc(var(--spacing-base) * var(--spacing-scale));
  --typography-spacing-vertical: 1rem;
  --inputs-spacing-vertical: 0.5rem;
  --inputs-spacing-horizontal: 0.7rem;
}
```

## Borders & Effects

```css
:root {
  --border-radius: 0.25rem;
  --border-width: 0.0625rem;
  --outline-width: 0.125rem;
  --transition: 0.2s ease-in-out;
}
```

## Shadows

```css
:root {
  --box-shadow:
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

### Dialog, Card

```css
:root {
  --marginals-background-color: light-dark(#fbfcfc, #2a3140);
}
```

### Forms & Inputs

```css
:root {
  --inputs-background-color: light-dark(#fbfcfc, #1c212c);
  --inputs-background-color-focus: light-dark(white, #1a1f28);
  --inputs-border-color: light-dark(#cfd5e2, #2a3140);
  --inputs-color: light-dark(#23262c, #e0e3e7);
  --inputs-placeholder-color: var(--color-muted);
  --inputs-border-color-focus: var(--primary-background-color);
  --inputs-opacity-disabled: 0.5;
}
```

### Buttons

```css
:root {
  --buttons-box-shadow: 0 0 0 rgb(0 0 0 / 0);
  --buttons-box-shadow-hover: 0 0 0 rgb(0 0 0 / 0);
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
  --input-switch-background-color: light-dark(#bfc7d9, #333c4e);
  --input-switch-background-color-checked: var(--primary-background-color);
  --input-switch-thumb-background-color: white;
}
```

### Code

```css
:root {
  --code-background-color: light-dark(#f3f5f7, #1a1f28);
  --code-color: light-dark(#646b79, #8891a4);
  --kbd-background-color: var(--color);
  --kbd-color: var(--background-color);
}
```

### Accordion (Details)

```css
:root {
  --details-summary-color: var(--color);
  --details-summary-color-hover: var(--primary-color-hover);
  --details-summary-color-open: var(--color-muted);
}
```

### Menus & Dropdowns

```css
:root {
  --details-menu-background-color: light-dark(white, #181c25);
  --details-menu-border-color: light-dark(#eff1f4, #202632);
  --details-menu-color: var(--color);
  --details-menu-background-color-hover: light-dark(#eff1f4, #202632);
}
```

### Progress

```css
:root {
  --progress-track-background-color: light-dark(#dfe3eb, #202632);
  --progress-color: var(--primary-background-color);
}
```

### Tooltip

```css
:root {
  --tooltip-background-color: var(--contrast-background-color);
  --tooltip-color: var(--contrast-color);
}
```

## Variable File Organization

CSS variables are organized into separate files for maintainability:

| File | Contents |
|------|----------|
| `_breakpoints.css` | Responsive breakpoint custom media queries |
| `_theme.css` | Colors, typography, spacing, effects, component tokens, and icons |

## Complete Example

Here is a complete customization file:

```css
/* custom.css */
@import "semanticus-css";

:root {
  /* Primary brand color (via palette override) */
  --primary-background-color: #6366f1;
  --primary-background-color-hover: light-dark(#4f46e5, #818cf8);
  --primary-color: white;
  --primary-focus-ring-color: light-dark(oklch(from #6366f1 l c h / 0.5), oklch(from #818cf8 l c h / 0.375));

  /* Typography */
  --font-family-sans-serif: "Inter", system-ui, sans-serif;
  --line-height: 1.7;

  /* Borders */
  --border-radius: 0.5rem;
}
```

To help you create your own custom styles, check out the [Palettes](/guide/palettes) or [Sizes](/guide/sizes) builder tools.

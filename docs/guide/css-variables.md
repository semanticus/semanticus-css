# CSS Variables

Semanticus CSS is built with CSS variables, making it easy to customize colors, spacing, typography, and more.

After importing any of semanticus-css's css files, you can further customize it by overriding specific CSS variables defined in the `:root` selector:

```css
:root {
  --color-primary-bg: #0172ad;
  --color-primary-hover-bg: #015887;
  --spacing: 1rem;
}
```

## Color Variables List

```css
:root {
  /* Primary colors */
  --color-primary-bg: #0172ad;
  --color-primary-border: var(--color-primary-bg);
  --color-primary-underline: rgba(var(--color-primary-rgb), 0.5);
  --color-primary-hover: #015887;
  --color-primary-hover-bg: #02659a;
  --color-primary-hover-border: var(--color-primary-hover-bg);
  --color-primary-hover-underline: var(--color-primary-hover);
  --color-primary-focus: rgba(2, 154, 232, 0.5);
  --color-primary-inverse: #fff;

  /* Secondary colors */
  --color-secondary-bg: #525f7a;
  --color-secondary-border: var(--color-secondary-bg);
  --color-secondary-underline: rgba(var(--color-secondary-rgb), 0.5);
  --color-secondary-hover: #48536b;
  --color-secondary-hover-bg: #48536b;
  --color-secondary-hover-border: var(--color-secondary-hover-bg);
  --color-secondary-hover-underline: var(--color-secondary-hover);
  --color-secondary-focus: rgba(var(--color-secondary-rgb), 0.25);
  --color-secondary-inverse: #fff;

  /* Contrast colors */
  --color-contrast-bg: #181c25;
  --color-contrast-border: var(--color-contrast-bg);
  --color-contrast-underline: rgba(var(--color-contrast-rgb), 0.5);
  --color-contrast-hover: #000;
  --color-contrast-hover-bg: #000;
  --color-contrast-hover-border: var(--color-contrast-hover-bg);
  --color-contrast-hover-underline: var(--color-contrast-hover);
  --color-contrast-focus: rgba(93, 107, 137, 0.25);
  --color-contrast-inverse: #fff;

  /* Text colors */
  --color-text: rgb(var(--color-text-rgb));
  --color-text-muted: color-mix(in srgb, rgb(var(--color-text-rgb)), rgb(128, 128, 128) 70%);
  --color-text-selection: rgba(2, 154, 232, 0.25);

  /* Background colors */
  --color-background: #fff;
  --color-border-muted: rgb(231, 234, 239.5);
}
```

## RGB Channel Variables

For opacity manipulation, RGB channel variables are defined separately:

```css
:root {
  --color-primary-rgb: 1, 114, 173;
  --color-secondary-rgb: 93, 107, 137;
  --color-contrast-rgb: 24, 28, 37;
  --color-success-rgb: 43, 122, 76;
  --color-info-rgb: 4, 120, 120;
  --color-warning-rgb: 255, 191, 0;
  --color-danger-rgb: 197, 47, 33;
  --color-text-rgb: 55, 60, 68;
}
```

These enable using colors with custom opacity: `rgba(var(--color-primary-rgb), 0.5)`.

## Palette Variables

Each palette defines these CSS custom properties:

| Variable | Description |
|----------|-------------|
| `--color-primary-bg` | Primary background color (buttons, links) |
| `--color-primary-border` | Primary border color |
| `--color-primary-underline` | Primary underline color |
| `--color-primary-hover` | Primary text color on hover |
| `--color-primary-hover-bg` | Primary background on hover |
| `--color-primary-hover-border` | Primary border on hover |
| `--color-primary-hover-underline` | Primary underline on hover |
| `--color-primary-focus` | Primary focus ring color |
| `--color-primary-inverse` | Text color on primary backgrounds |
| `--color-text-selection` | Text selection highlight color |

All palettes automatically adapt to light and dark modes based on the `data-theme` attribute or user's system preferences.

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
  --fs-1: 2rem;
  --fs-2: 1.75rem;
  --fs-3: 1.5rem;
  --fs-4: 1.25rem;
  --fs-5: 1.125rem;
  --fs-6: 1rem;
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
  --spacing: 0.75rem;
  --block-spacing-vertical: 1.2rem;
  --block-spacing-horizontal: 1.2rem;
  --typography-spacing-vertical: 1rem;
  --form-element-spacing-vertical: 0.5rem;
  --form-element-spacing-horizontal: 0.7rem;
  --grid-column-gap: var(--spacing);
  --grid-row-gap: var(--spacing);
}
```

## Border Radius

```css
:root {
  --border-radius: 0.25rem;
  --border-width: 0.0625rem;
  --outline-width: 0.125rem;
}
```

## Shadows

```css
:root {
  --shadow-sm: 0 0.0625rem 0.125rem rgba(129, 145, 181, 0.1);
  --shadow-md: 0.0625rem 0.125rem 0.5rem rgba(129, 145, 181, 0.15);
  --shadow-lg: 0.0145rem 0.029rem 0.174rem rgba(129, 145, 181, 0.01698),
               0.0335rem 0.067rem 0.402rem rgba(129, 145, 181, 0.024),
               0.0625rem 0.125rem 0.75rem rgba(129, 145, 181, 0.03),
               0.1125rem 0.225rem 1.35rem rgba(129, 145, 181, 0.036),
               0.2085rem 0.417rem 2.502rem rgba(129, 145, 181, 0.04302),
               0.5rem 1rem 6rem rgba(129, 145, 181, 0.06),
               0 0 0 0.0625rem rgba(129, 145, 181, 0.015);
}
```

## Component Variables

### Cards

```css
:root {
  --card-bg: var(--color-background);
  --card-border: var(--color-border-muted);
  --card-shadow: var(--shadow-lg);
  --card-section-bg: rgb(251, 251.5, 252.25);
}
```

### Forms

```css
:root {
  --form-bg: rgb(251, 251.5, 252.25);
  --form-border-color: #cfd5e2;
  --form-text-color: #23262c;
  --form-placeholder-color: var(--color-text-muted);
  --form-focus: var(--color-primary-border);
  --form-active-bg: #fff;
  --form-active-border: var(--color-primary-border);
  --form-disabled-opacity: 0.5;
  --form-invalid-border: rgb(var(--color-danger-rgb));
  --form-valid-border: rgb(var(--color-success-rgb));
}
```

### Buttons

```css
:root {
  --button-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-shadow-hover: 0 0 0 rgba(0, 0, 0, 0);
}
```

### Navigation

```css
:root {
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --nav-breadcrumb-divider: ">";
}
```

### Modal

```css
:root {
  --modal-overlay-bg: rgba(232, 234, 237, 0.75);
  --modal-overlay-backdrop-filter: blur(0.375rem);
}
```

## Variable File Organization

CSS variables are organized into separate files for maintainability:

| File | Contents |
|------|----------|
| `_breakpoints.css` | Responsive breakpoint custom media queries |
| `_layout.css` | Typography, spacing, sizing, base icons |
| `_colors.css` | Color palette, RGB values, light/dark themes |
| `_components.css` | Component-specific variables |
| `_icons.css` | Theme-specific validation icons |
| `_elements.css` | Element-scoped variable overrides |

## Complete Example

Here is a complete customization file:

```css
/* custom.css */
@import "semanticus-css";

:root {
  /* Primary brand color */
  --color-primary-bg: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-primary-hover-bg: #4f46e5;
  --color-primary-focus: rgba(99, 102, 241, 0.5);

  /* Typography */
  --font-family-sans-serif: "Inter", system-ui, sans-serif;
  --line-height: 1.7;

  /* Borders */
  --border-radius: 0.5rem;
}

[data-theme="dark"] {
  --color-primary-bg: #6366f1;
  --color-primary-hover: #818cf8;
  --color-primary-hover-bg: #4f46e5;
}
```

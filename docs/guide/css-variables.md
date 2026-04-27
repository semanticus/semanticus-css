# CSS Variables

Semanticus CSS is built with CSS variables, making it easy to customize colors, spacing, typography, and more.

After importing any of semanticus-css's css files, you can further customize it by overriding specific CSS variables defined in the `:root` selector:

```css
:root {
  --color-primary: #0172ad;
  --color-primary-hover: #015887;
  --spacing: 1rem;
}
```

## Color Variables List

```css
:root {
  /* Primary colors */
  --color-primary: #0172ad;
  --color-primary-hover: #015887;
  --color-primary-bg: #0172ad;
  --color-primary-border: var(--color-primary-bg);
  --color-primary-focus: rgba(2, 154, 232, 0.5);
  --color-primary-inverse: #fff;

  /* Secondary colors */
  --color-secondary: #5d6b89;
  --color-secondary-hover: #48536b;
  --color-secondary-bg: #525f7a;
  --color-secondary-border: var(--color-secondary-bg);
  --color-secondary-focus: rgba(93, 107, 137, 0.25);
  --color-secondary-inverse: #fff;

  /* Contrast colors */
  --color-contrast: #181c25;
  --color-contrast-hover: #000;
  --color-contrast-bg: #181c25;
  --color-contrast-border: var(--color-contrast-bg);
  --color-contrast-focus: rgba(93, 107, 137, 0.25);
  --color-contrast-inverse: #fff;

  /* Text colors */
  --color-text: #373c44;
  --color-text-muted: #646b79;
  --color-text-selection: rgba(2, 154, 232, 0.25);

  /* Background colors */
  --color-background: #fff;
  --color-surface: #f4f4f4;
}
```

## Palette Variables

Each palette defines these CSS custom properties:

| Variable | Description |
|----------|-------------|
| `--color-primary` | Primary text color |
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
  --font-family: "Inter", system-ui, sans-serif;
  --font-family-sans-serif: system-ui, sans-serif;
  --font-family-monospace: ui-monospace, SFMono-Regular, Menlo, monospace;
}
```

### Font Sizes

```css
:root {
  --font-size: 100%; /* Base size - responsive: 106.25%@576px, 112.5%@768px, etc. */
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
  --spacing: 1rem;
  --block-spacing-vertical: var(--spacing);
  --block-spacing-horizontal: var(--spacing);
  --typography-spacing-vertical: 1rem;
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
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

### Utility Scale Variables

Spacing and border-width utilities use calculated scales based on default values:

```css
:root {
  /* Spacing scale (used by .m-*, .p-*, .gap-* utilities) */
  --spacer-default: var(--spacing);
  --spacer-0: 0;
  --spacer-1: calc(var(--spacer-default) * 0.25);
  --spacer-2: calc(var(--spacer-default) * 0.5);
  --spacer-3: var(--spacer-default);
  --spacer-4: calc(var(--spacer-default) * 1.5);
  --spacer-5: calc(var(--spacer-default) * 3);

  /* Border-width scale (used by .border-* utilities) */
  --border-width-default: var(--border-width);
  --border-width-0: 0;
  --border-width-1: var(--border-width-default);
  --border-width-2: calc(var(--border-width-default) * 2);
  --border-width-3: calc(var(--border-width-default) * 3);
  --border-width-4: calc(var(--border-width-default) * 4);
  --border-width-5: calc(var(--border-width-default) * 5);

  /* Border-radius scale (used by .rounded-* utilities) */
  --border-radius-default: var(--border-radius);
  --border-radius-sm: var(--border-radius-default);
  --border-radius-lg: calc(var(--border-radius-default) * 2);
  --border-radius-xl: calc(var(--border-radius-default) * 4);
  --border-radius-xxl: calc(var(--border-radius-default) * 8);
}
```

Use the `-d` modifier on utility classes to apply the default value (e.g., `.p-d`, `.border-d`, `.rounded-d`, `.gap-d`).

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
}
```

### Buttons

```css
:root {
  --button-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-shadow-hover: 0 0 0 rgba(0, 0, 0, 0);
}
```

## Complete Example

Here is a complete customization file:

```css
/* custom.css */
@import "semanticus-css";

:root {
  /* Primary brand color */
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-primary-bg: #6366f1;
  --color-primary-focus: rgba(99, 102, 241, 0.5);

  /* Typography */
  --font-family: "Inter", system-ui, sans-serif;
  --line-height: 1.7;

  /* Borders */
  --border-radius: 0.5rem;
}

[data-palette="dark"] {
  --color-primary: #818cf8;
  --color-primary-hover: #a5b4fc;
  --color-primary-bg: #6366f1;
}
```

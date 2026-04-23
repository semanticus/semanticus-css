# Light & Dark Modes

Semanticus CSS supports light and dark modes out of the box, automatically adapting to your users' system preferences or allowing explicit control via the `data-theme` attribute.

## Automatic System Detection

By default, Semanticus CSS respects the user's OS color scheme preference using the `prefers-color-scheme` media query:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@goncalvesjoao/semanticus-css@0.2.1/dist/semanticus.css">
</head>
<body>
  <!-- Content automatically adapts to system theme -->
</body>
</html>
```

The `<meta name="color-scheme" content="light dark">` tag is essential—it tells the browser your site supports both themes and enables native UI elements (scrollbars, form controls) to adapt automatically.

## Explicit Theme Control

Override the automatic detection by setting the `data-theme` attribute on the `<html>` or `<body>` element:

### Force Light Mode

```html
<html lang="en" data-theme="light">
```

### Force Dark Mode

```html
<html lang="en" data-theme="dark">
```

### Dynamic Theme Switching

Add a theme toggle button to let users switch between light and dark modes:

```html
<button id="theme-toggle">Toggle Theme</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  });
</script>
```

## How It Works

Semanticus CSS uses CSS custom properties defined in three layers:

1. **Light theme (default)** — Applied via `[data-theme="light"]` or `:root:not([data-theme="dark"])`
2. **Dark theme (system preference)** — Applied via `@media (prefers-color-scheme: dark)` when no `data-theme` is set
3. **Dark theme (explicit)** — Applied via `[data-theme="dark"]` regardless of OS preference

All semantic color variables (`--color-primary`, `--color-background`, `--color-text`, etc.) are redefined in each theme to ensure optimal contrast and readability.

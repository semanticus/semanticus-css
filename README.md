# Semanticus CSS

[![npm version](https://img.shields.io/npm/v/@semanticus/semanticus-css)](https://www.npmjs.com/package/@semanticus/semanticus-css)
[![license](https://img.shields.io/npm/l/@semanticus/semanticus-css)](LICENSE)

**Semanticus** is a lightweight CSS framework that prioritizes semantic HTML and ARIA-focused accessibility, with a small set of atomic utilities.

> [!CAUTION]
> Semanticus CSS hasn't been seriously battle tested in production yet.

> [!IMPORTANT]
> CALL TO ARMS: Even with the advent of AI, building an open source project requires a lot of work, if you are interested to help out, check out the [roadmap](https://semanticus.design/about/roadmap), the [contributing guide](https://semanticus.design/about/contributing) and join us in this journey!

## Vision

Contribute to a more accessible friendly world wide web.

## Mission

Enable authors to write clean, semantic HTML that looks great by default, guide them toward ARIA-centric patterns, and ensure core functionality works without JavaScript while allowing deliberate customization via a small, consistent set of utilities.

## Core Principles

- **Semantic-first:** Semantic styling for real HTML elements and ARIA roles rather than relying on heavy class scaffolding.
- **Accessibility-focused:** Prefer ARIA patterns and semantic attributes over ad-hoc class-based components.
- **Minimalism:** Keep utility classes to a necessary minimum; add classes only for intentional overrides.
- **Predictable customization:** Centralize styling via CSS variables, assuring a consistent look for both semantic styles and atomic utilities.
- **Progressive enhancement:** Ensure base semantics work without JavaScript, and enhance behavior when needed.

## Installation

### Option 1: CDN (quick start)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.9.0/dist/semanticus.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.9.0/dist/semanticus.palette.blue.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.9.0/dist/semanticus.size.pico.css">
```

### Option 2: Install manually

Download the [distribution files](https://registry.npmjs.org/@semanticus%2Fsemanticus-css/-/semanticus-css-0.9.0.tgz), move the ones you need to your **stylesheets** folder and include them in your HTML `<head>`:

```html
<link rel="stylesheet" href="/css/semanticus.css">

<!-- customize it with a palette or size variation if needed -->
<link rel="stylesheet" href="/css/semanticus.palette.blue.css">
<link rel="stylesheet" href="/css/semanticus.size.pico.css">
```

### Option 3: NPM

```bash
npm install @semanticus/semanticus-css
```

```js
import '@semanticus/semanticus-css';

// Or import only the semantic layer
import '@semanticus/semanticus-css/semantics';

// Or add a palette / size on top
import '@semanticus/semanticus-css/palettes/blue';
import '@semanticus/semanticus-css/sizes/pico';
```

> **Note:** The `import` syntax requires a bundler that supports CSS imports (e.g., Vite, Webpack, Rollup, or Parcel).

Check out the [Palettes & Sizes](https://semanticus.design/guide/palettes-sizes.html) guide for more options.

## How It Works

Semanticus CSS is built on four complementary layers:

### 1. Semantic Styling

Beautiful default styles for plain **ARIA-centric** HTML — simply write plain HTML and [Semantic Styling](https://semanticus.design/docs/semantics/) will make it look great by default.

```html
<article>
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button>Click me</button>
</article>
```

### 2. Components

Minimal set of reusable building blocks that extend the **Semantic Styling** - add a [component](https://semanticus.design/docs/components/) when you need a specific UI pattern.

```html
<article class="card">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button>Click me</button>
</article>
```

### 3. Variants

CSS classes that tweak the **Semantic Styling** and **Components** - throw in a [variant](https://semanticus.design/docs/variants/) when you want to add or reduce visual flair.

```html
<article class="card secondary">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button class="ghost">Click me</button>
</article>
```

### 4. Utilities

[Utility](https://semanticus.design/docs/utilities/) classes adapted to the same **CSS variables** as the **Semantic Styling** and **Components** for a consistent design - use them when you need fine-grained control over **spacing**, **layout**, **colors**, and more.

```html
<article class="card secondary text-center w-75 mx-auto">
  <hgroup class="p-3">
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button class="ghost">Click me</button>
</article>
```

## Starter HTML template

Here's an off-to-a-great-start HTML template using semantic styling, its variants, and utilities:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.9.0/dist/semanticus.css">
</head>
<body class="vstack">
  <header class="container">
    <nav>
      <h3><a href="#">Acme Corp</a></h3>

      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#" role="button">Log In</a></li>
      </ul>
    </nav>
  </header>

  <main class="container py-d flex-grow-1">
    <hgroup>
      <h1>Welcome to Semanticus CSS</h1>
      <p>A lightweight CSS framework for modern web development.</p>
    </hgroup>

    <button class="secondary">Get Started</button>
  </main>

  <footer class="text-center text-bg-secondary-subtle">
    <p>Acme Corp &copy; 2026. All rights reserved.</p>
  </footer>
</body>
</html>
```

## Customization

You can override its variables to create your own themes and styles. For example:

```css
:root {
  --color-primary: #4f46e5;
  --border-radius: 0.75rem;
  --font-family: "Inter", sans-serif;
}
```

Check out the [CSS Variables](https://semanticus.design/guide/css-variables.html) guide for more details or the [Theme Builder](https://semanticus.design/theme-builder.html) to help you create your own custom styles.

## Browser Support

Semanticus CSS targets modern browsers based on the following [Browserslist](https://browsersl.ist/) configuration:

- Last 2 versions of each browser
- Firefox ESR
- No dead browsers

## Limitations

Semanticus CSS is inspired by the semantic and accessible foundations of Pico CSS￼ and the flexibility of utility-first composition patterns popularized by Bootstrap.

It is not a full UI component framework. Semanticus CSS intentionally avoids shipping exhaustive pre-built components or JavaScript-driven interactions, favoring semantic HTML, composable styling utilities, and framework-agnostic integration instead.

It does however provide documentation and examples on how to implement common UI patterns using semantic HTML and ARIA attributes, along with a small set of utility classes for visual variation and layout.

## Development

Check out this [How to setup the project](docs/about/contributing.md#how-to-setup-the-project) inside the contributing guide.

## Size comparison

| Bundle | Gzip |
| --- | --- |
| Pico (classless / semantics only) | 10.1 KB |
| Semanticus (semantics only) | 11.3 KB |
| Pico (semantics + classes) | 11.4 KB |
| Semanticus (semantics + components + variants) | 14.0 KB |
| Bootstrap (utilities only) | 10.9 KB |
| Semanticus (utilities only) | 9.4 KB |
| Bootstrap (full) | 30.4 KB |
| Semanticus (full) | 22.4 KB |
| Bootstrap (full + javascript) | 53.6 KB |

## License

Semanticus CSS is licensed under the [MIT License](LICENSE).

This project incorporates concepts and patterns from [Pico CSS](https://picocss.com/) and [Bootstrap](https://getbootstrap.com/), including Bootstrap's utilities system, both under the MIT License.
See the [NOTICE](NOTICE) file for full attribution and copyright details.

## Acknowledgments

Semanticus CSS wouldn't exist without the incredible work of the authors of:

### [Pico CSS](https://picocss.com/)

For showing us the beauty and power of semantic HTML while using accessibility as part of the design.
Very few frameworks have managed to keep so faithful to the semantic motto as PicoCSS is.

### [Bootstrap](https://getbootstrap.com/)

For providing a broad, practical utility system and a well-documented Utility API.
Bootstrap's utility architecture strongly influenced the utility layer in this project.

#### To the maintainers and contributors of these projects: THANK YOU 🙏

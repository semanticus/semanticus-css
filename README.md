# Semanticus CSS

[![npm version](https://img.shields.io/npm/v/@semanticus/semanticus-css)](https://www.npmjs.com/package/@semanticus/semanticus-css)
[![license](https://img.shields.io/npm/l/@semanticus/semanticus-css)](LICENSE)

**Semanticus** is a lightweight CSS framework that prioritizes semantic HTML and ARIA-focused accessibility, with a small set of atomic utilities.

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@1.1.0/dist/semanticus.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@1.1.0/dist/semanticus.palette.blue.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@1.1.0/dist/semanticus.size.pico.css">
```

### Option 2: Install manually

Download the [distribution files](https://registry.npmjs.org/@semanticus%2Fsemanticus-css/-/semanticus-css-1.1.0.tgz), move the ones you need to your **stylesheets** folder and include them in your HTML `<head>`:

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

Check out the [Palettes](https://semanticus.design/guide/palettes.html) and [Sizes](https://semanticus.design/guide/sizes.html) guides for more options.

## How It Works

**Semanticus CSS** is built on four complementary layers:

### 1. Semantic Styling

Beautiful default styles for plain **ARIA-centric** HTML — simply write plain HTML and [Semantic Styling](https://semanticus.design/docs/semantics/) will make it look great by default.

```html
<article>
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button>Get Started</button>
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

  <button>Get Started</button>
</article>
```

### 3. Variants

CSS classes that tweak the **Semantic Styling** and **Components** - throw in a [variant](https://semanticus.design/docs/variants/) when you want to add or reduce visual flair.

```html
<article class="card secondary subtle">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button class="contrast">Get Started</button>
</article>
```

### 4. Utilities

[Utility](https://semanticus.design/docs/utilities/) classes adapted to the same **CSS variables** as the **Semantic Styling** and **Components** for a consistent design - use them when you need fine-grained control over **spacing**, **layout**, **colors**, and more.

```html
<article class="card secondary subtle shadow text-center w-75 mx-auto">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button class="info ghost">Get Started</button>
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@2.0.0/dist/semanticus.css">
</head>
<body class="content-grid">
  <header>
    <nav>
      <h3><a href="#">Acme Corp</a></h3>

      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#" role="button" class="secondary">Log In</a></li>
      </ul>
    </nav>
  </header>

  <main class="py-d mb-3">
    <hgroup>
      <h1>Welcome to Semanticus CSS</h1>
      <p>ARIA-centric, semantic HTML enhanced by atomic utilities.</p>
    </hgroup>

    <button>Get Started</button>
  </main>

  <footer class="full-width pane">
    <nav>
      <p>Acme Corp &copy; 2026</p>
      <a href="#">Contact Us</a>
    </nav>
  </footer>
</body>
</html>
```

## Customization

You can override its variables to create your own themes and styles. For example:

```css
:root {
  --primary-background-color: #4f46e5;
  --primary-color: white;
  --border-radius: 0.75rem;
  --font-family: "Inter", sans-serif;
}
```

Check out the [CSS Variables](https://semanticus.design/guide/css-variables.html) guide for more details or the [Palettes](https://semanticus.design/guide/palettes.html) and [Sizes](https://semanticus.design/guide/sizes.html) builders to help you create your own custom styles.

## Browser Support

Semanticus CSS targets modern browsers based on the following [Browserslist](https://browsersl.ist/) configuration:

- Last 2 versions of each browser
- Firefox ESR
- No dead browsers

## Development

Check out this [How to setup the project](docs/about/contributing.md#how-to-setup-the-project) inside the contributing guide.

## About

**Semanticus CSS** is inspired by the semantic and accessible foundations of **Pico CSS** and the flexibility of utility composition patterns popularized by **Bootstrap**.

It aims to address the friction that often appears shortly after installing **Pico CSS**, when you want to customize `spacing`, `layout`, `colors`, and other CSS properties. It does so by combining **Bootstrap**-style utilities adapted to the same **CSS variable system**.

### Why not just use Bootstrap or Pico CSS?

> Or any other full-fledged CSS framework, for that matter.

**Semanticus CSS** is not appealing solely because of its small footprint. Its real value lies in its **semantic-first** and **accessibility-focused** styling approach, helping developers build beautiful interfaces while gradually guiding them toward accessibility best practices without overwhelming them with the complexities of **ARIA** patterns and implementation details.

### Size comparison

| Bundle | Gzip |
| --- | --- |
| Pico (semantics only) | 10.2 KB |
| Semanticus (semantics only) | 10.8 KB |
| Pico (semantics + classes) | 11.5 KB |
| Semanticus (semantics + components + variants) | 13.9 KB |
| Bootstrap (utilities + grid) | 16.3 KB |
| Semanticus (utilities + grid) | 10.2 KB |
| Bootstrap (full bundle) | 53.8 KB |
| Semanticus (full bundle) | 23.7 KB |

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

#### To the maintainers and contributors of these projects: A big THANK YOU

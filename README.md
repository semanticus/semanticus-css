# Semanticus CSS

[![npm version](https://img.shields.io/npm/v/@semanticus/semanticus-css)](https://www.npmjs.com/package/@semanticus/semanticus-css)
[![license](https://img.shields.io/npm/l/@semanticus/semanticus-css)](LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@semanticus/semanticus-css)](https://bundlephobia.com/package/@semanticus/semanticus-css)

**Semanticus** is a lightweight CSS framework that prioritizes semantic HTML and ARIA-focused accessibility, with a small set of atomic utilities.

## Vision

Enable authors to write clean, semantic HTML that looks great by default, guide them toward ARIA-centric patterns, and ensure core functionality works without JavaScript while allowing deliberate customization via a small, consistent set of utilities.

## Core Principles

- **Semantic-first:** Semantic styling for real HTML elements and ARIA roles rather than relying on heavy class scaffolding.
- **Accessibility-focused:** Prefer ARIA patterns and semantic attributes over ad-hoc class-based components.
- **Minimalism:** Keep utility classes to a necessary minimum; add classes only for intentional overrides.
- **Predictable customization:** Centralize styling via CSS variables, assuring a consistent look for both semantic styles and atomic utilities.
- **Progressive enhancement:** Ensure base semantics work without JavaScript, and enhance behavior when needed.

## 📦 Installation

### Option 1: CDN (quick start)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.palette.blue.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.size.slim.css">
```

### Option 2: Install manually

Download the [distribution files](https://registry.npmjs.org/@semanticus%2Fsemanticus-css/-/semanticus-css-0.7.0.tgz), move the ones you need to your **stylesheets** folder and include them in your HTML `<head>`:

```html
<link rel="stylesheet" href="/css/semanticus.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="/css/semanticus.palette.blue.css">
<link rel="stylesheet" href="/css/semanticus.size.slim.css">
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
import '@semanticus/semanticus-css/sizes/slim';
```

> **Note:** The `import` syntax requires a bundler that supports CSS imports (e.g., Vite, Webpack, Rollup, or Parcel).

Check out the [Palettes & Sizes](https://semanticus.design/guide/palettes-sizes.html) guide for more options.

## 🚀 Usage

Semanticus CSS is built on three complementary layers:

### 1. Semantic Styling

Beautiful default styles for plain **ARIA-centric** HTML — no classes needed. See the [Semantic Styling](https://semanticus.design/docs/semantics/) guide for more details.

```html
<article>
  <h1>Hello World</h1>
  <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
  <button>Click me</button>
</article>
```

### 2. Variants

Minimal set of CSS classes that add visual variation to the **Semantic Styling**. See the [Variants](https://semanticus.design/docs/variants/) guide for more details.

```html
<button class="ghost">Ghost</button>
<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
```

### 3. Utilities

Utility classes for **spacing**, **layout**, **colors**, and more — adapted to the **Semantic Styling** and **Variants** values for a consistent design. See the [Utilities](https://semanticus.design/docs/utilities/) guide for more details.

```html
<footer class="py-4 text-center text-bg-contrast-subtle">
  <p class="mb-0">Star us on GitHub!</p>
</footer>
```

## 🛠️ Customization

You can override its variables to create your own themes and styles. For example:

```css
:root {
  --color-primary: #4f46e5;
  --border-radius: 0.75rem;
  --font-family: "Inter", sans-serif;
}
```

Check out the [CSS Variables](https://semanticus.design/guide/css-variables.html) guide for more details or the [Theme Builder](https://semanticus.design/theme-builder.html) to help you create your own custom styles.

## 🌐 Browser Support

Semanticus CSS targets modern browsers based on the following [Browserslist](https://browsersl.ist/) configuration:

- Last 2 versions of each browser
- Firefox ESR
- No dead browsers

## 👨‍💻 Development

Check out this [Guide](docs/guide/contributing.md) for instructions on setting up the development environment, running tests, and contributing to the project.

## 📄 License

Semanticus CSS is licensed under the [MIT License](LICENSE).

This project incorporates concepts and patterns from [Pico CSS](https://picocss.com/) and [Bootstrap](https://getbootstrap.com/), including Bootstrap's utilities system, both under the MIT License.
See the [NOTICE](NOTICE) file for full attribution and copyright details.

## 🙏 Acknowledgments

Semanticus CSS wouldn't exist without the incredible work of the authors of:

### [Pico CSS](https://picocss.com/)

For showing us the beauty and power of semantic HTML while using accessibility as part of the design.
Very few frameworks have managed to keep so faithful to the semantic motto as PicoCSS is.

### [Bootstrap](https://getbootstrap.com/)

For providing a broad, practical utility system and a well-documented Utility API.
Bootstrap's utility architecture strongly influenced the utility layer in this project.

#### To the maintainers and contributors of these projects: THANK YOU 🙏

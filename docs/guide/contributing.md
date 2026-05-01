# Contributing

Thank you for your interest in helping make the web more semantic and accessible! 🙏

## Vision

**Semanticus CSS** exists to enable authors to write clean, semantic HTML that looks great by default. We guide developers toward ARIA-centric patterns and ensure core functionality works without JavaScript, while allowing deliberate customization via a small, consistent set of utilities.

## Core Principles

When contributing, please keep these principles in mind:

### 1. Semantic-First
Prioritize semantic styling for real HTML elements and ARIA roles rather than relying on heavy class scaffolding. If you can achieve the goal with semantic HTML, do it that way first.

### 2. Accessibility-Focused
Prefer established ARIA patterns and semantic attributes over ad-hoc class-based components. Every contribution should consider accessibility from the start — keyboard navigation, screen readers, and focus management matter.

### 3. Minimalism
Keep utility classes to a necessary minimum. Add classes only for intentional overrides, not for things that should work by default with semantic HTML.

### 4. Predictable Customization
Centralize styling via CSS variables, ensuring a consistent look for both semantic styles and atomic utilities.

### 5. Progressive Enhancement
Ensure base semantics work without JavaScript. Enhance behavior when JavaScript is available, but never require it for core functionality.

## Code Guidelines

### Adding New Features

1. **Semantic component** → add `src/semantics/_<element>.css` and import it in `src/semantics/modules.css`
2. **Utility class** → add to the appropriate `src/utilities/<category>/_<file>.css`
3. **Variant class** → add to `src/variants/_<file>.css` and import in `src/variants/modules.css`
4. **Palette** → add `src/palettes/<name>.css` and register it in `scripts/build-palettes.js`
5. **Size** → add `src/sizes/<name>.css` and register it in `scripts/build-sizes.js`

### Code Style

- Follow the existing CSS conventions
- Use CSS custom properties (`--*`) for theming rather than hard-coded values
- Run the linter before submitting:

```bash
npm run lint
```

### Documentation

If your contribution is user-facing, please update the documentation:

- Update relevant guides in `docs/`
- Include examples showing semantic HTML usage
- Explain any accessibility considerations
- Document CSS variables that can be customized

## How to setup the project

- Install [Node.js](https://nodejs.org/) (v18 or higher recommended) if you haven't already.

- Clone the repository

```bash
git clone https://github.com/semanticus/semanticus-css.git
```

- Move into the project directory

```bash
cd semanticus-css
```

- Install dependencies

```bash
npm install
```

## Development

- Make changes to the source code in the `src` directory, and run:

```bash
npm run build
```

- Run a local server at `http://localhost:3000` with a demo page to see your changes in action

```bash
npm run demo
```

- Or run the **vitepress** dev server at `http://localhost:5173` to see your changes reflected in the docs

```bash
npm run docs:dev
```

## Visual Regression Testing

Semanticus CSS uses [Playwright](https://playwright.dev/docs/test-snapshots) for visual regression testing.

- Capture reference snapshots

```bash
npm run test:update-snapshots
```

- Run visual regression tests against the reference snapshots

```bash
npm run test:visual-regression
```

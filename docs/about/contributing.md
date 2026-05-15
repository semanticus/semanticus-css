# Contributing

Thank you for considering contributing to **Semanticus CSS**!

**Semanticus CSS** is the sum of all the work done by **Pico CSS** and **Bootstrap**'s original author(s) and the contributions, plus the work of the author and maintainer of this project.

Hopefully this will change and your name gets added to the list of contributors as well.

The [roadmap](/about/roadmap), bug fixes and keeping up to date with new emerging patterns is a daunting task for one person alone and I'd love for you to be part of shaping the future of this project.

When contributing, please keep the [Core Principles](/about/vision.html#core-principles) in mind.

## Code Guidelines

### Adding New Features

1. **Semantic component** → add `src/semantics/_<element>.css` and import it in `src/semantics/modules.css`
2. **Utility class** → add to the appropriate `src/utilities/<category>/_<file>.css`
3. **Variant class** → add to `src/variants/_<file>.css` and import in `src/variants/modules.css`
4. **Palette** → add `src/palettes/<name>.css` and register it in `scripts/build-palettes.js`
5. **Size** → add `src/sizes/<name>.css` and register it in `scripts/build-sizes.js`

### Code Style

- Follow the existing CSS conventions — see [Token Conventions](/about/token-conventions) for the naming rules applied to CSS custom properties
- Use CSS custom properties (`--*`) for theming rather than hard-coded values
- Before submitting:
  - Run the linter:

  ```bash
  npm run lint
  ```

  - and the visual regression tests if your change affects styles:

  ```bash
  npm test
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

- Scenario 1: Changes to the `*.css` files in the `src` directory

Launch **storybook** at `http://localhost:6006` by running:

```bash
npm start
```

- Scenario 2: Changes to the `*.md` files in the `docs/` directory

Launch **vitepress** at `http://localhost:5173` by running:

```bash
npm run docs:dev
```

In both scenarios, you will probably want add or update the existing `*.demo.ts` files in the `demos/` directory that contain the HTML examples used both by **storybook** and **vitepress**.

## Testing

Semanticus CSS uses [Playwright](https://playwright.dev/docs/test-snapshots) for visual regression testing.

To run the test suite, use:

```bash
npm test
```

In case you want to update all existing snapshots after making changes to the codebase, you can run:

```bash
npm run test:update-snapshots
```

When the need to debug a specific test arises, you can run:

```bash
npm test <path to the spec.ts file> -- --debug
```

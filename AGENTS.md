# AGENTS.md — Semanticus CSS

Quick reference for AI agents working on this codebase.

## What This Is

**Semanticus CSS** is a lightweight, semantic CSS framework (~24 KB gzipped) that combines:
- **Semantic-first** HTML element styling (PicoCSS-inspired)
- **Atomic utility classes** (Bootstrap Utilities-inspired)
- Zero JavaScript dependency

## Architecture

The framework is organized into 6 layers, all in `src/`:

| Layer | Path | Purpose |
|-------|------|---------|
| Variables | `src/variables/_all.css` | Global CSS custom properties (colors, spacing, typography, theming) |
| Semantics | `src/semantics/` | Styles for raw HTML elements + ARIA roles (buttons, inputs, nav, dialog, typography, etc.) |
| Components | `src/components/` | Component-specific styles (`.card`, `.modal`, `.accordion`, etc.) |
| Variants | `src/variants/` | Tweaks existing element styles via CSS variables only (`.secondary`, `.contrast`, etc.) |
| Utilities | `src/utilities/` | Atomic utility classes (spacing, colors, flexbox, grid, display, positioning, typography, effects, borders, sizing) |

### Entry Points

- `src/index.css` — full bundle (variables + normalize + semantics + components + variants + utilities) → `semanticus.css`
- `src/no-utilities.css` — standard bundle (variables + normalize + semantics + components + variants) → `semanticus-no-utilities.css`
- `src/semantics/index.css` — semantics only → `semanticus-semantics.css`
- `src/utilities/index.css` — utilities only → `semanticus-utilities.css`

### Palettes & Sizes

- `src/palettes/` — 19 color palette overrides (e.g., `blue.css`, `zinc.css`)
- `src/sizes/` — size variant overrides (e.g., `pico.css`)
- These are standalone variable overrides meant to be loaded **after** a base bundle.

## Build System

- **Bundler**: [LightningCSS](https://lightningcss.dev/) (bundles, minifies, handles custom media queries)
- **Linting**: stylelint (`npm run lint` / `npm run lint:fix`)
- **Visual Regression**: playwright (`npm test` / `npm run test:update-snapshots`)
- **Docs**: VitePress in `docs/`

### Key Scripts

```bash
npm start              # Build + Docs dev server
npm test               # Playwright visual regression
npm run build          # Build all bundles + palettes + sizes (CI-safe, no network calls)
npm run build:css      # Build minified CSS bundles
npm run demo:server    # Run demo server used for visual regression testing
npm run docs:dev       # Dev server for docs
npm run lint           # Lint all CSS
npm run test:update-snapshots          # Update visual regression snapshots
npm run docs:update-size-claims        # Download Pico/Bootstrap, compute gzip sizes, update docs + README
```

## Conventions

- **Token Naming**: CSS custom properties map to CSS property names — see [`docs/guide/token-convention.md`](docs/guide/token-convention.md). Tokens follow `[--{scope}-]{property}[-{state}]` (e.g., `--buttons-background-color-hover`).
- **CSS Custom Properties**: All theming uses `--*` variables. Light/dark modes via `data-theme` attribute and `prefers-color-scheme`.
- **Semantic Selectors**: Target raw elements (`button`, `input`, `nav`) and ARIA roles (`[role=button]`, `[role=tooltip]`).
- **Utility Classes**: Bootstrap-style naming, always use `!important`.
  - Spacing: `.m-1`, `.mx-2`, `.p-3`, `.gap-4`
  - Layout: `.flex`, `.justify-between`
  - Colors: `.text-gray`, `.bg-primary`, `.border-red`
  - Effects: `.shadow-2`, `.opacity-50`
  - Sizing: `.w-100`, `.h-auto`
- **Modularity**: Each subfolder has a `modules.css` manifest that `@import`s its partials. Entry points import these manifests.
- **Naming**: Semantic partials use `_<element>.css`. Utility partials use `_<category>.css` inside subfolders.

## AI Agent Guidance

When contributing code or edits, follow the project's motto and core principles: ARIA-centric, semantic HTML — enhanced by atomic utilities. Practical rules for agents:

- **Prefer semantics over classes:** Implement features using native elements and ARIA roles before adding new utility classes.
- **Follow ARIA patterns:** Use established ARIA patterns (menus, tooltips, dialogs, etc.) rather than creating ad-hoc components that duplicate behavior.
- **Add files to the right layer:** New semantic styles → `src/semantics/_<name>.css`; utilities → `src/utilities/<category>/_<name>.css`; then import in the layer's `modules.css`.
- **Use CSS variables:** Expose themeable values via `--*` properties rather than hard-coded values.
- **Document and test:** Update docs in `docs/` for user-facing changes and run visual tests (`npm test`) when relevant.
- **Accessibility as first-class:** Include ARIA attributes, keyboard support, and focus styles; mention accessibility rationale in PRs and docs.


## Dist Outputs

All generated files land in `dist/`:

- `semanticus.css` — full bundle (everything including utilities)
- `semanticus-no-utilities.css` — standard bundle (semantics + components + variants, no utilities)
- `semanticus-semantics.css` — semantics only
- `semanticus-utilities.css` — utilities only
- `semanticus.palette.<name>.css`
- `semanticus.size.<name>.css`

## Browser Support

Modern browsers only (last 2 versions, Firefox ESR, no dead browsers). Configured in `.browserslistrc`.

The following modern CSS features are already in active use in the source — they are **not** browser support additions:
- `color-mix(in srgb, ...)` — used throughout for hover/focus/subtle color derivation
- `oklch()` with relative color syntax (`oklch(from <color> l c h / alpha)`) — used for backdrop transparency and other alpha derivations (e.g. link underline/decoration colors)
- `light-dark()` — used for automatic light/dark theme color switching
- `:has()`, `:is()`, `:where()` — used extensively in semantic selectors
- CSS nesting (`&`) — used throughout all source files

Features **not** currently used (and therefore still considered browser-support additions):
- `@layer` — cascade layering
- `@container` — container queries
- `@scope` — scoped styles
- `@function` — CSS custom functions (Chrome 139+ only, no Firefox/Safari support as of 2026)

## Adding a New Feature

1. **Semantic component** → add `src/semantics/_<element>.css` and import it in `src/semantics/modules.css`
2. **Utility class** → add to the appropriate `src/utilities/<category>/_<file>.css`
3. **Variant class** → add to `src/variants/_<file>.css` and import in `src/variants/modules.css`
4. **Palette** → add `src/palettes/<name>.css` and register it in `scripts/build-palettes.ts`
5. **Size** → add `src/sizes/<name>.css` and register it in `scripts/build-sizes.ts`
6. **Rebuild** with `npm run build`
7. **Lint** with `npm run lint`
8. **Update docs** in `docs/` if user-facing
9. **Update visual snapshots** with `npm run test:update-snapshots` if applicable
10. **Consider version bump** → see Semantic Versioning section below

## Semantic Versioning

This project follows [SemVer](https://semver.org/). When making changes, consider the impact on the public API (CSS variables, class names, behavior):

| Change Type | Examples | Version Bump |
|-------------|----------|--------------|
| **PATCH** | Bug fixes, typo corrections, non-visual refactors | 3.0.0 → 3.0.1 |
| **MINOR** | New utility classes, new semantic elements, additive features | 3.0.0 → 3.1.0 |
| **MAJOR** | Removing CSS variables, changing class behavior, browser support changes | 3.0.0 → 3.1.0* or 4.0.0 |

### Breaking Change Checklist

**MAJOR/MINOR bump required if you:**
- ❌ Remove or rename CSS variables (e.g., `--buttons-background-color`, `--primary-color`)
- ❌ Remove or rename CSS classes (e.g., `.primary`, `.ghost`)
- ❌ Change the visual output of existing classes significantly
- ❌ Change browser support requirements (e.g., adding `@layer`, `@container`, `@scope`)
- ❌ Reorganize file structure that affects imports

**Non-breaking (PATCH OK):**
- ✅ Add new CSS variables that don't conflict with existing ones
- ✅ Add new utility classes
- ✅ Fix broken styles (restoring intended behavior)
- ✅ Internal refactoring with no visual/output changes
- ✅ Documentation updates

### After Making Changes

1. Review the **Breaking Change Checklist** above
2. Run `npm run lint` and `npm run build` to ensure no errors
3. Update `package.json` version appropriately
4. Document breaking changes in commit message / PR description
5. Consider adding migration notes for significant breaking changes

## Dependencies

- Node >= 18
- npm >= 11
- No runtime JS dependencies
- Dev deps: LightningCSS, stylelint, VitePress, Playwright, Storybook

## License

MIT. Incorporates concepts from Pico CSS and Bootstrap (see `NOTICE`).

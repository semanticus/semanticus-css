# Roadmap

Legend: ✅ Completed | 🚧 In Progress | ⌛️ Pending

## Core Foundation

| Status | Feature |
| --- | --- |
| ✅ | Removed `--pico` prefix from all CSS variables |
| ✅ | Utility composition system |
| ✅ | Consolidated **Pico CSS** and **Bootstrap** css variables into one unified system |
| ✅ | Reduced overall spacing, in favor or a leanner look and kept **Pico CSS** original sizes in a separate dist file |
| ✅ | Removed `<article>`'s **card** style |
| ✅ | Two layer CSS variables token system |
| ✅ | Reducing CSS variables footprint with light/dark mode optimization |
| ✅ | Stack/layout primitives |
| ✅ | **intent** colors based on **Bootstrap** `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `contrast` (replacing `light` and `dark`) |
| ✅ | Refactor **Dropdown**, using the `ARIA: menu pattern` |
| ✅ | Refactor **Modal**, so that it doesn't depend on a card styled `<article>` |
| ✅ | Refactored **Tooltips** using the `ARIA: tooltip pattern` |
| ✅ | `aria-disabled="true"` |
| ✅ | `role="status"` and `role="alert"` to implement **alerts** and **toasts** |
| ✅ | Replaced **Pico CSS**'s `.grid` with `.auto-grid` |

## Components

| Status | Feature |
| --- | --- |
| ✅ | Accordions |
| 🚧 | Accordion List |
| ✅ | Alerts |
| ✅ | Auto Grid |
| ✅ | Card List |
| ✅ | Card, based off **Pico CSS**'s `<article>` semantic style |
| ✅ | Content Grid |
| ✅ | Dropdown |
| ✅ | Loading Indicator |
| ✅ | Icons |
| ✅ | Modal |
| ✅ | Pane |
| ✅ | Toasts |
| ✅ | Tooltip |
| 🚧 | Sidebar |
| ⌛ | Carousel |
| ⌛ | Badge |
| ⌛ | Tabs |
| ⌛ | Popper |

## Variants & Utilities

| Status | Feature |
| --- | --- |
| ✅ | Added `-d` modifiers to utility classes |
| ✅ | Replaced **Bootstrap** *light* and *dark* utility classes with **Pico CSS** *contrast* |
| ✅ | Removed the **card** style from `<article>` onto a variant `.card` class |
| ✅ | Removed the `.outline` variant to prevent collision with possible future utility classes |
| ✅ | `.ghost` modifier variant, replacing **Pico CSS**'s `.outline` class |
| ✅ | `.primary` intent variant |
| ✅ | `.success` intent variant |
| ✅ | `.warning` intent variant |
| ✅ | `.danger` intent variant |
| ✅ | `.info` intent variant |
| ✅ | `.subtle` modifier variant |
| ✅ | Minimalist 12 grid system aligned with **Semantic Styling** spacing and breakpoints |
| ✅ | `.striped` modifier variant |
| ✅ | Extend **intent variants** to stylize **card lists** |
| ✅ | Extend **intent variants** to stylize `<progress>` |

## Known Issues

| Status | Feature |
| --- | --- |
| ✅ | When combining `.ghost` and `.subtle` in the same element, `.subtle` seems to take precedence |
| ✅ | **shadow** utility classes don't seem to affect `.card` styling |
| ✅ | When hovering an **accordion** or **dropdown** with `.ghost`, the chevron icon doesn't change color |
| ⌛ | Multiple toasts with the same placement overlap |
| ⌛ | `<button role="link">` seems to behave differently than a normal link |

## Interactive Patterns

| Status | Feature |
| --- | --- |
| ✅ | Popover-based sidebar patterns |
| ✅ | Invoker Commands API modal patterns |
| ✅ | Dropdown menu primitives |
| ✅ | Toasts |
| ✅ | Alert hide/show interaction |
| ✅ | Alert Dialog |
| ✅ | Anchor Positioning tooltips |
| ⌛ | Carousel |
| ⌛ | Tabs |
| ⌛ | Popper |

## Documentation & Tooling

| Status | Feature |
| --- | --- |
| ✅ | Storybook integration |
| ✅ | Playwright integration with a lightweight http server loading demonstration files |
| ✅ | Single source of truth demonstration files |
| ✅ | Simplified the build process by removing the need for Sass |
| ✅ | Live code previewer and editor |
| ✅ | Live code previewer codeCollapsed option |
| ✅ | Palette and Size builder |
| ✅ | ARIA pattern documentation |
| ✅ | **Semantic Styling** API exhaustive documentation |
| ✅ | **Components** API exhaustive documentation |
| ✅ | **Variants** API exhaustive documentation |
| ✅ | **Utilities** API exhaustive documentation |
| ✅ | Documentation Page example |
| ✅ | Starter HTML template Page example |
| ✅ | Accordions documentation |
| ✅ | Alerts documentation |
| ✅ | Card and Card List documentation |
| ✅ | Grid System documentation |
| ✅ | Pagination documentation |
| ✅ | Toasts documentation |
| ✅ | Github check to prevent PRs that fail the visual regression tests |
| 🚧 | Navigation composite documentation |
| ⌛ | Tabs composite documentation |
| ⌛ | Sidebar component documentation |
| ⌛ | Replacing **stylelint** with **biomejs** |
| ⌛ | Different layouts examples |
| ⌛ | Landing page example |
| ⌛ | Login page example |
| ⌛ | CRUD pages examples |
| ⌛ | Account settings page example |
| ⌛ | Replacing **vitepress** with **astro** and use **Semanticus CSS** to style documentation |
| ⌛ | Migration guide from Pico CSS |
| ⌛ | Migration guide from Bootstrap |

## Visual Regression Testing

| Status | Feature |
| --- | --- |
| ✅ | Full Demo Overview |
| ✅ | Colors Demo Overview |
| ✅ | Layout Demo Overview |
| ✅ | Documentation page example |
| ✅ | Modal interaction |
| ✅ | Accordion interaction |
| ✅ | Dropdown interaction |
| ✅ | `.primary` variant combinations |
| ✅ | `.secondary` variant combinations |
| ✅ | `.contrast` variant combinations |
| ✅ | `.success` variant combinations |
| ✅ | `.info` variant combinations |
| ✅ | `.warning` variant combinations |
| ✅ | `.danger` variant combinations |
| ✅ | Toasts interaction |
| ✅ | Alert hide/show interaction |
| ✅ | Include Alerts in Full & Colors Demo Overview |
| ✅ | Include `.pane` in Full Colors Demo Overview |
| ✅ | Include `<progress>` in Full Colors Demo Overview |
| ✅ | `.content-grid` Demo Overview |
| ✅ | Exhaustive combination of all button types in all states with all variants |
| ✅ | Exhaustive combination of all link types in all states with all variants |
| ✅ | Exhaustive combination of all card variations with all variants |
| ✅ | Exhaustive combination of all card list variations with all variants |
| ⌛ | Sidebar popover interaction |
| ⌛ | Grid System Overview |
| ⌛ | Tabs interaction |
| ⌛ | Carousel interaction |
| ⌛ | Popper interaction |

# Roadmap

Legend: ✅ Completed | 🚧 In Progress | ⌛️ Pending

## Core Foundation

| Status | Feature |
| --- | --- |
| ✅ | Removed `--pico` prefix from all CSS variables |
| ✅ | Utility composition system |
| ✅ | Consolidated **Pico CSS** and **Bootstrap** css variables into one unified system |
| ✅ | Reduced overall spacing, in favor or a leanner look and kept **Pico CSS** original sizes in a separate dist file |
| ✅ | CSS variables token organization |
| ✅ | Reducing CSS variables footprint with light/dark mode optimization |
| ✅ | Stack/layout primitives |
| ✅ | **intent** colors based on **Bootstrap** `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `contrast` (replacing `light` and `dark`) |
| ✅ | Refactor **Dropdown**, using the `ARIA: menu pattern` |
| ✅ | Refactor **Modal**, so that it doesn't depend on a card styled `<article>` |
| ✅ | Refactored **Tooltips** using the `ARIA: tooltip pattern` |
| ✅ | `aria-disabled="true"` |
| ✅ | `role="status"` and `role="alert"` |

## Components

| Status | Feature |
| --- | --- |
| ✅ | `.card` component, based off **Pico CSS**'s `<article>` semantic style |
| ✅ | Removed `<article>` the **card** style |
| ✅ | `.pane` component |
| ✅ | `.panel` component |
| ✅ | `.icon-*` component |
| 🚧 | `.sidebar` component |
| ⌛ | `.content-grid` component |
| ⌛ | `.carousel` component |
| ⌛ | `.badge` component |
| ⌛ | `.popper` component |

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
| ✅ | Extend **intent variants** to stylize **list group** |
| ⌛ | Extend **intent variants** to stylize `<progress>` |

## Known Issues

| Status | Feature |
| --- | --- |
| ⌛ | Multiple toasts with the same placement overlap |
| ⌛ | When combining `.ghost` and `.subtle` in the same element, `.subtle` seems to take precedence |
| ⌛ | **shadow** utility classes don't seem to affect `.card` styling |
| ⌛ | When hovering an **accordion** or **dropdown** with `.ghost`, the chevron icon doesn't change color |
| ⌛ | `<button role="link">` seems to have bigger line height than a normal link |

## Interactive Patterns

| Status | Feature |
| --- | --- |
| ✅ | Popover-based sidebar patterns |
| ✅ | Invoker Commands API modal patterns |
| ✅ | Dropdown menu primitives |
| ✅ | Floating Alert |
| ✅ | Alert Dialog |
| ✅ | Anchor Positioning tooltips |
| ⌛ | Tabs |
| ⌛ | Carousel |
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
| ✅ | Palette and Size picker |
| ✅ | Theme Builder to help the developer visualize which CSS variable does what |
| ✅ | ARIA pattern documentation |
| ✅ | Exhaustive HTML elements and attributes documentation |
| ✅ | Exhaustive Composites documentation |
| ✅ | Exhaustive variants documentation and their combinations with HTML elements |
| ✅ | Exhaustive Utility classes documentation |
| ✅ | Documentation page example |
| ✅ | Grid system documentation |
| ✅ | `.icon-*` component documentation |
| ✅ | Alerts composite documentation |
| ✅ | List Group composite documentation |
| 🚧 | Navigation composite documentation |
| ⌛ | Github check to prevent PRs that fail the visual regression tests |
| ⌛ | Tabs composite documentation |
| ⌛ | `.sidebar` component documentation |
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
| ✅ | Include `[role="status"]` in Full & Colors Demo Overview |
| ✅ | Floating Alert interaction |
| ✅ | Include **list group** in Full & Colors Demo Overview |
| ⌛ | `.content-grid` Demo Overview |
| ⌛ | `.sidebar` popover interaction |
| ⌛ | Grid Demo Overview |
| ⌛ | Tab interaction |
| ⌛ | Carousel interaction |
| ⌛ | Popper interaction |

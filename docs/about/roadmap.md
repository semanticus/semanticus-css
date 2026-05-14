# Roadmap

## Core Foundation

| Status | Feature |
| --- | --- |
| [x] | Removed `--pico` prefix from all CSS variables |
| [x] | Utility composition system |
| [x] | Consolidated Pico CSS and Bootstrap css variables into one unified system |
| [x] | Reduced overall spacing, in favor or a leanner look and kept **Pico CSS** original sizes in a separate dist file |
| [ ] | CSS variables token organization |
| [ ] | Reducing light/dark CSS variables footprint |

## Variants & Utilities

| Status | Feature |
| --- | --- |
| [x] | Added `-d` modifiers to utility classes |
| [x] | Replaced **Bootstrap** *light* and *dark* utility classes with **Pico CSS** *contrast* |
| [x] | Removed the **card** style from `<article>` onto a variant `.card` class |
| [x] | Removed the `.outline` variant to prevent collision with possible future utility classes |
| [x] | Added the `.ghost` variant, replacing the `.outline` variant |
| [x] | Added the `.pane` and `.panel` variants, based off the `.card` class |
| [x] | Extended the reach of `.secondary` and `.contrast` variants, to `.pane`, `.panel`, and `.card` variants |
| [ ] | Add `.primary` variant based of **Bootstrap** colors |
| [ ] | Add `.success` variant based of **Bootstrap** colors |
| [ ] | Add `.warning` variant based of **Bootstrap** colors |
| [ ] | Add `.danger` variant based of **Bootstrap** colors |
| [ ] | Add `.info` variant based of **Bootstrap** colors |
| [ ] | Add `.badge` variant |

## Interactive Patterns

| Status | Feature |
| --- | --- |
| [x] | Popover-based sidebar patterns |
| [x] | Invoker Commands API modal patterns |
| [x] | Dropdown menu primitives |
| 🚧 | Anchor Positioning tooltips |
| [ ] | Tabs |
| [ ] | Alerts |
| [ ] | Toasts |

## Layout

| Status | Feature |
| --- | --- |
| [x] | Stack/layout primitives |
| [ ] | Grid system |

## Documentation & Tooling

| Status | Feature |
| --- | --- |
| [x] | Storybook integration |
| [x] | Playwright integration with a lightweight http server loading demonstration files |
| [x] | Single source of truth demonstration files |
| [x] | Simplified the build process by removing the need for Sass |
| [x] | Live code previewer and editor |
| [x] | Palette and Size picker |
| [x] | Theme Builder to help the developer visualize which CSS variable does what |
| [x] | ARIA pattern documentation |
| 🚧 | Exhaustive HTML elements and attributes documentation |
| 🚧 | Exhaustive Composites documentation |
| 🚧 | Exhaustive variants documentation and their combinations with HTML elements |
| [x] | Exhaustive Utility classes documentation |
| [x] | Documentation page example |
| [ ] | Different layouts examples |
| [ ] | Landing page example |
| [ ] | Login page example |
| [ ] | CRUD pages examples |
| [ ] | Account settings page example |
| [ ] | Replacing **vitepress** with **astro** and use **Semanticus CSS** to style documentation |
| [ ] | Migration guide from Pico CSS |

## Visual Regression Testing

| Status | Feature |
| --- | --- |
| [x] | Semantics overview |
| [x] | Documentation page example |
| 🚧 | Layout combinations |
| [ ] | `.secondary` variant combinations |
| [ ] | `.contrast` variant combinations |

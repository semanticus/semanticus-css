# Roadmap

Legend: ✅ Completed | 🚧 In Progress | ⌛️ Pending

## Core Foundation

| Status | Feature |
| --- | --- |
| ✅ | Removed `--pico` prefix from all CSS variables |
| ✅ | Utility composition system |
| ✅ | Consolidated Pico CSS and Bootstrap css variables into one unified system |
| ✅ | Reduced overall spacing, in favor or a leanner look and kept **Pico CSS** original sizes in a separate dist file |
| ✅ | CSS variables token organization |
| ✅ | Reducing CSS variables footprint with light/dark mode optimization |

## Variants & Utilities

| Status | Feature |
| --- | --- |
| ✅ | Added `-d` modifiers to utility classes |
| ✅ | Replaced **Bootstrap** *light* and *dark* utility classes with **Pico CSS** *contrast* |
| ✅ | Removed the **card** style from `<article>` onto a variant `.card` class |
| ✅ | Removed the `.outline` variant to prevent collision with possible future utility classes |
| ✅ | Added the `.ghost` variant, replacing the `.outline` variant |
| ✅ | Added the `.pane` and `.panel` variants, based off the `.card` class |
| ✅ | Extended the reach of `.secondary` and `.contrast` variants, to `.pane`, `.panel`, and `.card` variants |
| ✅ | `.primary` variant |
| ✅ | `.success` variant |
| ✅ | `.warning` variant |
| ✅ | `.danger` variant |
| ✅ | `.info` variant |
| ⌛ | `.subtle` variant |
| ⌛ | `.badge` variant |

## Interactive Patterns

| Status | Feature |
| --- | --- |
| ✅ | Popover-based sidebar patterns |
| ✅ | Invoker Commands API modal patterns |
| ✅ | Dropdown menu primitives |
| 🚧 | Anchor Positioning tooltips |
| ⌛ | Tab |
| ⌛ | Alert |
| ⌛ | Confirm |
| ⌛ | Prompt |
| ⌛ | Popover |
| ⌛ | Toast |

## Layout

| Status | Feature |
| --- | --- |
| ✅ | Stack/layout primitives |
| ⌛ | Grid system |

## Documentation & Tooling

| Status | Feature |
| --- | --- |
| ✅ | Storybook integration |
| ✅ | Playwright integration with a lightweight http server loading demonstration files |
| ✅ | Single source of truth demonstration files |
| ✅ | Simplified the build process by removing the need for Sass |
| ✅ | Live code previewer and editor |
| ✅ | Palette and Size picker |
| ✅ | Theme Builder to help the developer visualize which CSS variable does what |
| ✅ | ARIA pattern documentation |
| 🚧 | Exhaustive HTML elements and attributes documentation |
| 🚧 | Exhaustive Composites documentation |
| 🚧 | Exhaustive variants documentation and their combinations with HTML elements |
| ✅ | Exhaustive Utility classes documentation |
| ✅ | Documentation page example |
| ⌛ | Different layouts examples |
| ⌛ | Landing page example |
| ⌛ | Login page example |
| ⌛ | CRUD pages examples |
| ⌛ | Account settings page example |
| ⌛ | Replacing **vitepress** with **astro** and use **Semanticus CSS** to style documentation |
| ⌛ | Migration guide from Pico CSS |

## Visual Regression Testing

| Status | Feature |
| --- | --- |
| ✅ | Semantics overview |
| ✅ | Documentation page example |
| ✅ | Layout combinations |
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
| ⌛ | `.sidebar` popover interaction |
| ⌛ | Alert interaction |
| ⌛ | Prompt interaction |
| ⌛ | Confirm interaction |
| ⌛ | Popover interaction |
| ⌛ | Tabs interaction |

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

## Components

| Status | Feature |
| --- | --- |
| ✅ | `.card` component, based off **Pico CSS**'s `<article>` semantic style |
| ✅ | Removed `<article>` the **card** style |
| ✅ | `.pane` component |
| ✅ | `.panel` component |
| 🚧 | `.sidebar` component |

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
| 🚧 | `.striped` modifier variant |
| ⌛ | Extend **intent variants** reach to `<progress>` |

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
| ✅ | Live code previewer codeCollapsed option |
| ✅ | Palette and Size picker |
| ✅ | Theme Builder to help the developer visualize which CSS variable does what |
| ✅ | ARIA pattern documentation |
| ✅ | Exhaustive HTML elements and attributes documentation |
| ✅ | Exhaustive Composites documentation |
| ✅ | Exhaustive variants documentation and their combinations with HTML elements |
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

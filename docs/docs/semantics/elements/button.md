---
title: button
---

# &lt;button&gt;

The `<button>` element is a native interactive control that is keyboard-accessible and focusable by default, requiring no additional ARIA.

On how to turn non-button elements into buttons, see [[role="button"]](/docs/semantics/attributes/role-button).

## Basic Usage

<HtmlPreviewer :code="ButtonDemo.main()" />

## Links styled as buttons

Use `.button` on an anchor to give it button styling while preserving its link semantics and native keyboard behavior:

<HtmlPreviewer :code="ButtonDemo.links()" />

For actions, use a native `<button>`. Use `role="button"` only when the element behaves as a button, including the appropriate keyboard interaction.

## Border radius

Use `--buttons-border-radius` to customize button corners independently of the global `--border-radius`. It defaults to `var(--border-radius)`, preserving the existing appearance.

```css
:root {
  --buttons-border-radius: 999px;
}
```

This applies to native buttons, button inputs, `.button`, `[role="button"]`, and file selector buttons. For an individual button, set `--_buttons-border-radius` directly:

```html
<button style="--_buttons-border-radius: 0">Square button</button>
```

## Variants

### Intent Variants

To convey **intent** and **importance**, buttons can be styled with different variants. The default variant is `.primary`, which is used for the most important actions on a page, but there are also:

<HtmlPreviewer :code="ButtonDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="ButtonDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="ButtonDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { ButtonDemo } from "@demos/semantics/elements";
</script>

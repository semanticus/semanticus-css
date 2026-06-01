# Buttons

Buttons are implemented using different approaches:
- Using the native [&lt;button&gt;](/docs/semantics/elements/button) element
- Using [Input Buttons](/docs/semantics/elements/input#input-buttons) elements like `<input type="button">` or `<input type="submit">`
- Combining [[role=button]](/docs/semantics/attributes/role-button) with elements like `<a>`, `<div>`, etc.

The choice of element depends on the context and the desired behavior of the button.

## Basic Button

See the [&lt;button&gt;](/docs/semantics/elements/button) for more details on button variations.

<HtmlPreviewer :code="ButtonDemo.main()" />

## Input Types

See more at [Input Buttons](/docs/semantics/elements/input#input-buttons)

<HtmlPreviewer :code="InputDemo.buttons()" />

## Div as Button

See more at [[role=button]](/docs/semantics/attributes/role-button) for more details on button variations.

<HtmlPreviewer :code="RoleButtonDemo.main()" />

## Close Button

Simply add a `class="icon-close"` to a **button** or use `<span class="icon-close" aria-hidden="true"></span>` inside a **button** if you want to display text.

> **Accessibility:** In case the button does not have text, always add an `aria-label` (e.g., `aria-label="Close"`) so screen readers announce the button's purpose.

See the [Icons](/docs/components/icons) documentation for more details on the `.icon-close` class and its usage.

<HtmlPreviewer :code="ButtonDemo.overviewCloseButton()" />

<script setup>
import { ButtonDemo, InputDemo, RoleButtonDemo } from "@demos/semantics";
</script>

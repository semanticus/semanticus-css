# Buttons

Buttons can be displayed using different approaches, such as using the `<button>` element or an `<a>` or `<div>` element with `role="button"` as well as form elements like `<input type="button">` or `<input type="submit">`. The choice of element depends on the context and the desired behavior of the button.

## Basic Button

See the [Button](/docs/semantics/elements/button) for more details on button variations.

<HtmlPreviewer :code="ButtonDemo.main()" />

## Input Types

<HtmlPreviewer :code="InputDemo.buttons()" />

## Div as Button

<HtmlPreviewer :code="RoleButtonDemo.main()" />

## Close Button

Simply add a `class="icon-close"` to a **button** or use `<span class="icon-close" aria-hidden="true"></span>` inside a **button** if you want to display text.

> **Accessibility:** In case the button does not have text, always add an `aria-label` (e.g., `aria-label="Close"`) so screen readers announce the button's purpose.

See the [Icons](/docs/components/icons) documentation for more details on the `.icon-close` class and its usage.

<HtmlPreviewer :code="ButtonDemo.overviewCloseButton()" />

<script setup>
import { ButtonDemo, InputDemo, RoleButtonDemo } from "@demos/semantics";
</script>

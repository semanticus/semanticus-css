---
title: button
---

<script setup>
import { ButtonDemo } from "@demos/semantics/elements";
</script>

# &lt;button&gt;

The `<button>` element is a native interactive control that is keyboard-accessible and focusable by default, requiring no additional ARIA.

Use `type="submit"` for form submission, `type="reset"` to clear a form, without needing JavaScript.

## Basic Usage

<HtmlPreviewer :code="ButtonDemo.basic()" />

For `.secondary`, `.contrast` and `.ghost` styles, see [Button Variants](/variants/components/buttons).

On how to turn non-button elements into buttons, see [[role="button"]](/docs/semantics/role-button).

## Form Buttons

`type="submit"` and `type="button"` inputs are also displayed as buttons. All form buttons are `width: 100%;` by default, to match with the other form elements.

<HtmlPreviewer :code="ButtonDemo.formButtons()" />

Reset inputs have the secondary style by default.

<HtmlPreviewer :code="ButtonDemo.resetButton()" />

## Practical Examples

### Login Form

<HtmlPreviewer :code="ButtonDemo.loginForm()" />

# Dropdown

Dropdowns are implemented using the [&lt;details&gt;](/docs/elements/details) and `<summary>` elements, in combination with [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), which consists of a trigger element with `aria-haspopup="menu"` pointing to another element with `role="menu"`, in combination with [&lt;details&gt;](/docs/elements/details) and `<summary>` for the disclosure behavior.

Unless they are in a [&lt;nav&gt;](/docs/elements/nav), dropdowns are `width: 100%;` by default.

## Basic Usage

For style consistency with the form elements, dropdowns are styled like a select by default.

<HtmlPreviewer :code="DropdownDemo.main()" min-height="250" />

## With Checkboxes

Dropdowns can be used as custom selects with `<input type="checkbox">`.

<HtmlPreviewer :code="DropdownDemo.withCheckboxes()" min-height="250" />

## With Radios

Dropdowns can be used as custom selects with `<input type="radio">`.

<HtmlPreviewer :code="DropdownDemo.withRadios()" min-height="250" />

## Different alignment (showcased with &lt;nav&gt;)

Use `<ul dir="rtl">` to change the alignment of the dropdown menu.

When using dropdowns inside a `<nav>`, they are automatically styled to fit the navigation layout.

<HtmlPreviewer :code="DropdownDemo.inNav()" min-height="250" />

## Validation States

Just like any form elements, validation states are provided with `aria-invalid`.

<HtmlPreviewer :code="DropdownDemo.validationStates()" min-height="320" />

## As a Button

`<summary role="button">` transforms the dropdown into a button.

<HtmlPreviewer :code="DropdownDemo.asButton()" min-height="250" />

## Variants

### Intent Variants

To convey **intent** and **importance**, dropdowns can be styled with different variants:

<HtmlPreviewer :code="DropdownDemo.asButtonIntentVariants()" :codeCollapsed="true" min-height="250" />

### Modifiers

`.ghost` creates transparent background dropdowns with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="DropdownDemo.asButtonGhostVariants()" :codeCollapsed="true" min-height="250" />

`.subtle` creates dropdowns with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="DropdownDemo.asButtonSubtleVariants()" :codeCollapsed="true" min-height="250" />

<script setup>
import { DropdownDemo } from "@demos/composites";
</script>

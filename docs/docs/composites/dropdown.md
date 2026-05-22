# Dropdown

Dropdowns are implemented using the [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), which consists of a trigger element with `aria-haspopup="menu"` pointing to another element with `role="menu"`, in combination with `<details>` and `<summary>` for the disclosure behavior.

Unless they are in a `<nav>`, dropdowns are `width: 100%;` by default.

## Basic Usage

For style consistency with the form elements, dropdowns are styled like a select by default.

<HtmlPreviewer :code="DetailsDemo.basicDropdown()" />

## With Checkboxes

Dropdowns can be used as custom selects with `<input type="checkbox">`.

<HtmlPreviewer :code="DetailsDemo.dropdownWithCheckboxes()" />

## With Radios

Dropdowns can be used as custom selects with `<input type="radio">`.

<HtmlPreviewer :code="DetailsDemo.dropdownWithRadios()" />

## Different alignment (showcased with &lt;nav&gt;)

Use `<ul dir="rtl">` to change the alignment of the dropdown menu.

When using dropdowns inside a `<nav>`, they are automatically styled to fit the navigation layout.

<HtmlPreviewer :code="DetailsDemo.dropdownInNav()" />

## Validation States

Just like any form elements, validation states are provided with `aria-invalid`.

<HtmlPreviewer :code="DetailsDemo.dropdownValidationStates()" />

## As a Button

`<summary role="button">` transforms the dropdown into a button.

<HtmlPreviewer :code="DetailsDemo.dropdownAsButton()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, dropdowns can be styled with different variants:

<HtmlPreviewer :code="IntentDemo.overviewDropdowns()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background dropdowns with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="GhostDemo.overviewDropdowns()" :codeCollapsed="true" />

`.subtle` creates dropdowns with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overviewDropdowns()" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo, IntentDemo } from '@demos/variants';
import { DetailsDemo } from "@demos/semantics/elements";
</script>

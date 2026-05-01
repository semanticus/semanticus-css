---
title: details
---

<script setup>
import { DetailsDemo } from "@demos/semantics/elements";
</script>

# &lt;details&gt;

The `<details>` element creates a native disclosure widget — a collapsible section that users can open and close without JavaScript. Its `<summary>` child acts as the visible label and toggle control.

Use the `open` attribute to expand it by default. Set the same `name` attribute on multiple `<details>` elements to create an exclusive accordion where only one can be open at a time.

## Basic Usage

<HtmlPreviewer :code="DetailsDemo.basic()" />

For style variants, see [Details Variants](/docs/variants/details).

## Dropdown

Dropdowns are built with `<details>` containing a `<summary aria-haspopup="menu">` and a `<ul role="menu">` as direct children and links inside should use `role="menuitem"`.

Unless they are in a `<nav>`, dropdowns are `width: 100%;` by default.

### Basic Dropdown

For style consistency with the form elements, dropdowns are styled like a select by default.

<HtmlPreviewer :code="DetailsDemo.basicDropdown()" />

### Dropdowns with Checkboxes and Radios

Dropdowns can be used as custom selects with `<input type="radio">` or `<input type="checkbox">`.

#### Radio Buttons

<HtmlPreviewer :code="DetailsDemo.dropdownWithRadios()" />

#### Checkboxes

<HtmlPreviewer :code="DetailsDemo.dropdownWithCheckboxes()" />

### Variants

#### Different alignment (showcased with &lt;nav&gt;)

Use `<ul dir="rtl">` to change the alignment of the dropdown menu.

When using dropdowns inside a `<nav>`, they are automatically styled to fit the navigation layout.

<HtmlPreviewer :code="DetailsDemo.dropdownInNav()" />

#### Dropdown as Button

`<summary role="button">` transforms the dropdown into a button.

<HtmlPreviewer :code="DetailsDemo.dropdownAsButton()" />

#### Validation States

Just like any form elements, validation states are provided with `aria-invalid`.

<HtmlPreviewer :code="DetailsDemo.dropdownValidationStates()" />

## FAQ Page Example

<HtmlPreviewer :code="DetailsDemo.faq()" />

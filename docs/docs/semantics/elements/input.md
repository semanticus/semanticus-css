---
title: input
---

# &lt;input&gt;

The `<input>` element accepts user data in many formats defined by its `type` attribute — text, email, password, date, color, and more.

For validation states see [[aria-invalid]](/docs/semantics/attributes/aria-invalid).

For helper text below inputs see [&lt;small&gt;](/docs/semantics/elements/small).

## Basic Usage

<HtmlPreviewer :code="InputDemo.main()" />

## With Label

Always pair inputs with a `<label>` or `aria-label` so screen readers can identify the field.

<HtmlPreviewer :code="InputDemo.withLabel()" />

## With Helper Text

Helper text provides additional context about the input, such as instructions or character limits.

Use `<small>` element associated with a form control via `aria-describedby` to associate the helper text with the input for screen readers.

<HtmlPreviewer :code="InputDemo.withHelperText()" />

## Validation States

Validation states are provided with `aria-invalid`. See more at [[aria-invalid]](/docs/semantics/attributes/aria-invalid)

> **Note:** The `<small>` element automatically inherits the validation state colors.

<HtmlPreviewer :code="InputDemo.validationStatesWithTextHelper()" />

## Miscellaneous Input Types

<HtmlPreviewer :code="InputDemo.miscellaneousTypes()" />

## Date Inputs

Datetime inputs come with an icon.

<HtmlPreviewer :code="InputDemo.dateTypes()" />

## Search Input

`type="search"` comes with a distinctive style.

<HtmlPreviewer :code="InputDemo.main({ type: 'search' })" />

## Color Input

`type="color"` is also consistent with the other input types.

<HtmlPreviewer :code="InputDemo.main({ type: 'color', value: '#ff0000' })" />

## File Input

Input type file button has a secondary button style.

<HtmlPreviewer :code="InputDemo.main({ type: 'file' })" />

## Checkboxes

The native `<input type="checkbox">` with a custom and responsive style.

### Basic Usage

<HtmlPreviewer :code="InputDemo.checkboxBasic()" />

### Vertical Stacking

<HtmlPreviewer :code="InputDemo.checkboxVertical()" />

### Horizontal Stacking

<HtmlPreviewer :code="InputDemo.checkboxHorizontal()" />

## Radios

The native `<input type="radio">` with a custom and responsive style.

### Basic Usage

<HtmlPreviewer :code="InputDemo.radioBasic()" />

### Vertical Stacking

<HtmlPreviewer :code="InputDemo.radioVertical()" />

### Horizontal Stacking

<HtmlPreviewer :code="InputDemo.radioHorizontal()" />

## Range

The native `<input type="range">` with a custom and responsive style.

### Basic Usage

<HtmlPreviewer :code="InputDemo.rangeBasic()" />

### With Min and Max

<HtmlPreviewer :code="InputDemo.rangeWithMinMax()" />

### With Step

<HtmlPreviewer :code="InputDemo.rangeWithStep()" />

## Switch

The native `<input type="checkbox">` styled as a switch, using the `role="switch"` for accessibility.

### Basic Usage

<HtmlPreviewer :code="InputDemo.switchBasic()" />

## Input Buttons

`type="submit"`, `type="button"` and `type="reset"` inputs are also displayed as buttons - use them to clear or submit forms without JavaScript.

All form buttons are `width: 100%;` by default, to match with the other form elements.

Reset inputs have the secondary style by default.

<HtmlPreviewer :code="InputDemo.buttons()" />

### Variants

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="GhostDemo.overviewInputButtons()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overviewInputButtons()" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo, IntentDemo } from '@demos/variants';

import { InputDemo } from "@demos/semantics/elements";

</script>

---
title: 'role="button"'
---

# [role="button"]

Any element with `role="button"` is rendered as a button.

This is useful when a non-button element (e.g. `<div>`, `<span>`) needs to behave and look like a button.

This role can also be applied to `<details>` elements to create [Accordion buttons](/docs/semantics/elements/details#as-a-button) and [Dropdown buttons](/docs/composites/dropdown#as-a-button).

## Basic Usage

<HtmlPreviewer :code="RoleButtonDemo.main()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, buttons can be styled with different variants. The default variant is `.primary`, which is used for the most important actions on a page, but there are also:

<HtmlPreviewer :code="RoleButtonDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleButtonDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="RoleButtonDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleButtonDemo } from "@demos/semantics/attributes";
import { GhostDemo, SubtleDemo, IntentDemo } from '@demos/variants';
</script>

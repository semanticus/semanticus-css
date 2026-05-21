---
title: 'role="button"'
---

# [role="button"]

Any element with `role="button"` is rendered as a button.

This is useful when a non-button element (e.g. `<div>`, `<span>`) needs to behave and look like a button.

## Basic Usage

<HtmlPreviewer :code="RoleButtonDemo.main()" />

## Dropdown Example

<HtmlPreviewer :code="RoleButtonDemo.dropdown()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, buttons can be styled with different variants. The default variant is `.primary`, which is used for the most important actions on a page, but there are also:

<HtmlPreviewer :code="IntentDemo.roleButtonsAndDropdowns()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="GhostDemo.roleButtonsAndDropdowns()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.roleButtonsAndDropdowns()" :codeCollapsed="true" />

<script setup>
import { RoleButtonDemo } from "@demos/semantics/attributes";
import { GhostDemo, SubtleDemo } from "@demos/overviews/variants/modifiers";
import { IntentDemo } from '@demos/variants';
</script>

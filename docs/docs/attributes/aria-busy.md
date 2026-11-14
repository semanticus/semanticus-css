---
title: 'aria-busy="true"'
---

# [aria-busy]

The `aria-busy="true"` attribute signals to assistive technologies that an element is being updated and its contents are not yet ready.

Use it on any container or interactive element to communicate a loading state.

## Basic Usage

<HtmlPreviewer :code="AriaBusyDemo.main()" />

## Loading Button

<HtmlPreviewer :code="AriaBusyDemo.button()" />

## Loading Card

<HtmlPreviewer :code="AriaBusyDemo.card()" />

## Loading Form

<HtmlPreviewer :code="AriaBusyDemo.form()" />

## Best Practices

1. **Show progress** - If duration is known
2. **Keep users informed** - Don't leave them guessing
3. **Provide alternatives** - Allow cancellation
4. **Accessibility** - Use `aria-busy` appropriately

<script setup>
import { AriaBusyDemo } from "@demos/semantics/attributes";
</script>

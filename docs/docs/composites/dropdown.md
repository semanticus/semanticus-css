---
title: Dropdown
---

<script setup>
import { DropdownDemo } from "@demos/composites";
</script>

# Dropdown

Dropdowns are implemented using the [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), which consists of a trigger element with `aria-haspopup="menu"` pointing to another element with `role="menu"`.

## Basic Dropdown

<HtmlPreviewer :code="DropdownDemo.basicDropdown()" />

## Reference

For more dropdown variants including multi-select, validation states, and navigation integration, see **Dropdown** examples at [&lt;details&gt;](/docs/semantics/details#dropdown).

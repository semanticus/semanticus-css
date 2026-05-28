---
title: details
---

# &lt;details&gt;

The `<details>` element creates a native disclosure widget and is used as a building block for **accordions** and **dropdowns**, since it provides a native way to create collapsible content sections with keyboard navigation and screen reader support without the need for JavaScript.

## Accordion Example

Check out [Accordion](/docs/composites/accordions) documentation pages for more details and examples.

<HtmlPreviewer :code="AccordionsDemo.entangledAccordions()" />

## Dropdown Example

Check out [Dropdown](/docs/composites/dropdown) documentation pages for more details and examples.

<HtmlPreviewer :code="DropdownDemo.main()" />

<script setup>
import { AccordionsDemo } from "@demos/composites";
import { DropdownDemo } from "@demos/composites";
</script>

---
title: Tooltip
---

<script setup>
import { TooltipDemo } from "@demos/composites";
</script>

# Tooltip

Tooltips are implemented using the [ARIA: tooltip pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role), which consists of a trigger element with `aria-describedby` pointing to another element with `role="tooltip"`.

## Basic Tooltip

<HtmlPreviewer :code="TooltipDemo.basicTooltip()" />

## Reference

For more tooltip examples including different placements and use cases, see [[role-tooltip]](/docs/semantics/role-tooltip).

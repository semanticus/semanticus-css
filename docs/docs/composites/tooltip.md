---
title: Tooltip
---

<script setup>
const tooltipExample = `<p>
  Hover over this
  <span>
    <a href="#" aria-describedby="tooltip-example">link</a>
    <span id="tooltip-example" role="tooltip" data-placement="bottom">This is a tooltip</span>
  </span>
  to see a tooltip.
</p>
`;
</script>

# Tooltip

Tooltips are implemented using the [ARIA: tooltip pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role), which consists of a trigger element with `aria-describedby` pointing to another element with `role="tooltip"`.

## Basic Tooltip

<HtmlPreviewer :code="tooltipExample" />

## Reference

For more tooltip examples including different placements and use cases, see [[role-tooltip]](/docs/semantics/role-tooltip).

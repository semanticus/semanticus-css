<script setup>
import { RoleTooltipDemo } from "@demos/semantics/attributes";
</script>

# Tooltip

Enable tooltips everywhere, without JavaScript.

## Basic Usage

Pair a trigger element with `aria-describedby` pointing to another element with `role="tooltip"`, and the tooltip will be displayed when the trigger is hovered or focused.

<HtmlPreviewer :code="RoleTooltipDemo.basic" />

## Placement

The tooltip is displayed on top by default but you can change it with the `data-placement` attribute on the tooltip element.

<HtmlPreviewer :code="RoleTooltipDemo.placement" />

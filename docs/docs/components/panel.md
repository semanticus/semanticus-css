# Panel

Similar to `.card`, but without the **shadow**. The `.panel` class creates a container with **background** and **border** styling, but no **shadow**, making it ideal for grouping content, or for **inline alerts**.

## Basic Usage

<HtmlPreviewer :code="PanelDemo.main()"/>

## Inline alerts

<HtmlPreviewer :code="PanelDemo.inlineAlerts()"/>

<script setup>
import { PanelDemo } from "@demos/components";
</script>

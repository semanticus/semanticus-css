# Pane

Similar to `.card`, but without the **shadow**, **border** and **radius**. The `.pane` class creates a container with **background** styling only, making it ideal for grouping content or for **hero** sections.

## Basic Usage

<HtmlPreviewer :code="PaneDemo.main()"/>

## Hero section

<HtmlPreviewer :code="PaneDemo.heroSection({ class: 'primary subtle' })"/>

<script setup>
import { PaneDemo } from "@demos/components";
</script>

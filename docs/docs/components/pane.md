# Pane

Similar to `.card`, but without the **shadow**, **border** and **radius**. The `.pane` class creates a stylized container, ideal for grouping content in a visually distinct way.

## Basic Usage

<HtmlPreviewer :code="PaneDemo.main()"/>

## Hero section

Combine it with **modifier variants** and **utility classes** to create various styles like a hero section.

<HtmlPreviewer :code="PaneDemo.heroSection({ class: 'primary subtle' })"/>

<script setup>
import { PaneDemo } from "@demos/components";
</script>

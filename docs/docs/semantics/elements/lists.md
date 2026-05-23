---
title: lists
---

<script setup>
import { ListsDemo } from "@demos/semantics/elements";
</script>

# &lt;ul&gt; / &lt;ol&gt; / &lt;dl&gt;

Semanticus styles lists with consistent spacing and square bullets for unordered lists.

> **Important:** Assistive technologies implicitly add the `role="list"` to `<ul>` and `<ol>` elements, so unless the list is inside some kind of application widget, like a menu, it's best not to combine them with other roles like `role="group"`.

## Unordered List

<HtmlPreviewer :code="ListsDemo.unordered()" />

## Ordered List

<HtmlPreviewer :code="ListsDemo.ordered()" />

## Definition List

<HtmlPreviewer :code="ListsDemo.definition()" />

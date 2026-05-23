---
title: lists
---

<script setup>
import { ListsDemo } from "@demos/semantics/elements";
</script>

# &lt;ul&gt; / &lt;ol&gt; / &lt;dl&gt;

Semanticus styles lists with consistent spacing and square bullets for unordered lists.

> **Important:** Assistive technologies implicitly add the `role="list"` to `<ul>` and `<ol>` elements, and `role="listitem"` to `<li>` elements, so don't combine them with `role="group"` or any other roles like `role="region"` that would override the list semantics.

## Unordered List

<HtmlPreviewer :code="ListsDemo.unordered()" />

## Ordered List

<HtmlPreviewer :code="ListsDemo.ordered()" />

## Definition List

<HtmlPreviewer :code="ListsDemo.definition()" />

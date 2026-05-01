---
title: lists
---

<script setup>
import { ListsDemo } from "@demos/semantics/elements";
</script>

# &lt;ul&gt; / &lt;ol&gt; / &lt;dl&gt;

Semanticus styles lists with consistent spacing and square bullets for unordered lists.

## Unordered List

<HtmlPreviewer :code="ListsDemo.unordered()" />

## Ordered List

<HtmlPreviewer :code="ListsDemo.ordered()" />

## Definition List

<HtmlPreviewer :code="ListsDemo.definition()" />

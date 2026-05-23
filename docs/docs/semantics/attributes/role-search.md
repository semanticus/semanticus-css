---
title: 'role="search"'
---

# [role="search"]

The `role="search"` attribute marks a landmark region containing site or application search functionality.

Screen readers expose it as a "search" landmark, allowing users to jump directly to the search form.

## Basic Usage

<HtmlPreviewer :code="SearchDemo.main()" />

## Search with Reset Button

<HtmlPreviewer :code="SearchDemo.withResetButton()" />

## Filter Search

<HtmlPreviewer :code="SearchDemo.filterSearch()" />

<script setup>
import { SearchDemo } from "@demos/composites";
</script>

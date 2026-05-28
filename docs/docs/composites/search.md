---
title: Search
---

# Search

Combine `role="search"` with a `<fieldset>` to create a stylized search input with proper semantics and accessibility.

Screen readers expose it as a "search" landmark, allowing users to jump directly to the search form.

## Basic Usage

<HtmlPreviewer :code="SearchDemo.main()" />

## Filter Search

<HtmlPreviewer :code="SearchDemo.filterSearch()" />

<script setup>
import { SearchDemo } from "@demos/composites";
</script>

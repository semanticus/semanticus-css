---
title: Search
---

# Search

Search forms use the `role="search"` attribute to mark a landmark region containing site or application search functionality.

Screen readers expose it as a "search" landmark, allowing users to jump directly to the search form.

## Basic Usage

<HtmlPreviewer :code="RoleSearchDemo.main()" />

## Search with Reset Button

<HtmlPreviewer :code="RoleSearchDemo.withResetButton()" />

## Filter Search

<HtmlPreviewer :code="RoleSearchDemo.filterSearch()" />

<script setup>
import { RoleSearchDemo } from "@demos/semantics/attributes";
</script>

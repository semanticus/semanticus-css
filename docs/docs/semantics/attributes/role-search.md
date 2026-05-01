---
title: 'role="search"'
---

<script setup>
import { RoleSearchDemo } from "@demos/semantics/attributes";
</script>

# [role="search"]

The `role="search"` attribute marks a landmark region containing site or application search functionality.

Screen readers expose it as a "search" landmark, allowing users to jump directly to the search form.

## Basic Usage

<HtmlPreviewer :code="RoleSearchDemo.basic" />

## Search with Icon Button

<HtmlPreviewer :code="RoleSearchDemo.withIconButton" />

## Filter Search

<HtmlPreviewer :code="RoleSearchDemo.filterSearch" />

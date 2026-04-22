---
title: Search
---

<script setup>
const basicSearch = `<form role="search">
  <input type="search" placeholder="Search...">
  <button type="submit">Search</button>
</form>
`;
</script>

# Search

Search forms use the `role="search"` attribute to mark a landmark region containing site or application search functionality.

Screen readers expose it as a "search" landmark, allowing users to jump directly to the search form.

## Basic Search

<HtmlPreviewer :code="basicSearch" />

## Reference

For more search variants and detailed accessibility guidance, see [role="search"](/docs/semantics/role-search).

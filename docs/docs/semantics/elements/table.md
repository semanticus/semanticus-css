---
title: table
---

<script setup>
import { TableDemo } from "@demos/semantics/elements";
</script>

# &lt;table&gt;

The `<table>` element represents tabular data arranged in rows and columns. Use `<thead>`, `<tbody>`, and `<tfoot>` for structure, and `<th scope="col">` or `<th scope="row">` to associate header cells with data cells for screen readers.

## Basic Usage

<HtmlPreviewer :code="TableDemo.basic()" />

For `.striped` table styles, see [Table Variants](/variants/components/tables).

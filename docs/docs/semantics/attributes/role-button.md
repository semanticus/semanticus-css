---
title: 'role="button"'
---

<script setup>
import { RoleButtonDemo } from "@demos/semantics/attributes";
</script>

# [role="button"]

Any element with `role="button"` is rendered as a button.

This is useful when a non-button element (e.g. `<div>`, `<span>`) needs to behave and look like a button.

## Basic Usage

<HtmlPreviewer :code="RoleButtonDemo.basic" />

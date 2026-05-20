---
title: 'role="link"'
---

# [role="link"]

Any element with `role="link"` is rendered as a link.

This is useful when a non-link element (e.g. `<button>`, `<div>`) needs to behave and look like a link.

## Basic Usage

<HtmlPreviewer :code="RoleLinkDemo.main()" />

## Intent Variants

To convey **intent** and **importance**, links can be styled with different variants:

<HtmlPreviewer :code="IntentDemo.roleLinks()" />

<script setup>
import { RoleLinkDemo, IntentDemo } from '@demos/overviews';
</script>

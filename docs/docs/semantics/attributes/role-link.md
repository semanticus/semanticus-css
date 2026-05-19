---
title: 'role="link"'
---

# [role="link"]

Any element with `role="link"` is rendered as a link.

This is useful when a non-link element (e.g. `<button>`, `<div>`) needs to behave and look like a link.

## Basic Usage

<HtmlPreviewer :code="`${RoleLinkDemo.main('button')}\n<hr>\n${RoleLinkDemo.main('div')}`" />

## Intent Variants

To convey **intent** and **importance**, links can be styled with different variants:

<HtmlPreviewer :code="IntentDemo.roleLinks()" />

<script setup>
import { RoleLinkDemo } from "@demos/semantics/attributes";
import * as IntentDemo from '@demos/overviews/variants/intent/demo';
</script>

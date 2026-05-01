---
title: address
---

<script setup>
import { AddressDemo } from "@demos/semantics/elements";
</script>

# &lt;address&gt;

The `<address>` element provides contact information for the nearest `<article>` or the document body. Semanticus removes the default italic style and adds vertical spacing.

## Basic Usage

<HtmlPreviewer :code="AddressDemo.basic()" />

## Author Contact

<HtmlPreviewer :code="AddressDemo.contactInfo()" />

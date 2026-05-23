---
title: aside
---

<script setup>
import { AsideDemo } from "@demos/semantics/elements";
</script>

# &lt;aside&gt;

The `<aside>` element represents content tangentially related to the main content — like sidebars, call-outs, or supplementary navigation.

> **Important:** Assistive technologies implicitly add the `role="complementary"` so it's best not to combine them with other roles like `role="group"`.

## Basic Usage

<HtmlPreviewer :code="AsideDemo.main()" />

## Left Sidebar

Add the `.sidebar` class for a styled sidebar panel.

<HtmlPreviewer :code="AsideDemo.leftSidebar()" />

## Right Sidebar

<HtmlPreviewer :code="AsideDemo.rightSidebar()" />

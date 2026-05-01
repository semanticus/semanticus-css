---
title: aside
---

<script setup>
import { AsideDemo } from "@demos/semantics/elements";
</script>

# &lt;aside&gt;

The `<aside>` element represents content tangentially related to the main content — like sidebars, call-outs, or supplementary navigation.

## Basic Usage

<HtmlPreviewer :code="AsideDemo.basic()" />

## Left Sidebar

Add the `.sidebar` class for a styled sidebar panel.

<HtmlPreviewer :code="AsideDemo.leftSidebar()" />

## Right Sidebar

<HtmlPreviewer :code="AsideDemo.rightSidebar()" />

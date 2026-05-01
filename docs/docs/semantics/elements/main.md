---
title: main
---

<script setup>
import { MainDemo } from "@demos/semantics/elements";
</script>

# &lt;main&gt;

The `<main>` element represents the dominant content of the document body. There should be only one `<main>` per page, and it should not be nested inside `<article>`, `<aside>`, `<header>`, `<footer>`, or `<nav>`.

## Basic Usage

<HtmlPreviewer :code="MainDemo.basic()" />

## With Header

<HtmlPreviewer :code="MainDemo.withHeader()" />

## With Footer

<HtmlPreviewer :code="MainDemo.withFooter()" />

## With Header + Footer

<HtmlPreviewer :code="MainDemo.withHeaderPlusFooter()" />

## With Article

<HtmlPreviewer :code="MainDemo.withArticle()" />

## With Header + Article

<HtmlPreviewer :code="MainDemo.withHeaderPlusArticle()" />

## With Article + Footer

<HtmlPreviewer :code="MainDemo.withArticlePlusFooter()" />

## Complete Layout

<HtmlPreviewer :code="MainDemo.withHeaderPlusArticlePlusFooter()" />

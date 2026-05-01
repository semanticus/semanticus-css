---
title: nav
---

<script setup>
import { NavDemo } from "@demos/semantics/elements";
</script>

# &lt;nav&gt;

The `<nav>` element is a landmark that identifies a region of navigation links.

Screen readers expose it as a navigation landmark, allowing users to jump directly to or skip past the navigation.

## Basic Usage

<HtmlPreviewer :code="NavDemo.basic()" />

`<ul>` are automatically distributed horizontally.

`<li>` are unstyled and inlined.

`<a>` are underlined only on `:hover`.

## Link variants

You can use `.secondary`, `.contrast`, and `.ghost` classes (not available in the [class-less version](/guide/installation)).

<HtmlPreviewer :code="NavDemo.contrastLinks()" />

<HtmlPreviewer :code="NavDemo.iconButtons()" />

## Buttons

You can use `<button>` inside `<li>`. Button sizes automatically match link size and margin.

<HtmlPreviewer :code="NavDemo.withButton()" />

## Dropdowns

You can use [dropdowns](/semantics/components/dropdown) inside Nav.

<HtmlPreviewer :code="NavDemo.withDropdown()" />

## Vertical stacking

Navs can be stacked vertically with `<ul>` inside `<aside>`.

<HtmlPreviewer :code="NavDemo.verticalInAside()" />

## Breadcrumb

Breadcrumb navigation allows users to keep track of their location within the website.

<HtmlPreviewer :code="NavDemo.breadcrumb()" />

## Overflow

When there is not enough space, the Nav items are not wrapped, and the Nav overflows on the horizontal axis.

<HtmlPreviewer :code="NavDemo.overflow()" />

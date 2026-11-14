---
title: dl
---

# &lt;dl&gt;

The `<dl>` element represents a description list, which consists of a series of terms and their corresponding descriptions.

It is typically used to create a list of definitions, where each term is followed by its definition.

## Basic Usage

<HtmlPreviewer :code="DlDemo.main()" />

## Card List

Card lists are implemented by adding the `.card` class to a `<dl>`.

You can indicate that a certain item is active by using `aria-current="true"`.

<HtmlPreviewer :code="DlDemo.cardList({}, { ariaCurrent: true })" />

<script setup>
import { DlDemo } from "@demos/semantics";
</script>

---
title: aside
---

# &lt;aside&gt;

The `<aside>` element represents content tangentially related to the main content — like sidebars, call-outs, or supplementary navigation.

Be sure to check [.sidebar](/docs/classes/sidebar) to see how it complements the `<aside>` element.

## Basic Usage

- `<aside>` is a flex container that stacks its children vertically and uses `justify-content: space-between` to distribute its children across the horizontal axis;
- In case of a single child, it will grow to fill the available space;

<HtmlPreviewer :code="AsideDemo.main()" />

## With Navigation

- Direct `<nav>` child elements will change their flex direction to `column`;

<HtmlPreviewer :code="AsideDemo.withDocsLinks()" />

---

> **Accessibility:** Assistive technologies implicitly add the `role="complementary"`, so it's best not to combine it with other roles like `role="group"`.

<script setup>
import { AsideDemo } from "@demos/semantics/elements";
</script>

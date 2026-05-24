---
title: 'role="group"'
---

# [role="group"]

The `role="group"` is used to semantically associate related UI elements together like grouping buttons together in a menu, or grouping tree items together in a tree structure, but typically the normal use cases are in combination with `<fieldset>` and `<div>` elements, as seen bellow.

> [!CAUTION]
> Even though Semanticus CSS provides styling to `[role="group"]`, use it with caution, as it is not meant to be used as a generic container for styling purposes, but rather to semantically group related elements together.
>
> Specialy in combination with `<main>`, `<header>`, `<footer>`, `<nav>` or `<aside>`, as they are already announced as landmarks and have implicit roles, adding `role="group"` would override that semantic meaning and can cause screen readers to miss or skip important information.


## Grouping related form controls

This is the **ARIA** equivalent of saying:

> "These controls/content belong together as a logical set."

<HtmlPreviewer :code="RoleGroupDemo.relatedControls()" />

Screen readers may announce:

> "Email subscription, group"

See [&lt;fieldset&gt;](/docs/semantics/elements/fieldset) for more examples of grouping form controls.

## Grouping buttons visually and semantically

When you have a set of related buttons, but they don't fit into a toolbar or menu.

<HtmlPreviewer :code="RoleGroupDemo.textFormattingButtons()" />

See [Pagination](/docs/composites/pagination) for more details.

<script setup>
import { RoleGroupDemo } from "@demos/semantics";
</script>

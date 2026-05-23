---
title: 'role="group"'
---

# [role="group"]

The `role="group"` attribute identifies a set of related user interface objects.

They can be combined with `<ul>`, `<fieldset>` and `<nav>` to create **list groups**, **fieldset groups** and **nav groups** respectively.

## List Group

When applied to an `<ul>`, `role="group"` will stylize the list as a connected group of items, similar to a list group component in UI libraries.

See [List Group](/docs/composites/list-group) for more examples and variations.

<HtmlPreviewer :code="ListGroupDemo.main()" />

## Fieldset Group

When used inside a `<fieldset>`, `role="group"` can cluster related form controls together, such as an input and its associated button.

See [&lt;fieldset&gt;](/docs/semantics/elements/fieldset) for more examples of grouping form controls.

<HtmlPreviewer :code="FieldsetDemo.groupInputButton()" />

## Nav Group

See [Pagination](/docs/composites/pagination) for more details.

<HtmlPreviewer :code="PaginationDemo.buttons()" />

<script setup>
import { ListGroupDemo, PaginationDemo } from "@demos/composites";
import { FieldsetDemo } from "@demos/semantics";
</script>

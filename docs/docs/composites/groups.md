# Groups

Groups are implemented using the [[role=group]](/docs/semantics/attributes/role-group) attribute, combined with elements like `<div>`, `<section>`.

Use them to semantically associate related UI elements together, for instance:
- Grouping buttons together in a menu
- Group [Pagination](/docs/composites/pagination) controls together
- Grouping form controls together like a search input and its submit button

> **Accessibility:** Keep in mind that if an element with `role="group"` is not labeled (meaning, that it doesn't have `aria-label` or `aria-labelledby` attribute), it will be ignored by screen readers and this may result in users not receiving a clear indication of the purpose of the group. Except for certain cases like the [Pagination](/docs/composites/pagination) example where the wrapper `<nav>` element, already has an `aria-label` attribute.

> **Important:** Best not to mix `role="group"` elements that have an implicit role, like `<ul>`, `<ol>`, and landmark elements like `<main>`, `<header>`, etc. it may lead to unexpected or confusing anouncements.

## Input Group

This is the **ARIA** equivalent of saying:

> "These controls/content belong together as a logical set."

<HtmlPreviewer :code="RoleGroupDemo.relatedFormControls()" />

Screen readers may announce:

> "Email subscription, group"

See [&lt;fieldset&gt;](/docs/semantics/elements/fieldset) for more examples of grouping form controls.

## Button Group

When you have a set of related buttons, but they don't fit into a toolbar or menu.

<HtmlPreviewer :code="RoleGroupDemo.relatedButtons()" />

See [Pagination](/docs/composites/pagination) for more details.

## Card Group

If you combine the `role="group"` with the `.card` class, you can create a group of related cards, which will look like a [Card List](/docs/composites/card-lists) except stacked horizontally.

<HtmlPreviewer :code="RoleGroupDemo.relatedCards()" />

<script setup>
import { RoleGroupDemo } from "@demos/semantics";
</script>

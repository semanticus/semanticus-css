# Groups

Groups are implemented using the [[role=group]](/docs/semantics/attributes/role-group) attribute, combined with elements like `<div>`, `<section>`.

Its used as a building block for grouping:
- Buttons together in a menu, or [Pagination](/docs/composites/pagination) area;
- Form controls together like a [Search](/docs/composites/search) input and its submit button;
- Items together in a [Card Group](/docs/composites/card-group), to indicate the status or progress of a resource.

> **Accessibility:** Keep in mind that if an element with `role="group"` is not labeled (meaning, that it doesn't have `aria-label` or `aria-labelledby` attribute), it will be ignored by screen readers and this may result in users not receiving a clear indication of the purpose of the group.

> **Important:** Best not to mix `role="group"` elements that have an implicit role, like `<ul>`, `<ol>`, and landmark elements like `<main>`, `<header>`, etc. it may lead to unexpected or confusing anouncements.

## Input Group

This is the **ARIA** equivalent of saying:

> "These controls/content belong together as a logical set."

<HtmlPreviewer :code="RoleGroupDemo.inputGroup()" />

Screen readers may announce:

> "Email subscription, group"

See [&lt;fieldset&gt;](/docs/semantics/elements/fieldset) for more examples of grouping form controls.

## Button Group

When you have a set of related buttons, but they don't fit into a toolbar or menu.

<HtmlPreviewer :code="RoleGroupDemo.buttonGroup()" />

See [Pagination](/docs/composites/pagination) for more details.

## Card Group

If you combine the `role="group"` with the `.card` class, you can create a group of related items, to indicate the status or progress of a resource.

Check out [Card Group](/docs/composites/card-group) documentation page for more examples.

<HtmlPreviewer :code="RoleGroupDemo.cardGroup()" />

<script setup>
import { RoleGroupDemo } from "@demos/semantics";
</script>

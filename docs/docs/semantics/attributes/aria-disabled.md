---
title: 'aria-disabled="true"'
---

<script setup>
import { AriaDisabledDemo } from "@demos/semantics/attributes";
</script>

# [aria-disabled="true"]

The `aria-disabled="true"` attribute communicates to assistive technologies that an element is disabled without removing it from the focus order.

Unlike the native `disabled` attribute, `aria-disabled` keeps the element focusable so screen readers can still discover and announce it as disabled. Use it when you want to preserve keyboard navigability while visually and interactively disabling an element — for example, in **wizards** or **pagination** where a step isn't available yet but should be announced.

> **Note:** `aria-disabled` does not prevent keyboard activation (Enter/Space). You must handle that with JavaScript.
> It also does not remove the element from the tab order, for that you can add `tabindex="-1"` as well.

## Basic Usage

<HtmlPreviewer :code="AriaDisabledDemo.overview()" />

## `aria-disabled` vs `disabled`

| | `disabled` | `aria-disabled="true"` |
|---|---|---|
| Prevents mouse interaction | ✅ | ✅ |
| Prevents keyboard activation | ✅ | ❌ (needs JS) |
| Removed from tab order | ✅ | ❌ |
| Announced as disabled by screen readers | ✅ | ✅ |
| Excluded from form submission | ✅ | ❌ |

Use `disabled` for most cases. Prefer `aria-disabled` when the element must remain focusable and discoverable by keyboard and assistive technology users, like in the case of **pagination** or a **wizard**.

---
title: 'role="status"'
---

# [role="status"]

Adding `role="status"` to an element will stylize it as an **alert** component and make it accessible to screen readers as a status message.

> **Accessibility:** Whenever you need to provide non-critical, polite announcements, like **success** and **info** messages, `role="status"` should be used.
>
> Also, adding `aria-live="polite"` ensures that screen readers will wait until the user finishes whatever they are currently reading before announcing the status message.

## Basic Usage

<HtmlPreviewer :code="RoleStatusDemo.main()" />

## Intent Variants

To convey **intent** and **importance**, status messages can be styled with different variants:

<HtmlPreviewer :code="IntentDemo.overviewRoleStatuses()" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="GhostDemo.overviewRoleStatuses()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overviewRoleStatuses()" :codeCollapsed="true" />

<script setup>
import { RoleStatusDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>

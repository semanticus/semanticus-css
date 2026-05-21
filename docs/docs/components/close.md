# Close Modifier

The `.close` class styles an element as an absolute-positioned close icon button. It replaces the element's default appearance with an `×` icon, sized and positioned in the top-right corner of its nearest positioned ancestor.

> **Accessibility:** Always add an `aria-label` (e.g., `aria-label="Close"`) so screen readers announce the button's purpose.

## In a Card

<HtmlPreviewer :code="CloseDemo.inCard()" />

## In an Alert

<HtmlPreviewer :code="CloseDemo.inAlert()" />

## Notes

- The parent element automatically gains `position: relative` when it contains a direct `.close` child, so no manual setup is required.
- The icon inherits `color` from its parent, so it always contrasts correctly against any background — including colored intent variants like `.success`, `.danger`, or `.warning`.
- `.close` only handles **appearance and positioning** — you still need to wire up the dismiss behavior yourself, either via the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command="close"`) or JavaScript.
- See [Modal](/docs/composites/modal) for dialog usage.

<script setup>
import { CloseDemo } from "@demos/components";
</script>

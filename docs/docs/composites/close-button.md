# Close Button

Simply add a `class="icon-close"` to a **button** or use `<span class="icon-close" aria-hidden="true"></span>` inside a **button** if you want to display text.

> **Accessibility:** In case the button does not have text, always add an `aria-label` (e.g., `aria-label="Close"`) so screen readers announce the button's purpose.

See the [Icons](/docs/components/icons) documentation for more details on the `.icon-close` class and its usage.

## Basic Usage

<HtmlPreviewer :code="ButtonDemo.overviewCloseButton()" />

## In a Dialog

> **Note:** Wrap title and a `<button class="icon-close">` inside a `<nav>`, which will justify the title to the left and the close button to the right.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 125px;&quot;&gt;
${DialogDemo.withCloseButton({ open: true })}
&lt;/div&gt;`" />

## In an Alert

<HtmlPreviewer :code="DialogDemo.main()" />

<script setup>
import { ButtonDemo, DialogDemo } from "@demos/semantics";
</script>

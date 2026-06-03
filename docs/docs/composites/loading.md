# Loading

Loading indicators are implemented using the [ARIA: aria-busy attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), which consists of an element with `aria-busy="true"` to signal assistive technologies that an element is being updated and its contents are not yet ready.

Or with the `<progress>` element for operations with measurable progress.

See [&lt;progress&gt;](/docs/semantics/elements/progress) documentation page for more details and examples.

## Loading indicator

<HtmlPreviewer :code="AriaBusyDemo.main()" />

## Progress indicator

<HtmlPreviewer :code="ProgressDemo.card()" />

## Loading Button

<HtmlPreviewer :code="AriaBusyDemo.button()" />

## Loading Card

<HtmlPreviewer :code="AriaBusyDemo.card()" />

## Loading Form

<HtmlPreviewer :code="AriaBusyDemo.form()" />

## Best Practices

1. **Show progress** - If duration is known
2. **Keep users informed** - Don't leave them guessing
3. **Provide alternatives** - Allow cancellation
4. **Accessibility** - Use `aria-busy` appropriately

<script setup>
import { AriaBusyDemo, ProgressDemo } from "@demos/semantics";
</script>

# Card List

Card lists are implemented by adding the `.card` class to a `<div role="list">` or a `<ul>` element.

The examples below use the [&lt;ul&gt;](/docs/semantics/elements/ul) approach but you can in case you want to use a different container element, check out [[role=list]](/docs/semantics/attributes/role-list) which behaves the same way.

## Basic Usage

You can indicate that a certain item is active by using `aria-current="true"`.

<HtmlPreviewer :code="UlDemo.cardList()" />

### Intent Variants

To convey **intent** and **importance**, card lists can be styled with different variants:

<HtmlPreviewer :code="UlDemo.cardListIntentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background card lists with colored text and borders

<HtmlPreviewer :code="UlDemo.cardListIntentVariants('div', {}, 'ghost')" :codeCollapsed="true" />

`.subtle` creates card lists with a more muted appearance.

<HtmlPreviewer :code="UlDemo.cardListIntentVariants('div', {}, 'subtle')" :codeCollapsed="true" />

`.striped` creates card lists with alternating background colors for better readability.

<HtmlPreviewer :code="UlDemo.cardListIntentVariants('div', {}, 'subtle striped')" :codeCollapsed="true" />

### Variants applied individually to an item

You can also use **variant** classes on individual items to indicate their intent and importance.

<HtmlPreviewer :code="UlDemo.overviewCardListItemIntentVariants()" :codeCollapsed="true" />

<script setup>
import { UlDemo } from "@demos/semantics";
</script>

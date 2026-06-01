# Lists

Lists are implemented using different approaches:
- Using the native [&lt;ul&gt;](/docs/semantics/elements/ul) element
- Combining [[role=list]](/docs/semantics/attributes/role-list) with elements like `<div>`, `<section>`, etc.

The choice of element depends on the context and the desired behavior of the button.

## Basic Usage

<HtmlPreviewer :code="ListsDemo.overview()" :codeCollapsed="true" />

## As a Card List

See more at [Card List](/docs/composites/card-list)

<HtmlPreviewer :code="ListsDemo.overviewCardList()" :codeCollapsed="true" />

<script setup>
import { ListsDemo } from "@demos/composites";
</script>

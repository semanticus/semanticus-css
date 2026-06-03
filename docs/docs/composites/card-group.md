# Card Group

Card groups are implemented by adding the `.card` class to an element with [[role=group]](/docs/semantics/attributes/role-group) attribute which will make the element and its children look like a [Card List](/docs/composites/card-list) except stacked horizontally.

## Basic Usage

You can indicate that a certain item is active by using `aria-current="true"`.

<HtmlPreviewer :code="RoleGroupDemo.cardGroup('div', {}, { ariaCurrent: true })" />

### Intent Variants

To convey **intent** and **importance**, card lists can be styled with different variants:

<HtmlPreviewer :code="RoleGroupDemo.cardGroupIntentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background card lists with colored text and borders

<HtmlPreviewer :code="RoleGroupDemo.cardGroupIntentVariants('div', {}, 'ghost')" :codeCollapsed="true" />

`.subtle` creates card lists with a more muted appearance.

<HtmlPreviewer :code="RoleGroupDemo.cardGroupIntentVariants('div', {}, 'subtle')" :codeCollapsed="true" />

`.striped` creates card lists with alternating background colors for better readability.

<HtmlPreviewer :code="RoleGroupDemo.cardGroupIntentVariants('div', {}, 'subtle striped')" :codeCollapsed="true" />

### Variants applied individually to an item

You can also use **variant** classes on individual items to indicate their intent and importance.

<HtmlPreviewer :code="RoleGroupDemo.overviewCardGroupItemIntentVariants()" :codeCollapsed="true" />

<script setup>
import { RoleGroupDemo } from "@demos/semantics";
</script>

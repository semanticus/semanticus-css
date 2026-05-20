# Links

Links are implemented using the `<a>` element and whenever you need to stylize an element like one, you can use the `role="link"` **ARIA: link role**.

## Basic Usage

The `aria-current="page"` attribute tells assistive technologies which link represents the current page.

<HtmlPreviewer :code="AnchorDemo.main()" />

## Elements rendered as a link

Simply add `role="link"` to any element to make it behave like a link, including being keyboard-accessible and focusable by default.

<HtmlPreviewer :code="RoleLinkDemo.main()" />

## Intent Variants

To convey **intent** and **importance**, links can be styled with different variants:

<HtmlPreviewer :code="IntentDemo.anchorsAndRoleLinks()" />

<script setup>
import { AnchorDemo, RoleLinkDemo, IntentDemo } from '@demos/overviews';
</script>

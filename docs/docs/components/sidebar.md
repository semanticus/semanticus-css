# Sidebar

The `.sidebar` class sets the element as **sticky** so that it remains visible as the user scrolls down the page, if used in combination with the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), it will act as a slider that can be opened and closed by the user.

Check out the <a href="/examples/demo-page.html" target="_blank">Demo Page</a> which demonstrates all 3 behaviors mentioned below.

## Sticky Demonstration

By default the sidebar will be sticky, meaning it will remain visible as the user scrolls down the page. This is useful for keeping important navigation or information accessible at all times.

<HtmlPreviewer :code="SidebarDemo.stickyBehavior()"/>

## Combined with popover attribute

When combined with the `popover` attribute, the sidebar becomes interactive and can be opened by clicking on an element with the `popovertarget` attribute pointing to the sidebar's id.

By default adding a `popover` attribute will not make the sidebar invisible, it's up to you, to decide when the sidebar should be visible or not, maybe by adding the [[hidden]](/docs/semantics/attributes/hidden) attribute to the sidebar, or through responsive [display](/docs/utilities/display) **utility classes**.

<HtmlPreviewer :code="SidebarDemo.popoverExample()"/>

## Sliding from the right

By default the sidebar will slide from the left, but you can change this behavior by adding the `data-placement="right"` attribute to the sidebar, this will make the sidebar slide from the right instead.

<HtmlPreviewer :code="SidebarDemo.popoverExample({ 'data-placement': 'right' })"/>

<script setup>
import { SidebarDemo } from "@demos/components";
</script>

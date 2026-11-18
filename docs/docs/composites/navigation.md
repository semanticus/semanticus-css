# Navigation

Navigation is implemented using the [&lt;nav&gt;](/docs/elements/nav) element or the component class [.nav](/docs/classes/nav), which in combination with [&lt;header&gt;](/docs/elements/header) and [&lt;footer&gt;](/docs/elements/footer), can help reduce boilerplate code.

## Top bar

The [&lt;nav&gt;](/docs/elements/nav) element or [.nav](/docs/classes/nav) class, use `display: flex` and `justify-content: space-between` to distribute its children across the horizontal axis.

So by combining them with the [&lt;header&gt;](/docs/elements/header), you can produce a **topbar navigation** style with minimum boilerplate code.

<HtmlPreviewer :code="NavigationDemo.topBar()" />

## Sidebar

By combining an [&lt;aside&gt;](/docs/elements/aside) element with a [&lt;nav&gt;](/docs/elements/nav), you can [vertically stack](/docs/elements/nav#vertical-navigation) items.

See more examples in how to open a [.sidebar](/docs/classes/sidebar) without javascript.

<HtmlPreviewer :code="NavigationDemo.sidebar()" />

## Bottom bar

<HtmlPreviewer :code="NavigationDemo.bottomBar()" />

## Page title and navigation controls

<HtmlPreviewer :code="NavigationDemo.pageTitleAndControls()" />

## Breadcrumbs

<HtmlPreviewer :code="NavigationDemo.breadcrumbs()" />

## Form controls

<HtmlPreviewer :code="NavigationDemo.formControls()" />

<script setup>
import { NavigationDemo } from "@demos/composites";
</script>

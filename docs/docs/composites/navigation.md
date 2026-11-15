# Navigation

Navigation is implemented using the [&lt;nav&gt;](/docs/elements/nav) element, which in combination with [&lt;header&gt;](/docs/elements/header) and [&lt;footer&gt;](/docs/elements/footer), give you

**Semanticus CSS** adds some opinionated styling to `<header>`, `<footer>`, `<aside>` and `<nav>`, in order to reduce boilerplate code for common navigation patterns like **topbar navigation**, **sidebar navigation**, **breadcrumbs** and [pagination](/docs/composites/pagination).

## Topbar navigation

<HtmlPreviewer :code="NavigationDemo.header()" />

## Sidebar navigation

<HtmlPreviewer :code="NavigationDemo.sidebar()" />

## Breadcrumbs

<HtmlPreviewer :code="NavigationDemo.breadcrumbs()" />

<script setup>
import { NavigationDemo } from "@demos/composites";
</script>

# .icon-*

Inline decorative icons rendered via CSS `mask-image`. Apply an `.icon-<name>` class to a `<span>` (or any inline element) to display an icon that scales with the surrounding text and inherits its color.

> **Accessibility:** These icons are purely decorative. Always add `aria-hidden="true"` so screen readers skip them. If the icon conveys meaning without adjacent text, use a wrapping element with an appropriate `aria-label` instead.

## Basic Usage

<HtmlPreviewer :code="IconsDemo.overview()" />

## .icon-close

<HtmlPreviewer :code="IconsDemo.iconClose()" />

<script setup>
import { IconsDemo } from "@demos/components";
</script>

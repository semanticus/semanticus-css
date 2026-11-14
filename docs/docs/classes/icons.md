# Icons

Inline decorative icons rendered via CSS `mask-image`. Apply an `.icon-<name>` class to a `<span>` (or any inline element) to display an icon that scales with the surrounding text and inherits its color.

> **Accessibility:** These icons are purely decorative. Always add `aria-hidden="true"` so screen readers skip them.
>
> If the element, say, a `<button>` that wraps the icon does not have text, add `aria-label` (e.g., `aria-label="Close"`) to it so screen readers announce the button's purpose.

## Overview

<HtmlPreviewer :code="IconsDemo.overview()" />

## Available Icons

<HtmlPreviewer :code="IconsDemo.allIcons()" />

<script setup>
import { IconsDemo } from "@demos/components";
</script>

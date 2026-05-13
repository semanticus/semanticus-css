# Getting Started

Add **Semanticus CSS** to your project either via **CDN**, **manual download**, or importing from **Node**.

## Install

<InstallGuide />

Looking for alternative color palettes or sizing options? Check out the [Palettes & Sizes](/guide/palettes-sizes) guide.

## Usage

Semanticus CSS is built on three principles:

### 1. Semantic Styling

Beautiful default styles for plain **ARIA-centric** HTML — no classes needed. See the [Semantic Styling](/docs/semantics) guide for more details.

<HtmlPreviewer :code="GettingStartedDemo.semanticStyling()" />

### 2. Variants

Minimal set of CSS classes that add visual variation to the **Semantic Styling**. See the [Variants](/docs/variants) guide for more details.

<HtmlPreviewer :code="GettingStartedDemo.variants()" />

### 3. Utilities

Utility classes for **spacing**, **layout**, **colors**, and more — adapted to the **Semantic Styling** and **Variants** values for a consistent design. See the [Utilities](/docs/utilities) guide for more details.

<HtmlPreviewer :code="GettingStartedDemo.utilities()" />

## Starter HTML template

Here's an off-to-a-great-start HTML template using semantic styling, its variants, and utilities:

<HtmlPreviewer :code="GettingStartedDemo.starterHtmlTemplateDemo()" />

<script setup>
import { GettingStartedDemo } from "@demos/examples";
</script>

# Getting Started

Add **Semanticus CSS** to your project either via **CDN**, **manual download**, or importing from **Node**.

## Install

<InstallGuide />

Looking for alternative color palettes or sizing options? Check out the [Palettes](/guide/palettes) or [Sizes](/guide/sizes) guides.

## Usage

Semanticus CSS is built on four complementary layers:

### 1. Semantic Styling

Beautiful default styles for plain **ARIA-centric** HTML — simply write plain HTML and [Semantic Styling](/docs/semantics/) will make it look great by default.

<HtmlPreviewer :code="GettingStartedDemo.semanticStyling()" />

### 2. Components

Minimal set of reusable building blocks that extend the **Semantic Styling** - add a [component](/docs/components/) when you need a specific UI pattern.

<HtmlPreviewer :code="GettingStartedDemo.components()" />

### 3. Variants

CSS classes that tweak the **Semantic Styling** and **Components** - throw in a [variant](/docs/variants/) when you want to add or reduce visual flair.

<HtmlPreviewer :code="GettingStartedDemo.variants()" />

### 4. Utilities

[Utility](/docs/utilities/) classes adapted to the same **CSS variables** as the **Semantic Styling** and **Components** for a consistent design - use them when you need fine-grained control over **spacing**, **layout**, **colors**, and more.

<HtmlPreviewer :code="GettingStartedDemo.utilities()" />

## Starter HTML template

Here's an off-to-a-great-start HTML template using semantic styling, its variants, and utilities:

<HtmlPreviewer :code="renderHtmlTemplate(StarterHtmlTemplateDemo.main())" />

<script setup>
import * as GettingStartedDemo from "@demos/getting-started.demo";
import { StarterHtmlTemplateDemo } from "@demos/examples";
import { renderHtmlTemplate } from "@scripts/utils";
</script>

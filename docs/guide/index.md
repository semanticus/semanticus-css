# Getting Started

Add **Semanticus CSS** to your project either via **CDN**, **manual download**, or importing from **Node**.

## Install

<InstallGuide />

Looking for alternative color palettes or sizing options? Check out the [Palettes](/guide/palettes) or [Sizes](/guide/sizes) guides.

## Bundle choices

- The default package import includes **Components and Utilities**.
- `@semanticus/semanticus-css/no-utilities` includes semantic HTML and ARIA styles, component classes, and variants together.
- `@semanticus/semanticus-css/utilities` includes atomic utilities only.
- The legacy `@semanticus/semanticus-css/semantics` import now contains the same CSS as `/no-utilities`.

For custom source bundles, replace `src/semantics/modules.css` with `src/components/modules.css`. Keep `src/attributes/modules.css` and `src/variants/modules.css` as separate imports, following the order in `src/index.css`. Utility-only builds use `src/utilities.css`.

## Usage

**Semanticus CSS** is organized into **Components** (native HTML styles and component classes), **Attributes** (ARIA and HTML attribute styles), **Variants**, and **Utilities**. The examples below show how to use them together.

### Semantic HTML and ARIA

Beautiful default styles for plain **ARIA-centric** HTML — simply write plain HTML and [Semantic Styling](/docs/semantics/) will make it look great by default.

<HtmlPreviewer :code="GettingStartedDemo.semanticStyling()" />

### Component classes

Minimal set of reusable building blocks that extend the **Semantic Styling** - add a [component](/docs/components/) when you need a specific UI pattern.

<HtmlPreviewer :code="GettingStartedDemo.components()" />

### Variants

CSS classes that tweak the **Semantic Styling** and **Components** - throw in a [variant](/docs/variants/) when you want to add or reduce visual flair.

<HtmlPreviewer :code="GettingStartedDemo.variants()" />

### Utilities

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

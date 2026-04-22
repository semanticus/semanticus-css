# Overview

Semanticus CSS is built on three complementary layers:

- **1. Semantic Styling**

  Beautiful default styles for plain **ARIA-centric** HTML — no classes needed.

- **2. Variants**

  Minimal set of CSS classes that add visual variation to the **Semantic Styling**.

- **3. Utilities**

  Utility classes for **spacing**, **layout**, **colors**, and more — adapted to the **Semantic Styling** and **Variants** values for a consistent design.

The docs are split by those 3 layers plus another one **Concepts** that explains the core ideas behind the framework.

## How the layers work together

The intended order is simple:

1. Start with semantic HTML.
2. Add variants when a component needs an alternative appearance.
3. Add utilities when layout or spacing needs fine-grained control.

This gives you a path from minimal markup to more customized interfaces without abandoning the semantic base.

## How to import it in your project

**Semanticus CSS** can be used in 2 ways: Either by importing the full framework or by importing only the layers you need.

- **semanticus.css** is the complete framework. It includes all three layers and is ideal for most projects that want a quick start with the full feature set.

- **semanticus-semantics.css** includes only the **Semantic Styling** layer. This is ideal for projects that want to start with semantic HTML and add custom styles on top, without the optional variants or utilities.

- **semanticus-variants.css** includes only the **Variants** layer.

- **semanticus-utilities.css** includes only the **Atomic Utilities** layer.

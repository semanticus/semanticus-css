---
title: Typography
---

<script setup>
import { TypographyDemo } from "@demos/semantics";
</script>

# Typography

## Headings

<HtmlPreviewer :code="TypographyDemo.headings()" />

## Paragraphs

<HtmlPreviewer :code="TypographyDemo.paragraphs()" />

## Address

The `<address>` element provides contact information for the nearest `<article>` or the document body. Semanticus removes the default italic style and adds vertical spacing.

<HtmlPreviewer :code="TypographyDemo.address()" />

## Blockquote

The `<blockquote>` element indicates that the enclosed text is an extended quotation. Semanticus styles it with a left border accent.

<HtmlPreviewer :code="TypographyDemo.blockquote()" />

## Code Block

Wrap `<code>` in `<pre>` for a multi-line code block that preserves whitespace.

<HtmlPreviewer :code="TypographyDemo.codeBlock()" />

## Inline Elements

<HtmlPreviewer :code="TypographyDemo.inlineElements()" />

---

### &lt;abbr&gt;

The `<abbr>` element marks an abbreviation or acronym. When a `title` attribute is provided, Semanticus adds a dotted underline and a `help` cursor so users know they can hover for the full form.

<HtmlPreviewer :code="TypographyDemo.abbr()" />

---

### &lt;mark&gt;

The `<mark>` element highlights text of contextual relevance — such as search result matches.

<HtmlPreviewer :code="TypographyDemo.mark()" />

---

### &lt;small&gt;

The `<small>` element acts as helper text and is styled with a muted color and smaller font size.

Use `aria-describedby` to associate it with the input.

<HtmlPreviewer :code="TypographyDemo.small()" />

---

### &lt;strong&gt; / &lt;b&gt;

Both `<strong>` and `<b>` render as bold text (`font-weight: bolder`).

Use `<strong>` for content of importance, seriousness, or urgency.

Use `<b>` for stylistic offset without semantic weight.

<HtmlPreviewer :code="TypographyDemo.strongAndBold()" />

---

### &lt;sub&gt; / &lt;sup&gt;

The `<sub>` element renders subscript text — positioned below the baseline with a smaller font size.

The `<sup>` element renders superscript text — positioned above the baseline with a smaller font size.

Common uses include chemical formulas, mathematical exponents and footnote references.

<HtmlPreviewer :code="TypographyDemo.subAndSup()" />

---

### &lt;del&gt; / &lt;ins&gt;

The `<del>` element represents deleted text and the `<ins>` element represents inserted text — useful for showing editorial changes or price reductions.

<HtmlPreviewer :code="TypographyDemo.delAndIns()" />

---

### &lt;kbd&gt;

Use `<kbd>` to represent keyboard shortcuts.

<HtmlPreviewer :code="TypographyDemo.keyboard()" />

---

### &lt;samp&gt;

Use `<samp>` to represent sample output from a program.

<HtmlPreviewer :code="TypographyDemo.sample()" />


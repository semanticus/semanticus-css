# Typography

Semanticus stylizes headings with different font sizes, but you should not rely on heading elements alone for visual hierarchy.

The best practice is to start with an `<h1>`, then an `<h2>` and so forth, don't jump straight to an `<h4>` or `<h5>`.

In case you need, for example, an `<h2>` to have the size of an `<h4>`, you can apply the `.fs-4` utility class to it. This maintains a proper semantic structure for accessibility and SEO, while achieving the desired visual appearance.

See [Typography Utilities](/docs/utilities/typography) for more details.

## Headings

<HtmlPreviewer :code="TextDemo.headings()" />

## Paragraphs

<HtmlPreviewer :code="TextDemo.paragraphs()" />

## Address

The `<address>` element provides contact information for the nearest `<article>` or the document body. Semanticus removes the default italic style and adds vertical spacing.

<HtmlPreviewer :code="TextDemo.address()" />

## Blockquote

The `<blockquote>` element indicates that the enclosed text is an extended quotation. Semanticus styles it with a left border accent.

<HtmlPreviewer :code="TextDemo.blockquote()" />

## Code Block

Wrap `<code>` in `<pre>` for a multi-line code block that preserves whitespace.

<HtmlPreviewer :code="TextDemo.codeBlock()" />

## Inline Elements

<HtmlPreviewer :code="TextDemo.inlineElements()" />

---

### &lt;abbr&gt;

The `<abbr>` element marks an abbreviation or acronym. When a `title` attribute is provided, Semanticus adds a dotted underline and a `help` cursor so users know they can hover for the full form.

<HtmlPreviewer :code="TextDemo.abbr()" />

---

### &lt;mark&gt;

The `<mark>` element highlights text of contextual relevance — such as search result matches.

<HtmlPreviewer :code="TextDemo.mark()" />

---

### &lt;small&gt;

The `<small>` element acts as helper text and is styled with a muted color and smaller font size.

Use `aria-describedby` to associate it with the input.

<HtmlPreviewer :code="TextDemo.small()" />

---

### &lt;strong&gt; / &lt;b&gt;

Both `<strong>` and `<b>` render as bold text (`font-weight: bolder`).

Use `<strong>` for content of importance, seriousness, or urgency.

Use `<b>` for stylistic offset without semantic weight.

<HtmlPreviewer :code="TextDemo.strongAndBold()" />

---

### &lt;sub&gt; / &lt;sup&gt;

The `<sub>` element renders subscript text — positioned below the baseline with a smaller font size.

The `<sup>` element renders superscript text — positioned above the baseline with a smaller font size.

Common uses include chemical formulas, mathematical exponents and footnote references.

<HtmlPreviewer :code="TextDemo.subAndSup()" />

---

### &lt;del&gt; / &lt;ins&gt;

The `<del>` element represents deleted text and the `<ins>` element represents inserted text — useful for showing editorial changes or price reductions.

<HtmlPreviewer :code="TextDemo.delAndIns()" />

---

### &lt;kbd&gt;

Use `<kbd>` to represent keyboard shortcuts.

<HtmlPreviewer :code="TextDemo.keyboard()" />

---

### &lt;samp&gt;

Use `<samp>` to represent sample output from a program.

<HtmlPreviewer :code="TextDemo.sample()" />

<script setup>
import { TextDemo } from "@demos/semantics";
</script>

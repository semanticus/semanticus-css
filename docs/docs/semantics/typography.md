---
title: Typography
---

<script setup>
import { TypographyDemo } from "@demos/semantics";
</script>

# Typography

HTML heading elements `<h1>`–`<h6>` establish document structure and create a navigable outline for screen reader users.

Inline elements such as `<strong>`, `<em>`, `<code>`, and `<mark>` carry semantic meaning beyond their visual appearance.

## Headings

All heading levels are styled with appropriate font sizes, weights, and spacing.

<HtmlPreviewer :code="TypographyDemo.headings()" />

## Heading Group

Use `<hgroup>` to group headings with subtitles. The subtitle is automatically muted.

<HtmlPreviewer :code="TypographyDemo.hgroup()" />

## Inline Text Elements

Various inline text elements are styled for semantic meaning.

<HtmlPreviewer :code="TypographyDemo.inline()" />

## Lists

Ordered, unordered, and definition lists come with consistent spacing and styling.

<HtmlPreviewer :code="TypographyDemo.lists()" />

## Blockquote

Blockquotes feature distinctive left border styling and support citations.

<HtmlPreviewer :code="TypographyDemo.blockquote()" />

## Horizontal Rule

The `<hr>` element creates a thematic break between paragraphs.

<HtmlPreviewer :code="TypographyDemo.hr()" />

## Address

The `<address>` element is styled for contact information.

<HtmlPreviewer :code="TypographyDemo.address()" />

## Code

Code elements styled for readability.

### Inline Code

<HtmlPreviewer :code="TypographyDemo.codeInline()" />

### Keyboard Input

<HtmlPreviewer :code="TypographyDemo.codeKbd()" />

### Sample Text

<HtmlPreviewer :code="TypographyDemo.codeSamp()" />

### HTML Entities

Common HTML entities for code:

| Entity | Character |
|--------|-----------|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&#39;` | ' |
| `&nbsp;` | (space) |

### Best Practices

1. **Use `<pre>` for blocks** - Preserves whitespace
2. **Use `<code>` inline** - For short snippets
3. **Escape HTML** - Use entities in HTML examples
4. **Provide language hints** - For syntax highlighting


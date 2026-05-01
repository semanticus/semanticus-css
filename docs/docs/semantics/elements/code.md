---
title: code
---

<script setup>
import { CodeDemo } from "@demos/semantics/elements";
</script>

# &lt;code&gt; / &lt;pre&gt; / &lt;kbd&gt; / &lt;samp&gt;

Semanticus styles all code-related elements with a monospace font, muted background, and subtle border-radius.

## Inline Code

<HtmlPreviewer :code="CodeDemo.inlineCode()" />

## Code Block

Wrap `<code>` in `<pre>` for a multi-line code block that preserves whitespace.

<HtmlPreviewer :code="CodeDemo.codeBlock()" />

## Keyboard Input

Use `<kbd>` to represent keyboard shortcuts.

<HtmlPreviewer :code="CodeDemo.keyboard()" />

## Sample Output

Use `<samp>` to represent sample output from a program.

<HtmlPreviewer :code="CodeDemo.sample()" />

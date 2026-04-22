---
title: Typography
---

<script setup>
const headingsHtml = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`;

const hgroupHtml = `<hgroup>
  <h2>Get inspired with CSS</h2>
  <p>How to use CSS to add glam to your Website?</p>
</hgroup>
`;

const inlineHtml = `<div role="toolbar">
  <p><strong>Bold</strong> <code>&lt;strong&gt;</code> <code>&lt;b&gt;</code></p>
  <p><em>Italic</em> <code>&lt;i&gt;</code> <code>&lt;em&gt;</code> <code>&lt;cite&gt;</code></p>
</div>
<div role="toolbar">
  <p><u>Underline</u> <code>&lt;u&gt;</code></p>
  <p><s>Strikethrough</s> <code>&lt;s&gt;</code></p>
</div>
<div role="toolbar">
  <p><ins>Inserted</ins> <code>&lt;ins&gt;</code></p>
  <p><del>Deleted</del> <code>&lt;del&gt;</code></p>
</div>
<div role="toolbar">
  <p>Text <sup>Sup</sup> <code>&lt;sup&gt;</code></p>
  <p>Text <sub>Sub</sub> <code>&lt;sub&gt;</code></p>
</div>
<div role="toolbar">
  <p><small>Small</small> <code>&lt;small&gt;</code></p>
  <p><abbr title="Abbreviation">Abbr</abbr> <code>&lt;abbr&gt;</code></p>
</div>
<div role="toolbar">
  <p><kbd>Ctrl + S</kbd> <code>&lt;kbd&gt;</code></p>
  <p><mark>Highlighted</mark> <code>&lt;mark&gt;</code></p>
</div>`;

const blockquoteHtml = `<blockquote>
  "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works."
  <footer>
    <cite>— Steve Jobs</cite>
  </footer>
</blockquote>
`;

const hrHtml = `<p>Paragraph before the horizontal line.</p>
<hr />
<p>Paragraph after the horizontal line.</p>
`;

const listsHtml = `<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
  <li>Unordered list item 3</li>
</ul>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
</ol>

<dl>
  <dt>Definition term</dt>
  <dd>Definition description</dd>
  <dt>Another term</dt>
  <dd>Another description</dd>
</dl>
`;

const addressHtml = `<address>
  <strong>Company Name</strong><br />
  123 Main Street<br />
  City, Country 12345<br />
  <a href="mailto:contact@example.com">contact@example.com</a>
</address>
`;

const codeInlineHtml = `<p>Use the <code>npm install</code> command to install dependencies.</p>
`;
const codeKbdHtml = `<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
`;
const codeSampHtml = `<p><samp>Error: File not found</samp></p>
`;
const codeEntitiesHtml = `<p>
  To create a new component, use the
  <code>&lt;article&gt;</code> element.
</p>
`;
const codeListHtml = `<ul>
  <li><code>.flex</code> - Flexbox container</li>
  <li><code>.grid</code> - Grid container</li>
  <li><code>.block</code> - Block element</li>
</ul>
`;
const codeTableHtml = `<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.text-center</code></td>
      <td>Center text</td>
    </tr>
  </tbody>
</table>
`;
</script>

# Typography

HTML heading elements `<h1>`–`<h6>` establish document structure and create a navigable outline for screen reader users.

Inline elements such as `<strong>`, `<em>`, `<code>`, and `<mark>` carry semantic meaning beyond their visual appearance.

## Headings

All heading levels are styled with appropriate font sizes, weights, and spacing.

<HtmlPreviewer :code="headingsHtml" />

## Heading Group

Use `<hgroup>` to group headings with subtitles. The subtitle is automatically muted.

<HtmlPreviewer :code="hgroupHtml" />

## Inline Text Elements

Various inline text elements are styled for semantic meaning.

<HtmlPreviewer :code="inlineHtml" />

## Lists

Ordered, unordered, and definition lists come with consistent spacing and styling.

<HtmlPreviewer :code="listsHtml" />

## Blockquote

Blockquotes feature distinctive left border styling and support citations.

<HtmlPreviewer :code="blockquoteHtml" />

## Horizontal Rule

The `<hr>` element creates a thematic break between paragraphs.

<HtmlPreviewer :code="hrHtml" />

## Address

The `<address>` element is styled for contact information.

<HtmlPreviewer :code="addressHtml" />

## Code

Code elements styled for readability.

### Inline Code

<HtmlPreviewer :code="codeInlineHtml" />

### Keyboard Input

<HtmlPreviewer :code="codeKbdHtml" />

### Sample Text

<HtmlPreviewer :code="codeSampHtml" />

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


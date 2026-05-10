import * as ADemo from '@demos/semantics/elements/a.demo';

export function headings() {
  return `<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>`;
}

export function paragraphs() {
  return `<p>The paragraph element is the most basic block of text content.</p>
<p>A second paragraph follows, automatically spaced below the first.</p>
<p>The last paragraph in a container has its margin trimmed, avoiding extra whitespace at the bottom.</p>`;
}

export function inlineElements() {
  return `<div role="toolbar">
  <p>${ADemo.basic()}</p>
  <p>${ADemo.active()}</p>
  <p><code>Code</code></p>
</div>
<div role="toolbar">
  <p><strong>Bold</strong></p>
  <p><em>Italic</em></p>
  <p><u>Underline</u></p>
</div>
<div role="toolbar">
  <p><del>Deleted</del></p>
  <p><ins>Inserted</ins></p>
  <p><s>Strikethrough</s></p>
</div>
<div role="toolbar">
  <p><small>Small </small></p>
  <p>Text <sub>Sub</sub></p>
  <p>Text <sup>Sup</sup></p>
</div>
<div role="toolbar">
  <p><kbd>Kbd</kbd></p>
  <p>
    <abbr aria-describedby="tip-abbr">Abbr.</abbr>
    <span id="tip-abbr" role="tooltip">Abbreviation</span>
  </p>
  <p><mark>Highlighted</mark></p>
</div>`;
}

export function strongAndBold() {
  return `<p>This is <strong>critically important</strong> information.</p>

<p>The <b>bold element</b> is visually identical to strong but carries no semantic importance.</p>`;
}

export function inlineEm() {
  return `<p>This is <em>emphasized</em> text. The <em>element</em> indicates content of stress emphasis.</p>`;
}

export function inlineItalic() {
  return `<p>The <i>italic element</i> is visually identical to em but carries no semantic importance — use it for stylistic offset without implying emphasis.</p>`;
}

export function subAndSup() {
  return `<p>Water is H<sub>2</sub>O. Carbon dioxide is CO<sub>2</sub>.</p>

<p>Einstein's famous equation: E = mc<sup>2</sup>.</p>

<footer>
  <p>Semantic HTML is the foundation of accessible web development.<sup>1</sup> It improves SEO<sup>2</sup> and is recommended by W3C.<sup>3</sup></p>
</footer>`;
}

export function delAndIns() {
  return `<p>The original price was <del>$99.00</del> <ins>$49.00</ins>.</p>`;
}

export function codeBlock() {
  return `<pre><code>function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));</code></pre>`;
}

export function address() {
  return `<address>
  <strong>Acme Corp</strong><br>
  123 Main Street<br>
  Springfield, IL 62701<br>
  <a href="mailto:hello@acme.example">hello@acme.example</a>
</address>`;
}

export function blockquote() {
  return `<blockquote>"Maecenas vehicula metus tellus, vitae congue turpis hendrerit non. Nam at dui sit amet ipsum cursus ornare."
<footer>
  <cite>- Phasellus eget lacinia</cite>
</footer></blockquote>`;
}

export function keyboard() {
  return `<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, or <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.</p>`;
}

export function sample() {
  return `<p>The program outputs: <samp>Hello, World!</samp></p>`;
}

export function abbr() {
  return `<p>The <abbr title="HyperText Markup Language">HTML</abbr> standard defines the structure of web pages. Use <abbr title="Cascading Style Sheets">CSS</abbr> for styling and <abbr title="JavaScript">JS</abbr> for interactivity.</p>`;
}

export function mark() {
  return `<p>Search results for <strong>"semantic HTML"</strong>: Use <mark>semantic HTML</mark> elements to convey meaning to both browsers and assistive technologies. <mark>Semantic HTML</mark> improves accessibility and SEO.</p>`;
}

export function small() {
  return `<input
  type="email"
  name="email"
  placeholder="Email"
  autocomplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
/>
<small id="email-helper">We'll never share your email with anyone else.</small>
`;
}

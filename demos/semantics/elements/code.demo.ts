import { renderElement } from "@demos/utils";

export function inlineCode() {
  return `<p>Use the <code>console.log()</code> function to print output. The <code>let</code> and <code>const</code> keywords declare variables.</p>`;
}

export function codeBlock(attrs: Record<string, string> = {}) {
  return renderElement("pre", attrs, `<code>function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));</code>`);
}

export function keyboard() {
  return `<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, or <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.</p>`;
}

export function sample() {
  return `<p>The program outputs: <samp>Hello, World!</samp></p>`;
}

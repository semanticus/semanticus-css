import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("figure", attrs, `<img src="https://picsum.photos/800/400" alt="A scenic placeholder image" />
  <figcaption>Figure 1 — A placeholder image demonstrating the figure element.</figcaption>`);
}

export function withCode(attrs: Record<string, string> = {}) {
  return renderElement("figure", attrs, `<pre><code>const greeting = "Hello, World!";
console.log(greeting);</code></pre>
  <figcaption>A code snippet inside a figure element.</figcaption>`);
}

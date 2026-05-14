import { renderElement } from "@scripts/utils";

function render(attrs: Record<string, string>, slot: string = "") {
  return renderElement("figure", attrs, slot);
}

export function main(attrs: Record<string, string> = {}) {
  return render(attrs, `<img src="https://picsum.photos/800/400" alt="A scenic placeholder image" />
<figcaption>Figure 1 — A placeholder image demonstrating the figure element.</figcaption>`);
}

export function withoutImage(attrs: Record<string, string> = {}) {
  return render(attrs, `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='120' viewBox='0 0 400 120'%3E%3Crect fill='%23646b79' width='400' height='120' rx='4'/%3E%3Ctext x='200' y='65' text-anchor='middle' fill='%23fff' font-size='14'%3EImage placeholder%3C/text%3E%3C/svg%3E" alt="Placeholder">
<figcaption>Figure 1 — A placeholder image demonstrating the figure element.</figcaption>`);
}

export function withCode(attrs: Record<string, string> = {}) {
  return render(attrs, `<pre><code>console.log("Hello, World!");</code></pre>
<figcaption>A code snippet inside a figure element.</figcaption>`);
}

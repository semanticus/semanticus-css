import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("article", attrs, `<h3>About &lt;body&gt;</h3>
  <p>The <code>&lt;body&gt;</code> element receives <code>width: 100%</code> and <code>min-height: 100svh</code>, ensuring it always fills the full viewport.</p>
  <p>Background color, text color, and font are inherited from <code>:root</code> variables, making the body the canvas for your content.</p>`);
}

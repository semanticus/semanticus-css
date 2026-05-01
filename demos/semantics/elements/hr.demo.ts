import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("article", attrs, `<h3>Section One</h3>
  <p>Content for the first section.</p>
  <hr />
  <h3>Section Two</h3>
  <p>Content for the second section, visually separated by the horizontal rule.</p>`);
}

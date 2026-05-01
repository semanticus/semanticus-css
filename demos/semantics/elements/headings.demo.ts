import { renderElement } from "@demos/utils";

export function allLevels(attrs: Record<string, string> = {}) {
  return renderElement("article", attrs, `<h1>Heading Level 1</h1>
  <h2>Heading Level 2</h2>
  <h3>Heading Level 3</h3>
  <h4>Heading Level 4</h4>
  <h5>Heading Level 5</h5>
  <h6>Heading Level 6</h6>`);
}

export function inContext(attrs: Record<string, string> = {}) {
  return renderElement("article", attrs, `<h2>Article Title</h2>
  <p>Introduction paragraph that sets the scene.</p>
  <h3>First Section</h3>
  <p>Content for the first section goes here.</p>
  <h4>Subsection</h4>
  <p>More detailed content within the first section.</p>`);
}

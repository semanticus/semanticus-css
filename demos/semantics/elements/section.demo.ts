import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return `${renderElement("section", attrs, `<h2>Introduction</h2>
  <p>Sections group thematically related content. Each section gets a bottom margin via <code>--block-spacing-vertical</code>.</p>`)}
${renderElement("section", {}, `<h2>Features</h2>
  <p>Use multiple sections to structure long-form content like articles, landing pages, or documentation.</p>`)}`;
}

import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("hgroup", attrs, `<h2>Heading Group</h2>
<p>The text of the first <code>&lt;p&gt;</code> after the heading becomes muted — ideal for page titles with a description.</p>`);
}

export function withEyebrow(attrs: Record<string, string> = {}) {
  return renderElement("hgroup", attrs, `<mark>Eyebrow</mark>
<h2>Heading Group</h2>
<p>The first <mark>&lt;mark&gt;</mark> direct child of an hgroup gets special styling.</p>`);
}

export function withoutDescription(attrs: Record<string, string> = {}) {
  return renderElement("hgroup", attrs, `<mark>Eyebrow</mark>
<h2>Heading Group</h2>`);
}

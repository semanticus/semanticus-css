import { renderElement } from "@demos/utils";

export function unordered(attrs: Record<string, string> = {}) {
  return renderElement("ul", attrs, `<li>HTML — structure</li>
  <li>CSS — presentation</li>
  <li>JavaScript — behavior</li>`);
}

export function ordered(attrs: Record<string, string> = {}) {
  return renderElement("ol", attrs, `<li>Install Node.js</li>
  <li>Run <code>npm install</code></li>
  <li>Run <code>npm run build</code></li>`);
}

export function definition(attrs: Record<string, string> = {}) {
  return renderElement("dl", attrs, `<dt>Semantics</dt>
  <dd>The study of meaning in language and logic.</dd>
  <dt>Accessibility</dt>
  <dd>The practice of making content usable by everyone.</dd>
  <dt>Progressive Enhancement</dt>
  <dd>Building with a baseline that works for all, then enhancing for capable clients.</dd>`);
}

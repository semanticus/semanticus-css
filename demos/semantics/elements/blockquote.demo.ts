import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("blockquote", attrs, `<p>The Web is for everyone. We should ensure it is accessible to all people, whatever their hardware, software, language, location, or ability.</p>`);
}

export function withAttribution(attrs: Record<string, string> = {}) {
  return renderElement("blockquote", attrs, `<p>First, solve the problem. Then, write the code.</p>
  <footer>— <cite>John Johnson</cite></footer>`);
}

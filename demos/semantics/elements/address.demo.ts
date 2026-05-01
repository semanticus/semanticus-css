import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("address", attrs, `<strong>Acme Corp</strong><br>
  123 Main Street<br>
  Springfield, IL 62701<br>
  <a href="mailto:hello@acme.example">hello@acme.example</a>`);
}

export function contactInfo(attrs: Record<string, string> = {}) {
  return renderElement("address", attrs, `Written by <a href="mailto:author@example.com">Jane Doe</a>.<br>
  Visit her at <a href="https://example.com">example.com</a>.`);
}

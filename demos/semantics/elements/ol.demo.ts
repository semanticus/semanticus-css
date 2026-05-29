import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "ol",
    attrs,
    `<li>First item</li>
<li>Second item
  <ol>
    <li>Sub-item A</li>
    <li>Sub-item B</li>
  </ol>
</li>
<li>Third item</li>`,
  );
}

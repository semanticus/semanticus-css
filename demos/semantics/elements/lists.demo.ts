import { renderElement } from "@demos/utils";

export function unordered(attrs: Record<string, string> = {}) {
  return renderElement("ul", attrs, `<li>Aliquam lobortis lacus eu libero ornare facilisis.</li>
<li>Nam et magna at libero scelerisque egestas.</li>
<li>Nested list
  <ul>
    <li>Nested item one</li>
    <li>Nested item two</li>
  </ul>
</li>
<li>Proin ultricies turpis et volutpat vehicula.</li>`);
}

export function ordered(attrs: Record<string, string> = {}) {
  return renderElement("ol", attrs, `<li>First item</li>
<li>Second item
  <ol>
    <li>Sub-item A</li>
    <li>Sub-item B</li>
  </ol>
</li>
<li>Third item</li>`);
}

export function definition(attrs: Record<string, string> = {}) {
  return renderElement("dl", attrs, `<dt>Term one</dt>
<dd>Definition for term one. The <code>&lt;dl&gt;</code> element styles use the same typography spacing as other block elements.</dd>
<dt>Term two</dt>
<dd>Definition for term two.</dd>
<dt>Multiple terms</dt>
<dt>Share one definition</dt>
<dd>This definition applies to both terms above.</dd>`);
}

import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "dl",
    attrs,
    `<dt>Term one</dt>
<dd>Definition for term one. The <code>&lt;dl&gt;</code> element styles use the same typography spacing as other block elements.</dd>
<dt>Term two</dt>
<dd>Definition for term two.</dd>
<dt>Multiple terms</dt>
<dt>Share one definition</dt>
<dd>This definition applies to both terms above.</dd>`,
  );
}

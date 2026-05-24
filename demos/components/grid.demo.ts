import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as CardListDemo from "@demos/components/card-list.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(tagName, classMergeAttributes('grid', attrs), `<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>`);
}

import { PrimaryDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${PrimaryDemo.links()}
<hr>
${PrimaryDemo.buttons()}
<hr>
${PrimaryDemo.panes()}
<hr>
${PrimaryDemo.panels()}
<hr>
${PrimaryDemo.cards()}`);
}

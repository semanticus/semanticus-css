import { SuccessDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${SuccessDemo.links()}
<hr>
${SuccessDemo.buttons()}
<hr>
${SuccessDemo.panes()}
<hr>
${SuccessDemo.panels()}
<hr>
${SuccessDemo.cards()}`);
}

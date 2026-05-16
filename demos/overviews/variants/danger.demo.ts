import { DangerDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${DangerDemo.links()}
<hr>
${DangerDemo.buttons()}
<hr>
${DangerDemo.panes()}
<hr>
${DangerDemo.panels()}
<hr>
${DangerDemo.cards()}`);
}

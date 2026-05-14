import { ContrastDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${ContrastDemo.links()}
<hr>
${ContrastDemo.buttons()}
<hr>
${ContrastDemo.panes()}
<hr>
${ContrastDemo.panels()}
<hr>
${ContrastDemo.cards()}`);
}

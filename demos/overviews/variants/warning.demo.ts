import { WarningDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${WarningDemo.links()}
<hr>
${WarningDemo.buttons()}
<hr>
${WarningDemo.panes()}
<hr>
${WarningDemo.panels()}
<hr>
${WarningDemo.cards()}`);
}

import { WarningDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${WarningDemo.links()}
<hr>
${WarningDemo.buttons()}
<hr>
${WarningDemo.cards()}`);
}

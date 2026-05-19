import { DangerDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${DangerDemo.links()}
<hr>
${DangerDemo.buttons()}
<hr>
${DangerDemo.cards()}`);
}

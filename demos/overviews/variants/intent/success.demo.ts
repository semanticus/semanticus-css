import { SuccessDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${SuccessDemo.links()}
<hr>
${SuccessDemo.buttons()}
<hr>
${SuccessDemo.cards()}`);
}

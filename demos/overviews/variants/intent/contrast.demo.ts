import { ContrastDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${ContrastDemo.links()}
<hr>
${ContrastDemo.buttons()}
<hr>
${ContrastDemo.cards()}`);
}

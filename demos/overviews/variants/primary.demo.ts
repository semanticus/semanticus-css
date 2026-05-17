import { PrimaryDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${PrimaryDemo.links()}
<hr>
${PrimaryDemo.buttons()}
<hr>
${PrimaryDemo.cards()}`);
}

import { SecondaryDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${SecondaryDemo.links()}
<hr>
${SecondaryDemo.buttons()}
<hr>
${SecondaryDemo.cards()}`);
}

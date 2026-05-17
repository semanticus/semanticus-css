import { InfoDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${InfoDemo.links()}
<hr>
${InfoDemo.buttons()}
<hr>
${InfoDemo.cards()}`);
}

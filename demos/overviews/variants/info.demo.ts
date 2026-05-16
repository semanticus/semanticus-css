import { InfoDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${InfoDemo.links()}
<hr>
${InfoDemo.buttons()}
<hr>
${InfoDemo.panes()}
<hr>
${InfoDemo.panels()}
<hr>
${InfoDemo.cards()}`);
}

import { SecondaryDemo } from "@demos/variants";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${SecondaryDemo.links()}
<hr>
${SecondaryDemo.buttons()}
<hr>
${SecondaryDemo.panes()}
<hr>
${SecondaryDemo.panels()}
<hr>
${SecondaryDemo.cards()}`);
}

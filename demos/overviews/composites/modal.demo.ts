import { ModalDemo } from "@demos/composites";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `${ModalDemo.withHeaderAndFooter()}
`);
}

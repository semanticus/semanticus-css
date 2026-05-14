import { DialogDemo } from "@demos/semantics/elements";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, DialogDemo.showModalWithHeaderAndFooter());
}

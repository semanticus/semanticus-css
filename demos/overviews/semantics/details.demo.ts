import { DetailsDemo } from "@demos/semantics/elements";
import { renderElement } from "@scripts/utils";

export function main() {
  return renderElement('main', { class: 'container' }, `
<h1>Entangled Accordions</h1>
${DetailsDemo.entangledAccordions()}

<hr />

<h1>Dropdown</h1>
${DetailsDemo.basicDropdown({ id: 'dropdown-1' })}`);
}

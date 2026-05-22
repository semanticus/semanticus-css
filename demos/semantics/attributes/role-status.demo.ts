import { renderElement } from "@scripts/utils";
import { GhostDemo, SubtleDemo, IntentDemo } from '@demos/variants';

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "status" }, slot || `10 results found`);
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="mb-0" role="toolbar">
  ${main()}
  ${main('div', { class: 'subtle' })}
  ${main('div', { class: 'ghost' })}
</section>

<section role="toolbar">
  <div>
    ${IntentDemo.overviewRoleStatuses()}
  </div>

  <div>
    ${SubtleDemo.overviewRoleStatuses()}
  </div>

  <div>
    ${GhostDemo.overviewRoleStatuses()}
  </div>
</section>`);
}

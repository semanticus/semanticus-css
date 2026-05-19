import { renderElement } from "@scripts/utils";

import { RoleLinkDemo } from '@demos/semantics/attributes';
import { ADemo } from '@demos/semantics/elements';

export function main() {
  return renderElement('nav', {}, `${ADemo.main()}
${ADemo.active()}`);
}

export function roleLinks() {
  return renderElement('nav', {}, `${RoleLinkDemo.main('button')}
${RoleLinkDemo.main('div')}`);
}

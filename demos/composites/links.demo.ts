import { renderElement } from "@scripts/utils";

import { RoleLinkDemo } from '@demos/semantics/attributes';
import { ADemo } from '@demos/semantics/elements';

export function main() {
  return `${ADemo.main()}
<hr>
${ADemo.active()}`;
}

export function roleLinks() {
  return `${RoleLinkDemo.main('button')}
<hr>
${RoleLinkDemo.active('button')}
<hr>
${RoleLinkDemo.main('div')}
<hr>
${RoleLinkDemo.active('div')}`;
}

import { RoleLinkDemo } from '@demos/semantics/attributes';

export function main(attrs: Record<string, string> = {}) {
  return `${RoleLinkDemo.main('button', attrs)}
<hr>
${RoleLinkDemo.active('button', attrs)}
<hr>
${RoleLinkDemo.main('div', attrs)}
<hr>
${RoleLinkDemo.active('div', attrs)}`;
}

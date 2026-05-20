import { ADemo } from '@demos/semantics/elements';

export function main(attrs: Record<string, string> = {}) {
  return `${ADemo.main(attrs)}
<hr>
${ADemo.active(attrs)}`;
}

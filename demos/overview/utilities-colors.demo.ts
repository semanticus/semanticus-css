import { renderElement } from "@scripts/utils";

import { TypographyDemo } from "@demos/composites";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<br>
<section id="typography">
  <h2>Typography</h2>

  ${TypographyDemo.overviewVariants()}
</section>
`,
  );
}

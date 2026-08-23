import { classMergeAttributes, renderElement } from "@scripts/utils";
import * as TextDemo from "@demos/semantics/text.demo";

function typographySection(cssClass: string) {
  return `<section class="${cssClass}">
  <section>
    ${TextDemo.headings("Heading")}
  </section>

  <hgroup>
    <h2>Title</h2>
    <p>Description</p>
  </hgroup>

  <p>The paragraph element is the most basic block of text content.</p>
  <p class="text-muted">Text explicitly marked as muted.</p>
  <a href="#">Regular Link</a>
</section>`;
}

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<br>
<section id="typography">
  <h2>Typography</h2>

  ${renderElement(
    "section",
    classMergeAttributes("auto-grid", attrs),
    `${typographySection("text-primary")}
${typographySection("text-secondary")}
${typographySection("text-contrast")}
${typographySection("text-success")}
${typographySection("text-info")}
${typographySection("text-warning")}
${typographySection("text-danger")}`,
  )}
</section>
`,
  );
}

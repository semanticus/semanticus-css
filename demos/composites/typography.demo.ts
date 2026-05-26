import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as TextDemo from "@demos/semantics/text.demo";

function typographySection(cssClass: string) {
  return `<section class="${cssClass}">
  <section>
    ${TextDemo.headings('Heading')}
  </section>

  <hgroup>
    <h2>HGroup</h2>
    <p>last child gets muted text</p>
  </hgroup>

  <p>The paragraph element is the most basic block of text content.</p>
  <p class="text-muted">Text explicitly marked as muted.</p>
</section>`;
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', classMergeAttributes('auto-grid', attrs), `${typographySection('text-primary')}
${typographySection('text-secondary')}
${typographySection('text-contrast')}
${typographySection('text-success')}
${typographySection('text-info')}
${typographySection('text-warning')}
${typographySection('text-danger')}`);
}

import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("details", attrs, `<summary>Accordion 1</summary>
<p>
  This content is hidden by default and revealed when you click the summary.
  Accordions are great for organizing content into collapsible sections.
</p>`);
}

export function entangledAccordions() {
  return `<details name="accordion-group">
  <summary>Accordion 1</summary>
  <p>
    This content is hidden by default and revealed when you click the summary.
    Accordions are great for organizing content into collapsible sections.
  </p>
</details>

<hr />

<details name="accordion-group" open>
  <summary>Accordion 2</summary>
  <ul>
    <li>This accordion starts in the open state.</li>
    <li>Use the <code>open</code> attribute to expand by default.</li>
    <li>Click the summary to collapse.</li>
    <li>Great for FAQ sections or settings panels.</li>
  </ul>
</details>`;
}

export function asButton(attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement("details", {}, `${renderElement("summary", { ...attrs, role: 'button' }, slot || "Button-style Accordion")}
<p>The <code>summary[role=button]</code> turns the accordion trigger into a full-width button.</p>`);
}

export function faqExample() {
  return `<h1>Frequently Asked Questions</h1>
<br>
<section>
  <details>
    <summary>How do I get started?</summary>
    <div>
      <p>Simply include the CSS file in your HTML and start using the classes.</p>
    </div>
  </details>

  <hr />

  <details>
    <summary>Can I customize the colors?</summary>
    <div>
      <p>Yes! Override the CSS variables to customize colors and more.</p>
    </div>
  </details>

  <hr />

  <details>
    <summary>Is JavaScript required?</summary>
    <div>
      <p>No! Semanticus CSS is pure CSS with zero JavaScript dependencies.</p>
    </div>
  </details>
</section>`;
}

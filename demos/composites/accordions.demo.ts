import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "details",
    attrs,
    `<summary>Accordion 1</summary>
<p>
  This content is hidden by default and revealed when you click the summary.
  Accordions are great for organizing content into collapsible sections.
</p>`,
  );
}

export function entangledAccordions() {
  return `<details name="accordion-group">
  <summary>Accordion 1</summary>
  <p>
    This content is hidden by default and revealed when you click the summary.
    Accordions are great for organizing content into collapsible sections.
  </p>
</details>

<hr class="my-1" />

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

  <hr class="my-1" />

  <details>
    <summary>Can I customize the colors?</summary>
    <div>
      <p>Yes! Override the CSS variables to customize colors and more.</p>
    </div>
  </details>

  <hr class="my-1" />

  <details>
    <summary>Is JavaScript required?</summary>
    <div>
      <p>No! Semanticus CSS is pure CSS with zero JavaScript dependencies.</p>
    </div>
  </details>
</section>`;
}

export function asButton(
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    "details",
    {},
    `${renderElement("summary", { ...attrs, role: "button" }, slot || "Button-style Accordion")}
<p>The <code>summary[role=button]</code> turns the accordion trigger into a full-width button.</p>`,
  );
}

export function asButtonIntentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return `${asButton(classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
<hr class="my-2" />
${asButton(classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
<hr class="my-2" />
${asButton(classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
<hr class="my-2" />
${asButton(classMergeAttributes(`success ${modifier}`.trim(), attrs))}
<hr class="my-2" />
${asButton(classMergeAttributes(`info ${modifier}`.trim(), attrs))}
<hr class="my-2" />
${asButton(classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
<hr class="my-2" />
${asButton(classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`;
}

export function asButtonSubtleVariants(attrs: Record<string, string> = {}) {
  return asButtonIntentVariants(attrs, "subtle");
}

export function asButtonGhostVariants(attrs: Record<string, string> = {}) {
  return asButtonIntentVariants(attrs, "ghost");
}

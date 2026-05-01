import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("article", attrs, `<p>The paragraph element is the most basic block of text content. Each paragraph gets a bottom margin via <code>--typography-spacing-vertical</code> to create vertical rhythm.</p>
  <p>A second paragraph follows, automatically spaced below the first. This spacing ensures readability without manual margin declarations.</p>
  <p>The last paragraph in a container has its margin trimmed using <code>margin-trim</code> or <code>:last-child</code> rules, avoiding extra whitespace at the bottom.</p>`);
}

import { renderElement } from "@scripts/utils";
import * as InputDemo from "@demos/semantics/elements/input.demo";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(
    "fieldset",
    { ...attrs, role: "search" },
    slot ||
      `${InputDemo.main({ type: "search", placeholder: "Search..." })}
<button type="submit">Search</button>`,
  );
}

export function withResetButton(attrs: Record<string, string> = {}) {
  return main(
    attrs,
    `${InputDemo.main({ type: "search", placeholder: "Search with reset..." })}
<input type="reset" value="Clear">
<button type="submit">Go</button>`,
  );
}

export function filterSearch(attrs: Record<string, string> = {}) {
  return main(
    attrs,
    `<select aria-label="Category">
  <option>All Categories</option>
  <option>Products</option>
  <option>Services</option>
  <option>Support</option>
</select>
${InputDemo.main({ type: "search", placeholder: "Search..." })}
<button type="submit">Go</button>`,
  );
}

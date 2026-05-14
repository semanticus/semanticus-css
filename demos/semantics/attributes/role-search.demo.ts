import { renderElement } from "@scripts/utils";

function render(tagName: string, attrs: Record<string, string>, slot: string = "") {
  return renderElement(tagName, attrs, slot);
}

export function main(tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "search" }, `<input type="search" placeholder="Search...">
<button type="submit">Search</button>`);
}

export function withResetButton(tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "search" }, `<input type="search" placeholder="Search with reset...">
<input type="reset" value="Clear">
<button type="submit">Go</button>`);
}

export function withIconButton(tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "search" }, `<input type="search" placeholder="Search products...">
<button type="submit" aria-label="Search">→</button>`);
}

export function filterSearch(tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "search" }, `<select aria-label="Category">
  <option>All Categories</option>
  <option>Products</option>
  <option>Services</option>
  <option>Support</option>
</select>
<input type="search" placeholder="Search...">
<button type="submit">Go</button>`);
}

import { FieldsetDemo } from "@demos/semantics";

export function main(attrs: Record<string, string> = {}, slot: string = '') {
  return FieldsetDemo.main({ ...attrs, role: "search" }, slot || `<input type="search" placeholder="Search...">
<button type="submit">Search</button>`);
}

export function withResetButton(attrs: Record<string, string> = {}) {
  return main(attrs, `<input type="search" placeholder="Search with reset...">
<input type="reset" value="Clear">
<button type="submit">Go</button>`);
}

export function withIconButton(attrs: Record<string, string> = {}) {
  return main(attrs, `<input type="search" placeholder="Search products...">
<button type="submit" aria-label="Search">→</button>`);
}

export function filterSearch(attrs: Record<string, string> = {}) {
  return main(attrs, `<select aria-label="Category">
  <option>All Categories</option>
  <option>Products</option>
  <option>Services</option>
  <option>Support</option>
</select>
<input type="search" placeholder="Search...">
<button type="submit">Go</button>`);
}

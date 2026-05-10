import { renderElement } from "@demos/utils";

function render(attrs: Record<string, string>, slot: string) {
  return renderElement("select", attrs, slot);
}

export function basic(attrs: Record<string, string> = {}) {
  return render({ ...attrs, name: "favorite-cuisine", "aria-label": "Select your favorite cuisine...", required: "required" }, `
  <option selected disabled value="">
    Select your favorite cuisine...
  </option>
  <option>Italian</option>
  <option>Japanese</option>
  <option>Indian</option>
  <option>Thai</option>
  <option>French</option>
</select>
`);
}

export function multipleSelect(attrs: Record<string, string> = {}) {
  return render({ ...attrs, "aria-label": "Select your favorite snacks...", multiple: "multiple", size: "6" }, `
  <option disabled>
    Select your favorite snacks...
  </option>
  <option>Cheese</option>
  <option selected>Fruits</option>
  <option selected>Nuts</option>
  <option>Chocolate</option>
  <option>Crackers</option>
</select>
`);
}

export function withOptgroup(attrs: Record<string, string> = {}) {
  return render({ ...attrs, "aria-label": "Select your country..." }, `
  <optgroup label="North America">
    <option>United States</option>
    <option>Canada</option>
  </optgroup>
  <optgroup label="Europe">
    <option>United Kingdom</option>
    <option>France</option>
  </optgroup>
</select>
`);
}

export function dropdown() {
  return `<details>
  <summary aria-haspopup="menu">Select your favorite French dessert...</summary>
  <ul role="menu">
    <li><label><input type="radio" name="french-dessert" value="Crème brûlée"/>Crème brûlée</label></li>
    <li><label><input type="radio" name="french-dessert" value="Macarons"/>Macarons</label></li>
    <li><label><input type="radio" name="french-dessert" value="Tarte tatin"/>Tarte tatin</label></li>
    <li><label><input type="radio" name="french-dessert" value="Éclair"/>Éclair</label></li>
  </ul>
</details>
`;
}

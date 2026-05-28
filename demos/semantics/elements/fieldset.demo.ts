import { renderElement } from "@scripts/utils";
import * as RoleGroupDemo from "@demos/semantics/attributes/role-group.demo";
import * as InputDemo from "@demos/semantics/elements/input.demo";
import * as DropdownDemo from "@demos/composites/dropdown.demo";
import * as SearchDemo from "@demos/composites/search.demo";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement("fieldset", attrs, slot);
}

export function formInput(attrs: Record<string, string> = {}) {
  return main(attrs, `${InputDemo.withHelperText()}`);
}

export function searchInputButton(attrs: Record<string, string> = {}) {
  return SearchDemo.main(attrs);
}

export function groupInputButton(attrs: Record<string, string> = {}) {
  return RoleGroupDemo.main(
    "fieldset",
    { ...attrs, "aria-label": "Email subscription" },
    `<input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
<input type="submit" value="Subscribe" />`,
  );
}

export function groupMultipleInputs(attrs: Record<string, string> = {}) {
  return RoleGroupDemo.main(
    "fieldset",
    attrs,
    `<input type="text" placeholder="First name">
<input type="text" placeholder="Last name">
<button>Save</button>`,
  );
}

export function groupSelectButton(attrs: Record<string, string> = {}) {
  return RoleGroupDemo.main(
    "fieldset",
    attrs,
    `<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
<button>Action</button>`,
  );
}

export function groupDropdownButton(attrs: Record<string, string> = {}) {
  return RoleGroupDemo.main(
    "fieldset",
    attrs,
    `${DropdownDemo.withCheckboxes({ class: "w-100" })}
<button>Action</button>`,
  );
}

export function loginFormExample(attrs: Record<string, string> = {}) {
  const fieldsetContent = main(
    attrs,
    `${InputDemo.withLabel()}

${InputDemo.withLabel({ type: "password", id: "password" })}`,
  );

  return renderElement(
    "form",
    {},
    `${fieldsetContent}

${InputDemo.submit({}, "Sign In")}`,
  );
}

export function disabled() {
  return main(
    { disabled: "disabled" },
    `${InputDemo.withLabel()}

${InputDemo.withLabel({ type: "password", id: "password" })}

${InputDemo.submit({}, "Sign In")}`,
  );
}

export function section() {
  return `<fieldset>
  <legend>Personal Information</legend>
  <label>
    First name
    <input name="first_name" placeholder="First name" autocomplete="given-name" />
  </label>
  <label>
    Last name
    <input name="last_name" placeholder="Last name" autocomplete="family-name" />
  </label>
  <label>
    Email
    <input type="email" name="email" placeholder="Email" autocomplete="email" />
  </label>
</fieldset>
`;
}

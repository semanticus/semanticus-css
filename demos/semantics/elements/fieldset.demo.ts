import { renderElement } from "@scripts/utils";
import * as InputDemo from "@demos/semantics/elements/input.demo";
import * as DropdownDemo from "@demos/composites/dropdown.demo";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement("fieldset", attrs, slot);
}

export function formInput(attrs: Record<string, string> = {}) {
  return main(
    attrs,
    `<label for="email">Email</label>
${InputDemo.email({ id: "email", "aria-describedby": "email-helper" })}
<small id="email-helper">
  We'll never share your email with anyone else.
</small>`,
  );
}

export function searchInputButton(attrs: Record<string, string> = {}) {
  return main(
    { ...attrs, role: "group" },
    `<input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
<input type="submit" value="Subscribe" />`,
  );
}

export function groupInputButton(attrs: Record<string, string> = {}) {
  return main(
    { ...attrs, role: "group" },
    `<input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
<input type="submit" value="Subscribe" />`,
  );
}

export function groupMultipleInputs(
  attrs: Record<string, string> = {},
) {
  return main(
    { ...attrs, role: "group" },
    `<input type="text" placeholder="First name">
<input type="text" placeholder="Last name">
<button>Save</button>`,
  );
}

export function groupSelectButton(attrs: Record<string, string> = {}) {
  return main(
    { ...attrs, role: "group" },
    `<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
<button>Action</button>`,
  );
}

export function groupDropdownButton(
  attrs: Record<string, string> = {},
) {
  return main(
    { ...attrs, role: "group" },
    `${DropdownDemo.withCheckboxes({ class: "w-100" })}
<button>Action</button>`,
  );
}

export function formExample() {
  return `<form>
  <fieldset>
    <label>
      First name
      <input name="first_name" placeholder="First name" autocomplete="given-name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="Email" autocomplete="email" />
    </label>
  </fieldset>
  <input type="submit" value="Subscribe" />
</form>
`;
}

export function disabled() {
  return `<fieldset disabled>
  <legend>Disabled fieldset</legend>
  <label>
    Username
    <input name="username" placeholder="Username" />
  </label>
  <label>
    Password
    <input type="password" name="password" placeholder="Password" />
  </label>
  <input type="submit" value="Sign in" />
</fieldset>
`;
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

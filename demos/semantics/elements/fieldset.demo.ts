import * as InputDemo from '@demos/semantics/elements/input.demo';
import * as RoleGroupDemo from '@demos/semantics/attributes/role-group.demo';

export function main() {
  return `<fieldset>
  <label>Email</label>
  ${InputDemo.email({ "aria-describedby": "email-helper" })}
  <small id="email-helper">
    We'll never share your email with anyone else.
  </small>
</fieldset>
`;
}

export function insideForm() {
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

export function withGroup() {
  return RoleGroupDemo.inputWithButton("fieldset");
}

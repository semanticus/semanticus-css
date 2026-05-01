export function basic() {
  return `<fieldset>
  <label>First name</label>
  <input placeholder="First name" autocomplete="given-name" />
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
  return `<form>
  <fieldset role="group">
    <input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>
`;
}

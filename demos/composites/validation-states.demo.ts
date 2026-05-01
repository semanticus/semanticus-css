export const ValidationStatesDemo = {
  formValidation() {
    return `<form>
  <fieldset>
    <label>
      Email address
      <input
        type="email"
        name="email"
        placeholder="user@example.com"
        aria-invalid="false"
        aria-describedby="email-helper"
        required
      />
      <small id="email-helper">We'll never share your email with anyone else.</small>
    </label>

    <label>
      Password
      <input
        type="password"
        name="password"
        aria-invalid="true"
        aria-describedby="password-helper"
        required
      />
      <small id="password-helper">Password must be at least 8 characters long.</small>
    </label>
  </fieldset>

  <input type="submit" value="Sign Up" />
</form>
`;
  },
};

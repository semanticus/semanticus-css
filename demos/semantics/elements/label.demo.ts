export function basic() {
  return `<label for="first_name">First name</label>
<input name="first_name" id="first_name" placeholder="First name" autocomplete="given-name" />`;
}

export function inputInside() {
  return `<label>
  Last name
  <input name="last_name" placeholder="Last name" autocomplete="family-name" />
</label>`;
}

export function basic() {
  return `<input type="text" name="valid" value="Valid" aria-invalid="false" />
<input type="text" name="invalid" value="Invalid" aria-invalid="true" />
`;
}

export function inputHelper() {
  return `<input type="text" name="valid" value="Valid" aria-invalid="false" aria-describedby="valid-helper" />
<small id="valid-helper">Looks good!</small>

<input type="text" name="invalid" value="Invalid" aria-invalid="true" aria-describedby="invalid-helper" />
<small id="invalid-helper">
  Please provide a valid value!
</small>
`;
}

export function checkbox() {
  return `<label>
  <input type="checkbox" name="valid" aria-invalid="false" />
  Valid
</label>

<label>
  <input type="checkbox" name="invalid" aria-invalid="true" />
  Invalid
</label>
`;
}

export function radio() {
  return `<fieldset>
  <label>
    <input type="radio" name="validation-states" aria-invalid="false" />
    Valid
  </label>

  <label>
    <input type="radio" name="validation-states" aria-invalid="true" />
    Invalid
  </label>
</fieldset>
`;
}

export function select() {
  return `<select aria-invalid="false">
  <option selected disabled value="">
    Select your favorite pizza topping...
  </option>
  <option>Pepperoni</option>
  <option>Mushrooms</option>
  <option>Onions</option>
  <option>Green Peppers</option>
  <option>Olives</option>
</select>
<small>Great choice!</small>

<select required aria-invalid="true">
  <option selected disabled value="">
    Select your favorite pizza topping...
  </option>
  <option>Pepperoni</option>
  <option>Mushrooms</option>
  <option>Onions</option>
  <option>Green Peppers</option>
  <option>Olives</option>
</select>
<small>
  Please select your favorite pizza topping!
</small>
`;
}

export function switch_() {
  return `<fieldset>
  <label>
    <input name="2fa" type="checkbox" role="switch" aria-invalid="false" />
    Enable two-factor authentication
  </label>
  <label>
    <input name="subscription" type="checkbox" role="switch" aria-invalid="true" />
    Automatic subscription renewal
  </label>
</fieldset>
`;
}

export function textarea() {
  return `<textarea name="valid" aria-invalid="false">
  Valid
</textarea>

<textarea name="invalid" aria-invalid="true">
  Invalid
</textarea>
`;
}

export function textareaHelper() {
  return `<textarea
  name="valid"
  aria-invalid="false"
  aria-describedby="valid-helper"
>
  Valid
</textarea>
<small id="valid-helper">Looks good!</small>

<textarea
  name="invalid"
  aria-invalid="true"
  aria-describedby="invalid-helper"
>
  Invalid
</textarea>
<small id="invalid-helper">
  Please provide a valid value!
</small>
`;
}

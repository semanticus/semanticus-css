export const basic = `<input type="text" name="valid" value="Valid" aria-invalid="false" />
<input type="text" name="invalid" value="Invalid" aria-invalid="true" />
`;

export const inputHelper = `<input type="text" name="valid" value="Valid" aria-invalid="false" aria-describedby="valid-helper" />
<small id="valid-helper">Looks good!</small>

<input type="text" name="invalid" value="Invalid" aria-invalid="true" aria-describedby="invalid-helper" />
<small id="invalid-helper">
  Please provide a valid value!
</small>
`;

export const checkbox = `<label>
  <input type="checkbox" name="valid" aria-invalid="false" />
  Valid
</label>

<label>
  <input type="checkbox" name="invalid" aria-invalid="true" />
  Invalid
</label>
`;

export const radio = `<fieldset>
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

export const select = `<select aria-invalid="false">
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

export const switch_ = `<fieldset>
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

export const textarea = `<textarea name="valid" aria-invalid="false">
  Valid
</textarea>

<textarea name="invalid" aria-invalid="true">
  Invalid
</textarea>
`;

export const textareaHelper = `<textarea
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

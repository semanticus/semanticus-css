import * as SelectDemo from "@demos/semantics/elements/select.demo";
import * as TextareaDemo from "@demos/semantics/elements/textarea.demo";

export function main() {
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
  return SelectDemo.validationStates();
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
  return TextareaDemo.validationStates();
}

export function textareaHelper() {
  return TextareaDemo.validationStatesWithTextHelper();
}

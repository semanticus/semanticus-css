export function basic() {
  return `<button disabled>Disabled</button>`;
}

export function input() {
  return `<input type="text" name="text" placeholder="Disabled" aria-label="Disabled input" disabled />
`;
}

export function range() {
  return `<label>
  Disabled slider
  <input type="range" disabled />
</label>
`;
}

export function select() {
  return `<select name="meal-type" aria-label="Select a meal type..." disabled>
  <option>Select a meal type...</option>
  <option>...</option>
</select>
`;
}

export function switch_() {
  return `<fieldset>
  <label>
    <input name="publish" type="checkbox" role="switch" disabled />
    Publish on my profile
  </label>
  <label>
    <input name="change-password" type="checkbox" role="switch" checked disabled />
    Change my password at next login
  </label>
</fieldset>
`;
}

export function textarea() {
  return `<textarea name="disabled" disabled>
  Disabled
</textarea>
`;
}

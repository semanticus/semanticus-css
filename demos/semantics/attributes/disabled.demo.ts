export const basic = `<button disabled>Disabled</button>`;

export const input = `<input type="text" name="text" placeholder="Disabled" aria-label="Disabled input" disabled />
`;

export const range = `<label>
  Disabled slider
  <input type="range" disabled />
</label>
`;

export const select = `<select name="meal-type" aria-label="Select a meal type..." disabled>
  <option>Select a meal type...</option>
  <option>...</option>
</select>
`;

export const switch_ = `<fieldset>
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

export const textarea = `<textarea name="disabled" disabled>
  Disabled
</textarea>
`;

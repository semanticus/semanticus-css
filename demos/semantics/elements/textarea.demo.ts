import { renderAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return `<textarea ${renderAttributes(attrs)}>${slot}</textarea>`;
}

export function withRows() {
  return `<textarea rows="3" placeholder="Three rows"></textarea>
<textarea rows="6" placeholder="Six rows"></textarea>
`;
}

export function withLabel() {
  return `<label for="message">Message</label>
${main({ id: "message", placeholder: "Enter your message" })}
`;
}

export function withHelperText() {
  return `<label for="post-message">Post</label>
${main({ id: "post-message", "aria-describedby": "post-message-helper", placeholder: "What are your thoughts?" })}
<small id="post-message-helper">Maximum 200 characters.</small>
`;
}

export function validationStates() {
  return `${main({ "aria-invalid": "false" }, "Valid text")}

${main({ "aria-invalid": "true" }, "Invalid text")}`;
}

export function validationStatesWithTextHelper() {
  return `<label for="valid-textarea">Valid Textarea</label>
${main({ id: "valid-textarea", "aria-invalid": "false", "aria-describedby": "valid-textarea-helper" }, "Valid text")}
<small id="valid-textarea-helper">Looks good!</small>

<label for="invalid-textarea">Invalid Textarea</label>
${main({ id: "invalid-textarea", "aria-invalid": "true", "aria-describedby": "invalid-textarea-helper" }, "Invalid text")}
<small id="invalid-textarea-helper">
  Please provide a valid value!
</small>
`;
}

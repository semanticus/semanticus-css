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
	return `${main({ "aria-invalid": "false", "aria-describedby": "valid-helper" }, "Valid text")}
<small id="valid-helper">Looks good!</small>

${main({ "aria-invalid": "true", "aria-describedby": "invalid-helper" }, "Invalid text")}
<small id="invalid-helper">
  Please provide a valid value!
</small>
`;
}

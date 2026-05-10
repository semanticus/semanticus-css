import * as InputDemo from '@demos/semantics/elements/input.demo';
import { renderElement } from "@demos/utils";

function render(attrs: Record<string, string>, slot: string = "") {
  return renderElement("button", attrs, slot);
}

export function basic(attrs: Record<string, string> = {}, slot: string = "Button") {
  return render({ ...attrs }, slot);
}

export function submit(attrs: Record<string, string> = {}, slot: string = "Submit") {
  return render({ ...attrs, type: "submit" }, slot);
}

export function reset(attrs: Record<string, string> = {}, slot: string = "Reset") {
  return render({ ...attrs, type: "reset" }, slot);
}

export function inputButtons() {
  return `${InputDemo.button()}
${InputDemo.submit()}`;
}

export function inputResetButton() {
  return InputDemo.reset();
}

export function loginForm() {
  return `<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">
  <label for="password">Password</label>
  <input type="password" id="password" placeholder="Password">
  ${submit({}, "Sign In")}
</form>
`;
}

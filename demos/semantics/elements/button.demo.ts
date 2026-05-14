import * as InputDemo from '@demos/semantics/elements/input.demo';
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = "Button") {
  return renderElement("button", { ...attrs }, slot);
}

export function submit(attrs: Record<string, string> = {}, slot: string = "Submit") {
  return renderElement("button", { ...attrs, type: "submit" }, slot);
}

export function reset(attrs: Record<string, string> = {}, slot: string = "Reset") {
  return renderElement("button", { ...attrs, type: "reset" }, slot);
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

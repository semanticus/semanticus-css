import * as ButtonDemo from '@demos/semantics/elements/button.demo';
import * as InputDemo from '@demos/semantics/elements/input.demo';
import * as SelectDemo from '@demos/semantics/elements/select.demo';

export function main() {
  return ButtonDemo.main({ disabled: "disabled", "aria-label": "Disabled button" });
}

export function inputButtons() {
  return `${InputDemo.button({ disabled: "disabled", "aria-label": "Disabled input button" })}
${InputDemo.submit({ disabled: "disabled", "aria-label": "Disabled input submit" })}
${InputDemo.reset({ disabled: "disabled", "aria-label": "Disabled input reset" })}`;
}

export function input() {
  return InputDemo.main({ disabled: "disabled", "aria-label": "Disabled input" });
}

export function range() {
  return InputDemo.rangeBasic({ disabled: "disabled", "aria-label": "Disabled range slider" });
}

export function select() {
  return SelectDemo.main({ disabled: "disabled", "aria-label": "Disabled select" });
}

export function checkbox() {
  return InputDemo.checkboxBasic({ disabled: "disabled", "aria-label": "Disabled checkbox" });
}

export function radio() {
  return InputDemo.radioBasic({ disabled: "disabled", "aria-label": "Disabled radio button" });
}

export function switch_() {
  return InputDemo.switchBasic({ disabled: "disabled", "aria-label": "Disabled switch" });
}

export function textarea() {
  return `<textarea name="disabled" disabled>
  Disabled
</textarea>
`;
}

import * as DialogDemo from "@demos/semantics/elements/dialog.demo";

export function basic() {
  return `<button command="show-modal" commandfor="dialog-basic" class="contrast">Launch Modal</button>

${DialogDemo.basic()}`;
}

export function withHeaderAndFooter() {
  return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Launch Modal</button>

${DialogDemo.withHeaderAndFooter()}`;
}

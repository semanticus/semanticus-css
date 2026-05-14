import * as DialogDemo from "@demos/semantics/elements/dialog.demo";

export function main() {
  return `<button command="show-modal" commandfor="dialog-basic" class="contrast">Launch Modal</button>

${DialogDemo.main()}`;
}

export function withHeaderAndFooter() {
  return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Launch Modal</button>

${DialogDemo.withHeaderAndFooter()}`;
}

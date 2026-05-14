import { renderElement } from "@scripts/utils";

function render(attrs: Record<string, string>, slot: string = "") {
  return renderElement("a", { href: "#", ...attrs }, slot);
}

export function main(attrs: Record<string, string> = {}) {
  return render({ href: "#", ...attrs }, 'Regular link');
}

export function active(attrs: Record<string, string> = {}) {
  return render({ "aria-current": "page", ...attrs }, 'Active link');
}

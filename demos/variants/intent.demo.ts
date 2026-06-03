import { renderElement } from "@scripts/utils";
import { InputDemo } from "@demos/semantics/elements";
import { RoleButtonDemo } from "@demos/semantics/attributes";
import { DropdownDemo } from "@demos/composites";

/* Overviews */

export function overviewInputButtons(attrs: Record<string, string> = {}) {
  return renderElement("section", {}, InputDemo.buttons(attrs));
}

export function overviewRoleButtonsAndDropdowns(
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    {},
    `${RoleButtonDemo.intentVariants("section", attrs)}

<hr>

${DropdownDemo.asButtonIntentVariants(attrs)}`,
  );
}

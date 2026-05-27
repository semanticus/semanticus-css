import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";
import * as RoleButtonDemo from "@demos/semantics/attributes/role-button.demo";

export function inputType(
  type: "button" | "submit" | "reset" = "button",
  attrs: Record<string, string> = {},
  value: string = "Input Button",
) {
  return renderElement(
    "input",
    classMergeAttributes("mb-0", { ...attrs, type, value }),
  );
}

export function intentVariants(attrs: Record<string, string> = {}) {
  return `${ButtonDemo.intentVariants(attrs)}

<hr>

${RoleButtonDemo.intentVariants("section", attrs)}`;
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    classMergeAttributes("auto-grid", attrs),
    `<aside>
  <ul class="ps-0">
    <li>${ButtonDemo.main()}</li>
    <li>${ButtonDemo.main({ class: "secondary" })}</li>
    <li>${ButtonDemo.main({ class: "contrast" })}</li>
    <li>${ButtonDemo.main({ class: "success" })}</li>
    <li>${ButtonDemo.main({ class: "info" })}</li>
    <li>${ButtonDemo.main({ class: "warning" })}</li>
    <li>${ButtonDemo.main({ class: "danger" })}</li>
  </ul>
</aside>`,
  );
}

export function overviewStatesAndModifiers(intent: string = "") {
  return `${ButtonDemo.overviewStatesAndModifiers(intent)}

<hr>

${RoleButtonDemo.overviewStatesAndModifiers("div", intent)}

<hr>

${inputTypeOverviewStatesAndModifiers("button", intent)}

<hr>

${inputTypeOverviewStatesAndModifiers("submit", intent)}

<hr>

${inputTypeOverviewStatesAndModifiers("reset", intent)}
`;
}

export function inputTypeOverviewStatesAndModifiers(
  type: "button" | "submit" | "reset" = "button",
  intent: string = "",
) {
  let name = "Input Type";

  if (intent.length) {
    name = `${intent[0].toUpperCase() + intent.slice(1)} ${name}`;
  }

  return renderElement(
    "div",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${inputType(type, { class: intent }, name)}
${inputType(type, { class: intent, "aria-current": "false" }, "Not Current")}
${inputType(type, { class: intent, "aria-current": "true" }, "Current")}
${inputType(type, { class: intent, disabled: "true" }, "Disabled")}

${inputType(type, classMergeAttributes("subtle", { class: intent }), `${name} Subtle`)}
${inputType(type, classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${inputType(type, classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${inputType(type, classMergeAttributes("subtle", { class: intent, disabled: "true" }), "Disabled Subtle")}

${inputType(type, classMergeAttributes("ghost", { class: intent }), `${name} Ghost`)}
${inputType(type, classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${inputType(type, classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${inputType(type, classMergeAttributes("ghost", { class: intent, disabled: "true" }), "Disabled Ghost")}
`,
  );
}

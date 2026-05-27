import {
  renderElement,
  classMergeAttributes,
  renderGrid,
} from "@scripts/utils";
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
  return `<h3>Buttons</h3>
${ButtonDemo.overviewStatesAndModifiers(intent)}

<br>
<h3>Div [role="button"]</h3>
${RoleButtonDemo.overviewStatesAndModifiers("div", intent)}

<br>
<h3>Input [type="button"]</h3>
${inputTypeOverviewStatesAndModifiers("button", intent)}

<br>
<h3>Input [type="submit"]</h3>
${inputTypeOverviewStatesAndModifiers("submit", intent)}

<br>
<h3>Input [type="reset"]</h3>
${inputTypeOverviewStatesAndModifiers("reset", intent)}
`;
}

export function inputTypeOverviewStatesAndModifiers(
  type: "button" | "submit" | "reset" = "button",
  intent: string = "",
) {
  const namePrefix = intent
    ? `${intent[0].toUpperCase() + intent.slice(1)}`
    : "";

  return `${renderGrid(
    `${inputType(type, { class: intent }, `${namePrefix} Input Type ${type}`)}
${inputType(type, { class: intent, "aria-current": "false" }, "Not Current")}
${inputType(type, { class: intent, "aria-current": "true" }, "Current")}
${inputType(type, { class: intent, disabled: "true" }, "Disabled")}`,
  )}

${renderGrid(
  `${inputType(type, classMergeAttributes("subtle", { class: intent }), `${namePrefix} Subtle Input Type ${type}`)}
${inputType(type, classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${inputType(type, classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${inputType(type, classMergeAttributes("subtle", { class: intent, disabled: "true" }), "Disabled Subtle")}`,
)}

${renderGrid(
  `${inputType(type, classMergeAttributes("ghost", { class: intent }), `${namePrefix} Ghost Input Type ${type}`)}
${inputType(type, classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${inputType(type, classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${inputType(type, classMergeAttributes("ghost", { class: intent, disabled: "true" }), "Disabled Ghost")}`,
)}
`;
}

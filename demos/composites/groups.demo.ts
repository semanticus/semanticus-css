import { FieldsetDemo, RoleGroupDemo } from "@demos/semantics";

export function all(attrs: Record<string, string> = {}, _index: number = 0) {
  return `${FieldsetDemo.searchInputButton(attrs)}
${FieldsetDemo.groupInputButton(attrs)}
${FieldsetDemo.groupSelectButton(attrs)}
${FieldsetDemo.groupDropdownButton(attrs)}
${FieldsetDemo.groupMultipleInputs(attrs)}
${RoleGroupDemo.buttonGroup("div", attrs, { ariaCurrent: true })}
${RoleGroupDemo.cardGroup("div", attrs, { ariaCurrent: true })}
`;
}

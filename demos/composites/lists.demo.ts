import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as UlDemo from "@demos/semantics/elements/ul.demo";
import * as RoleListDemo from "@demos/semantics/attributes/role-list.demo";

export function overview(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "d-flex" },
    `${UlDemo.main(attrs)}

${RoleListDemo.main("div", attrs)}`,
  );
}

export function overviewCardList(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${UlDemo.cardList(attrs)}

${RoleListDemo.cardList("div", attrs)}`,
  );
}

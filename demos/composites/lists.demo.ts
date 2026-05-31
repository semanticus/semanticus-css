import { renderElement, ListOptions } from "@scripts/utils";
import * as UlDemo from "@demos/semantics/elements/ul.demo";
import * as OlDemo from "@demos/semantics/elements/ol.demo";
import * as DlDemo from "@demos/semantics/elements/dl.demo";
import * as RoleListDemo from "@demos/semantics/attributes/role-list.demo";

export function all(
  attrs: Record<string, string> = {},
  options: ListOptions = {},
) {
  return renderElement(
    "div",
    { class: "auto-grid" },
    `<div>
  <h5>Card List</h5>
  ${RoleListDemo.cardList("div", attrs, options)}
</div>

<div>
  <h5>Unordered List</h5>
  ${UlDemo.main(attrs, options)}
</div>

<div>
  <h5>Ordered List</h5>
  ${OlDemo.main(attrs, options)}
</div>

<div>
  <h5>Description List</h5>
  ${DlDemo.main(attrs)}
</div>
`,
  );
}

export function overview(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "d-flex" },
    `${UlDemo.main(attrs, { ariaCurrent: true })}

${RoleListDemo.main("div", attrs, { ariaCurrent: true })}`,
  );
}

export function overviewCardList(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${UlDemo.cardList(attrs, { ariaCurrent: true })}

${RoleListDemo.cardList("div", attrs, { ariaCurrent: true })}`,
  );
}

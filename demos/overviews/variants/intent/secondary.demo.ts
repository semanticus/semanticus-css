import { ADemo, RoleLinkDemo } from "@demos/semantics";
import { SecondaryDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
	return `${ADemo.overview({ ...attrs, class: ["secondary", attrs.class || ""].join(" ") })}
<hr>
${RoleLinkDemo.overview({ ...attrs, class: ["secondary", attrs.class || ""].join(" ") })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
	return renderElement(
		"nav",
		{ role: "toolbar" },
		`${SecondaryDemo.button(attrs)}

${SecondaryDemo.roleButton("div", attrs)}

${SecondaryDemo.dropdown(attrs)}`,
	);
}

export function cards() {
	return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
	return SecondaryDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
	return SecondaryDemo.cardWithHeaderAndFooter("div", attrs);
}

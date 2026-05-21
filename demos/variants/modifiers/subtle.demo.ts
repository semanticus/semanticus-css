import { CardDemo } from "@demos/components";
import { RoleButtonDemo } from "@demos/semantics/attributes";
import { ButtonDemo, InputDemo } from "@demos/semantics/elements";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return `${renderElement(
		"nav",
		{ role: "toolbar" },
		`${button(attrs)}

  ${roleButton("section", attrs)}

${dropdown(attrs)}`,
	)}

<br>

${card("div", attrs)}

${cardWithHeaderAndFooter("div", attrs)}`;
}

export function button(_attrs: Record<string, string> = {}) {
	const { class: _class, ...attrs } = _attrs;

	return ButtonDemo.main({ ...attrs, class: `subtle ${_class || ""}` });
}

export function inputButtons(_attrs: Record<string, string> = {}) {
	const { class: _class, ...attrs } = _attrs;

	return InputDemo.buttons({ ...attrs, class: `subtle ${_class || ""}` });
}

export function roleButton(
	tagName: string = "div",
	_attrs: Record<string, string> = {},
) {
	const { class: _class, ...attrs } = _attrs;

	return RoleButtonDemo.main(
		tagName,
		{ ...attrs, class: `subtle ${_class || ""}` },
		`&lt;${tagName}&gt; as button`,
	);
}

export function dropdown(_attrs: Record<string, string> = {}) {
	const { class: _class, ...attrs } = _attrs;

	return RoleButtonDemo.dropdown({ ...attrs, class: `subtle ${_class || ""}` });
}

export function accordion(_attrs: Record<string, string> = {}) {
	const { class: _class, ...attrs } = _attrs;

	return RoleButtonDemo.accordion({
		...attrs,
		class: `subtle ${_class || ""}`,
	});
}

export function card(
	tagName: string = "div",
	_attrs: Record<string, string> = {},
) {
	const { class: _class, ...attrs } = _attrs;

	return CardDemo.main(tagName, { ...attrs, class: `subtle ${_class || ""}` });
}

export function cardWithHeaderAndFooter(
	tagName: string = "div",
	_attrs: Record<string, string> = {},
) {
	const { class: _class, ...attrs } = _attrs;

	return CardDemo.withHeaderAndFooter(tagName, {
		...attrs,
		class: `subtle ${_class || ""}`,
	});
}

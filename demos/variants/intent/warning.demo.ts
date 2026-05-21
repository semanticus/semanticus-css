import { CardDemo } from "@demos/components";
import { RoleButtonDemo, RoleLinkDemo } from "@demos/semantics/attributes";
import { ADemo, ButtonDemo } from "@demos/semantics/elements";

export function anchor(attrs: Record<string, string> = {}) {
	return ADemo.main({
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function roleLink(
	tagName: string = "button",
	attrs: Record<string, string> = {},
) {
	return RoleLinkDemo.main(tagName, {
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function button(attrs: Record<string, string> = {}) {
	return ButtonDemo.main({
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function roleButton(
	tagName: string = "div",
	attrs: Record<string, string> = {},
) {
	return RoleButtonDemo.main(tagName, {
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function dropdown(attrs: Record<string, string> = {}) {
	return RoleButtonDemo.dropdown({
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function accordion(attrs: Record<string, string> = {}) {
	return RoleButtonDemo.accordion({
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function card(
	tagName: string = "div",
	attrs: Record<string, string> = {},
) {
	return CardDemo.main(tagName, {
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

export function cardWithHeaderAndFooter(
	tagName: string = "div",
	attrs: Record<string, string> = {},
) {
	return CardDemo.withHeaderAndFooter(tagName, {
		...attrs,
		class: ["warning", attrs.class || ""].join(" "),
	});
}

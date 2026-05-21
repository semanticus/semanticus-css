import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return `${renderElement("label", { ...attrs, for: "first_name" }, "First name")}
${renderElement("input", { name: "first_name", id: "first_name", placeholder: "First name" }, "")}`;
}

export function inputInside(attrs: Record<string, string> = {}) {
	return renderElement(
		"label",
		{ ...attrs },
		`Last name
${renderElement("input", { name: "last_name", placeholder: "Last name" }, "")}`,
	);
}

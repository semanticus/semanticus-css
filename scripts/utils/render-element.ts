import { renderAttributes } from "./render-attributes";

function sanitizeNewLines(str: string): string {
	return `\n${str.replace(/^\n*(.*)\n*$/, "$1")}\n`;
}

function ident(str: string, spaces: number): string {
	return str.replace(/^/gm, " ".repeat(spaces));
}

export function renderElement(
	tagName: string,
	attrs: Record<string, string>,
	slot: string = "",
): string {
	const content = slot.length > 0 ? sanitizeNewLines(ident(slot, 2)) : slot;

	let renderedAttrs = renderAttributes(attrs);

	if ((renderedAttrs ?? "") !== "") renderedAttrs = ` ${renderedAttrs}`;

	if (content.length === 0) {
		return `<${tagName}${renderedAttrs} />`;
	}

	return `<${tagName}${renderedAttrs}>${content}</${tagName}>`;
}

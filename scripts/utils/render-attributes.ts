export function renderAttributes(
	attrs?: Record<string, string | undefined | null>,
): string {
	const attributes = { ...(attrs || {}) };

	if (typeof attributes.class === "string") {
		attributes.class = attributes.class.split(" ").filter(Boolean).join(" ");
	}

	const renderedAttrs = Object.entries(attributes)
		.map(([key, val]) => ((val ?? "") !== "" ? `${key}="${val}"` : undefined))
		.filter((attribute) => attribute !== undefined)
		.join(" ");

	return renderedAttrs;
}

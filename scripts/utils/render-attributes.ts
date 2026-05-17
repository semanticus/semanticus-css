export function renderAttributes(attrs: Record<string, string>): string {
  const attributes = { ...attrs || {} };

  if (attributes.class) {
    attributes.class = attributes.class.split(" ").filter(Boolean).join(" ");
  }

  let renderedAttrs = Object.entries(attributes)
    .map(([key, val]) => ((val ?? "") !== "" ? `${key}="${val}"` : undefined))
    .filter((attribute) => attribute !== undefined)
    .join(" ");

  return renderedAttrs;
}

function attrToString(key: string, value: string | undefined | null) {
  if (value === null) {
    return undefined;
  }

  if (value === undefined) {
    return key;
  }

  return (value ?? "") !== "" ? `${key}="${value}"` : undefined;
}

export function renderAttributes(
  attrs?: Record<string, string | undefined | null>,
): string {
  const attributes = { ...(attrs || {}) };

  if (typeof attributes.class === "string") {
    attributes.class = attributes.class.split(" ").filter(Boolean).join(" ");
  }

  const renderedAttrs = Object.entries(attributes)
    .map(([key, val]) => attrToString(key, val))
    .filter((attribute) => attribute !== undefined)
    .join(" ")
    .trim();

  return renderedAttrs !== "" ? ` ${renderedAttrs}` : renderedAttrs;
}

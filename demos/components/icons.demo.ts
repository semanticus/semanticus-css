import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(iconName: string, tagName: string = "span", attrs: Record<string, string> = { "aria-hidden": "true" }) {
  return renderElement(tagName, classMergeAttributes(`icon-${iconName}`, attrs), '');
}

export function overview() {
  return `<nav>
  ${main("close", "h1", {})}
  ${main("close", "p", {})}
  ${main("close", "small", {})}
  ${main("close", "button", {})}
  ${main("close", "button", { role: "link" })}
  ${main("close", "a", { href: "#" })}
</nav>

<hr>

<nav>
  <h1>${main("close", "span")} close</h1>
  <p>${main("close", "span")} close</p>
  <small>${main("close", "span")} close</small>
  <button>${main("close", "span")} close</button>
  <button role="link">${main("close", "span")} close</button>
  <a href="#">${main("close", "span")} close</a>
</nav>`;
}

export function allIcons() {
  return `<nav>
  ${main("checkbox")}
  ${main("chevron")}
  ${main("close")}
  ${main("date")}
  ${main("invalid")}
  ${main("loading")}
  ${main("minus")}
  ${main("search")}
  ${main("time")}
  ${main("valid")}
</nav>`;
}

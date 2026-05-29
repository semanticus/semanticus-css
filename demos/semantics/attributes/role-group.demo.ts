import { renderElement } from "@scripts/utils";

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(tagName, { ...attrs, role: "group" }, slot);
}

export function relatedFormControls(attrs: Record<string, string> = {}) {
  return main(
    "fieldset",
    { ...attrs, "aria-label": "Email subscription" },
    `<input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
<input type="submit" value="Subscribe" />`,
  );
}

export function relatedButtons(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return main(
    tagName,
    { ...attrs, "aria-label": "Text formatting" },
    `<button>Bold</button>
<button>Italic</button>
<button>Underline</button>`,
  );
}

export function relatedCards(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return main(
    tagName,
    { ...attrs, "aria-label": "Text formatting" },
    `<button>Bold</button>
<button>Italic</button>
<button>Underline</button>`,
  );
}

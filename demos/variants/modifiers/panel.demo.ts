import * as CardDemo from "@demos/components/card.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.main(tagName, { ...attrs, class: ['panel', attrs.class].filter(Boolean).join(" ") });
}

export function withHeader(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.withHeader(tagName, { ...attrs, class: ['panel', attrs.class].filter(Boolean).join(" ") });
}

export function withFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.withFooter(tagName, { ...attrs, class: ['panel', attrs.class].filter(Boolean).join(" ") });
}

export function withHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.withHeaderAndFooter(tagName, { ...attrs, class: ['panel', attrs.class].filter(Boolean).join(" ") });
}

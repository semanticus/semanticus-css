import * as CardPanePanelDemo from "@demos/variants/card-pane-panel.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.main("panel", tagName, attrs);
}

export function withHeader(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withHeader("panel", tagName, attrs);
}

export function withFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withFooter("panel", tagName, attrs);
}

export function withHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withHeaderAndFooter("panel", tagName, attrs);
}

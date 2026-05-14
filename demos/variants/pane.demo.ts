import * as CardPanePanelDemo from "@demos/variants/card-pane-panel.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.main("pane", tagName, attrs);
}

export function withHeader(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withHeader("pane", tagName, attrs);
}

export function withFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withFooter("pane", tagName, attrs);
}

export function withHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withHeaderAndFooter("pane", tagName, attrs);
}

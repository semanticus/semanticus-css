import * as CardPanePanelDemo from "@demos/variants/card-pane-panel.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.main("card", tagName, attrs);
}

export function withHeader(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withHeader("card", tagName, attrs);
}

export function withFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withFooter("card", tagName, attrs);
}

export function withHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardPanePanelDemo.withHeaderAndFooter("card", tagName, attrs);
}

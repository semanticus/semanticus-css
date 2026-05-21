import { PanelDemo } from "@demos/components";

export function inlineAlerts() {
  return `${PanelDemo.inlineAlert({ class: `success` }, "Your changes have been saved successfully!")}

${PanelDemo.inlineAlert({ class: `info` }, "Please be aware of the new updates.")}

${PanelDemo.inlineAlert({ class: `warning ghost` }, "Your subscription is about to expire.")}

${PanelDemo.inlineAlert({ class: `danger ghost` }, "An error occurred while processing your request. Please try again later.")}`;
}

export function floatingAlerts() {
  return `TODO`;
}

export function dialogAlerts() {
  return `TODO`;
}

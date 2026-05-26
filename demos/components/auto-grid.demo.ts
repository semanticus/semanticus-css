import { renderElement, classMergeAttributes } from "@scripts/utils";

function cell(label: string) {
  return `<div class="p-d bg-primary-subtle border border-primary text-center">${label}</div>`;
}

function cells(count: number) {
  return Array.from({ length: count }, (_, i) => cell(`Item ${i + 1}`)).join('\n  ');
}

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(tagName, classMergeAttributes('auto-grid', attrs), slot || cells(6));
}

export function largerMinColumn(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, classMergeAttributes('auto-grid', { style: '--auto-grid-min-column: 200px', ...attrs }), cells(6));
}

export function autoFill(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, classMergeAttributes('auto-grid', { style: '--auto-grid-type: auto-fill; --auto-grid-min-column: 120px', ...attrs }), cells(6));
}

export function customGap(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, classMergeAttributes('auto-grid', { style: '--auto-grid-gap: 2rem', ...attrs }), cells(6));
}

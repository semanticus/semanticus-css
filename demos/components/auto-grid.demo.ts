import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = `<button>1</button>
<button>2</button>
<button>3</button>
<button>4</button>`) {
  return renderElement(tagName, classMergeAttributes('auto-grid', attrs), slot);
}

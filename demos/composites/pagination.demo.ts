import { NavDemo } from "@demos/semantics";

export function main(attrs: Record<string, string> = {}, slot: string = '') {
  return NavDemo.main({ ...attrs, "aria-label": "Pagination", role: "group" }, slot);
}

export function buttons(attrs: Record<string, string> = {}) {
return main(attrs, `<button>Previous</button>
<button>1</button>
<button>2</button>
<button aria-current="page">3</button>
<button aria-disabled="true" tabindex="-1">Next</button>`);
}

export function links(attrs: Record<string, string> = {}) {
  return main(attrs, `<a role="button" aria-disabled="true" tabindex="-1">Previous</a>
<a href="#page-1" role="button" aria-current="page">1</a>
<a href="#page-2" role="button">2</a>
<a href="#page-3" role="button">3</a>
<a href="#page-3" role="button">Next</a>`);
}

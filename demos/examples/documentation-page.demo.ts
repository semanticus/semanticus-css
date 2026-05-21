import {
	ArticleDemo,
	AsideDemo,
	FooterDemo,
	HeaderDemo,
} from "@demos/semantics/elements";
import { renderElement } from "@scripts/utils";

export function main(
	tagName: string = "body",
	attrs: Record<string, string> = {},
) {
	return renderElement(
		tagName,
		{
			...attrs,
			class: ["vstack", ...(attrs.class ? [attrs.class] : [])].join(" "),
		},
		renderElement(
			"div",
			{ class: "flow-h container" },
			`${AsideDemo.leftSidebar({
				class: "bg-secondary-subtle d-none d-md-flex",
				popover: "auto",
				id: "left-sidebar",
			})}

${renderElement(
	"main",
	{ class: "flex-grow-1" },
	`${HeaderDemo.withSearchDropdownAndLinks({ class: "border-bottom ps-0 ps-md-d bg-body" })}

<nav class="d-flex d-xl-none border-bottom pb-d mb-d ps-0 ps-md-d">
  <button role="link" class="d-inline-block d-md-none" popovertarget="left-sidebar">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h14"/></svg>
    <small>menu</small>
  </button>
  <p></p>
  <button role="link" popovertarget="right-sidebar">
    <small>on this page</small>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16m-10 6h10M6 18h14"/></svg>
  </button>
</nav>

${renderElement(
	"div",
	{ class: "flow-h pt-d" },
	`${renderElement(
		"div",
		{ class: "flow-v mx-0 mx-md-5" },
		`${ArticleDemo.multipleParagraphs({ class: "pb-d" })}

${FooterDemo.main({ class: "border-top" })}`,
	)}

${AsideDemo.rightSidebar({
	class: "border-start d-none d-xl-flex",
	popover: "auto",
	id: "right-sidebar",
	"data-placement": "right",
})}`,
)}`,
)}`,
		),
	);
}

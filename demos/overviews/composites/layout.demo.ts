import { LayoutDemo } from "@demos/composites";
import { renderElement } from "@scripts/utils";

export function main() {
	return renderElement(
		"main",
		{ class: "container" },
		`${LayoutDemo.headerExample({ style: "min-width: 1024px;" })}

${LayoutDemo.footerExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithHeaderExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithFooterExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithHeaderPlusFooterExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithArticleExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithHeaderPlusArticleExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithArticlePlusFooterExample({ style: "min-width: 1024px;" })}

${LayoutDemo.mainWithHeaderPlusArticlePlusFooterExample({ style: "min-width: 1024px;" })}`,
	);
}

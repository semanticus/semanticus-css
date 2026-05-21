import * as ArticleDemo from "@demos/semantics/elements/article.demo";
import * as FooterDemo from "@demos/semantics/elements/footer.demo";
import * as HeaderDemo from "@demos/semantics/elements/header.demo";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return renderElement(
		"main",
		attrs,
		`<h2>Hello World</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>`,
	);
}

export function withHeader(attrs: Record<string, string> = {}) {
	const { headerClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		`${HeaderDemo.main({ class: headerClass })}
${main()}`,
	);
}

export function withFooter(attrs: Record<string, string> = {}) {
	const { footerClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		`${main()}
${FooterDemo.main({ class: footerClass })}`,
	);
}

export function withHeaderPlusFooter(attrs: Record<string, string> = {}) {
	const { headerClass, footerClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		`${HeaderDemo.main({ class: headerClass })}
${main()}
${FooterDemo.main({ class: footerClass })}`,
	);
}

export function withArticle(attrs: Record<string, string> = {}) {
	const { articleClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		ArticleDemo.main({ class: articleClass }),
	);
}

export function withHeaderPlusArticle(attrs: Record<string, string> = {}) {
	const { headerClass, articleClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		`${HeaderDemo.main({ class: headerClass })}
${ArticleDemo.main({ class: articleClass })}`,
	);
}

export function withArticlePlusFooter(attrs: Record<string, string> = {}) {
	const { articleClass, footerClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		`${ArticleDemo.main({ class: articleClass })}
${FooterDemo.main({ class: footerClass })}`,
	);
}

export function withHeaderPlusArticlePlusFooter(
	attrs: Record<string, string> = {},
) {
	const { headerClass, articleClass, footerClass, ...restArgs } = attrs;

	return renderElement(
		"main",
		restArgs,
		`${HeaderDemo.main({ class: headerClass })}
${ArticleDemo.main({ class: articleClass })}
${FooterDemo.main({ class: footerClass })}`,
	);
}

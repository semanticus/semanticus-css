import * as HgroupDemo from "@demos/semantics/elements/hgroup.demo";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return renderElement(
		"article",
		attrs,
		`<h2>Hello World</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>`,
	);
}

export function hgroup(attrs: Record<string, string> = {}) {
	return renderElement("article", attrs, HgroupDemo.main());
}

export function multipleParagraphs(attrs: Record<string, string> = {}) {
	return renderElement(
		"article",
		attrs,
		`<h2>Hello World</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>
  <p>Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet.</p>`,
	);
}

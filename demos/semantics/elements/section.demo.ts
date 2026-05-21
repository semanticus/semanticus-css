import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return `${renderElement(
		"section",
		attrs,
		`<hgroup>
  <h2>Introduction</h2>
  <p>Sections group thematically related content. Each section gets a bottom margin via <code>--spacing-vertical</code>.</p>
</hgroup>`,
	)}

${renderElement(
	"section",
	{},
	`<hgroup>
  <h2>Features</h2>
  <p>Use multiple sections to structure long-form content like articles, landing pages, or documentation.</p>
</hgroup>`,
)}`;
}

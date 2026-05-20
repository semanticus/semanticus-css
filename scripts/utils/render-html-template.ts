import { cdnBaseUrl } from "./cdn-base-url";
import { renderElement } from "./render-element";

export function renderHtmlTemplate(
  slot: string,
  options: {
    stylePaths?: string[],
    local?: boolean,
    theme?: string
  } = {}
): string {
  const stylePaths = options.stylePaths ?? ['/dist/semanticus.css'];
  const local = options.local ?? false;
  const theme = options.theme ?? undefined;

  let scripts = "";

  stylePaths.forEach((path) => {
    scripts += `<link rel="stylesheet" href="${local ? path : cdnBaseUrl(path)}">`;
  });

  return `<!DOCTYPE html>
<html lang="en" data-theme="${theme || ''}">
${renderElement("head", {}, `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light dark">
${scripts}`)}

${slot}
</html>`;
}

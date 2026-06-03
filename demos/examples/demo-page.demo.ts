import fs from "node:fs";
import path from "node:path";

export function main(
  _tagName: string = "body",
  _attrs: Record<string, string> = {},
) {
  const filePath = path.resolve("./docs/public/examples/demo-page.html");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return fileContent;
}

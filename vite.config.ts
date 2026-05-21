import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

function loadTsconfigAliases() {
	const tsconfigPath = new URL("./tsconfig.json", import.meta.url);
	let raw = fs.readFileSync(tsconfigPath, "utf8");
	// tolerate trailing commas so JSON.parse won't fail
	raw = raw.replace(/,\s*(?=[}\]])/g, "");
	const cfg = JSON.parse(raw);
	const paths = cfg?.compilerOptions?.paths || {};

	return Object.entries(paths).map(([key, values]) => {
		const find = key.replace(/\/\*$/, "");
		const replacement = resolve(process.cwd(), values[0].replace(/\/\*$/, ""));
		return { find, replacement };
	});
}

export default defineConfig({
	resolve: {
		alias: loadTsconfigAliases(),
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			drafts: {
				customMedia: true,
			},
		},
	},
});

#!/usr/bin/env node

/**
 * Build script for Semanticus CSS size variants
 * Minifies and copies size variable files to dist/
 *
 * size files are pure size variable overrides.
 * Users should load a base version first, then the size:
 *
 *   <link rel="stylesheet" href="semanticus-semantics.css">
 *   <link rel="stylesheet" href="semanticus.size.pico.css">
 */

import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { variations } from "./utils";

const sizes = variations.sizes
	.map((p) => p.name)
	.filter((n) => n !== "default");
const srcDir = path.join(__dirname, "..", "src", "sizes");
const distDir = path.join(__dirname, "..", "dist");

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

console.log("Building Semanticus CSS sizes (bundled with LightningCSS)...\n");

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".css"));
if (files.length === 0) {
	console.log("No size files found in", srcDir);
	process.exit(0);
}

let successCount = 0;

for (const size of sizes) {
	const srcFile = path.join(srcDir, `${size}.css`);
	const distFile = path.join(distDir, `semanticus.size.${size}.css`);

	// Use npx to run the locally installed lightningcss CLI with bundling enabled
	const args = [
		"lightningcss",
		"--bundle",
		"--minify",
		"--browserslist",
		srcFile,
		"-o",
		distFile,
		"--custom-media",
	];

	const res = spawnSync("npx", args, { encoding: "utf8" });

	if (res.error || res.status !== 0) {
		console.error(`  ✗ Failed to build size ${size}:`);
		if (res.stdout) console.error(res.stdout);
		if (res.stderr) console.error(res.stderr);
		process.exit(1);
	}

	console.log(`  ✓ ${distFile}`);
	successCount++;
}

console.log(`\n✓ ${successCount} size variants built successfully!`);

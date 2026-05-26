#!/usr/bin/env tsx

import * as fs from "fs";
import * as path from "path";

const repoRoot = path.join(__dirname, "..");

// ─── Load size comparison data ────────────────────────────────────────────────

const dataPath = path.join(repoRoot, "docs", "comparison-table.json");
if (!fs.existsSync(dataPath)) {
  console.error("docs/comparison-table.json not found.");
  console.error("Run npm run docs:generate-comparison-table first.");
  process.exit(1);
}

interface BundleResult {
  label: string;
  gzipKB: string;
}

interface ComparisonTable {
  entries: Record<string, BundleResult>;
}

const { entries }: ComparisonTable = JSON.parse(
  fs.readFileSync(dataPath, "utf8"),
);

// ─── 1. Single "~NN KB gzipped" claim in docs/index.md and AGENTS.md ─────────

const fullBundleKB = entries.semanticusFullBundle?.gzipKB;
if (!fullBundleKB) {
  console.error(
    '"Semanticus (full bundle)" entry missing from comparison-table.json.',
  );
  process.exit(1);
}

const singleClaimPattern = /~\d+\s*KB gzipped/g;
const singleClaimReplacement = `~${Math.round(parseFloat(fullBundleKB))} KB gzipped`;
const singleClaimFiles = [
  path.join(repoRoot, "docs", "index.md"),
  path.join(repoRoot, "AGENTS.md"),
];

console.log(`Full bundle: ${singleClaimReplacement} (${fullBundleKB} KB)`);

for (const filePath of singleClaimFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  const matches = content.match(singleClaimPattern) ?? [];

  if (matches.length !== 1) {
    console.error(
      `Expected exactly one size claim in ${path.relative(repoRoot, filePath)}, found ${matches.length}.`,
    );
    process.exit(1);
  }

  const updated = content.replace(singleClaimPattern, singleClaimReplacement);
  if (updated !== content) {
    fs.writeFileSync(filePath, updated);
    console.log(`  updated  ${path.relative(repoRoot, filePath)}`);
  } else {
    console.log(`  no change ${path.relative(repoRoot, filePath)}`);
  }
}

// ─── 2. Size comparison table rows in README.md ───────────────────────────────

const readmePath = path.join(repoRoot, "README.md");
let readme = fs.readFileSync(readmePath, "utf8");
let readmeChanged = false;

console.log("\nUpdating README.md size table...");
for (const [, { label, gzipKB }] of Object.entries(entries)) {
  const rowPattern = new RegExp(
    `(\\|\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\|\\s*)([\\d.]+ KB)(\\s*\\|)`,
    "g",
  );
  const original = readme;
  readme = readme.replace(rowPattern, (match, prefix, oldValue, suffix) => {
    if (oldValue !== `${gzipKB} KB`) {
      const oldKB = parseFloat(oldValue);
      const newKB = parseFloat(gzipKB);
      const diff = newKB - oldKB;
      const sign = diff > 0 ? "+" : "";
      const color = diff < 0 ? "\x1b[32m" : diff > 0 ? "\x1b[31m" : "";
      const reset = color ? "\x1b[0m" : "";
      console.log(
        `  updated  "${label}" → ${gzipKB} KB (was ${oldValue}, ${color}${sign}${diff.toFixed(1)} KB${reset})`,
      );
    }
    return `${prefix}${gzipKB} KB${suffix}`;
  });
  if (readme !== original) {
    readmeChanged = true;
  } else {
    console.log(`  no change "${label}" (${gzipKB} KB)`);
  }
}

if (readmeChanged) {
  fs.writeFileSync(readmePath, readme);
}

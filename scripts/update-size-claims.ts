#!/usr/bin/env tsx

import * as fs from 'fs';
import * as path from 'path';

const repoRoot = path.join(__dirname, '..');

// ─── Load size comparison data ────────────────────────────────────────────────

const dataPath = path.join(repoRoot, 'docs', 'comparison-table.json');
if (!fs.existsSync(dataPath)) {
  console.error('docs/comparison-table.json not found.');
  console.error('Run npm run docs:generate-comparison-table first.');
  process.exit(1);
}

interface BundleResult {
  label: string;
  gzipKB: string;
}

interface ComparisonTable {
  entries: Record<string, BundleResult>;
}

const { entries }: ComparisonTable = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// ─── 1. Single "~NN KB gzipped" claim in docs/index.md and AGENTS.md ─────────

const fullBundleKB = entries.semanticusFullBundle?.gzipKB;
if (!fullBundleKB) {
  console.error('"Semanticus (full bundle)" entry missing from comparison-table.json.');
  process.exit(1);
}

const singleClaimPattern = /~\d+\s*KB gzipped/g;
const singleClaimReplacement = `~${Math.round(parseFloat(fullBundleKB))} KB gzipped`;
const singleClaimFiles = [
  path.join(repoRoot, 'docs', 'index.md'),
  path.join(repoRoot, 'AGENTS.md'),
];

console.log(`Full bundle: ${singleClaimReplacement} (${fullBundleKB} KB)`);

for (const filePath of singleClaimFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(singleClaimPattern) ?? [];

  if (matches.length !== 1) {
    console.error(`Expected exactly one size claim in ${path.relative(repoRoot, filePath)}, found ${matches.length}.`);
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

const readmePath = path.join(repoRoot, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');
let readmeChanged = false;

console.log('\nUpdating README.md size table...');
for (const [, { label, gzipKB }] of Object.entries(entries)) {
  const rowPattern = new RegExp(
    `(\\|\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\|\\s*)[\\d.]+ KB(\\s*\\|)`,
    'g'
  );
  const updated = readme.replace(rowPattern, `$1${gzipKB} KB$2`);
  if (updated !== readme) {
    readme = updated;
    readmeChanged = true;
    console.log(`  updated  "${label}" → ${gzipKB} KB`);
  } else {
    console.log(`  no change "${label}" (${gzipKB} KB)`);
  }
}

if (readmeChanged) {
  fs.writeFileSync(readmePath, readme);
}

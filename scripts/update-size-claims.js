#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const repoRoot = path.join(__dirname, '..');

function gzipKB(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Built bundle not found: ${filePath}`);
    console.error('Run npm run build first.');
    process.exit(1);
  }
  const bytes = zlib.gzipSync(fs.readFileSync(filePath)).length;
  return (bytes / 1024).toFixed(1);
}

// ─── 1. Single "~NN KB gzipped" claim in docs/index.md and AGENTS.md ──────────

const fullBundleKB = gzipKB(path.join(repoRoot, 'dist', 'semanticus.css'));
const singleClaimFiles = [
  path.join(repoRoot, 'docs', 'index.md'),
  path.join(repoRoot, 'AGENTS.md'),
];
const singleClaimPattern = /~\d+\s*KB gzipped/g;
const singleClaimReplacement = `~${Math.round(fullBundleKB)} KB gzipped`;

console.log(`Full bundle size: ${singleClaimReplacement} (${fullBundleKB} KB)`);

for (const filePath of singleClaimFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(singleClaimPattern) || [];

  if (matches.length !== 1) {
    console.error(`Expected exactly one size claim in ${path.relative(repoRoot, filePath)}, found ${matches.length}.`);
    process.exit(1);
  }

  const updated = content.replace(singleClaimPattern, singleClaimReplacement);
  if (updated !== content) {
    fs.writeFileSync(filePath, updated);
    console.log(`Updated ${path.relative(repoRoot, filePath)}`);
  } else {
    console.log(`No change needed in ${path.relative(repoRoot, filePath)}`);
  }
}

// ─── 2. Size comparison table rows in README.md ────────────────────────────────

const tableEntries = [
  { label: 'Semanticus (semantics only)',    dist: 'semanticus-semantics.css' },
  { label: 'Semanticus (no utilities)',      dist: 'semanticus-no-utilities.css' },
  { label: 'Semanticus (utilities only)',    dist: 'semanticus-utilities.css' },
  { label: 'Semanticus (full)',              dist: 'semanticus.css' },
];

const readmePath = path.join(repoRoot, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');
let readmeChanged = false;

for (const { label, dist } of tableEntries) {
  const kb = gzipKB(path.join(repoRoot, 'dist', dist));
  // Matches a table row like: | Semanticus (full) | 23.6 KB |
  const rowPattern = new RegExp(
    `(\\|\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\|\\s*)[\\d.]+ KB(\\s*\\|)`,
    'g'
  );
  const updated = readme.replace(rowPattern, `$1${kb} KB$2`);
  if (updated !== readme) {
    readme = updated;
    readmeChanged = true;
    console.log(`README.md: updated "${label}" → ${kb} KB`);
  }
}

if (readmeChanged) {
  fs.writeFileSync(readmePath, readme);
} else {
  console.log('No change needed in README.md');
}

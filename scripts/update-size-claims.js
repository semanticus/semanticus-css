#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const repoRoot = path.join(__dirname, '..');
const bundlePath = path.join(repoRoot, 'dist', 'semanticus.css');

// Only update docs and agent guidance files — README should not be required to contain the size claim.
const targetFiles = [
  path.join(repoRoot, 'docs', 'index.md'),
  path.join(repoRoot, 'AGENTS.md')
];

const sizeClaimPattern = /~\d+\s*KB gzipped/g;

function formatClaim(bytes) {
  return `~${Math.round(bytes / 1024)} KB gzipped`;
}

if (!fs.existsSync(bundlePath)) {
  console.error(`Built bundle not found: ${bundlePath}`);
  console.error('Run npm run build first.');
  process.exit(1);
}

const bundle = fs.readFileSync(bundlePath);
const gzippedBytes = zlib.gzipSync(bundle).length;
const sizeClaim = formatClaim(gzippedBytes);

console.log(`Using size claim: ${sizeClaim} (${gzippedBytes} bytes)`);

for (const filePath of targetFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(sizeClaimPattern) || [];

  if (matches.length !== 1) {
    console.error(`Expected exactly one size claim in ${filePath}, found ${matches.length}.`);
    process.exit(1);
  }

  const updatedContent = content.replace(sizeClaimPattern, sizeClaim);

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated ${path.relative(repoRoot, filePath)}`);
    continue;
  }

  console.log(`No change needed in ${path.relative(repoRoot, filePath)}`);
}

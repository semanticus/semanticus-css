#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { execSync } = require('child_process');

const repoRoot = path.join(__dirname, '..');
const tmpDir   = path.join(repoRoot, 'tmp');

// ─── External dependency versions ─────────────────────────────────────────────

const PICO_VERSION      = '2.1.1';
const BOOTSTRAP_VERSION = '5.3.8';

// ─── Files to download from CDN ───────────────────────────────────────────────

const picoDir = path.join(tmpDir, `pico@${PICO_VERSION}`);
const bsDir   = path.join(tmpDir, `bootstrap@${BOOTSTRAP_VERSION}`);

const CDN = 'https://cdn.jsdelivr.net/npm';
const downloads = [
  { url: `${CDN}/@picocss/pico@${PICO_VERSION}/css/pico.classless.min.css`,           dest: path.join(picoDir, 'pico.classless.min.css') },
  { url: `${CDN}/@picocss/pico@${PICO_VERSION}/css/pico.min.css`,                     dest: path.join(picoDir, 'pico.min.css') },
  { url: `${CDN}/bootstrap@${BOOTSTRAP_VERSION}/dist/css/bootstrap.min.css`,          dest: path.join(bsDir, 'css', 'bootstrap.min.css') },
  { url: `${CDN}/bootstrap@${BOOTSTRAP_VERSION}/dist/css/bootstrap-utilities.min.css`,dest: path.join(bsDir, 'css', 'bootstrap-utilities.min.css') },
  { url: `${CDN}/bootstrap@${BOOTSTRAP_VERSION}/dist/css/bootstrap-grid.min.css`,     dest: path.join(bsDir, 'css', 'bootstrap-grid.min.css') },
  { url: `${CDN}/bootstrap@${BOOTSTRAP_VERSION}/dist/js/bootstrap.bundle.min.js`,     dest: path.join(bsDir, 'js', 'bootstrap.bundle.min.js') },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ensureFile(url, dest) {
  if (fs.existsSync(dest)) {
    console.log(`  cached   ${path.relative(repoRoot, dest)}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  console.log(`  fetching ${path.relative(repoRoot, dest)}`);
  execSync(`curl -sL -o "${dest}" "${url}"`);
}

/** Accepts one or more file paths; concatenates their contents then gzips. */
function gzipKB(...filePaths) {
  const chunks = filePaths.map(p => {
    if (!fs.existsSync(p)) {
      console.error(`File not found: ${p}`);
      process.exit(1);
    }
    return fs.readFileSync(p);
  });
  const bytes = zlib.gzipSync(Buffer.concat(chunks)).length;
  return (bytes / 1024).toFixed(1);
}

function dist(name) { return path.join(repoRoot, 'dist', name); }

// ─── 1. Download external reference files ────────────────────────────────────

console.log('\nEnsuring external reference files...');
for (const { url, dest } of downloads) {
  ensureFile(url, dest);
}

// ─── 2. Measure all bundles ───────────────────────────────────────────────────

console.log('\nMeasuring bundle sizes...');

const entries = {
  picoSemantics: { label: 'Pico (semantics only)', files: [path.join(picoDir, 'pico.classless.min.css')] },
  semanticusSemantics: { label: 'Semanticus (semantics only)', files: [dist('semanticus-semantics.css')] },
  picoFullBundle: { label: 'Pico (semantics + classes)', files: [path.join(picoDir, 'pico.min.css')] },
  semanticusNoUtilities: { label: 'Semanticus (semantics + components + variants)', files: [dist('semanticus-no-utilities.css')] },
  bootstrapUtilities: { label: 'Bootstrap (utilities only)', files: [path.join(bsDir, 'css', 'bootstrap-utilities.min.css')] },
  bootstrapUtilitiesAndGrid: { label: 'Bootstrap (utilities + grid)', files: [path.join(bsDir, 'css', 'bootstrap-utilities.min.css'), path.join(bsDir, 'css', 'bootstrap-grid.min.css')] },
  semanticusUtilitiesAndGrid: { label: 'Semanticus (utilities + grid)', files: [dist('semanticus-utilities.css')] },
  bootstrapCssBundle: { label: 'Bootstrap (CSS bundle only)', files: [path.join(bsDir, 'css', 'bootstrap.min.css')] },
  bootstrapFullBundle: { label: 'Bootstrap (full bundle)', files: [path.join(bsDir, 'css', 'bootstrap.min.css'), path.join(bsDir, 'js', 'bootstrap.bundle.min.js')] },
  semanticusFullBundle: { label: 'Semanticus (full bundle)', files: [dist('semanticus.css')] },
};

const results = {};

Object.entries(entries).forEach(([key, { label, files }]) => {
  const gzipKBValue = gzipKB(...files);
  console.log(`  ${gzipKBValue.padStart(5)} KB  ${label}`);
  results[key] = { label, gzipKB: gzipKBValue };
});

// ─── 3. Write docs/comparison-table.json ──────────────────────────────────────

const output = {
  generatedAt: new Date().toISOString(),
  pico: { version: PICO_VERSION },
  bootstrap: { version: BOOTSTRAP_VERSION },
  entries: results,
};

const outPath = path.join(repoRoot, 'docs', 'comparison-table.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');
console.log(`\nWrote ${path.relative(repoRoot, outPath)}`);

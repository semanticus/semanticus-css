#!/usr/bin/env node
/**
 * Build script for Semanticus CSS color variants
 * Minifies and copies palette variable files to dist/
 *
 * Palette files are pure color variable overrides.
 * Users should load a base version first, then the palette:
 *
 *   <link rel="stylesheet" href="semanticus-semantics.css">
 *   <link rel="stylesheet" href="semanticus.palette.blue.css">
 */

const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const palettes = [
  'amber',
  'blue',
  'cyan',
  'fuchsia',
  'green',
  'grey',
  'indigo',
  'jade',
  'lime',
  'orange',
  'pink',
  'pumpkin',
  'purple',
  'red',
  'sand',
  'slate',
  'violet',
  'yellow',
  'zinc'
];

const srcDir = path.join(__dirname, '..', 'src', 'palettes');
const distDir = path.join(__dirname, '..', 'dist');

// Ensure dist/palettes directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

console.log('Building Semanticus CSS palettes...\n');

let successCount = 0;

for (const palette of palettes) {
  const srcFile = path.join(srcDir, `${palette}.css`);
  const distFile = path.join(distDir, `semanticus.palette.${palette}.css`);

  try {
    // Read source file
    let content = fs.readFileSync(srcFile, 'utf8');

    // Remove the base variables import since palettes are now overlays
    // The @import '../_base.css'; line should be removed
    content = content.replace(/\/\* Import base variables \*\/\s*@import '\.\.\/_(base|semantics|index)\.css';\s*/g, '');

    // Minify with LightningCSS
    const result = transform({
      filename: `${palette}.css`,
      code: Buffer.from(content),
      minify: true,
    });

    // Write minified content to dist
    fs.writeFileSync(distFile, result.code.toString());

    console.log(`  ✓ ${distFile}`);
    successCount++;
  } catch (error) {
    console.error(`  ✗ Failed to build palette ${palette}:`, error.message);
    process.exit(1);
  }
}

console.log(`\n✓ ${successCount} color variants built successfully!`);

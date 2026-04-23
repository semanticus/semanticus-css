#!/usr/bin/env node
/**
 * Build script for Semanticus CSS size variants
 * Minifies and copies size variable files to dist/
 *
 * size files are pure size variable overrides.
 * Users should load a base version first, then the size:
 *
 *   <link rel="stylesheet" href="semanticus-semantics.css">
 *   <link rel="stylesheet" href="semanticus.size.slim.css">
 */

const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const sizes = [
  'slim'
];

const srcDir = path.join(__dirname, '..', 'src', 'sizes');
const distDir = path.join(__dirname, '..', 'dist');

// Ensure dist/sizes directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

console.log('Building Semanticus CSS sizes...\n');

let successCount = 0;

for (const size of sizes) {
  const srcFile = path.join(srcDir, `${size}.css`);
  const distFile = path.join(distDir, `semanticus.size.${size}.css`);

  try {
    // Read source file
    let content = fs.readFileSync(srcFile, 'utf8');

    // Remove the base variables import since sizes are now overlays
    // The @import '../_base.css'; line should be removed
    content = content.replace(/\/\* Import base variables \*\/\s*@import '\.\.\/_(base|semantics|index)\.css';\s*/g, '');

    // Minify with LightningCSS
    const result = transform({
      filename: `${size}.css`,
      code: Buffer.from(content),
      minify: true,
    });

    // Write minified content to dist
    fs.writeFileSync(distFile, result.code.toString());

    console.log(`  ✓ ${distFile}`);
    successCount++;
  } catch (error) {
    console.error(`  ✗ Failed to build size ${size}:`, error.message);
    process.exit(1);
  }
}

console.log(`\n✓ ${successCount} size variants built successfully!`);

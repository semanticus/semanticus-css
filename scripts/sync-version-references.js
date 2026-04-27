#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const packageJsonPath = path.join(repoRoot, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const packageName = packageJson.name;
const packageVersion = process.env.SEMANTICUS_CDN_VERSION || packageJson.version;
const packageSlug = packageName.split('/').pop();
const encodedPackageName = packageName.replace('/', '%2F');

// Target paths to scan - ONLY docs and markdown files, never source CSS
const targetPaths = [
  path.join(repoRoot, 'README.md'),
  path.join(repoRoot, 'docs')
];

// File extensions to process - EXCLUDES .css to prevent modifying source files
const allowedExtensions = new Set(['.md', '.vue']);
const ignoredDirectories = new Set(['.git', '.vitepress/cache', '.vitepress/dist', 'node_modules']);

// Version patterns
const versionPattern = '(?<version>\\d+\\.\\d+\\.\\d+(?:-[0-9A-Za-z.-]+)?(?:\\+[0-9A-Za-z.-]+)?)';
const packageReferencePattern = new RegExp(`${escapeRegex(packageName)}@${versionPattern}`, 'g');
const tarballPattern = new RegExp(
  `https://registry\\.npmjs\\.org/${escapeRegex(encodedPackageName)}/-/${escapeRegex(packageSlug)}-${versionPattern}\\.tgz`,
  'g'
);

// Generic version patterns for CDN URLs in markdown
const cdnUrlPattern = new RegExp(
  `https://cdn\\.jsdelivr\\.net/npm/${escapeRegex(packageName)}@${versionPattern}`,
  'g'
);

let updatedFiles = 0;

for (const targetPath of targetPaths) {
  visitPath(targetPath);
}

console.log(`Version sync complete. Updated ${updatedFiles} file(s) to v${packageVersion}.`);

function visitPath(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  const stats = fs.statSync(targetPath);

  if (stats.isDirectory()) {
    for (const entry of fs.readdirSync(targetPath, { withFileTypes: true })) {
      const entryPath = path.join(targetPath, entry.name);
      const relativePath = path.relative(repoRoot, entryPath).split(path.sep).join('/');

      if (entry.isDirectory() && shouldIgnoreDirectory(relativePath)) {
        continue;
      }

      visitPath(entryPath);
    }

    return;
  }

  if (!allowedExtensions.has(path.extname(targetPath))) {
    return;
  }

  updateFile(targetPath);
}

function shouldIgnoreDirectory(relativePath) {
  return ignoredDirectories.has(relativePath);
}

function updateFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let updated = original;

  // Update npm package CDN URLs: @semanticus/semanticus-css@0.7.0
  updated = updated.replace(packageReferencePattern, `${packageName}@${packageVersion}`);

  // Update tarball URLs
  updated = updated.replace(
    tarballPattern,
    `https://registry.npmjs.org/${encodedPackageName}/-/${packageSlug}-${packageVersion}.tgz`
  );

  // Update jsdelivr CDN URLs
  updated = updated.replace(
    cdnUrlPattern,
    `https://cdn.jsdelivr.net/npm/${packageName}@${packageVersion}`
  );

  if (updated === original) {
    return;
  }

  fs.writeFileSync(filePath, updated);
  updatedFiles += 1;
  console.log(`Updated ${path.relative(repoRoot, filePath)}`);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

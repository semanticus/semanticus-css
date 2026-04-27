#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const packageJsonPath = path.join(repoRoot, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const packageName = packageJson.name;
const packageVersion = process.env.SEMANTICUS_CDN_VERSION || packageJson.version;
const packageAuthor = packageJson.author || 'Joao Goncalves';
const packageSlug = packageName.split('/').pop();
const encodedPackageName = packageName.replace('/', '%2F');

// Specific files to update (entry points with version headers)
const specificFiles = [
  path.join(repoRoot, 'src', 'index.css'),
  path.join(repoRoot, 'src', 'semantics', 'index.css'),
  path.join(repoRoot, 'LICENSE'),
  path.join(repoRoot, 'NOTICE'),
];

// Target paths to scan (directories)
const targetPaths = [
  path.join(repoRoot, 'README.md'),
  path.join(repoRoot, 'docs')
];

// File extensions to process in directory scans
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

// Header version pattern: "Semanticus CSS v0.8.0"
const headerVersionPattern = /(Semanticus CSS v)\d+\.\d+\.\d+/g;

// Copyright pattern - only updates copyright lines matching the package author
// Matches: "Copyright (c) YYYY" followed by the author name from package.json
const currentYear = new Date().getFullYear();
const copyrightPattern = new RegExp(
  `Copyright \\(c\\) (\\d{4})(?:(-)(\\d{4}))? ${escapeRegex(packageAuthor)}`,
  'g'
);
const updateCopyright = (match, startYear, dash, existingEndYear) => {
  if (currentYear > parseInt(startYear)) {
    return `Copyright (c) ${startYear}-${currentYear} ${packageAuthor}`;
  }
  return `Copyright (c) ${startYear} ${packageAuthor}`;
};

let updatedFiles = 0;

// Process specific files first
for (const filePath of specificFiles) {
  if (fs.existsSync(filePath)) {
    updateFile(filePath, true);
  }
}

// Then scan target directories
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

  updateFile(targetPath, false);
}

function shouldIgnoreDirectory(relativePath) {
  return ignoredDirectories.has(relativePath);
}

function updateFile(filePath, isSpecificFile) {
  const original = fs.readFileSync(filePath, 'utf8');
  let updated = original;

  if (isSpecificFile) {
    // For CSS entry points, only update the header version comment
    updated = updated.replace(headerVersionPattern, `$1${packageVersion}`);
    // Also update copyright year in CSS files
    updated = updated.replace(copyrightPattern, updateCopyright);
  } else {
    // For docs/markdown files, update CDN URLs and tarball links
    updated = updated.replace(packageReferencePattern, `${packageName}@${packageVersion}`);
    updated = updated.replace(
      tarballPattern,
      `https://registry.npmjs.org/${encodedPackageName}/-/${packageSlug}-${packageVersion}.tgz`
    );
    updated = updated.replace(
      cdnUrlPattern,
      `https://cdn.jsdelivr.net/npm/${packageName}@${packageVersion}`
    );
    // Also update copyright year in docs
    updated = updated.replace(copyrightPattern, updateCopyright);
  }

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

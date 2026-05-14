/**
 * Simple HTTP server for serving the demo pages
 * Uses only Node.js built-in modules (no extra dependencies)
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import * as Demos from '@demos/index';
import { renderHtmlTemplate } from '@scripts/utils';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

function pascalCase(str: string): string {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function findDemoExample(demoModule: object, parts: string[]): any {
  if (parts.length < 1) return null;

  const moduleName = pascalCase(parts[0]);
  const module = demoModule[moduleName];

  if (!module) return null;

  if (parts.length === 1) {
    return module;
  } else {
    return findDemoExample(module, parts.slice(1));
  }
}

const server = http.createServer((req, res) => {
  const filePath = req.url || '';
  const filePathParts = filePath.split('/');
  filePathParts.shift(); // Remove leading empty part from split

  if (filePathParts[0] === 'dist') {
    const filePathResolved = path.join(__dirname, '..', filePath);

    const extname = String(path.extname(filePathResolved)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePathResolved, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
          res.writeHead(500);
          res.end('Server Error: ' + err.code);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  } else if (filePathParts.length === 0 || filePathParts[0] === '') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Demo Server</h1>', 'utf-8');
  } else {
    const demoExample = findDemoExample(Demos, filePathParts);

    if (demoExample && demoExample.main) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(renderHtmlTemplate(demoExample.main(), { local: true }), 'utf-8');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>', 'utf-8');
    }
  }
});

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}/`);
});

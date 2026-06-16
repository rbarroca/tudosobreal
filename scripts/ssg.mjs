#!/usr/bin/env node
/**
 * SSG Build Script
 * Generates static HTML for each route using Vite SSR.
 */

import { build } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const routes = [
  '/',
  '/guias',
  '/blog',
  '/politica-de-privacidade',
  '/registar-alojamento-local',
  '/fiscalidade-alojamento-local',
  '/legislacao-al',
  '/gerir-alojamento-local',
  '/como-abrir-alojamento-local',
  '/registar-alojamento-local/documentos-necessarios',
  '/fiscalidade-alojamento-local/impostos-al-2026',
  '/legislacao-al/nova-lei-al-2024',
  '/registar-alojamento-local/registo-rnal',
  '/gerir-alojamento-local/plataformas-airbnb-booking',
  '/fiscalidade-alojamento-local/taxas-municipais-al',
  '/legislacao-al/condominio-alojamento-local',
  '/fiscalidade-alojamento-local/irs-alojamento-local',
  '/quanto-custa-abrir-alojamento-local',
];

async function buildClient() {
  console.log('[SSG] Building client bundle...');
  await build({
    root,
    logLevel: 'warn',
    build: {
      outDir: 'dist',
      ssrManifest: true,
    },
  });
  console.log('[SSG] Client bundle done.');
}

async function buildServer() {
  console.log('[SSG] Building server bundle...');
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist/server',
      rollupOptions: {
        output: {
          format: 'esm',
        },
      },
    },
  });
  console.log('[SSG] Server bundle done.');
}

async function renderRoutes() {
  const templatePath = path.join(root, 'dist', 'index.html');
  const serverEntryPath = path.join(root, 'dist', 'server', 'entry-server.js');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server entry not found: ${serverEntryPath}`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Dynamic import of the server bundle
  const serverEntry = await import(serverEntryPath);
  const { render } = serverEntry;

  console.log(`[SSG] Rendering ${routes.length} routes...`);

  for (const route of routes) {
    try {
      const { html: appHtml, helmetContext } = render(route);
      const { helmet } = helmetContext;

      // Build head tags from helmet
      let headTags = '';
      if (helmet) {
        headTags = [
          helmet.title?.toString() || '',
          helmet.meta?.toString() || '',
          helmet.link?.toString() || '',
          helmet.script?.toString() || '',
        ].filter(Boolean).join('\n    ');
      }

      // Inject rendered content into template
      let finalHtml = template
        .replace('<!--app-head-->', headTags)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Determine output path
      let outPath;
      if (route === '/') {
        outPath = path.join(root, 'dist', 'index.html');
      } else {
        // /guias -> dist/guias/index.html
        // /registar-alojamento-local/documentos-necessarios -> dist/registar-alojamento-local/documentos-necessarios/index.html
        const cleanRoute = route.replace(/^\//, '');
        const outDir = path.join(root, 'dist', cleanRoute);
        fs.mkdirSync(outDir, { recursive: true });
        outPath = path.join(outDir, 'index.html');
      }

      fs.writeFileSync(outPath, finalHtml, 'utf-8');
      console.log(`[SSG]   ✓ ${route}`);
    } catch (err) {
      console.error(`[SSG]   ✗ ${route}`, err.message);
      // Don't abort — continue with other routes
    }
  }

  // Clean up server bundle (optional, keeps dist clean)
  // fs.rmSync(path.join(root, 'dist', 'server'), { recursive: true });
}

async function main() {
  console.log('[SSG] Starting static site generation...\n');

  await buildClient();
  await buildServer();
  await renderRoutes();

  console.log('\n[SSG] Build complete!');
  console.log('[SSG] Output: dist/');
}

main().catch((err) => {
  console.error('[SSG] Build failed:', err);
  process.exit(1);
});

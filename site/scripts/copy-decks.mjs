#!/usr/bin/env node
// Mirror ../content/decks/* into public/decks/* so Astro serves them as static assets.
// Source of truth stays in content/; public/decks/ is disposable and gitignored.

import { cp, rm, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, '../../content/decks');
const dest = resolve(here, '../public/decks');

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function main() {
  if (!(await exists(src))) {
    console.warn(`[copy-decks] source not found: ${src} — skipping`);
    return;
  }

  await rm(dest, { recursive: true, force: true });
  await cp(src, dest, { recursive: true });

  const entries = (await readdir(dest, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
  console.log(`[copy-decks] synced ${entries.length} deck(s): ${entries.join(', ')}`);
}

main().catch((err) => {
  console.error('[copy-decks] failed:', err);
  process.exit(1);
});

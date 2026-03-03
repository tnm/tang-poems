#!/usr/bin/env node

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const poemsPath = path.join(__dirname, '..', 'src', 'data', 'poems.ts');

function loadPoems() {
  const source = fs.readFileSync(poemsPath, 'utf8');
  const executable = source
    .replace(/^import\s+type\s+\{[^}]+\}\s+from\s+['"][^'"]+['"];\n?/m, '')
    .replace(/^import\s+\{[^}]+\}\s+from\s+['"][^'"]+['"];\n?/m, '')
    .replace(/const basePoems:\s*Poem\[\]\s*=/, 'const basePoems =')
    .replace(/export const poems:\s*Poem\[\]\s*=\s*basePoems;?/, 'return basePoems;');

  const getPoems = new Function(executable);
  const poems = getPoems();
  assert.ok(Array.isArray(poems), 'Poem data should evaluate to an array');
  return poems;
}

function run() {
  const poems = loadPoems();
  assert.ok(poems.length >= 40, `Expected at least 40 poems, got ${poems.length}`);

  const ids = poems.map(poem => poem.id);
  assert.equal(new Set(ids).size, ids.length, 'Poem ids must be unique');

  for (const poem of poems) {
    assert.equal(typeof poem.id, 'string', 'Poem id must be a string');
    assert.ok(poem.id.length > 0, 'Poem id must be non-empty');

    assert.equal(typeof poem.title?.english, 'string', `Poem ${poem.id} missing English title`);
    assert.equal(
      typeof poem.title?.chinese?.traditional,
      'string',
      `Poem ${poem.id} missing traditional title`
    );
    assert.equal(
      typeof poem.title?.chinese?.simplified,
      'string',
      `Poem ${poem.id} missing simplified title`
    );

    assert.equal(typeof poem.author?.english, 'string', `Poem ${poem.id} missing English author`);
    assert.ok(Array.isArray(poem.verses), `Poem ${poem.id} verses should be an array`);
    assert.ok(poem.verses.length > 0, `Poem ${poem.id} must include at least one verse`);

    for (const verse of poem.verses) {
      assert.equal(typeof verse.english, 'string', `Poem ${poem.id} has verse missing English text`);
      assert.equal(
        typeof verse.chinese?.traditional,
        'string',
        `Poem ${poem.id} has verse missing traditional text`
      );
      assert.equal(
        typeof verse.chinese?.simplified,
        'string',
        `Poem ${poem.id} has verse missing simplified text`
      );
    }
  }

  console.log(`Smoke test passed: validated ${poems.length} poems with unique ids and required fields.`);
}

run();

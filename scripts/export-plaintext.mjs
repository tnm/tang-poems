#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse the poems.ts file
const poemsFilePath = path.join(__dirname, '..', 'src', 'data', 'poems.ts');
const poemsContent = fs.readFileSync(poemsFilePath, 'utf8');

// Extract the poems data with a simple parser
// This is a simplified extraction - in production you'd use a proper TypeScript parser
const poemsMatch = poemsContent.match(/const basePoems.*?=\s*\[([\s\S]*?)\];/);
if (!poemsMatch) {
  console.error('Could not find poems data in file');
  process.exit(1);
}

// Parse the poems array
const poemsArrayStr = '[' + poemsMatch[1] + ']';

// Function to extract poem data
function extractPoems(content) {
  const poems = [];
  const poemRegex = /id:\s*['"]([^'"]+)['"]/g;
  const matches = content.matchAll(poemRegex);
  
  // Split content by poem boundaries
  const poemBlocks = content.split(/(?=\s*{\s*id:)/);
  
  for (const block of poemBlocks) {
    if (!block.trim() || !block.includes('id:')) continue;
    
    // Extract fields with regex
    const id = block.match(/id:\s*['"]([^'"]+)['"]/)?.[1];
    const titleTraditional = block.match(/title:[\s\S]*?traditional:\s*['"]([^'"]+)['"]/)?.[1];
    const titleEnglish = block.match(/english:\s*['"]([^'"]+)['"]/)?.[1];
    const authorTraditional = block.match(/author:[\s\S]*?traditional:\s*['"]([^'"]+)['"]/)?.[1];
    const authorEnglish = block.match(/author:[\s\S]*?english:\s*['"]([^'"]+)['"]/)?.[1];
    
    // Extract verses
    const verses = [];
    const verseMatches = block.matchAll(/traditional:\s*['"]([^'"]+)['"][\s\S]*?english:\s*['"]([^'"]+)['"]/g);
    
    for (const match of verseMatches) {
      if (match[1] && match[2] && 
          !match[1].includes(titleTraditional) && 
          !match[1].includes(authorTraditional) &&
          match[1].length < 50) { // Filter out non-verse matches
        verses.push({
          chinese: match[1],
          english: match[2]
        });
      }
    }
    
    if (id && titleTraditional && verses.length > 0) {
      poems.push({
        id,
        titleChinese: titleTraditional,
        titleEnglish: titleEnglish || 'Unknown',
        authorChinese: authorTraditional || '佚名',
        authorEnglish: authorEnglish || 'Anonymous',
        verses
      });
    }
  }
  
  return poems;
}

const poems = extractPoems(poemsArrayStr);

// Create plaintext export
let content = 'TANG POETRY COLLECTION\n';
content += '======================\n\n';

poems.forEach((poem, index) => {
  // Title and author
  content += `${index + 1}. ${poem.titleChinese} / ${poem.titleEnglish}\n`;
  content += `   ${poem.authorChinese} / ${poem.authorEnglish}\n\n`;
  
  // Chinese verses
  poem.verses.forEach(verse => {
    content += verse.chinese + '\n';
  });
  
  content += '\n';
  
  // English verses
  poem.verses.forEach(verse => {
    content += verse.english + '\n';
  });
  
  content += '\n---\n\n';
});

content += '======================\n';
content += 'END OF COLLECTION';

// Write to file
const outputPath = path.join(process.cwd(), 'poems-plaintext.txt');
fs.writeFileSync(outputPath, content, 'utf8');

console.log(`✅ Exported ${poems.length} poems to poems-plaintext.txt`);
console.log(`📄 File location: ${outputPath}`);
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const dataJsPath = path.join(ROOT, 'js', 'data.js');
const artigosMdPath = path.join(ROOT, 'artigos.md');
const palavrasMdPath = path.join(ROOT, 'palavras.md');

// 1. Ler todos os artigos presentes no catálogo js/data.js
const dataContent = fs.readFileSync(dataJsPath, 'utf8');
const articleIds = [];
const matches = dataContent.matchAll(/id:\s*"([^"]+)"/g);
for (const m of matches) {
  articleIds.push(m[1]);
}

// 2. Varrer todos os links [[id]] dentro de todos os arquivos de content/
const contentDir = path.join(ROOT, 'content');
const foundLinks = new Set();

function scanLinks(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanLinks(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      const text = fs.readFileSync(fullPath, 'utf8');
      const linkMatches = text.matchAll(/\[\[([a-zA-Z0-9-]+)\]\]/g);
      for (const lm of linkMatches) {
        foundLinks.add(lm[1]);
      }
    }
  }
}

scanLinks(contentDir);

const consolidatedSet = new Set(articleIds);
const pendingLinks = new Set();

foundLinks.forEach(linkId => {
  if (!consolidatedSet.has(linkId)) {
    pendingLinks.add(linkId);
  }
});

// 3. Atualizar artigos.md
let artigosMdContent = `# Artigos Consolidados (μ.pedia)\n\nTotal de artigos consolidados: **${articleIds.length}**\n\n`;
articleIds.sort().forEach(id => {
  artigosMdContent += `- \`[[${id}]]\`\n`;
});
fs.writeFileSync(artigosMdPath, artigosMdContent, 'utf8');
console.log(`Updated artigos.md com ${articleIds.length} artigos consolidados.`);

// 4. Atualizar palavras.md (backlog de links pendentes)
let palavrasMdContent = `# Backlog de Palavras-Chave (Pendentes)\n\nTotal de termos pendentes a criar: **${pendingLinks.size}**\n\n`;
Array.from(pendingLinks).sort().forEach(id => {
  palavrasMdContent += `- \`[[${id}]]\`\n`;
});
fs.writeFileSync(palavrasMdPath, palavrasMdContent, 'utf8');
console.log(`Updated palavras.md com ${pendingLinks.size} palavras-chave pendentes.`);

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');

const LATEX_COMMANDS = [
  'frac', 'cdot', 'times', 'div', 'sqrt', 'pm', 'ge', 'le', 'neq', 'approx',
  'infty', 'implies', 'to', 'in', 'notin', 'subset', 'cap', 'cup',
  'alpha', 'beta', 'theta', 'pi', 'delta', 'Delta', 'sigma', 'Sigma',
  'text', 'mathbf', 'mathit', 'left', 'right', 'underbrace', 'overbrace',
  'dots', 'quad', 'qquad', 'equiv', 'mod'
];

// Regex para encontrar comandos latex com apenas uma contra-barra solta (não escapada duplamente)
function fixKatexInFile(filePath) {
  let text = fs.readFileSync(filePath, 'utf8');
  let original = text;

  // Substituir contra-barras simples antes de comandos KaTeX comuns por dupla contra-barra
  LATEX_COMMANDS.forEach(cmd => {
    // Regex que busca barra simples antes de cmd (usando lookbehind negativo para não substituir \\cmd)
    // Em JS regex, (?<!\\)\\(cmd)
    const regex = new RegExp(`(?<!\\\\)\\\\(${cmd})\\b`, 'g');
    text = text.replace(regex, '\\\\$1');
  });

  if (text !== original) {
    fs.writeFileSync(filePath, text, 'utf8');
    return true;
  }
  return false;
}

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let fixedCount = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      fixedCount += scanDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      if (fixKatexInFile(fullPath)) {
        console.log(`[KaTeX FIX] Escapes corrigidos em: ${path.relative(ROOT, fullPath)}`);
        fixedCount++;
      }
    }
  }
  return fixedCount;
}

console.log('Iniciando verificação de escapes KaTeX em todos os artigos de content/...');
const totalFixed = scanDir(CONTENT_DIR);
console.log(`Verificação concluída. ${totalFixed} arquivos ajustados com sucesso.`);

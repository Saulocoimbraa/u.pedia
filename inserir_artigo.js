/**
 * inserir_artigo.js — Automação de artigos para o μ.pedia
 *
 * USO:
 *   node inserir_artigo.js <caminho-do-artigo.md>
 *
 * FUNCIONAMENTO:
 *   1. Lê o arquivo .md e extrai o Frontmatter (entre os delimitadores ---)
 *   2. Cria/atualiza o arquivo de conteúdo: content/<axis>/<id>.js
 *   3. Atualiza o catálogo de metadados: js/data.js
 *
 * EIXOS DISPONÍVEIS (campo `axis` no Frontmatter):
 *   geometria | algebra | numeros-e-operacoes | estatistica | grandezas-e-medidas
 *
 * EXEMPLO DE FRONTMATTER:
 *   ---
 *   id: meu-artigo
 *   title: Meu Artigo
 *   axis: algebra
 *   level: Ensino Médio
 *   category: Álgebra
 *   icon: book-open
 *   summary: Um resumo de uma linha.
 *   infobox:
 *     Fórmula: $a^2 = b^2 + c^2$
 *     Conexão: [[outro-artigo]]
 *   widget: null
 *   ---
 */

const fs   = require('fs');
const path = require('path');

const DATA_PATH    = path.join(__dirname, 'js', 'data.js');
const CONTENT_DIR  = path.join(__dirname, 'content');

const VALID_AXES = [
  'geometria',
  'algebra',
  'numeros-e-operacoes',
  'estatistica',
  'grandezas-e-medidas',
  'historia'
];

// ─── Argumentos ─────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Uso: node inserir_artigo.js <caminho-do-artigo.md>');
  process.exit(1);
}

const mdPath = path.resolve(args[0]);
if (!fs.existsSync(mdPath)) {
  console.error(`Erro: Arquivo não encontrado em "${mdPath}"`);
  process.exit(1);
}

const mdContent = fs.readFileSync(mdPath, 'utf8');

// ─── Parser de Frontmatter ───────────────────────────────────────────────────
const fmMatch = mdContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
if (!fmMatch) {
  console.error('Erro: Arquivo Markdown não possui Frontmatter delimitado por "---"');
  process.exit(1);
}

const yamlText   = fmMatch[1];
const bodyContent = fmMatch[2];
const metadata   = parseFrontmatter(yamlText);

if (!metadata.id)    { console.error('Erro: Campo "id" é obrigatório no Frontmatter.');    process.exit(1); }
if (!metadata.title) { console.error('Erro: Campo "title" é obrigatório no Frontmatter.'); process.exit(1); }
if (!metadata.axis)  { console.error('Erro: Campo "axis" é obrigatório no Frontmatter. Valores válidos: ' + VALID_AXES.join(', ')); process.exit(1); }

if (!VALID_AXES.includes(metadata.axis)) {
  console.error(`Erro: Eixo "${metadata.axis}" inválido. Valores aceitos: ${VALID_AXES.join(', ')}`);
  process.exit(1);
}

// ─── Execução ────────────────────────────────────────────────────────────────
console.log(`\nProcessando artigo: "${metadata.title}" (ID: ${metadata.id})`);
console.log(`Eixo: ${metadata.axis}\n`);

writeContentFile(metadata.id, metadata.axis, bodyContent);
updateDataFile(metadata);

console.log('\n✓ Artigo inserido/atualizado com sucesso no μ.pedia.');

// ─── Funções ─────────────────────────────────────────────────────────────────

function parseFrontmatter(yamlText) {
  const lines = yamlText.split(/\r?\n/);
  const meta  = {};
  let currentKey = null;

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const indent = line.search(/\S/);
    if (indent > 0 && currentKey) {
      // Linha indentada → sub-chave (ex: campos do infobox)
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex !== -1) {
        const subKey = trimmed.substring(0, colonIndex).trim();
        let   subVal = trimmed.substring(colonIndex + 1).trim();
        subVal = stripQuotes(subVal);
        if (typeof meta[currentKey] !== 'object' || meta[currentKey] === null) {
          meta[currentKey] = {};
        }
        meta[currentKey][subKey] = subVal;
      }
    } else {
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex !== -1) {
        const key = trimmed.substring(0, colonIndex).trim();
        let   val = trimmed.substring(colonIndex + 1).trim();
        val = stripQuotes(val);

        if      (val === 'null')  meta[key] = null;
        else if (val === 'true')  meta[key] = true;
        else if (val === 'false') meta[key] = false;
        else                      meta[key] = val;

        currentKey = key;
      }
    }
  }
  return meta;
}

function stripQuotes(val) {
  if ((val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))) {
    return val.slice(1, -1);
  }
  return val;
}

/**
 * Cria ou sobrescreve content/<axis>/<id>.js com o conteúdo do artigo.
 * Não toca em nenhum outro arquivo — isolamento total.
 */
function writeContentFile(id, axis, bodyText) {
  const axisDir  = path.join(CONTENT_DIR, axis);
  const filePath = path.join(axisDir, id + '.js');

  // Garantir que a pasta do eixo existe
  if (!fs.existsSync(axisDir)) {
    fs.mkdirSync(axisDir, { recursive: true });
    console.log(`- Pasta criada: content/${axis}/`);
  }

  // Escapar crases e interpolações ${} para que fiquem literais dentro da template string
  function escapeForTemplateLiteral(str) {
    return str
      .replace(/\\/g, '\\\\')   // \ → \\
      .replace(/`/g,  '\\`')    // ` → \`
      .replace(/\${/g, '\\${'); // ${ → \${
  }

  const escaped = escapeForTemplateLiteral(bodyText.trim());

  const fileContent =
    `(function () {\n` +
    `  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};\n` +
    `  window.UPEDIA_CONTENT["${id}"] = \`${escaped}\n\`;\n` +
    `})();\n`;

  const isUpdate = fs.existsSync(filePath);
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`- Conteúdo ${isUpdate ? 'atualizado' : 'criado'}: content/${axis}/${id}.js`);
}

/**
 * Atualiza js/data.js adicionando ou substituindo a entrada de metadados.
 * Usa eval() apenas para ler o catálogo existente (só metadados, sem risco de backslash).
 * A serialização usa JSON.stringify para máxima fidelidade.
 */
function updateDataFile(meta) {
  global.window = {};
  if (fs.existsSync(DATA_PATH)) {
    try {
      eval(fs.readFileSync(DATA_PATH, 'utf8'));
    } catch (e) {
      console.error('Erro ao ler js/data.js:', e.message);
      process.exit(1);
    }
  }

  let articles = global.window.UPEDIA_ARTICLES || [];

  const newItem = {
    id:       meta.id,
    title:    meta.title,
    level:    meta.level    || 'Ensino Médio',
    category: meta.category || meta.axis,
    axis:     meta.axis,
    icon:     meta.icon     || 'book-open',
    summary:  meta.summary  || '',
    infobox:  (typeof meta.infobox === 'object' && meta.infobox) ? meta.infobox : {},
    widget:   meta.widget   || null
  };

  const idx = articles.findIndex(a => a.id === meta.id);
  if (idx !== -1) {
    articles[idx] = newItem;
    console.log(`- Metadados atualizados em js/data.js`);
  } else {
    articles.push(newItem);
    console.log(`- Novo registro inserido em js/data.js`);
  }

  // Serializar preservando legibilidade
  const entries = articles.map(art => {
    const infoboxLines = [];
    if (art.infobox && typeof art.infobox === 'object') {
      for (const [k, v] of Object.entries(art.infobox)) {
        infoboxLines.push(`      ${JSON.stringify(k)}: ${JSON.stringify(v)}`);
      }
    }
    const infoboxStr = infoboxLines.length
      ? `{\n${infoboxLines.join(',\n')}\n    }`
      : 'null';

    return (
      `  {\n` +
      `    id:       ${JSON.stringify(art.id)},\n` +
      `    title:    ${JSON.stringify(art.title)},\n` +
      `    level:    ${JSON.stringify(art.level)},\n` +
      `    category: ${JSON.stringify(art.category)},\n` +
      `    axis:     ${JSON.stringify(art.axis)},\n` +
      `    icon:     ${JSON.stringify(art.icon)},\n` +
      `    summary:  ${JSON.stringify(art.summary)},\n` +
      `    infobox:  ${infoboxStr},\n` +
      `    widget:   ${art.widget ? JSON.stringify(art.widget) : 'null'}\n` +
      `  }`
    );
  }).join(',\n\n');

  const output =
    `/**\n` +
    ` * js/data.js — Catálogo de artigos do μ.pedia\n` +
    ` * Gerado automaticamente por inserir_artigo.js — edite com cuidado.\n` +
    ` */\n` +
    `window.UPEDIA_ARTICLES = [\n` +
    entries +
    `\n];\n`;

  fs.writeFileSync(DATA_PATH, output, 'utf8');
}

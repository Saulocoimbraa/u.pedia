const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const dataJsPath = path.join(ROOT, 'js', 'data.js');

const dataContent = fs.readFileSync(dataJsPath, 'utf8');

// Extrair array UPEDIA_ARTICLES de data.js usando regex ou VM
const widgetMatches = dataContent.matchAll(/id:\s*"([^"]+)"[\s\S]*?widget:\s*"([^"]+)"/g);

let totalWidgets = 0;
let errors = 0;

for (const match of widgetMatches) {
  const articleId = match[1];
  const widgetNameRaw = match[2];
  totalWidgets++;

  const widgetName = widgetNameRaw.charAt(0).toUpperCase() + widgetNameRaw.slice(1);
  const widgetFilePath = path.join(ROOT, 'js', 'widgets', `widget${widgetName}.js`);

  if (!fs.existsSync(widgetFilePath)) {
    console.error(`❌ [ERRO] Artigo "${articleId}" aponta para widget "${widgetNameRaw}", mas o arquivo ${widgetFilePath} NÃO existe!`);
    errors++;
  } else {
    const widgetCode = fs.readFileSync(widgetFilePath, 'utf8');
    const fnName = `initWidget${widgetName}`;
    if (!widgetCode.includes(fnName)) {
      console.error(`⚠️ [AVISO] Arquivo ${widgetFilePath} existe, mas não contem "window.${fnName}"!`);
      errors++;
    } else {
      console.log(`✅ [OK] Artigo "${articleId}" -> widget "${widgetNameRaw}" (File: widget${widgetName}.js, Fn: ${fnName})`);
    }
  }
}

console.log(`\nVerificação de widgets concluída: ${totalWidgets} artigos com widgets verificados. Erros: ${errors}.`);

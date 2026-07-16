/**
 * js/parser.js — Converte Markdown simples → HTML
 * Expõe window.parseContent(rawText) → htmlString
 *
 * Suporta: ## h2, ### h3, #### h4, **bold**, *italic*, _italic_,
 *          $math$, $$math$$, [[links]], listas -, *, 1.
 */
window.parseContent = function (rawContent) {
  var articles = window.UPEDIA_ARTICLES || [];
  var placeholders = [];
  var text = rawContent;

  // 1. Isolar blocos de math display: $$ ... $$
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, function (match) {
    var key = "MATHDISPLAYPLACEHOLDER" + placeholders.length;
    placeholders.push({ key: key, content: match });
    return key;
  });

  // 2. Isolar math inline: $ ... $
  text = text.replace(/\$([^$\n]+?)\$/g, function (match) {
    var key = "MATHINLINEPLACEHOLDER" + placeholders.length;
    placeholders.push({ key: key, content: match });
    return key;
  });

  // 3. Isolar blocos HTML completos (<svg>, <div>)
  text = text.replace(/<(svg|div)[\s\S]*?>[\s\S]*?<\/\1>/g, function (match) {
    var key = "HTMLBLOCKPLACEHOLDER" + placeholders.length;
    placeholders.push({ key: key, content: match });
    return key;
  });

  // 4. Substituir [[article-id]] por links internos
  //    Suporte a plurais/flexões: se o ID exato não existir, tenta remover
  //    sufixos comuns do português (-s, -es, -ns, -ões→-ao) até achar um artigo.
  text = text.replace(/\[\[([a-zA-Z0-9-]+)\]\]/g, function (match, targetId) {
    // Busca exata primeiro
    var target = articles.find(function (a) { return a.id === targetId; });
    if (target) {
      return '<a href="#/artigo/' + targetId + '" class="mupedia-link">' + target.title + '</a>';
    }

    // Fallback: tenta raízes por remoção progressiva de sufixos
    var candidates = [
      targetId.replace(/-oes$/, '-ao'),   // -ões → -ão  (ex: operacoes → operacao)
      targetId.replace(/-ns$/, '-m'),      // -ns  → -m   (ex: origems → origem)
      targetId.replace(/-es$/, ''),        // -es  → raiz (ex: flores → flor)
      targetId.replace(/-s$/, ''),         // -s   → raiz (ex: catetos → cateto)
    ];

    for (var c = 0; c < candidates.length; c++) {
      if (candidates[c] === targetId) continue; // evitar loop se nenhum sufixo foi removido
      target = articles.find(function (a) { return a.id === candidates[c]; });
      if (target) {
        return '<a href="#/artigo/' + target.id + '" class="mupedia-link">' + target.title + '</a>';
      }
    }

    return '<span class="broken-link">' + targetId + '</span>';
  });

  // 5. Bold e Itálico
  text = text
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+?)\*/g, "<em>$1</em>")
    .replace(/_([^_\n]+)_/g, "<em>$1</em>");

  // 6. Processar linha por linha
  var lines = text.split("\n");
  var html = "";
  var inUL = false;
  var inOL = false;
  var buffer = [];

  function flushBuffer() {
    if (buffer.length > 0) {
      var content = buffer.join(" ").trim();
      if (content) {
        if (/^(HTMLBLOCKPLACEHOLDER|MATHDISPLAYPLACEHOLDER)\d+$/.test(content)) {
          html += content + "\n";
        } else {
          html += "<p>" + content + "</p>\n";
        }
      }
      buffer = [];
    }
  }

  function closeUL() { if (inUL) { html += "</ul>\n"; inUL = false; } }
  function closeOL() { if (inOL) { html += "</ol>\n"; inOL = false; } }

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var trimmed = line.trim();

    if (!trimmed) { flushBuffer(); closeUL(); closeOL(); continue; }

    if (/^(HTMLBLOCKPLACEHOLDER|MATHDISPLAYPLACEHOLDER)\d+$/.test(trimmed)) {
      flushBuffer(); closeUL(); closeOL();
      html += trimmed + "\n";
      continue;
    }
    if (trimmed.startsWith("#### ")) {
      flushBuffer(); closeUL(); closeOL();
      html += "<h4>" + trimmed.slice(5) + "</h4>\n";
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushBuffer(); closeUL(); closeOL();
      html += "<h3>" + trimmed.slice(4) + "</h3>\n";
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushBuffer(); closeUL(); closeOL();
      html += "<h2>" + trimmed.slice(3) + "</h2>\n";
      continue;
    }
    if (/^[*-]\s+/.test(trimmed)) {
      flushBuffer(); closeOL();
      if (!inUL) { html += "<ul>\n"; inUL = true; }
      html += "<li>" + trimmed.replace(/^[*-]\s+/, "") + "</li>\n";
      continue;
    }
    if (/^\d+\.\s+/.test(trimmed)) {
      flushBuffer(); closeUL();
      if (!inOL) { html += "<ol>\n"; inOL = true; }
      html += "<li>" + trimmed.replace(/^\d+\.\s+/, "") + "</li>\n";
      continue;
    }
    closeUL(); closeOL();
    buffer.push(trimmed);
  }

  flushBuffer(); closeUL(); closeOL();

  // 7. Restaurar placeholders
  for (var j = placeholders.length - 1; j >= 0; j--) {
    var item = placeholders[j];
    html = html.split(item.key).join(item.content);
  }

  return html;
};

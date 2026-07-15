import { articles } from "../data/database.js";
import { initWidgetPitagoras } from "../widgets/widgetPitagoras.js";
import { initWidgetImpares } from "../widgets/widgetImpares.js";

/**
 * Applies inline formatting to a text string.
 * Processes: **bold**, *italic*, _italic_
 * Called AFTER internal links have been replaced, so it won't interfere with HTML.
 * Uses a global replace with careful ordering to avoid conflicts.
 */
function inlineFormat(text) {
  // Bold first (double asterisk), then italic (single asterisk)
  // Uses a lookahead to avoid matching already-processed HTML tags
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*(?!\*)([^*]+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/_([^_]+)_/g, "<em>$1</em>");
}

/**
 * Parses the article content (markdown-like format) into HTML.
 * Flow: [[links]] → inline HTML → block-level parsing
 */
function parseContent(rawContent) {
  const placeholders = [];
  let text = rawContent;

  // 1. Isolate multi-line and single-line display math blocks: $$ ... $$
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (match) => {
    const key = `MATHDISPLAYPLACEHOLDER${placeholders.length}`;
    placeholders.push({ key, content: match });
    return key;
  });

  // 2. Isolate inline math blocks: $ ... $
  text = text.replace(/\$([^$\n]+?)\$/g, (match) => {
    const key = `MATHINLINEPLACEHOLDER${placeholders.length}`;
    placeholders.push({ key, content: match });
    return key;
  });

  // 3. Isolate complete HTML block tags (like <svg ...>...</svg> or <div ...>...</div>)
  text = text.replace(/<(svg|div)[\s\S]*?>[\s\S]*?<\/\1>/g, (match) => {
    const key = `HTMLBLOCKPLACEHOLDER${placeholders.length}`;
    placeholders.push({ key, content: match });
    return key;
  });

  // 4. Replace wiki links: [[article-id]]
  text = text.replace(/\[\[([a-zA-Z0-9-]+)\]\]/g, (match, targetId) => {
    const target = articles.find(a => a.id === targetId);
    if (target) {
      return `<a href="#/artigo/${targetId}" class="mupedia-link">${target.title}</a>`;
    }
    return `<span class="broken-link">${targetId}</span>`;
  });

  // 5. Apply markdown bold and italics (safely, since math/HTML is isolated)
  text = text
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*(?!\*)([^*\n]+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/_([^_\n]+)_/g, "<em>$1</em>");

  // 6. Split into lines and parse block levels
  const lines = text.split("\n");
  let html = "";
  let inUL = false;
  let inOL = false;
  let buffer = [];

  const flushBuffer = () => {
    if (buffer.length > 0) {
      const content = buffer.join(" ").trim();
      if (content) {
        if (content.startsWith("HTMLBLOCKPLACEHOLDER") || content.startsWith("MATHDISPLAYPLACEHOLDER")) {
          html += `${content}\n`;
        } else {
          html += `<p>${content}</p>\n`;
        }
      }
      buffer = [];
    }
  };

  const closeUL = () => { if (inUL) { html += `</ul>\n`; inUL = false; } };
  const closeOL = () => { if (inOL) { html += `</ol>\n`; inOL = false; } };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushBuffer();
      closeUL();
      closeOL();
      continue;
    }

    // If the line consists strictly of a block placeholder, don't wrap in <p>
    if (/^(HTMLBLOCKPLACEHOLDER|MATHDISPLAYPLACEHOLDER)\d+$/.test(trimmed)) {
      flushBuffer(); closeUL(); closeOL();
      html += trimmed + "\n";
      continue;
    }

    // H4
    if (trimmed.startsWith("#### ")) {
      flushBuffer(); closeUL(); closeOL();
      html += `<h4>${trimmed.slice(5)}</h4>\n`;
      continue;
    }
    // H3
    if (trimmed.startsWith("### ")) {
      flushBuffer(); closeUL(); closeOL();
      html += `<h3>${trimmed.slice(4)}</h3>\n`;
      continue;
    }
    // H2
    if (trimmed.startsWith("## ")) {
      flushBuffer(); closeUL(); closeOL();
      html += `<h2>${trimmed.slice(3)}</h2>\n`;
      continue;
    }

    // Unordered list
    if (/^[*-]\s+/.test(trimmed)) {
      flushBuffer(); closeOL();
      if (!inUL) { html += `<ul>\n`; inUL = true; }
      const content = trimmed.replace(/^[*-]\s+/, "");
      html += `<li>${content}</li>\n`;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      flushBuffer(); closeUL();
      if (!inOL) { html += `<ol>\n`; inOL = true; }
      const content = trimmed.replace(/^\d+\.\s+/, "");
      html += `<li>${content}</li>\n`;
      continue;
    }

    // Plain text
    closeUL(); closeOL();
    buffer.push(trimmed);
  }

  flushBuffer();
  closeUL();
  closeOL();

  // 7. Restore all isolated placeholders in reverse order
  for (let i = placeholders.length - 1; i >= 0; i--) {
    const item = placeholders[i];
    html = html.replace(new RegExp(item.key, "g"), item.content);
  }

  return html;
}

export function renderArticle(articleId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";

  const article = articles.find(a => a.id === articleId);

  if (!article) {
    container.innerHTML = `
      <div class="error-container">
        <div class="error-icon">∅</div>
        <h2>Artigo não encontrado</h2>
        <p>O conceito "<strong>${articleId}</strong>" ainda não foi catalogado na μ.pedia.</p>
        <a href="#/" class="btn btn-primary"><i data-lucide="home"></i> Voltar para a Home</a>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let parsedContent = parseContent(article.content);

  // Replace placeholder {{widget}} if present, otherwise append it
  const widgetContainerHTML = article.widget ? `
    <section class="widget-section">
      <h2 class="widget-section-title">
        <i data-lucide="play-circle"></i>
        Demonstração Interativa
      </h2>
      <div id="interactive-widget-container" class="interactive-widget-card"></div>
    </section>
  ` : "";

  if (parsedContent.includes("{{widget}}")) {
    parsedContent = parsedContent.replace("{{widget}}", widgetContainerHTML);
  } else {
    parsedContent += widgetContainerHTML;
  }

  // Build infobox rows (also process [[links]] in infobox values)
  let infoboxRows = "";
  if (article.infobox) {
    for (const [key, val] of Object.entries(article.infobox)) {
      const processed = val.replace(/\[\[([a-zA-Z0-9-]+)\]\]/g, (m, id) => {
        const t = articles.find(a => a.id === id);
        return t ? `<a href="#/artigo/${id}" class="mupedia-link">${t.title}</a>` : id;
      });
      infoboxRows += `
        <div class="infobox-row">
          <div class="infobox-key">${key}</div>
          <div class="infobox-value">${processed}</div>
        </div>`;
    }
  }

  // Related articles (same category)
  const related = articles.filter(a => a.id !== articleId && a.category === article.category).slice(0, 3);
  const relatedHTML = related.length > 0 ? `
    <div class="related-articles">
      <h3 class="related-title"><i data-lucide="link"></i> Ver Também</h3>
      <div class="related-list">
        ${related.map(a => `
          <a href="#/artigo/${a.id}" class="related-card">
            <i data-lucide="${a.icon || 'book-open'}"></i>
            <div>
              <div class="related-name">${a.title}</div>
              <div class="related-level">${a.level}</div>
            </div>
          </a>
        `).join("")}
      </div>
    </div>` : "";

  container.innerHTML = `
    <article class="article-layout">
      <nav class="article-breadcrumbs" aria-label="breadcrumb">
        <a href="#/">Home</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-category">${article.category}</span>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">${article.title}</span>
      </nav>

      <div class="article-main-grid">
        <main class="article-body">
          <header class="article-header">
            <div class="article-category-tag">${article.category}</div>
            <h1 class="article-title">${article.title}</h1>
            <p class="article-summary">${article.summary}</p>
            <div class="article-meta">
              <span class="meta-item"><i data-lucide="graduation-cap"></i>${article.level}</span>
              <span class="meta-item"><i data-lucide="tag"></i>${article.category}</span>
            </div>
          </header>

          <div class="article-text-content">
            ${parsedContent}
          </div>

          ${relatedHTML}
        </main>

        <aside class="article-sidebar">
          <div class="infobox">
            <div class="infobox-header">
              <i data-lucide="${article.icon || 'info'}" class="infobox-header-icon"></i>
              <h3>Ficha Resumo</h3>
            </div>
            <div class="infobox-body">
              ${infoboxRows}
            </div>
          </div>

          <div class="sidebar-nav">
            <a href="#/" class="sidebar-back-btn">
              <i data-lucide="arrow-left"></i>
              Todos os Artigos
            </a>
          </div>
        </aside>
      </div>
    </article>
  `;

  if (article.widget === "pitagoras") initWidgetPitagoras("interactive-widget-container");
  else if (article.widget === "impares") initWidgetImpares("interactive-widget-container");

  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    if (window.renderMathInElement) {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
    container.style.transition = "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  });
}

/**
 * js/articleRenderer.js — Renderiza artigos individuais
 * Expõe window.renderArticle(articleId, containerId)
 *
 * Arquitetura modular: cada artigo vive em content/<axis>/<id>.js
 * O arquivo é carregado sob demanda (lazy) via <script> tag injetada.
 * Um erro em um arquivo isolado NÃO quebra os outros artigos.
 *
 * Eixos disponíveis (field `axis` em data.js):
 *  - geometria
 *  - algebra
 *  - numeros-e-operacoes
 *  - estatistica
 *  - grandezas-e-medidas
 *
 * Para adicionar suporte a um novo widget:
 *  - Crie js/widgets/widgetNome.js com window.initWidgetNome = function(containerId) { ... }
 *  - Adicione o <script> correspondente no index.html
 *  - No data.js, defina  widget: "nome"  no artigo correspondente
 */
window.renderArticle = function (articleId, containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";

  var articles = window.UPEDIA_ARTICLES || [];
  var article = articles.find(function (a) { return a.id === articleId; });

  if (!article) {
    container.innerHTML =
      '<div class="error-container">' +
        '<div class="error-icon">∅</div>' +
        '<h2>Artigo não encontrado</h2>' +
        '<p>O conceito "<strong>' + articleId + '</strong>" ainda não foi catalogado na μ.pedia.</p>' +
        '<a href="#/" class="btn btn-primary"><i data-lucide="home"></i> Voltar para a Home</a>' +
      '</div>';
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Estado de carregamento
  container.innerHTML =
    '<div class="article-loading">' +
      '<div class="spinner"></div>' +
      '<p>Carregando conteúdo...</p>' +
    '</div>';
  container.style.opacity = "1";
  container.style.transform = "translateY(0)";

  // ─── Lazy Loading modular ────────────────────────────────────────────────
  // Cada artigo vive em seu próprio arquivo: content/<axis>/<id>.js
  // Se já foi carregado (está em window.UPEDIA_CONTENT), usa o cache direto.
  // Se não, injeta uma <script> tag — funciona offline via file:// e http://.
  // Um erro em um arquivo isolado NÃO quebra os outros artigos.

  var cached = window.UPEDIA_CONTENT && window.UPEDIA_CONTENT[article.id];

  if (cached) {
    _renderContent(article, articles, cached, container);
    return;
  }

  var axis = article.axis || "algebra";
  var scriptSrc = "content/" + axis + "/" + article.id + ".js";

  var script = document.createElement("script");
  script.src = scriptSrc;

  script.onload = function () {
    var rawContent = window.UPEDIA_CONTENT && window.UPEDIA_CONTENT[article.id];
    if (!rawContent) {
      _showContentError(article, container,
        "O arquivo foi carregado mas não registrou conteúdo. Verifique <code>" + scriptSrc + "</code>."
      );
      return;
    }
    _renderContent(article, articles, rawContent, container);
  };

  script.onerror = function () {
    _showContentError(article, container,
      "Não foi possível carregar <code>" + scriptSrc + "</code>. " +
      "O arquivo existe e está no eixo correto (<em>" + axis + "</em>)?"
    );
  };

  document.head.appendChild(script);
};

function _showContentError(article, container, detail) {
  console.error("[μ.pedia] Erro ao carregar conteúdo:", article.id, detail);
  container.innerHTML =
    '<div class="error-container">' +
      '<div class="error-icon">⚠</div>' +
      '<h2>Conteúdo Indisponível</h2>' +
      '<p>O artigo <strong>' + article.title + '</strong> não pôde ser carregado.</p>' +
      '<p class="error-detail">' + detail + '</p>' +
      '<a href="#/" class="btn btn-primary"><i data-lucide="home"></i> Voltar para a Home</a>' +
    '</div>';
  if (window.lucide) window.lucide.createIcons();
}

function _renderContent(article, articles, rawContent, container) {
  var parsedContent = window.parseContent(rawContent);
  _buildArticlePage(article, articles, parsedContent, container);
}

function _buildArticlePage(article, articles, parsedContent, container) {
  // Bloco do widget (inserido no local de {{widget}} ou ao fim)
  var widgetContainerHTML = article.widget ?
    '<section class="widget-section">' +
      '<h2 class="widget-section-title"><i data-lucide="play-circle"></i> Demonstração Interativa</h2>' +
      '<div id="interactive-widget-container" class="interactive-widget-card"></div>' +
    '</section>'
    : "";

  if (parsedContent.includes("{{widget}}")) {
    parsedContent = parsedContent.split("{{widget}}").join(widgetContainerHTML);
  } else {
    parsedContent += widgetContainerHTML;
  }

  // Linhas do infobox
  var infoboxRows = "";
  if (article.infobox) {
    Object.keys(article.infobox).forEach(function (key) {
      var val = article.infobox[key];
      var processed = val.replace(/\[\[([a-zA-Z0-9-]+)\]\]/g, function (m, id) {
        var t = articles.find(function (a) { return a.id === id; });
        return t ? '<a href="#/artigo/' + id + '" class="mupedia-link">' + t.title + '</a>' : id;
      });
      infoboxRows +=
        '<div class="infobox-row">' +
          '<div class="infobox-key">' + key + '</div>' +
          '<div class="infobox-value">' + processed + '</div>' +
        '</div>';
    });
  }

  // Artigos relacionados (mesma categoria)
  var related = articles.filter(function (a) {
    return a.id !== article.id && a.category === article.category;
  }).slice(0, 3);

  var relatedHTML = related.length > 0 ?
    '<div class="related-articles">' +
      '<h3 class="related-title"><i data-lucide="link"></i> Ver Também</h3>' +
      '<div class="related-list">' +
        related.map(function (a) {
          return '<a href="#/artigo/' + a.id + '" class="related-card">' +
            '<i data-lucide="' + (a.icon || "book-open") + '"></i>' +
            '<div>' +
              '<div class="related-name">' + a.title + '</div>' +
              '<div class="related-level">' + a.level + '</div>' +
            '</div>' +
          '</a>';
        }).join("") +
      '</div>' +
    '</div>'
    : "";

  container.innerHTML =
    '<article class="article-layout">' +
      '<nav class="article-breadcrumbs" aria-label="breadcrumb">' +
        '<a href="#/">Home</a>' +
        '<span class="breadcrumb-sep">›</span>' +
        '<span class="breadcrumb-category">' + article.category + '</span>' +
        '<span class="breadcrumb-sep">›</span>' +
        '<span class="breadcrumb-current">' + article.title + '</span>' +
      '</nav>' +

      '<div class="article-main-grid">' +
        '<main class="article-body">' +
          '<header class="article-header">' +
            '<div class="article-category-tag">' + article.category + '</div>' +
            '<h1 class="article-title">' + article.title + '</h1>' +
            '<p class="article-summary">' + article.summary + '</p>' +
            '<div class="article-meta">' +
              '<span class="meta-item"><i data-lucide="graduation-cap"></i>' + article.level + '</span>' +
              '<span class="meta-item"><i data-lucide="tag"></i>' + article.category + '</span>' +
            '</div>' +
          '</header>' +
          '<div class="article-text-content">' + parsedContent + '</div>' +
          relatedHTML +
        '</main>' +

        '<aside class="article-sidebar">' +
          '<div class="infobox">' +
            '<div class="infobox-header">' +
              '<i data-lucide="' + (article.icon || "info") + '" class="infobox-header-icon"></i>' +
              '<h3>Ficha Resumo</h3>' +
            '</div>' +
            '<div class="infobox-body">' + infoboxRows + '</div>' +
          '</div>' +
          '<div class="article-sidebar-nav">' +
            '<a href="#/" class="sidebar-back-btn"><i data-lucide="arrow-left"></i> Todos os Artigos</a>' +
          '</div>' +
        '</aside>' +
      '</div>' +
    '</article>';

  // Inicializar widget (se existir)
  if (article.widget) {
    var widgetName = article.widget.charAt(0).toUpperCase() + article.widget.slice(1);
    var initFn = window["initWidget" + widgetName];
    if (typeof initFn === "function") {
      initFn("interactive-widget-container");
    } else {
      console.warn("Widget não encontrado: initWidget" + widgetName + ". Verifique se o script foi carregado no index.html.");
    }
  }

  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(function () {
    if (window.renderMathInElement) {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$",  right: "$",  display: false }
        ],
        throwOnError: false
      });
    }
    container.style.transition = "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  });
}

/**
 * js/axisHome.js — Renderiza a página de portal de um eixo temático
 * Expõe window.renderAxisHome(axisId, containerId)
 */
(function () {
  window.renderAxisHome = function (axisId, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.style.opacity = "0";
    container.style.transform = "translateY(10px)";

    var axesMeta = window.UPEDIA_AXES || {};
    var meta = axesMeta[axisId];

    if (!meta) {
      container.innerHTML =
        '<div class="axis-home">' +
          '<h1>Eixo não encontrado</h1>' +
          '<p>O eixo especificado "' + axisId + '" não existe.</p>' +
          '<a href="#/" class="btn btn-primary" style="margin-top:1rem;">Voltar ao início</a>' +
        '</div>';
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
      return;
    }

    var allArticles = window.UPEDIA_ARTICLES || [];
    var axisArticles = allArticles.filter(function (a) {
      return a.axis === axisId;
    });

    // Encontrar o artigo âncora principal
    var anchorArticle = axisArticles.find(function (a) {
      return a.id === meta.anchor;
    }) || axisArticles[0];

    // Artigos secundários do eixo (excluindo o âncora para não duplicar no topo)
    var otherArticles = axisArticles.filter(function (a) {
      return a.id !== (anchorArticle ? anchorArticle.id : "");
    });

    // Renderizar Hero do Eixo
    var keywordsHtml = (meta.keywords || []).map(function (k) {
      return '<span class="axis-keyword-tag">#' + k + '</span>';
    }).join("");

    var heroHtml =
      '<div class="axis-hero" style="--axis-color:' + meta.color + '; --axis-color-light:' + meta.colorLight + '">' +
        '<div class="axis-hero-icon">' +
          '<i data-lucide="' + meta.icon + '"></i>' +
        '</div>' +
        '<div class="axis-hero-text">' +
          '<h1>' + meta.label + '</h1>' +
          '<p>' + meta.description + '</p>' +
          '<div class="axis-hero-meta">' +
            '<span class="axis-keyword-tag" style="background-color:' + meta.color + '; color:#fff; font-weight:700;">' + axisArticles.length + ' artigos</span>' +
            keywordsHtml +
          '</div>' +
        '</div>' +
      '</div>';

    // Renderizar Artigo Âncora Destacado
    var anchorHtml = "";
    if (anchorArticle) {
      anchorHtml =
        '<div class="axis-anchor-section" style="--axis-color:' + meta.color + '; --axis-color-light:' + meta.colorLight + '">' +
          '<p class="axis-section-label">✦ Artigo Central de Referência (Âncora)</p>' +
          '<a href="#/artigo/' + anchorArticle.id + '" class="axis-anchor-card">' +
            '<div class="axis-anchor-icon">' +
              '<i data-lucide="' + (anchorArticle.icon || meta.icon) + '"></i>' +
            '</div>' +
            '<div class="axis-anchor-info">' +
              '<h2>' + anchorArticle.title + '</h2>' +
              '<p>' + anchorArticle.summary + '</p>' +
            '</div>' +
            '<div class="axis-anchor-arrow">' +
              '<i data-lucide="arrow-right"></i>' +
            '</div>' +
          '</a>' +
        '</div>';
    }

    // Renderizar Grid de Artigos do Eixo
    var articlesGridHtml = otherArticles.map(function (art) {
      return '<a href="#/artigo/' + art.id + '" class="axis-article-card" style="--axis-color:' + meta.color + '; --axis-color-light:' + meta.colorLight + '">' +
        '<div class="axis-article-card-header">' +
          '<i data-lucide="' + (art.icon || "book-open") + '"></i>' +
          '<h3 class="axis-article-title">' + art.title + '</h3>' +
        '</div>' +
        '<p class="axis-article-summary">' + art.summary + '</p>' +
        '<span class="axis-article-level">' + art.level + '</span>' +
      '</a>';
    }).join("");

    var gridSectionHtml =
      '<div class="axis-articles-section">' +
        '<p class="axis-section-label">✦ Todos os Conceitos de ' + meta.label + ' (' + axisArticles.length + ')</p>' +
        '<div class="axis-articles-grid">' + articlesGridHtml + '</div>' +
      '</div>';

    container.innerHTML =
      '<div class="axis-home">' +
        heroHtml +
        anchorHtml +
        gridSectionHtml +
      '</div>';

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
      container.style.transition = "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    });
  };
})();

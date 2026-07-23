/**
 * js/home.js — Renderiza a página inicial
 * Expõe window.renderHome(containerId)
 */
window.renderHome = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";

  var articles = window.UPEDIA_ARTICLES || [];
  var axes = window.UPEDIA_AXES || {};
  var featured = articles.find(function (a) { return a.id === "teorema-de-pitagoras"; }) || articles[0];

  var AXIS_ORDER = [
    "geometria",
    "algebra",
    "numeros-e-operacoes",
    "historia",
    "estatistica",
    "grandezas-e-medidas"
  ];

  // Contagem por eixo
  var axisCounts = {};
  articles.forEach(function (a) {
    if (a.axis) {
      axisCounts[a.axis] = (axisCounts[a.axis] || 0) + 1;
    }
  });

  // Renderizar a grade de 6 eixos temáticos
  var axisCardsHtml = AXIS_ORDER.map(function (axisId) {
    var meta = axes[axisId];
    if (!meta) return "";
    var count = axisCounts[axisId] || 0;
    var keywordsHtml = (meta.keywords || []).slice(0, 4).map(function (k) {
      return '<span class="axis-nav-keyword">#' + k + '</span>';
    }).join("");

    return '<a href="#/eixo/' + axisId + '" class="axis-nav-card" style="--axis-color:' + meta.color + '; --axis-color-light:' + meta.colorLight + '">' +
      '<div class="axis-nav-card-header">' +
        '<div class="axis-nav-icon">' +
          '<i data-lucide="' + meta.icon + '"></i>' +
        '</div>' +
        '<div>' +
          '<h3 class="axis-nav-title">' + meta.label + '</h3>' +
          '<span class="axis-nav-count">' + count + ' ' + (count === 1 ? 'artigo' : 'artigos') + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="axis-nav-description">' + meta.description + '</p>' +
      '<div class="axis-nav-keywords">' + keywordsHtml + '</div>' +
      '<div class="axis-nav-footer">' +
        '<span>Explorar Eixo</span>' +
        '<i data-lucide="arrow-right"></i>' +
      '</div>' +
    '</a>';
  }).join("");

  container.innerHTML =
    '<div class="home-wrapper">' +

      '<div class="hero-section">' +
        '<div class="hero-badge"><i data-lucide="sparkles"></i> Enciclopédia Digital</div>' +
        '<h1 class="hero-title">A beleza da matemática,<br>explicada com clareza.</h1>' +
        '<p class="hero-subtitle">μ.pedia une rigor teórico e intuição visual para estudantes do Ensino Fundamental e Médio. Escolha um eixo ou busque um conceito para começar.</p>' +
      '</div>' +

      '<div class="stats-container">' +
        '<div class="stat-card"><span class="stat-num">' + articles.length + '</span><span class="stat-lbl">Artigos</span></div>' +
        '<div class="stat-card"><span class="stat-num">' + AXIS_ORDER.length + '</span><span class="stat-lbl">Eixos Temáticos</span></div>' +
        '<div class="stat-card"><span class="stat-num">3</span><span class="stat-lbl">Widgets Interativos</span></div>' +
        '<div class="stat-card"><span class="stat-num">∞</span><span class="stat-lbl">Conexões</span></div>' +
      '</div>' +

      '<div class="featured-section">' +
        '<p class="section-label">✦ Destaque do Dia</p>' +
        '<div class="featured-card">' +
          '<div class="featured-content">' +
            '<span class="badge badge-featured">⭐ Recomendado</span>' +
            '<h2>' + featured.title + '</h2>' +
            '<p>' + featured.summary + '</p>' +
            '<div class="featured-meta">' +
              '<span class="badge badge-level">' + featured.level + '</span>' +
              '<span class="badge badge-category">' + featured.category + '</span>' +
            '</div>' +
            '<a href="#/artigo/' + featured.id + '" class="btn btn-primary">Explorar Artigo <i data-lucide="arrow-right"></i></a>' +
          '</div>' +
          '<div class="featured-visual">' +
            '<div class="featured-math-symbol">$$a^2 = b^2 + c^2$$</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="browse-sections">' +
        '<p class="section-label">✦ Explorar por Eixos Temáticos</p>' +
        '<div class="axis-cards-grid">' + axisCardsHtml + '</div>' +
      '</div>' +

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
    container.style.transition = "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  });
};

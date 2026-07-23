/**
 * js/sidebar.js — Sidebar de navegação lateral do μ.pedia
 * Expõe window.renderSidebar(containerId)
 * Persistência do estado colapsado via localStorage.
 */
(function () {
  var STORAGE_KEY = "upedia_sidebar_collapsed";

  // Widgets disponíveis (atalhos diretos)
  var WIDGETS = [
    { label: "Pitágoras Interativo", icon: "zap",        articleId: "teorema-de-pitagoras", color: "#10b981" },
    { label: "Soma dos Ímpares",     icon: "sigma",       articleId: "soma-dos-impares",      color: "#4f46e5" },
    { label: "Quadriláteros",        icon: "square",      articleId: "quadrilatero",          color: "#f59e0b" }
  ];

  // Ordem desejada dos eixos na sidebar
  var AXIS_ORDER = [
    "geometria",
    "algebra",
    "numeros-e-operacoes",
    "historia",
    "estatistica",
    "grandezas-e-medidas"
  ];

  function getAxisArticleCount(axisId) {
    var articles = window.UPEDIA_ARTICLES || [];
    return articles.filter(function (a) { return a.axis === axisId; }).length;
  }

  function getActiveAxisFromHash() {
    var hash = window.location.hash || "";
    var m = hash.match(/^#\/eixo\/([^/]+)/);
    return m ? m[1] : null;
  }

  function isCollapsed() {
    return localStorage.getItem(STORAGE_KEY) === "1";
  }

  function setCollapsed(val) {
    localStorage.setItem(STORAGE_KEY, val ? "1" : "0");
  }

  function applyCollapsedState(nav) {
    var shell = document.querySelector(".app-shell");
    if (isCollapsed()) {
      nav.classList.add("collapsed");
      if (shell) shell.classList.add("sidebar-collapsed");
    } else {
      nav.classList.remove("collapsed");
      if (shell) shell.classList.remove("sidebar-collapsed");
    }
  }

  function updateActiveItem() {
    var activeAxis = getActiveAxisFromHash();
    var items = document.querySelectorAll(".sidebar-item[data-axis]");
    items.forEach(function (el) {
      var axis = el.getAttribute("data-axis");
      el.classList.toggle("active", axis === activeAxis);
    });
  }

  window.renderSidebar = function (containerId) {
    var nav = document.getElementById(containerId);
    if (!nav) return;

    var axes = window.UPEDIA_AXES || {};
    var collapsed = isCollapsed();

    // ── Cabeçalho da sidebar (logo compacto + botão recolher) ──
    var headerHtml =
      '<div class="sidebar-item" style="padding: 0.5rem 1rem 0.75rem; border-bottom: 1px solid var(--border-color); margin-bottom: 0.25rem;">' +
        '<span class="sidebar-item-label" style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">Navegação</span>' +
        '<button class="sidebar-collapse-btn" id="sidebar-collapse-btn" title="Recolher sidebar" aria-label="Recolher sidebar">' +
          '<i data-lucide="chevrons-left"></i>' +
        '</button>' +
      '</div>';

    // ── Seção: Eixos Temáticos ──
    var axesHtml = '<p class="sidebar-section-label">Eixos Temáticos</p>';
    AXIS_ORDER.forEach(function (axisId) {
      var meta = axes[axisId];
      if (!meta) return;
      var count = getAxisArticleCount(axisId);
      axesHtml +=
        '<a href="#/eixo/' + axisId + '" class="sidebar-item" data-axis="' + axisId + '"' +
            ' title="' + meta.label + '" style="--axis-color:' + meta.color + '">' +
          '<i data-lucide="' + meta.icon + '"></i>' +
          '<span class="sidebar-item-label">' + meta.label + '</span>' +
          '<span class="sidebar-item-count">' + count + '</span>' +
        '</a>';
    });

    // ── Separador ──
    var dividerHtml = '<hr class="sidebar-divider">';

    // ── Seção: Ferramentas Interativas ──
    var widgetsHtml = '<p class="sidebar-section-label">Ferramentas</p>';
    WIDGETS.forEach(function (w) {
      widgetsHtml +=
        '<a href="#/artigo/' + w.articleId + '" class="sidebar-widget-item" title="' + w.label + '">' +
          '<span class="sidebar-widget-icon" style="background-color:' + w.color + '22; color:' + w.color + '">' +
            '<i data-lucide="' + w.icon + '"></i>' +
          '</span>' +
          '<span class="sidebar-widget-label">' + w.label + '</span>' +
        '</a>';
    });

    // ── Link: Início ──
    var homeHtml =
      '<hr class="sidebar-divider">' +
      '<a href="#/" class="sidebar-item" id="sidebar-home-link" title="Página Inicial">' +
        '<i data-lucide="home"></i>' +
        '<span class="sidebar-item-label">Início</span>' +
      '</a>';

    nav.innerHTML = headerHtml + axesHtml + dividerHtml + widgetsHtml + homeHtml;

    // Inicializar ícones Lucide
    if (window.lucide) window.lucide.createIcons();

    // Aplicar estado de colapsado
    applyCollapsedState(nav);
    updateActiveItem();

    // ── Botão recolher (desktop) ──
    var collapseBtn = document.getElementById("sidebar-collapse-btn");
    if (collapseBtn) {
      collapseBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var nowCollapsed = !isCollapsed();
        setCollapsed(nowCollapsed);
        applyCollapsedState(nav);
      });
    }

    // ── Hamburguer mobile ──
    var toggleBtn = document.getElementById("sidebar-toggle");
    var overlay   = document.getElementById("sidebar-overlay");

    function closeMobileSidebar() {
      nav.classList.remove("open");
      if (overlay) overlay.classList.remove("visible");
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("open");
        if (overlay) overlay.classList.toggle("visible", isOpen);
      });
    }

    if (overlay) {
      overlay.addEventListener("click", closeMobileSidebar);
    }

    // ── Atualizar item ativo ao mudar de rota ──
    window.addEventListener("hashchange", function () {
      updateActiveItem();

      // Rota de eixo: se clicar no eixo já ativo → scroll to top
      var activeAxis = getActiveAxisFromHash();
      var hash = window.location.hash || "";
      if (activeAxis && hash === "#/eixo/" + activeAxis) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      closeMobileSidebar();
    });

    // Fechar mobile ao clicar em qualquer link da sidebar
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMobileSidebar();
      });
    });
  };

  // Expõe para uso externo (ex: articleRenderer atualizar item ativo)
  window.updateSidebarActiveItem = updateActiveItem;
})();

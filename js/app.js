/**
 * js/app.js — Ponto de entrada do μ.pedia
 *
 * Este arquivo inicializa o roteador e conecta as rotas às funções de renderização.
 * Todos os scripts já foram carregados pelo index.html antes deste arquivo ser executado.
 */
(function () {
  var router = window.UPEDIA_ROUTER;

  // Rota: Página inicial
  router.addRoute("#/", function () {
    window.renderHome("content-viewport");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Rota: Artigo individual
  router.addRoute("#/artigo/:id", function (params) {
    window.renderArticle(params.id, "content-viewport");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Inicializar quando o DOM estiver pronto
  document.addEventListener("DOMContentLoaded", function () {
    // Barra de busca
    window.initSearchBar("search-input", "search-results");

    // Clique no logo → home
    var logo = document.getElementById("logo-brand");
    if (logo) {
      logo.addEventListener("click", function (e) {
        e.preventDefault();
        router.navigate("#/");
      });
    }

    // Iniciar ícones Lucide
    if (window.lucide) window.lucide.createIcons();

    // Iniciar roteador (carrega a rota atual da URL)
    router.init();
  });
})();

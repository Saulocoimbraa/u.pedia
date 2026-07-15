import { Router } from "./router.js";
import { renderHome } from "./components/home.js";
import { renderArticle } from "./components/articleRenderer.js";
import { initSearchBar } from "./components/searchBar.js";

const router = new Router();

// Define SPA routes
router.addRoute("#/", () => {
  renderHome("content-viewport");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

router.addRoute("#/artigo/:id", (params) => {
  renderArticle(params.id, "content-viewport");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Init Search Bar
initSearchBar("search-input", "search-results", router);

// Logo click navigation
const logo = document.getElementById("logo-brand");
if (logo) {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate("#/");
  });
}

// Start the router
router.init();

// Handle icons on index page
if (window.lucide) {
  window.lucide.createIcons();
}

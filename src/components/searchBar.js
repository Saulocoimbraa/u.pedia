import { articles } from "../data/database.js";

export function initSearchBar(inputElId, resultsElId, router) {
  const inputEl = document.getElementById(inputElId);
  const resultsEl = document.getElementById(resultsElId);
  if (!inputEl || !resultsEl) return;

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!inputEl.contains(e.target) && !resultsEl.contains(e.target)) {
      hideResults();
    }
  });

  inputEl.addEventListener("focus", () => {
    if (inputEl.value.trim().length > 0) showSuggestions(inputEl.value);
  });

  inputEl.addEventListener("input", () => showSuggestions(inputEl.value));

  inputEl.addEventListener("keydown", (e) => {
    const items = resultsEl.querySelectorAll(".search-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const active = resultsEl.querySelector(".search-item.active");
      if (!active && items.length > 0) {
        items[0].classList.add("active");
      } else if (active && active.nextElementSibling) {
        active.classList.remove("active");
        active.nextElementSibling.classList.add("active");
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const active = resultsEl.querySelector(".search-item.active");
      if (active && active.previousElementSibling) {
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active");
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const active = resultsEl.querySelector(".search-item.active");
      if (active) {
        navigateTo(active.dataset.id);
      } else {
        const q = inputEl.value.toLowerCase().trim();
        const first = articles.find(a =>
          a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
        );
        if (first) navigateTo(first.id);
      }
    }

    if (e.key === "Escape") {
      hideResults();
      inputEl.blur();
    }
  });

  function navigateTo(id) {
    router.navigate(`#/artigo/${id}`);
    hideResults();
    inputEl.value = "";
  }

  function hideResults() {
    resultsEl.style.display = "none";
    resultsEl.innerHTML = "";
  }

  function showSuggestions(val) {
    const q = val.toLowerCase().trim();
    if (q.length === 0) { hideResults(); return; }

    const matches = articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      resultsEl.innerHTML = `<div class="search-no-results">Nenhum resultado para "<strong>${val}</strong>"</div>`;
      resultsEl.style.display = "block";
      return;
    }

    resultsEl.innerHTML = matches.map((art, idx) => `
      <div class="search-item ${idx === 0 ? "active" : ""}" data-id="${art.id}">
        <i data-lucide="${art.icon || 'book-open'}" class="search-item-icon"></i>
        <div>
          <div class="search-item-title">${highlightMatch(art.title, q)}</div>
          <div class="search-item-meta">${art.category} · ${art.level}</div>
        </div>
      </div>
    `).join("");

    resultsEl.style.display = "block";
    if (window.lucide) window.lucide.createIcons();

    resultsEl.querySelectorAll(".search-item").forEach(item => {
      item.addEventListener("mouseenter", () => {
        resultsEl.querySelectorAll(".search-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
      item.addEventListener("click", () => navigateTo(item.dataset.id));
    });
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  }
}

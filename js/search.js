/**
 * js/search.js — Barra de busca com sugestões
 * Expõe window.initSearchBar(inputElId, resultsElId)
 */
window.initSearchBar = function (inputElId, resultsElId) {
  var inputEl = document.getElementById(inputElId);
  var resultsEl = document.getElementById(resultsElId);
  if (!inputEl || !resultsEl) return;

  var articles = window.UPEDIA_ARTICLES || [];
  var router = window.UPEDIA_ROUTER;

  document.addEventListener("click", function (e) {
    if (!inputEl.contains(e.target) && !resultsEl.contains(e.target)) {
      hideResults();
    }
  });

  inputEl.addEventListener("focus", function () {
    if (inputEl.value.trim().length > 0) showSuggestions(inputEl.value);
  });

  inputEl.addEventListener("input", function () { showSuggestions(inputEl.value); });

  inputEl.addEventListener("keydown", function (e) {
    var items = resultsEl.querySelectorAll(".search-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      var active = resultsEl.querySelector(".search-item.active");
      if (!active && items.length > 0) {
        items[0].classList.add("active");
      } else if (active && active.nextElementSibling) {
        active.classList.remove("active");
        active.nextElementSibling.classList.add("active");
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      var active = resultsEl.querySelector(".search-item.active");
      if (active && active.previousElementSibling) {
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active");
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      var active = resultsEl.querySelector(".search-item.active");
      if (active) {
        navigateTo(active.dataset.id);
      } else {
        var q = normalizeString(inputEl.value);
        var first = articles.find(function (a) {
          return normalizeString(a.title).includes(q) || normalizeString(a.category).includes(q);
        });
        if (first) navigateTo(first.id);
      }
    }

    if (e.key === "Escape") {
      hideResults();
      inputEl.blur();
    }
  });

  function navigateTo(id) {
    router.navigate("#/artigo/" + id);
    hideResults();
    inputEl.value = "";
  }

  function hideResults() {
    resultsEl.style.display = "none";
    resultsEl.innerHTML = "";
  }

  function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function showSuggestions(val) {
    var q = normalizeString(val);
    if (q.length === 0) { hideResults(); return; }

    var matches = articles.filter(function (a) {
      return normalizeString(a.title).includes(q) ||
             normalizeString(a.category).includes(q) ||
             normalizeString(a.summary).includes(q);
    });

    if (matches.length === 0) {
      resultsEl.innerHTML = '<div class="search-no-results">Nenhum resultado para "<strong>' + val + '</strong>"</div>';
      resultsEl.style.display = "block";
      return;
    }

    resultsEl.innerHTML = matches.map(function (art, idx) {
      return '<div class="search-item ' + (idx === 0 ? "active" : "") + '" data-id="' + art.id + '">' +
        '<i data-lucide="' + (art.icon || "book-open") + '" class="search-item-icon"></i>' +
        '<div>' +
          '<div class="search-item-title">' + highlightMatch(art.title, val.trim()) + '</div>' +
          '<div class="search-item-meta">' + art.category + ' · ' + art.level + '</div>' +
        '</div>' +
      '</div>';
    }).join("");

    resultsEl.style.display = "block";
    if (window.lucide) window.lucide.createIcons();

    resultsEl.querySelectorAll(".search-item").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        resultsEl.querySelectorAll(".search-item").forEach(function (i) { i.classList.remove("active"); });
        item.classList.add("active");
      });
      item.addEventListener("click", function () { navigateTo(item.dataset.id); });
    });
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    try {
      var normalizedText = normalizeString(text);
      var normalizedQuery = normalizeString(query);
      var index = normalizedText.indexOf(normalizedQuery);
      if (index !== -1) {
        var originalMatch = text.substring(index, index + query.length);
        var regex = new RegExp("(" + originalMatch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
        return text.replace(regex, "<mark>$1</mark>");
      }
    } catch (e) { /* fallback */ }
    var regex = new RegExp("(" + query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }
};

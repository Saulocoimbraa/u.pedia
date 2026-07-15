import { articles } from "../data/database.js";

export function renderHome(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";

  const featured = articles.find(a => a.id === "teorema-de-pitagoras") || articles[0];

  // Group by category
  const categories = {};
  articles.forEach(article => {
    if (!categories[article.category]) categories[article.category] = [];
    categories[article.category].push(article);
  });

  const categoryMeta = {
    "Geometria":     { icon: "triangle",   color: "#10b981" },
    "Álgebra":       { icon: "hash",       color: "#4f46e5" },
    "Lógica":        { icon: "cpu",        color: "#f59e0b" },
    "Trigonometria": { icon: "compass",    color: "#3b82f6" },
    "Estatística":   { icon: "bar-chart",  color: "#ec4899" }
  };

  let categoriesHtml = Object.entries(categories).map(([cat, arts]) => {
    const meta = categoryMeta[cat] || { icon: "book-open", color: "#4f46e5" };
    const grid = arts.map(art => `
      <a href="#/artigo/${art.id}" class="article-card-link">
        <div class="article-mini-card">
          <div class="card-icon-title">
            <i data-lucide="${art.icon || 'book-open'}" class="mini-card-icon" style="color:${meta.color}"></i>
            <h3>${art.title}</h3>
          </div>
          <p>${art.summary}</p>
          <div class="card-footer">
            <span class="badge badge-level">${art.level}</span>
            <span class="read-more">Ler <i data-lucide="arrow-right"></i></span>
          </div>
        </div>
      </a>
    `).join("");

    return `
      <div class="category-section">
        <div class="category-header">
          <i data-lucide="${meta.icon}" class="category-icon" style="color:${meta.color}"></i>
          <h2 class="category-title">${cat}</h2>
          <span class="category-count">${arts.length} ${arts.length === 1 ? "artigo" : "artigos"}</span>
        </div>
        <div class="category-grid">${grid}</div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="home-wrapper">

      <div class="hero-section">
        <div class="hero-badge"><i data-lucide="sparkles"></i> Enciclopédia Digital</div>
        <h1 class="hero-title">A beleza da matemática,<br>explicada com clareza.</h1>
        <p class="hero-subtitle">μ.pedia une rigor teórico e intuição visual para estudantes do Ensino Fundamental e Médio. Cada conceito leva a outro — explore em qualquer direção.</p>
      </div>

      <div class="stats-container">
        <div class="stat-card">
          <span class="stat-num">${articles.length}</span>
          <span class="stat-lbl">Artigos</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">${Object.keys(categories).length}</span>
          <span class="stat-lbl">Áreas</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">2</span>
          <span class="stat-lbl">Widgets Interativos</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">∞</span>
          <span class="stat-lbl">Conexões</span>
        </div>
      </div>

      <div class="featured-section">
        <p class="section-label">✦ Destaque do Dia</p>
        <div class="featured-card">
          <div class="featured-content">
            <span class="badge badge-featured">⭐ Recomendado</span>
            <h2>${featured.title}</h2>
            <p>${featured.summary}</p>
            <div class="featured-meta">
              <span class="badge badge-level">${featured.level}</span>
              <span class="badge badge-category">${featured.category}</span>
            </div>
            <a href="#/artigo/${featured.id}" class="btn btn-primary">
              Explorar Artigo <i data-lucide="arrow-right"></i>
            </a>
          </div>
          <div class="featured-visual">
            <div class="featured-math-symbol">$$a^2 = b^2 + c^2$$</div>
          </div>
        </div>
      </div>

      <div class="browse-sections">
        <p class="section-label">✦ Explorar por Áreas</p>
        ${categoriesHtml}
      </div>

    </div>
  `;

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

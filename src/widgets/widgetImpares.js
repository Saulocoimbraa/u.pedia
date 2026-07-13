export function initWidgetImpares(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const COLORS = [
    "#4f46e5", // indigo
    "#10b981", // emerald
    "#f59e0b", // amber
    "#ef4444", // red
    "#3b82f6", // blue
    "#8b5cf6", // violet
    "#ec4899", // pink
    "#14b8a6", // teal
  ];

  container.innerHTML = `
    <div class="widget-impares-wrapper">
      <div class="widget-controls">
        <div class="control-group">
          <label for="n-range">
            Número de termos <em>(n)</em>: <strong id="val-n">4</strong>
          </label>
          <input type="range" id="n-range" min="1" max="8" step="1" value="4">
        </div>
      </div>

      <div class="widget-visualization" style="flex-direction: column; gap: 1rem;">
        <div id="grid-container" class="grid-container"></div>
        <div class="grid-legend" id="grid-legend"></div>
      </div>

      <div class="widget-math-summary">
        <div class="impares-sum-text" id="impares-sum-text">1 + 3 + 5 + 7 = <strong>16</strong></div>
        <div class="math-eq" style="margin-top:0.5rem;">n² = <span id="n-sq-text">4² = 16</span></div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem;">Cada cor corresponde a um número ímpar</div>
      </div>
    </div>
  `;

  const sliderN = container.querySelector("#n-range");
  const spanN = container.querySelector("#val-n");
  const gridEl = container.querySelector("#grid-container");
  const legendEl = container.querySelector("#grid-legend");
  const sumTextEl = container.querySelector("#impares-sum-text");
  const nSqEl = container.querySelector("#n-sq-text");

  function draw() {
    const n = parseInt(sliderN.value);
    spanN.textContent = n;

    const cellSize = Math.min(40, Math.floor(280 / n));
    const gap = 3;

    gridEl.style.display = "grid";
    gridEl.style.gridTemplateColumns = `repeat(${n}, ${cellSize}px)`;
    gridEl.style.gridTemplateRows = `repeat(${n}, ${cellSize}px)`;
    gridEl.style.gap = `${gap}px`;
    gridEl.style.width = "fit-content";
    gridEl.style.margin = "0 auto";

    // Build cells
    const fragment = document.createDocumentFragment();
    gridEl.innerHTML = "";

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        const layer = Math.max(r, c); // L-shaped layers
        const cell = document.createElement("div");
        cell.className = "grid-cell";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.backgroundColor = COLORS[layer % COLORS.length];
        cell.style.borderRadius = "5px";
        cell.style.transition = "transform 0.2s ease";
        cell.style.animationDelay = `${(r + c) * 0.02}s`;
        cell.classList.add("animate-cell");
        cell.title = `Camada ${layer + 1} → ímpar: ${2 * layer + 1}`;
        cell.addEventListener("mouseenter", () => { cell.style.transform = "scale(1.15)"; });
        cell.addEventListener("mouseleave", () => { cell.style.transform = "scale(1)"; });
        fragment.appendChild(cell);
      }
    }
    gridEl.appendChild(fragment);

    // Generate sum text and legend
    const terms = Array.from({ length: n }, (_, i) => 2 * i + 1);
    const total = terms.reduce((s, v) => s + v, 0);

    const sumParts = terms.map((val, i) =>
      `<span style="color:${COLORS[i % COLORS.length]};font-weight:700;">${val}</span>`
    ).join(" + ");

    sumTextEl.innerHTML = `${sumParts} = <strong>${total}</strong>`;
    nSqEl.textContent = `${n}² = ${total}`;

    legendEl.innerHTML = terms.map((val, i) => `
      <div class="legend-item">
        <div class="legend-dot" style="background:${COLORS[i % COLORS.length]}"></div>
        <span>${val}</span>
      </div>
    `).join("");
  }

  sliderN.addEventListener("input", draw);
  draw();
}

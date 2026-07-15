/**
 * js/widgets/widgetImpares.js
 * Widget interativo: Soma dos Números Ímpares
 * Expõe window.initWidgetImpares(containerId)
 */
window.initWidgetImpares = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var COLORS = ["#4f46e5","#10b981","#f59e0b","#ef4444","#3b82f6","#8b5cf6","#ec4899","#14b8a6"];

  container.innerHTML =
    '<div class="widget-impares-wrapper">' +
      '<div class="widget-controls">' +
        '<div class="control-group">' +
          '<label for="n-range">Número de termos <em>(n)</em>: <strong id="val-n">4</strong></label>' +
          '<input type="range" id="n-range" min="1" max="8" step="1" value="4">' +
        '</div>' +
      '</div>' +
      '<div class="widget-visualization" style="flex-direction:column;gap:1rem;">' +
        '<div id="grid-container" class="grid-container"></div>' +
        '<div class="grid-legend" id="grid-legend"></div>' +
      '</div>' +
      '<div class="widget-math-summary">' +
        '<div class="impares-sum-text" id="impares-sum-text">1 + 3 + 5 + 7 = <strong>16</strong></div>' +
        '<div class="math-eq" style="margin-top:0.5rem;">n² = <span id="n-sq-text">4² = 16</span></div>' +
        '<div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem;">Cada cor corresponde a um número ímpar</div>' +
      '</div>' +
    '</div>';

  var sliderN  = container.querySelector("#n-range");
  var spanN    = container.querySelector("#val-n");
  var gridEl   = container.querySelector("#grid-container");
  var legendEl = container.querySelector("#grid-legend");
  var sumTextEl= container.querySelector("#impares-sum-text");
  var nSqEl    = container.querySelector("#n-sq-text");

  function draw() {
    var n = parseInt(sliderN.value);
    spanN.textContent = n;
    var cellSize = Math.min(40, Math.floor(280 / n));
    var gap = 3;

    gridEl.style.display = "grid";
    gridEl.style.gridTemplateColumns = "repeat(" + n + ", " + cellSize + "px)";
    gridEl.style.gridTemplateRows    = "repeat(" + n + ", " + cellSize + "px)";
    gridEl.style.gap   = gap + "px";
    gridEl.style.width = "fit-content";
    gridEl.style.margin = "0 auto";
    gridEl.innerHTML = "";

    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        var layer = Math.max(r, c);
        var cell = document.createElement("div");
        cell.className = "grid-cell";
        cell.style.cssText = "width:" + cellSize + "px;height:" + cellSize + "px;" +
          "background:" + COLORS[layer % COLORS.length] + ";border-radius:5px;transition:transform 0.2s ease;";
        cell.title = "Camada " + (layer + 1) + " → ímpar: " + (2 * layer + 1);
        (function(el) {
          el.addEventListener("mouseenter", function() { el.style.transform = "scale(1.15)"; });
          el.addEventListener("mouseleave", function() { el.style.transform = "scale(1)"; });
        })(cell);
        gridEl.appendChild(cell);
      }
    }

    var terms = [];
    for (var i = 0; i < n; i++) {
      terms.push(2 * i + 1);
    }
    var total = 0;
    for (var j = 0; j < terms.length; j++) {
      total += terms[j];
    }

    sumTextEl.innerHTML = terms.map(function(val, i) {
      return '<span style="color:' + COLORS[i % COLORS.length] + ';font-weight:700;">' + val + '</span>';
    }).join(" + ") + " = <strong>" + total + "</strong>";

    nSqEl.textContent = n + "² = " + total;

    legendEl.innerHTML = terms.map(function(val, i) {
      return '<div class="legend-item">' +
        '<div class="legend-dot" style="background:' + COLORS[i % COLORS.length] + '"></div>' +
        '<span>' + val + '</span>' +
      '</div>';
    }).join("");
  }

  sliderN.addEventListener("input", draw);
  draw();
};

/**
 * js/widgets/widgetQuadradoPerfeito.js
 * Widget interativo: Quadrados Perfeitos e Decomposição em Camadas Ímpares (Gnomons)
 * Expõe window.initWidgetQuadradoPerfeito(containerId)
 */
(function () {
  window.initWidgetQuadradoPerfeito = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = {
      n: 4,
      showLayers: true // Destacar camadas de ímpares (gnomons)
    };

    var LAYER_COLORS = [
      "#6366f1", // 1 (1²)
      "#3b82f6", // 3 (2²)
      "#06b6d4", // 5 (3²)
      "#10b981", // 7 (4²)
      "#84cc16", // 9 (5²)
      "#f59e0b", // 11 (6²)
      "#f97316", // 13 (7²)
      "#ef4444"  // 15 (8²)
    ];

    var PRESETS = [
      { n: 1, label: "1² = 1" },
      { n: 2, label: "2² = 4" },
      { n: 3, label: "3² = 9" },
      { n: 4, label: "4² = 16" },
      { n: 5, label: "5² = 25" },
      { n: 6, label: "6² = 36" },
      { n: 7, label: "7² = 49" },
      { n: 8, label: "8² = 64" }
    ];

    // Monta o layout HTML uma única vez
    container.innerHTML =
      '<style>' +
        '.wqp-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 580px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wqp-presets { display: flex; flex-wrap: wrap; gap: 0.35rem; justify-content: center; margin-bottom: 0.75rem; }' +
        '.wqp-preset-btn { background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; padding: 2px 7px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }' +
        '.wqp-preset-btn:hover { background: #e2e8f0; color: #1e293b; }' +
        '.wqp-preset-btn.active { background: #6366f1; border-color: #4f46e5; color: #ffffff; }' +
        '.wqp-ctrls { display: flex; flex-wrap: wrap; gap: 0.8rem; justify-content: center; align-items: center; background: #f8fafc; padding: 0.5rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.75rem; font-size: 0.85rem; font-weight: 600; }' +
        '.wqp-slider { -webkit-appearance: none; appearance: none; width: 120px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; }' +
        '.wqp-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); transition: transform 0.1s; }' +
        '.wqp-slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.2); }' +
        '.wqp-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #6366f1; border: none; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); }' +
        '.wqp-toggle { background: #ffffff; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 5px; font-size: 0.75rem; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.15s; }' +
        '.wqp-toggle.active { background: #eef2ff; border-color: #6366f1; color: #4338ca; }' +
        '.wqp-stage { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 140px; padding: 0.75rem; background: #fafafa; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 0.75rem; }' +
        '.wqp-row { display: flex; gap: 4px; margin-bottom: 4px; }' +
        '.wqp-dot { border-radius: 4px; color: #ffffff; font-size: 0.65rem; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0,0,0,0.08); transition: transform 0.12s; user-select: none; }' +
        '.wqp-dot:hover { transform: scale(1.2); z-index: 2; }' +
        '.wqp-footer { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.88rem; }' +
        '.wqp-eq { font-weight: 800; font-size: 1.15rem; color: #0f172a; font-family: "Outfit", sans-serif; }' +
        '.wqp-sum-text { font-size: 0.78rem; color: #64748b; margin-top: 2px; }' +
        '.wqp-badge { padding: 2px 7px; border-radius: 5px; font-weight: 700; font-size: 0.75rem; background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }' +
      '</style>' +

      '<div class="wqp-wrapper">' +
        '<div class="wqp-presets" id="wqp-presets"></div>' +

        '<div class="wqp-ctrls">' +
          '<span>Lado (n):</span>' +
          '<input type="range" class="wqp-slider" id="wqp-n" min="1" max="8" step="1" value="' + state.n + '">' +
          '<strong id="wqp-val-n" style="width: 14px; color:#4338ca; font-size: 1rem;">' + state.n + '</strong>' +
          '<button type="button" class="wqp-toggle active" id="wqp-toggle-layers">Camadas Ímpares</button>' +
        '</div>' +

        '<div class="wqp-stage" id="wqp-stage"></div>' +

        '<div class="wqp-footer">' +
          '<div>' +
            '<div class="wqp-eq" id="wqp-eq"></div>' +
            '<div class="wqp-sum-text" id="wqp-sum-text"></div>' +
          '</div>' +
          '<div>' +
            '<span class="wqp-badge" id="wqp-sqrt-badge"></span>' +
          '</div>' +
        '</div>' +
      '</div>';

    var sliderN = container.querySelector("#wqp-n");
    var valN = container.querySelector("#wqp-val-n");
    var stageEl = container.querySelector("#wqp-stage");
    var eqEl = container.querySelector("#wqp-eq");
    var sumTextEl = container.querySelector("#wqp-sum-text");
    var sqrtBadgeEl = container.querySelector("#wqp-sqrt-badge");
    var presetsEl = container.querySelector("#wqp-presets");
    var toggleLayers = container.querySelector("#wqp-toggle-layers");

    function renderPresets() {
      presetsEl.innerHTML = PRESETS.map(function (p) {
        var active = (p.n === state.n) ? " active" : "";
        return '<button type="button" class="wqp-preset-btn' + active + '" data-n="' + p.n + '">' + p.label + '</button>';
      }).join("");

      var pBtns = presetsEl.querySelectorAll(".wqp-preset-btn");
      pBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var n = parseInt(btn.getAttribute("data-n"), 10);
          sliderN.value = n;
          update();
        });
      });
    }

    function update() {
      var n = parseInt(sliderN.value, 10);
      state.n = n;
      valN.textContent = n;

      var total = n * n;
      var dotSize = n > 6 ? 20 : (n > 4 ? 24 : 28);

      var gridHTML = "";
      for (var r = 0; r < n; r++) {
        var cells = "";
        for (var c = 0; c < n; c++) {
          var layer = Math.max(r, c); // Camada do gnomon
          var color = state.showLayers
            ? LAYER_COLORS[layer % LAYER_COLORS.length]
            : "#6366f1";

          var dotNum = r * n + c + 1;
          cells +=
            '<div class="wqp-dot" style="width:' + dotSize + 'px; height:' + dotSize + 'px; background:' + color + ';" title="Camada ' + (layer + 1) + ' (Item ' + dotNum + ')">' +
              (n <= 5 ? dotNum : '') +
            '</div>';
        }
        gridHTML += '<div class="wqp-row">' + cells + '</div>';
      }

      stageEl.innerHTML = gridHTML;

      eqEl.innerHTML =
        '<span style="color:#4338ca;">' + n + '²</span> = ' +
        '<span style="color:#4338ca;">' + n + '</span> × <span style="color:#4338ca;">' + n + '</span> = ' +
        '<span style="color:#059669;">' + total + '</span>';

      // Soma de ímpares: 1 + 3 + 5 + ...
      var oddTerms = [];
      for (var k = 0; k < n; k++) {
        var oddVal = 2 * k + 1;
        var col = LAYER_COLORS[k % LAYER_COLORS.length];
        oddTerms.push(state.showLayers ? '<span style="color:' + col + '; font-weight:700;">' + oddVal + '</span>' : oddVal);
      }

      sumTextEl.innerHTML = 'Soma dos ' + n + ' ímpares: ' + oddTerms.join(" + ") + ' = <strong>' + total + '</strong>';

      sqrtBadgeEl.innerHTML = '√' + total + ' = ' + n;

      renderPresets();
    }

    sliderN.addEventListener("input", update);

    toggleLayers.addEventListener("click", function () {
      state.showLayers = !state.showLayers;
      toggleLayers.classList.toggle("active", state.showLayers);
      update();
    });

    update();
  };
})();

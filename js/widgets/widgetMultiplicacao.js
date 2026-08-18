/**
 * js/widgets/widgetMultiplicacao.js
 * Widget interativo: Multiplicação como Área Retangular (Ultra Fluido e Compacto)
 * Expõe window.initWidgetMultiplicacao(containerId)
 */
(function () {
  window.initWidgetMultiplicacao = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = {
      linhas: 3,
      colunas: 4
    };

    var ROW_COLORS = [
      "#6366f1", "#3b82f6", "#06b6d4", "#10b981",
      "#84cc16", "#f59e0b", "#f97316", "#ef4444"
    ];

    container.innerHTML =
      '<style>' +
        '.wmult-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 580px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wmult-ctrls { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; align-items: center; background: #f8fafc; padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.8rem; font-size: 0.85rem; }' +
        '.wmult-ctrl-item { display: flex; align-items: center; gap: 8px; font-weight: 600; }' +
        '.wmult-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; }' +
        '.wmult-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); transition: transform 0.1s; }' +
        '.wmult-slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.2); }' +
        '.wmult-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #6366f1; border: none; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); }' +
        '.wmult-swap { background: #ffffff; border: 1px solid #cbd5e1; color: #4f46e5; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: all 0.15s; }' +
        '.wmult-swap:hover { background: #eef2ff; border-color: #6366f1; transform: scale(1.05); }' +
        '.wmult-stage { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 135px; padding: 0.5rem; background: #fafafa; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 0.8rem; }' +
        '.wmult-row { display: flex; gap: 3px; margin-bottom: 3px; }' +
        '.wmult-cell { border-radius: 4px; color: #ffffff; font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0,0,0,0.08); transition: transform 0.12s; user-select: none; }' +
        '.wmult-cell:hover { transform: scale(1.18); z-index: 2; }' +
        '.wmult-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.5rem 0.75rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.9rem; }' +
        '.wmult-eq { font-weight: 800; font-size: 1.15rem; color: #0f172a; }' +
        '.wmult-badge { padding: 2px 7px; border-radius: 5px; font-size: 0.72rem; font-weight: 700; }' +
        '.wmult-badge-sq { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }' +
        '.wmult-badge-rec { background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; }' +
      '</style>' +

      '<div class="wmult-wrapper">' +
        '<div class="wmult-ctrls">' +
          '<div class="wmult-ctrl-item">' +
            '<span style="color:#4338ca;">Linhas:</span>' +
            '<input type="range" class="wmult-slider" id="wmult-l" min="1" max="8" value="' + state.linhas + '">' +
            '<strong id="wmult-val-l" style="width: 14px; color:#4338ca;">' + state.linhas + '</strong>' +
          '</div>' +

          '<button type="button" class="wmult-swap" id="wmult-swap" title="Trocar Fatores (Comutativa)">⇄ Inverter</button>' +

          '<div class="wmult-ctrl-item">' +
            '<span style="color:#1d4ed8;">Colunas:</span>' +
            '<input type="range" class="wmult-slider" id="wmult-c" min="1" max="8" value="' + state.colunas + '">' +
            '<strong id="wmult-val-c" style="width: 14px; color:#1d4ed8;">' + state.colunas + '</strong>' +
          '</div>' +
        '</div>' +

        '<div class="wmult-stage" id="wmult-stage"></div>' +

        '<div class="wmult-footer">' +
          '<div class="wmult-eq" id="wmult-eq"></div>' +
          '<div id="wmult-badge-box"></div>' +
        '</div>' +
      '</div>';

    var sliderL = container.querySelector("#wmult-l");
    var sliderC = container.querySelector("#wmult-c");
    var valL = container.querySelector("#wmult-val-l");
    var valC = container.querySelector("#wmult-val-c");
    var stageEl = container.querySelector("#wmult-stage");
    var eqEl = container.querySelector("#wmult-eq");
    var badgeBox = container.querySelector("#wmult-badge-box");
    var btnSwap = container.querySelector("#wmult-swap");

    function update() {
      var L = parseInt(sliderL.value, 10);
      var C = parseInt(sliderC.value, 10);
      state.linhas = L;
      state.colunas = C;

      valL.textContent = L;
      valC.textContent = C;

      var total = L * C;
      var isQuadrado = (L === C);

      var maxDim = Math.max(L, C);
      var cellSize = maxDim > 6 ? 26 : (maxDim > 4 ? 30 : 34);

      var gridRowsHTML = "";
      for (var r = 0; r < L; r++) {
        var color = ROW_COLORS[r % ROW_COLORS.length];
        var cells = "";
        for (var c = 0; c < C; c++) {
          var num = r * C + c + 1;
          cells +=
            '<div class="wmult-cell" style="width:' + cellSize + 'px;height:' + cellSize + 'px;background:' + color + ';" title="' + (r + 1) + 'ª linha, ' + (c + 1) + 'ª coluna">' +
              num +
            '</div>';
        }
        gridRowsHTML += '<div class="wmult-row">' + cells + '</div>';
      }

      stageEl.innerHTML = gridRowsHTML;

      eqEl.innerHTML =
        '<span style="color:#4338ca;">' + L + '</span> × ' +
        '<span style="color:#1d4ed8;">' + C + '</span> = ' +
        '<span style="color:#059669;">' + total + '</span>';

      badgeBox.innerHTML = isQuadrado
        ? '<span class="wmult-badge wmult-badge-sq">★ Quadrado: ' + L + '² = ' + total + '</span>'
        : '<span class="wmult-badge wmult-badge-rec">' + L + ' linhas de ' + C + '</span>';
    }

    sliderL.addEventListener("input", update);
    sliderC.addEventListener("input", update);

    btnSwap.addEventListener("click", function () {
      var t = sliderL.value;
      sliderL.value = sliderC.value;
      sliderC.value = t;
      update();
    });

    update();
  };
})();

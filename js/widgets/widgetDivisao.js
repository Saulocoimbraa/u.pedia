/**
 * js/widgets/widgetDivisao.js
 * Widget interativo: Divisão Euclidiana e Resto (Ultra Fluido e Compacto)
 * Expõe window.initWidgetDivisao(containerId)
 */
(function () {
  window.initWidgetDivisao = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = {
      dividendo: 14,
      divisor: 4
    };

    // Monta a estrutura do DOM uma única vez
    container.innerHTML =
      '<style>' +
        '.wdiv-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 580px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wdiv-ctrls { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; align-items: center; background: #f8fafc; padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.8rem; font-size: 0.85rem; }' +
        '.wdiv-ctrl { display: flex; align-items: center; gap: 8px; font-weight: 600; }' +
        '.wdiv-slider { -webkit-appearance: none; appearance: none; width: 100px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; transition: background 0.15s; }' +
        '.wdiv-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #4f46e5; cursor: grab; box-shadow: 0 1px 4px rgba(79,70,229,0.35); transition: transform 0.1s ease; }' +
        '.wdiv-slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.2); }' +
        '.wdiv-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #4f46e5; border: none; cursor: grab; box-shadow: 0 1px 4px rgba(79,70,229,0.35); }' +
        '.wdiv-stage { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; align-items: center; min-height: 85px; padding: 0.75rem; background: #fafafa; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 0.8rem; transition: all 0.2s ease; }' +
        '.wdiv-group { background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 5px 8px; display: flex; flex-direction: column; align-items: center; gap: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); animation: wdiv-pop 0.2s cubic-bezier(0.16, 1, 0.3, 1); }' +
        '.wdiv-resto-grp { border: 1.5px dashed #f59e0b; background: #fffdf5; animation: wdiv-pop 0.2s cubic-bezier(0.16, 1, 0.3, 1); }' +
        '.wdiv-grp-tag { font-size: 0.65rem; font-weight: 700; color: #4338ca; background: #e0e7ff; padding: 1px 5px; border-radius: 3px; }' +
        '.wdiv-tag-r { color: #b45309; background: #fef3c7; }' +
        '.wdiv-dots { display: flex; gap: 3px; }' +
        '.wdiv-dot { width: 14px; height: 14px; border-radius: 3px; }' +
        '.wdiv-footer { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.9rem; }' +
        '.wdiv-eq { font-weight: 800; font-size: 1.15rem; color: #0f172a; }' +
        '.wdiv-badge { padding: 2px 7px; border-radius: 5px; font-size: 0.72rem; font-weight: 700; }' +
        '@keyframes wdiv-pop { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }' +
      '</style>' +

      '<div class="wdiv-wrapper">' +
        '<div class="wdiv-ctrls">' +
          '<div class="wdiv-ctrl">' +
            '<span style="color:#4338ca;">Dividendo:</span>' +
            '<input type="range" class="wdiv-slider" id="wdiv-d" min="1" max="24" step="1" value="' + state.dividendo + '">' +
            '<strong id="wdiv-val-d" style="width: 18px; color:#4338ca;">' + state.dividendo + '</strong>' +
          '</div>' +

          '<div class="wdiv-ctrl">' +
            '<span style="color:#1d4ed8;">Divisor:</span>' +
            '<input type="range" class="wdiv-slider" id="wdiv-v" min="1" max="6" step="1" value="' + state.divisor + '">' +
            '<strong id="wdiv-val-v" style="width: 14px; color:#1d4ed8;">' + state.divisor + '</strong>' +
          '</div>' +
        '</div>' +

        '<div class="wdiv-stage" id="wdiv-stage"></div>' +

        '<div class="wdiv-footer">' +
          '<div class="wdiv-eq" id="wdiv-eq"></div>' +
          '<div id="wdiv-badge-box"></div>' +
        '</div>' +
      '</div>';

    var sliderD = container.querySelector("#wdiv-d");
    var sliderV = container.querySelector("#wdiv-v");
    var valD = container.querySelector("#wdiv-val-d");
    var valV = container.querySelector("#wdiv-val-v");
    var stageEl = container.querySelector("#wdiv-stage");
    var eqEl = container.querySelector("#wdiv-eq");
    var badgeBox = container.querySelector("#wdiv-badge-box");

    // Atualização cirúrgica e ultra rápida sem recriar o DOM dos sliders
    function update() {
      var D = parseInt(sliderD.value, 10);
      var d = parseInt(sliderV.value, 10);
      if (d < 1) d = 1;
      if (D < 1) D = 1;

      state.dividendo = D;
      state.divisor = d;

      valD.textContent = D;
      valV.textContent = d;

      var q = Math.floor(D / d);
      var r = D % d;
      var isExata = (r === 0);

      var groupsHTML = "";
      for (var i = 0; i < q; i++) {
        var dots = "";
        for (var j = 0; j < d; j++) {
          dots += '<div class="wdiv-dot" style="background:#4f46e5;"></div>';
        }
        groupsHTML +=
          '<div class="wdiv-group" title="Grupo ' + (i + 1) + '">' +
            '<div class="wdiv-grp-tag">G' + (i + 1) + '</div>' +
            '<div class="wdiv-dots">' + dots + '</div>' +
          '</div>';
      }

      if (r > 0) {
        var rDots = "";
        for (var k = 0; k < r; k++) {
          rDots += '<div class="wdiv-dot" style="background:#f59e0b;"></div>';
        }
        groupsHTML +=
          '<div class="wdiv-group wdiv-resto-grp" title="Resto (' + r + ')">' +
            '<div class="wdiv-grp-tag wdiv-tag-r">Resto</div>' +
            '<div class="wdiv-dots">' + rDots + '</div>' +
          '</div>';
      }

      stageEl.innerHTML = groupsHTML;

      eqEl.innerHTML =
        '<span style="color:#4338ca;">' + D + '</span> = ' +
        '<span style="color:#1d4ed8;">' + d + '</span> × ' +
        '<span style="color:#059669;">' + q + '</span>' +
        (r > 0 ? ' + <span style="color:#b45309;">' + r + '</span>' : '');

      badgeBox.innerHTML = isExata
        ? '<span class="wdiv-badge" style="background:#ecfdf5; color:#065f46; border:1px solid #a7f3d0;">✓ Divisão Exata</span>'
        : '<span class="wdiv-badge" style="background:#fffbeb; color:#b45309; border:1px solid #fde68a;">Resto: ' + r + '</span>';
    }

    sliderD.addEventListener("input", update);
    sliderV.addEventListener("input", update);

    update();
  };
})();

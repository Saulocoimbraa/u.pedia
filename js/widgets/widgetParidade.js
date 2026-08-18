/**
 * js/widgets/widgetParidade.js
 * Widget interativo: Paridade (Número Par e Ímpar) — Ultra Fluido e Compacto
 * Expõe window.initWidgetParidade(containerId)
 */
(function () {
  window.initWidgetParidade = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = { n: 7 };

    // Monta o layout HTML uma única vez
    container.innerHTML =
      '<style>' +
        '.wpar-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 580px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wpar-ctrls { display: flex; justify-content: center; align-items: center; gap: 0.75rem; background: #f8fafc; padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.8rem; font-size: 0.85rem; font-weight: 600; }' +
        '.wpar-slider { -webkit-appearance: none; appearance: none; width: 140px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; }' +
        '.wpar-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); transition: transform 0.1s; }' +
        '.wpar-slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.2); }' +
        '.wpar-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #6366f1; border: none; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); }' +
        '.wpar-stage { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; min-height: 80px; padding: 0.75rem; background: #fafafa; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 0.8rem; }' +
        '.wpar-row { display: flex; gap: 6px; }' +
        '.wpar-dot { width: 22px; height: 22px; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: transform 0.12s; }' +
        '.wpar-dot:hover { transform: scale(1.2); }' +
        '.wpar-dot-pair { background: #6366f1; animation: wpar-pop 0.15s cubic-bezier(0.16, 1, 0.3, 1); }' +
        '.wpar-dot-odd { background: #f43f5e; box-shadow: 0 0 0 2px rgba(244,63,94,0.3); animation: wpar-pop 0.15s cubic-bezier(0.16, 1, 0.3, 1); }' +
        '.wpar-dot-placeholder { width: 22px; height: 22px; border-radius: 50%; border: 1.5px dashed #cbd5e1; }' +
        '.wpar-footer { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.9rem; }' +
        '.wpar-eq { font-weight: 800; font-size: 1.15rem; color: #0f172a; }' +
        '.wpar-badge { padding: 2px 8px; border-radius: 5px; font-weight: 700; font-size: 0.75rem; }' +
        '.wpar-badge-even { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }' +
        '.wpar-badge-odd { background: #fff1f2; color: #be123c; border: 1px solid #fecdd3; }' +
        '@keyframes wpar-pop { from { opacity: 0; transform: scale(0.75); } to { opacity: 1; transform: scale(1); } }' +
      '</style>' +

      '<div class="wpar-wrapper">' +
        '<div class="wpar-ctrls">' +
          '<span style="color:#334155;">Número (n):</span>' +
          '<input type="range" class="wpar-slider" id="wpar-n" min="1" max="16" step="1" value="' + state.n + '">' +
          '<strong id="wpar-val-n" style="width: 18px; color:#4338ca; font-size: 1rem;">' + state.n + '</strong>' +
        '</div>' +

        '<div class="wpar-stage">' +
          '<div class="wpar-row" id="wpar-row1"></div>' +
          '<div class="wpar-row" id="wpar-row2"></div>' +
        '</div>' +

        '<div class="wpar-footer">' +
          '<div class="wpar-eq" id="wpar-eq"></div>' +
          '<div id="wpar-badge-box"></div>' +
        '</div>' +
      '</div>';

    var slider = container.querySelector("#wpar-n");
    var valN = container.querySelector("#wpar-val-n");
    var row1 = container.querySelector("#wpar-row1");
    var row2 = container.querySelector("#wpar-row2");
    var eqEl = container.querySelector("#wpar-eq");
    var badgeBox = container.querySelector("#wpar-badge-box");

    // Atualização cirúrgica rápida sem tocar no slider
    function update() {
      var n = parseInt(slider.value, 10);
      state.n = n;
      valN.textContent = n;

      var isEven = (n % 2 === 0);
      var pairs = Math.floor(n / 2);
      var hasRemainder = (n % 2 !== 0);

      var r1HTML = "";
      var r2HTML = "";

      for (var i = 0; i < pairs; i++) {
        r1HTML += '<div class="wpar-dot wpar-dot-pair"></div>';
        r2HTML += '<div class="wpar-dot wpar-dot-pair"></div>';
      }

      if (hasRemainder) {
        r1HTML += '<div class="wpar-dot wpar-dot-odd" title="Elemento sem par (Resto 1)"></div>';
        r2HTML += '<div class="wpar-dot-placeholder"></div>';
      }

      row1.innerHTML = r1HTML;
      row2.innerHTML = r2HTML;

      eqEl.innerHTML = isEven
        ? '<span>' + n + ' = 2 × ' + pairs + '</span>'
        : '<span>' + n + ' = 2 × ' + pairs + ' + <span style="color:#e11d48;">1</span></span>';

      badgeBox.innerHTML = isEven
        ? '<span class="wpar-badge wpar-badge-even">✓ Número Par (2k)</span>'
        : '<span class="wpar-badge wpar-badge-odd">● Número Ímpar (2k + 1)</span>';
    }

    slider.addEventListener("input", update);

    update();
  };
})();
